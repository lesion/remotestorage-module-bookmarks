const md5 = require('md5');

const extend = function (target) {
  const sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function (source) {
    for (const key in source) {
      target[key] = source[key];
    }
  });
  return target;
}

const urlHash = function (url) {
  // url = url; //TODO remove trailing slash
  return md5(url);
};


//
// Bookmarks module
//

const Bookmarks = function (privateClient/*, publicClient*/) {

  //
  // Types/Schemas
  //

  const baseProperties = {
    "id": {
      "type": "string"
    },
    "url": {
      "type": "string",
      "format": "uri"
    },
    "title": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    }
  };


  /**
   * Schema: bookmarks/archive-bookmark
   *
   * Represents an archived bookmark.
   *
   * Properties:
   *   id          - A string that uniquely identifies this bookmark (required)
   *   url         - The url of the bookmark (required)
   *   title       - The user-facing string describing the bookmark (required)
   *   createdAt   - DateTime string of document creation
   *   updatedAt   - DateTime string of last update
   *   description - Like title, but more elaborate
   *   tags        - Array of strings; use tags to give your bookmarks a loose grouping into categories
   *   thumbnail   - A base64-encoded screenshot of the bookmarked page
   */

  privateClient.declareType('archive-bookmark', {
    "type": "object",
    "properties": extend({
      "description": {
        "type": "string",
        "default": ""
      },
      "tags": {
        "type": "array",
        "default": []
      },
      "thumbnail": {
        "description": "A base64-encoded screenshot of the bookmarked page",
        "type": "string"
      }
    }, baseProperties),
    "required": [ "id", "title", "url" ]
  });

  /**
   * Schema: bookmarks/browser-bookmark
   *
   * Represents a bookmark that is not archived.
   *
   * Properties:
   *   id          - A string that uniquely identifies this bookmark
   *   url         - The url of the bookmark
   *   title       - The user-facing string describing the bookmark
   *   createdAt   - DateTime string of document creation
   *   updatedAt   - DateTime string of last update
   *   tags        - Array of strings; use tags to give your bookmarks a loose grouping into categories
   */

  privateClient.declareType('browser-bookmark', {
    "type": "object",
    "properties": extend({
      "tags": {
        "type": "array",
        "default": []
      }
    }, baseProperties)
  });

  /**
   * Schema: bookmarks/readlater-bookmark
   *
   * Represents a bookmark which the user marked for reading later.
   *
   * Properties:
   *   id          - A string that uniquely identifies this bookmark
   *   url         - The url of the bookmark
   *   title       - The user-facing string describing the bookmark
   *   createdAt   - DateTime string of document creation
   *   updatedAt   - DateTime string of last update
   *   unread      - Boolean, whether the bookmark is unread (default: true, required)
   */

  privateClient.declareType('readlater-bookmark', {
    "type": "object",
    "properties": extend({
      "unread": {
        "type": "boolean",
        "default": true,
        "required": true
      }
    }, baseProperties)
  });


  /**
   * @class
   *
   * A folder is a collection of bookmarks
   */
  class Folder {
    constructor (folderName) {
      console.log('constructsorz');
      this.basePath = encodeURIComponent(folderName);
      this.client = privateClient.scope(`${this.basePath}/`);
    }

    find (id) {
      return privateClient.getObject(`${this.basePath}/${id}`);
    }

    getAll (maxAge) {
      return privateClient.getAll(`${this.basePath}/`, maxAge)
        .then(bookmarks => {
          if (!bookmarks) return [];
          return Object.keys(bookmarks).map(id => bookmarks[id]);
        });
    }

    searchByURL (url) {
      const id = urlHash(url);
      return privateClient.getObject(`${this.basePath}/${id}`);
    }

    searchByTags (tags) {
      return this.getAll()
        .then(bookmarks => {
          if (!bookmarks) return [];
          return bookmarks.filter(b => {
            return b.tags &&
                   b.tags.filter(tag => tags.includes(tag)).length > 0;
          });
        })
    }

    store (bookmark, bookmarkType='archive-bookmark') {
      bookmark.id = urlHash(bookmark.url);
      if (bookmark.createdAt) {
        bookmark.updatedAt = new Date().toISOString();
      } else {
        bookmark.createdAt = new Date().toISOString();
      }
      const path = `${this.basePath}/${bookmark.id}`;

      return privateClient.storeObject(bookmarkType, path, bookmark)
                          .then(() => { return bookmark; });
    }

    remove (id) {
      return privateClient.remove(`${this.basePath}/${id}`);
    }
  }

  //
  // Public functions
  //

  const bookmarks = {
    name: 'bookmarks',

    // DEPRECATED! Please use bookmarks.openFolder() instead.
    archive: new Folder('archive'),

    openFolder (folderName) {
      return new Folder(folderName);
    },

    client: privateClient,
  };

  //
  // Return public functions
  //

  return { exports: bookmarks };

};

export default {name: 'bookmarks', builder: Bookmarks};
