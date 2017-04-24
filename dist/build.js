!function(t,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var n=r();for(var e in n)("object"==typeof exports?exports:t)[e]=n[e]}}(this,function(){return function(t){function r(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=n(1),o=function(t){var r=Array.prototype.slice.call(arguments,1);return r.forEach(function(r){for(var n in r)t[n]=r[n]}),t},i=n(2),u=function(t,r){var n={id:{type:"string"},url:{type:"string",format:"uri"},title:{type:"string"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time"}};t.declareType("archive-bookmark",{type:"object",properties:o({description:{type:"string",default:""},tags:{type:"array",default:[]},thumbnail:{description:"A base64-encoded screenshot of the bookmarked page",type:"string"}},n),required:["id","title","url"]}),t.declareType("browser-bookmark",{type:"object",properties:o({tags:{type:"array",default:[]}},n)}),t.declareType("readlater-bookmark",{type:"object",properties:o({unread:{type:"boolean",default:!0,required:!0}},n)});var u={name:"bookmarks",archive:{find:function(r){var n="archive/"+r;return t.getObject(n).then(function(t){return t})},getAll:function(){return t.getAll("archive/").then(function(t){return t?Object.keys(t).map(function(r){return t[r]}):[]})},searchByURL:function(r){var n=this.idForUrl(r),e="archive/"+n;return t.getObject(e)},searchByTags:function(t){return this.getAll().then(function(r){return r?r.filter(function(r){return r.tags&&e(r.tags,t).length}):[]})},store:function(r){r.id=a(r.url),r.createdAt?r.updatedAt=(new Date).toISOString():r.createdAt=(new Date).toISOString();var n="archive/"+r.id;return t.storeObject("archive-bookmark",n,r).then(function(){return r})},remove:function(r){var n="archive/"+r;return t.remove(n)},idForUrl:function(t){return a(t)}},client:t},a=function(t){return i(t)};return{exports:u}};r.default={name:"bookmarks",builder:u}},function(t,r){(function(r){"use strict";function n(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}function e(t,r){var n=t?t.length:0;return!!n&&a(t,r,0)>-1}function o(t,r,n){for(var e=-1,o=t?t.length:0;++e<o;)if(n(r,t[e]))return!0;return!1}function i(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}function u(t,r,n,e){for(var o=t.length,i=n+(e?1:-1);e?i--:++i<o;)if(r(t[i],i,t))return i;return-1}function a(t,r,n){if(r!==r)return u(t,c,n);for(var e=n-1,o=t.length;++e<o;)if(t[e]===r)return e;return-1}function c(t){return t!==t}function f(t){return function(r){return t(r)}}function s(t,r){return t.has(r)}function l(t,r){return null==t?void 0:t[r]}function p(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function h(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function d(){this.__data__=mt?mt(null):{}}function y(t){return this.has(t)&&delete this.__data__[t]}function v(t){var r=this.__data__;if(mt){var n=r[t];return n===X?void 0:n}return ht.call(r,t)?r[t]:void 0}function g(t){var r=this.__data__;return mt?void 0!==r[t]:ht.call(r,t)}function _(t,r){var n=this.__data__;return n[t]=mt&&void 0===r?X:r,this}function b(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function m(){this.__data__=[]}function j(t){var r=this.__data__,n=E(r,t);if(n<0)return!1;var e=r.length-1;return n==e?r.pop():vt.call(r,n,1),!0}function x(t){var r=this.__data__,n=E(r,t);return n<0?void 0:r[n][1]}function A(t){return E(this.__data__,t)>-1}function S(t,r){var n=this.__data__,e=E(n,t);return e<0?n.push([t,r]):n[e][1]=r,this}function T(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function O(){this.__data__={hash:new h,map:new(bt||b),string:new h}}function k(t){return q(this,t).delete(t)}function B(t){return q(this,t).get(t)}function w(t){return q(this,t).has(t)}function F(t,r){return q(this,t).set(t,r),this}function I(t){var r=-1,n=t?t.length:0;for(this.__data__=new T;++r<n;)this.add(t[r])}function M(t){return this.__data__.set(t,X),this}function C(t){return this.__data__.has(t)}function E(t,r){for(var n=t.length;n--;)if(W(t[n][0],r))return n;return-1}function R(t,r,n){for(var u=n?o:e,a=t[0].length,c=t.length,l=c,p=Array(c),h=1/0,d=[];l--;){var y=t[l];l&&r&&(y=i(y,f(r))),h=_t(y.length,h),p[l]=!n&&(r||a>=120&&y.length>=120)?new I(l&&y):void 0}y=t[0];var v=-1,g=p[0];t:for(;++v<a&&d.length<h;){var _=y[v],b=r?r(_):_;if(_=n||0!==_?_:0,!(g?s(g,b):u(d,b,n))){for(l=c;--l;){var m=p[l];if(!(m?s(m,b):u(t[l],b,n)))continue t}g&&g.push(b),d.push(_)}}return d}function U(t){if(!K(t)||H(t))return!1;var r=Z(t)||p(t)?yt:et;return r.test(L(t))}function $(t,r){return r=gt(void 0===r?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=gt(e.length-r,0),u=Array(i);++o<i;)u[o]=e[r+o];o=-1;for(var a=Array(r+1);++o<r;)a[o]=e[o];return a[r]=u,n(t,this,a)}}function P(t){return N(t)?t:[]}function q(t,r){var n=t.__data__;return D(r)?n["string"==typeof r?"string":"hash"]:n.map}function z(t,r){var n=l(t,r);return U(n)?n:void 0}function D(t){var r="undefined"==typeof t?"undefined":V(t);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}function H(t){return!!lt&&lt in t}function L(t){if(null!=t){try{return pt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function W(t,r){return t===r||t!==t&&r!==r}function G(t){return null!=t&&J(t.length)&&!Z(t)}function N(t){return Q(t)&&G(t)}function Z(t){var r=K(t)?dt.call(t):"";return r==tt||r==rt}function J(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Y}function K(t){var r="undefined"==typeof t?"undefined":V(t);return!!t&&("object"==r||"function"==r)}function Q(t){return!!t&&"object"==("undefined"==typeof t?"undefined":V(t))}var V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X="__lodash_hash_undefined__",Y=9007199254740991,tt="[object Function]",rt="[object GeneratorFunction]",nt=/[\\^$.*+?()[\]{}|]/g,et=/^\[object .+?Constructor\]$/,ot="object"==("undefined"==typeof r?"undefined":V(r))&&r&&r.Object===Object&&r,it="object"==("undefined"==typeof self?"undefined":V(self))&&self&&self.Object===Object&&self,ut=ot||it||Function("return this")(),at=Array.prototype,ct=Function.prototype,ft=Object.prototype,st=ut["__core-js_shared__"],lt=function(){var t=/[^.]+$/.exec(st&&st.keys&&st.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),pt=ct.toString,ht=ft.hasOwnProperty,dt=ft.toString,yt=RegExp("^"+pt.call(ht).replace(nt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vt=at.splice,gt=Math.max,_t=Math.min,bt=z(ut,"Map"),mt=z(Object,"create");h.prototype.clear=d,h.prototype.delete=y,h.prototype.get=v,h.prototype.has=g,h.prototype.set=_,b.prototype.clear=m,b.prototype.delete=j,b.prototype.get=x,b.prototype.has=A,b.prototype.set=S,T.prototype.clear=O,T.prototype.delete=k,T.prototype.get=B,T.prototype.has=w,T.prototype.set=F,I.prototype.add=I.prototype.push=M,I.prototype.has=C;var jt=$(function(t){var r=i(t,P);return r.length&&r[0]===t[0]?R(r):[]});t.exports=jt}).call(r,function(){return this}())},function(t,r,n){"use strict";!function(){var r=n(3),e=n(4).utf8,o=n(5),i=n(4).bin,u=function t(n,u){n.constructor==String?n=u&&"binary"===u.encoding?i.stringToBytes(n):e.stringToBytes(n):o(n)?n=Array.prototype.slice.call(n,0):Array.isArray(n)||(n=n.toString());for(var a=r.bytesToWords(n),c=8*n.length,f=1732584193,s=-271733879,l=-1732584194,p=271733878,h=0;h<a.length;h++)a[h]=16711935&(a[h]<<8|a[h]>>>24)|4278255360&(a[h]<<24|a[h]>>>8);a[c>>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;for(var d=t._ff,y=t._gg,v=t._hh,g=t._ii,h=0;h<a.length;h+=16){var _=f,b=s,m=l,j=p;f=d(f,s,l,p,a[h+0],7,-680876936),p=d(p,f,s,l,a[h+1],12,-389564586),l=d(l,p,f,s,a[h+2],17,606105819),s=d(s,l,p,f,a[h+3],22,-1044525330),f=d(f,s,l,p,a[h+4],7,-176418897),p=d(p,f,s,l,a[h+5],12,1200080426),l=d(l,p,f,s,a[h+6],17,-1473231341),s=d(s,l,p,f,a[h+7],22,-45705983),f=d(f,s,l,p,a[h+8],7,1770035416),p=d(p,f,s,l,a[h+9],12,-1958414417),l=d(l,p,f,s,a[h+10],17,-42063),s=d(s,l,p,f,a[h+11],22,-1990404162),f=d(f,s,l,p,a[h+12],7,1804603682),p=d(p,f,s,l,a[h+13],12,-40341101),l=d(l,p,f,s,a[h+14],17,-1502002290),s=d(s,l,p,f,a[h+15],22,1236535329),f=y(f,s,l,p,a[h+1],5,-165796510),p=y(p,f,s,l,a[h+6],9,-1069501632),l=y(l,p,f,s,a[h+11],14,643717713),s=y(s,l,p,f,a[h+0],20,-373897302),f=y(f,s,l,p,a[h+5],5,-701558691),p=y(p,f,s,l,a[h+10],9,38016083),l=y(l,p,f,s,a[h+15],14,-660478335),s=y(s,l,p,f,a[h+4],20,-405537848),f=y(f,s,l,p,a[h+9],5,568446438),p=y(p,f,s,l,a[h+14],9,-1019803690),l=y(l,p,f,s,a[h+3],14,-187363961),s=y(s,l,p,f,a[h+8],20,1163531501),f=y(f,s,l,p,a[h+13],5,-1444681467),p=y(p,f,s,l,a[h+2],9,-51403784),l=y(l,p,f,s,a[h+7],14,1735328473),s=y(s,l,p,f,a[h+12],20,-1926607734),f=v(f,s,l,p,a[h+5],4,-378558),p=v(p,f,s,l,a[h+8],11,-2022574463),l=v(l,p,f,s,a[h+11],16,1839030562),s=v(s,l,p,f,a[h+14],23,-35309556),f=v(f,s,l,p,a[h+1],4,-1530992060),p=v(p,f,s,l,a[h+4],11,1272893353),l=v(l,p,f,s,a[h+7],16,-155497632),s=v(s,l,p,f,a[h+10],23,-1094730640),f=v(f,s,l,p,a[h+13],4,681279174),p=v(p,f,s,l,a[h+0],11,-358537222),l=v(l,p,f,s,a[h+3],16,-722521979),s=v(s,l,p,f,a[h+6],23,76029189),f=v(f,s,l,p,a[h+9],4,-640364487),p=v(p,f,s,l,a[h+12],11,-421815835),l=v(l,p,f,s,a[h+15],16,530742520),s=v(s,l,p,f,a[h+2],23,-995338651),f=g(f,s,l,p,a[h+0],6,-198630844),p=g(p,f,s,l,a[h+7],10,1126891415),l=g(l,p,f,s,a[h+14],15,-1416354905),s=g(s,l,p,f,a[h+5],21,-57434055),f=g(f,s,l,p,a[h+12],6,1700485571),p=g(p,f,s,l,a[h+3],10,-1894986606),l=g(l,p,f,s,a[h+10],15,-1051523),s=g(s,l,p,f,a[h+1],21,-2054922799),f=g(f,s,l,p,a[h+8],6,1873313359),p=g(p,f,s,l,a[h+15],10,-30611744),l=g(l,p,f,s,a[h+6],15,-1560198380),s=g(s,l,p,f,a[h+13],21,1309151649),f=g(f,s,l,p,a[h+4],6,-145523070),p=g(p,f,s,l,a[h+11],10,-1120210379),l=g(l,p,f,s,a[h+2],15,718787259),s=g(s,l,p,f,a[h+9],21,-343485551),f=f+_>>>0,s=s+b>>>0,l=l+m>>>0,p=p+j>>>0}return r.endian([f,s,l,p])};u._ff=function(t,r,n,e,o,i,u){var a=t+(r&n|~r&e)+(o>>>0)+u;return(a<<i|a>>>32-i)+r},u._gg=function(t,r,n,e,o,i,u){var a=t+(r&e|n&~e)+(o>>>0)+u;return(a<<i|a>>>32-i)+r},u._hh=function(t,r,n,e,o,i,u){var a=t+(r^n^e)+(o>>>0)+u;return(a<<i|a>>>32-i)+r},u._ii=function(t,r,n,e,o,i,u){var a=t+(n^(r|~e))+(o>>>0)+u;return(a<<i|a>>>32-i)+r},u._blocksize=16,u._digestsize=16,t.exports=function(t,n){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var e=r.wordsToBytes(u(t,n));return n&&n.asBytes?e:n&&n.asString?i.bytesToString(e):r.bytesToHex(e)}}()},function(t,r){"use strict";!function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,r){return t<<r|t>>>32-r},rotr:function(t,r){return t<<32-r|t>>>r},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var r=0;r<t.length;r++)t[r]=n.endian(t[r]);return t},randomBytes:function(t){for(var r=[];t>0;t--)r.push(Math.floor(256*Math.random()));return r},bytesToWords:function(t){for(var r=[],n=0,e=0;n<t.length;n++,e+=8)r[e>>>5]|=t[n]<<24-e%32;return r},wordsToBytes:function(t){for(var r=[],n=0;n<32*t.length;n+=8)r.push(t[n>>>5]>>>24-n%32&255);return r},bytesToHex:function(t){for(var r=[],n=0;n<t.length;n++)r.push((t[n]>>>4).toString(16)),r.push((15&t[n]).toString(16));return r.join("")},hexToBytes:function(t){for(var r=[],n=0;n<t.length;n+=2)r.push(parseInt(t.substr(n,2),16));return r},bytesToBase64:function(t){for(var n=[],e=0;e<t.length;e+=3)for(var o=t[e]<<16|t[e+1]<<8|t[e+2],i=0;i<4;i++)8*e+6*i<=8*t.length?n.push(r.charAt(o>>>6*(3-i)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],e=0,o=0;e<t.length;o=++e%4)0!=o&&n.push((r.indexOf(t.charAt(e-1))&Math.pow(2,-2*o+8)-1)<<2*o|r.indexOf(t.charAt(e))>>>6-2*o);return n}};t.exports=n}()},function(t,r){"use strict";var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var r=[],n=0;n<t.length;n++)r.push(255&t.charCodeAt(n));return r},bytesToString:function(t){for(var r=[],n=0;n<t.length;n++)r.push(String.fromCharCode(t[n]));return r.join("")}}};t.exports=n},function(t,r){"use strict";function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function e(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
t.exports=function(t){return null!=t&&(n(t)||e(t)||!!t._isBuffer)}}])});