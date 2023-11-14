(function(){'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this);function r(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}var ha="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=ia;
function na(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.I=b.prototype}var oa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||oa});r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var u=this||self;function pa(a,b){a:{var c=["CLOSURE_FLAGS"];for(var d=u,e=0;e<c.length;e++)if(d=d[c[e]],null==d){c=null;break a}c=d}a=c&&c[a];return null!=a?a:b};var qa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var ra=pa(610401301,!1),sa=pa(572417392,pa(1,!0));var w,ta=u.navigator;w=ta?ta.userAgentData||null:null;function ua(a){return ra?w?w.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}function x(a){var b;a:{if(b=u.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function A(){return ra?!!w&&0<w.brands.length:!1}function va(){return A()?ua("Chromium"):(x("Chrome")||x("CriOS"))&&!(A()?0:x("Edge"))||x("Silk")};var wa=A()?!1:x("Trident")||x("MSIE");function xa(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b};function ya(a){a=void 0===a?document:a;return a.createElement("img")};function Da(a,b,c){var d=!1;d=void 0===d?!1:d;a.google_image_requests||(a.google_image_requests=[]);var e=ya(a.document);if(c){var f=function(){if(c){var g=a.google_image_requests,h=qa(g,e);0<=h&&Array.prototype.splice.call(g,h,1)}e.removeEventListener&&e.removeEventListener("load",f,!1);e.removeEventListener&&e.removeEventListener("error",f,!1)};e.addEventListener&&e.addEventListener("load",f,!1);e.addEventListener&&e.addEventListener("error",f,!1)}d&&(e.attributionSrc="");e.src=b;a.google_image_requests.push(e)}
;function Ea(a){u.setTimeout(function(){throw a;},0)};!x("Android")||va();va();x("Safari")&&(va()||(A()?0:x("Coast"))||(A()?0:x("Opera"))||(A()?0:x("Edge"))||(A()?ua("Microsoft Edge"):x("Edg/"))||A()&&ua("Opera"));var Fa={},C=null;
function Ga(a){var b;void 0===b&&(b=0);if(!C){C={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Fa[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===C[h]&&(C[h]=g)}}}b=Fa[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=g+k+m+h}g=0;h=d;switch(a.length-f){case 2:g=
a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")};var Ha,Ia="undefined"!==typeof TextEncoder;var Ja="undefined"!==typeof Uint8Array,Ka=!wa&&"function"===typeof btoa;var La=!sa,Ma=!sa;var Na=0,Oa=0,Pa;function Qa(){this.g=[]}Qa.prototype.length=function(){return this.g.length};Qa.prototype.end=function(){var a=this.g;this.g=[];return a};function D(a,b){for(;127<b;)a.g.push(b&127|128),b>>>=7;a.g.push(b)}function Ra(a,b){if(0<=b)D(a,b);else{for(var c=0;9>c;c++)a.g.push(b&127|128),b>>=7;a.g.push(1)}}function Sa(a,b){a.g.push(b>>>0&255);a.g.push(b>>>8&255);a.g.push(b>>>16&255);a.g.push(b>>>24&255)};function Ta(){this.l=[];this.i=0;this.g=new Qa}function E(a,b){0!==b.length&&(a.l.push(b),a.i+=b.length)};function F(a,b){this.g=a;this.A=b};function G(a){return Array.prototype.slice.call(a)};var H="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0,Ua=H?function(a,b){a[H]|=b}:function(a,b){void 0!==a.j?a.j|=b:Object.defineProperties(a,{j:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function Va(a){var b=I(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=G(a)),K(a,b|1))}var Wa=H?function(a,b){a[H]&=~b}:function(a,b){void 0!==a.j&&(a.j&=~b)};function L(a,b,c){return c?a|b:a&~b}
var I=H?function(a){return a[H]|0}:function(a){return a.j|0},M=H?function(a){return a[H]}:function(a){return a.j},K=H?function(a,b){a[H]=b}:function(a,b){void 0!==a.j?a.j=b:Object.defineProperties(a,{j:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function Xa(){var a=[];Ua(a,1);return a}function Ya(a,b){K(b,(a|0)&-14591)}function Za(a,b){K(b,(a|34)&-14557)}function N(a){a=a>>14&1023;return 0===a?536870912:a};var O={},$a={};function ab(a){return!(!a||"object"!==typeof a||a.H!==$a)}function P(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var bb=!sa;function cb(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=I(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;K(a,d|1);return!0}var Q,db=[];K(db,55);Q=Object.freeze(db);function eb(a){if(a&2)throw Error();};function fb(){var a=Error();xa(a,"incident");return a};function gb(a){if(!Number.isFinite(a)){var b=fb();Ea(b)}return a}function hb(a){if("number"!==typeof a)throw a=Error("int32"),xa(a,"warning"),a;if(!Number.isFinite(a)){var b=fb();Ea(b)}return a}function ib(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a}function jb(a){if(null!=a&&"string"!==typeof a)throw Error();return a};var kb,lb,mb;function nb(a){switch(typeof a){case "boolean":return lb||(lb=[0,void 0,!0]);case "number":return 0<a?void 0:0===a?mb||(mb=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function R(a,b,c){null==a&&(a=kb);kb=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=I(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=d;if(d=a.length){var e=d-1;if(P(a[e])){c|=256;b=e-(+!!(c&512)-1);if(1024<=b)throw Error();d=c&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,d-(+!!(c&512)-1));if(1024<b)throw Error();d=c&-16760833|(b&1023)<<14}else d=c}}K(a,d);return a};function ob(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return bb||!cb(a,void 0,9999)?a:void 0;if(Ja&&null!=a&&a instanceof Uint8Array){if(Ka){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Ga(a);return a}}}return a};function pb(a,b,c){a=G(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}function qb(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&I(a)&1?void 0:f&&I(a)&2?a:rb(a,b,c,void 0!==d,e,f);else if(P(a)){var g={},h;for(h in a)g[h]=qb(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function rb(a,b,c,d,e,f){var g=d||c?I(a):0;d=d?!!(g&32):void 0;a=G(a);for(var h=0;h<a.length;h++)a[h]=qb(a[h],b,c,d,e,f);c&&c(g,a);return a}function tb(a){return a.m===O?a.toJSON():ob(a)};function ub(a,b,c){c=void 0===c?Za:c;if(null!=a){if(Ja&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=I(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(K(a,(d|34)&-12293),a):rb(a,ub,d&4?Za:c,!0,!1,!0)}a.m===O&&(c=a.h,d=M(c),a=d&2?a:vb(a,c,d,!0));return a}}function vb(a,b,c,d){a=a.constructor;kb=b=wb(b,c,d);b=new a(b);kb=void 0;return b}
function wb(a,b,c){var d=c||b&2?Za:Ya,e=!!(b&32);a=pb(a,b,function(f){return ub(f,e,d)});Ua(a,32|(c?2:0));return a};Object.freeze({});function xb(a,b,c,d){if(-1===c)return null;if(c>=N(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}function yb(a,b,c){a=a.h;var d=M(a);eb(d);S(a,d,b,c)}function S(a,b,c,d,e){var f=N(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return e;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&K(a,e);return e}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function T(a,b,c,d){a=a.h;var e=M(a);eb(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=xb(a,f,k)&&(0!==g&&(f=S(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=S(a,e,c));S(a,e,b,d)}
function zb(a,b,c,d,e,f,g,h){var k=1===f;f=2===f;g=!!g;var m=!!(2&b)&&f,p=b,q=p&2;b=xb(a,p,d,e);Array.isArray(b)||(b=Q);var n=I(b);0===n&&p&32&&!q?(n|=33,K(b,n)):n&1||(n|=1,K(b,n));q&&(p=!1,n&2||(Ua(b,34),p=!!(4&n)),p&&Object.freeze(b));n=b;b=M(a);var l=I(n),v=!!(2&l);p=!!(4&l);q=!!(32&l);var J=v&&p||!!(2048&l);if(!p){var y=n,B=b,za;(za=!!(2&l))&&(B=L(B,2,!0));for(var Aa=!za,Ba=!0,ea=0,Ca=0;ea<y.length;ea++){var z=y[ea];var fa=c;if(null==z||"object"!==typeof z||z.m!==O)if(Array.isArray(z)){var sb=
I(z),U=sb;0===U&&(U|=B&32);U|=B&2;U!==sb&&K(z,U);z=new fa(z)}else z=void 0;z instanceof c&&(za||(fa=!!(I(z.h)&2),Aa&&(Aa=!fa),Ba&&(Ba=fa)),y[Ca++]=z)}Ca<ea&&(y.length=Ca);l=L(l,4,!0);l=L(l,16,Ba);l=L(l,8,Aa);K(y,l);v&&!m&&(Object.freeze(n),J=!0)}c=l;m=!!(8&l)||k&&!n.length;if(h&&!m){J&&(n=G(n),J=!1,c=0,l=Ab(l,b,g),b=S(a,b,d,n,e));h=n;m=l;for(v=0;v<h.length;v++)y=h[v],l=y.h,B=M(l),l=B&2?vb(y,l,B,!1):y,y!==l&&(h[v]=l);m=L(m,8,!0);l=m=L(m,16,!h.length)}J||(k?l=L(l,!n.length||16&l&&(!p||q)?2:2048,!0):
g||(l=L(l,32,!1)),l!==c&&K(n,l),k&&(Object.freeze(n),J=!0));f&&J&&(n=G(n),l=Ab(l,b,g),K(n,l),S(a,b,d,n,e));return n}function Bb(a,b){a=a.h;var c=M(a),d=!!(2&c);return zb(a,c,Cb,b,void 0,d?1:2,!1,!d)}
function Db(a,b,c){var d=a.h,e=M(d);eb(e);if(null==c)return S(d,e,b),a;var f=I(c),g=f,h=!!(2&f)||!!(2048&f),k=h||Object.isFrozen(c),m;if(m=!k)m=!1;for(var p=!0,q=!0,n=0;n<c.length;n++){var l=c[n];h||(l=!!(I(l.h)&2),p&&(p=!l),q&&(q=l))}h||(f=L(f,5,!0),f=L(f,8,p),f=L(f,16,q),m&&(f=L(f,q?2:2048,!0)),f!==g&&(k&&(c=G(c),f=Ab(f,e,!0)),K(c,f)),m&&Object.freeze(c));S(d,e,b,c);return a}function Ab(a,b,c){a=L(a,2,!!(2&b));a=L(a,32,!!(32&b)&&c);return a=L(a,2048,!1)};function V(a,b,c){this.h=R(a,b,c)}V.prototype.toJSON=function(){var a=rb(this.h,tb,void 0,void 0,!1,!1);return Eb(this,a,!0)};V.prototype.m=O;V.prototype.toString=function(){return Eb(this,this.h,!1).toString()};
function Eb(a,b,c){var d=a.constructor.v,e=M(c?a.h:b),f=N(e),g=!1;if(d&&bb){if(!c){b=G(b);var h;if(b.length&&P(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=M(a.h);a=N(h);h=+!!(h&512)-1;for(var k,m,p=0;p<d.length;p++)if(m=d[p],m<a){m+=h;var q=f[m];null==q?f[m]=c?Q:Xa():c&&q!==Q&&Va(q)}else k||(q=void 0,f.length&&P(q=f[f.length-1])?k=q:f.push(k={})),q=k[m],null==k[m]?k[m]=c?Q:Xa():c&&q!==Q&&Va(q)}k=b.length;if(!k)return b;var n;if(P(f=b[k-
1])){a:{var l=f;c={};a=!1;for(var v in l){h=l[v];if(Array.isArray(h)){p=h;if(!Ma&&cb(h,d,+v)||!La&&ab(h)&&0===h.size)h=null;h!=p&&(a=!0)}null!=h?c[v]=h:a=!0}if(a){for(var J in c){l=c;break a}l=null}}l!=f&&(n=!0);k--}for(e=+!!(e&512)-1;0<k;k--){v=k-1;f=b[v];if(!(null==f||!Ma&&cb(f,d,v-e)||!La&&ab(f)&&0===f.size))break;var y=!0}if(!n&&!y)return b;var B;g?B=b:B=Array.prototype.slice.call(b,0,k);b=B;g&&(b.length=k);l&&b.push(l);return b};function Fb(a,b,c){a[b]=c}var Gb=Symbol();function Hb(a){var b=a[Gb];if(!b){var c=Ib(a);b=function(d,e){return Jb(d,e,c)};a[Gb]=b}return b}var Kb=Symbol();function Lb(a){return a.g}function Mb(a,b){var c,d,e=a.g;return function(f,g,h){return e(f,g,h,d||(d=Ib(b).g),c||(c=Hb(b)))}}
function Ib(a){var b=a[Kb];if(b)return b;b=a[Kb]={};var c=Lb,d=Mb;var e=void 0===e?Fb:e;b.g=nb(a[0]);var f=0,g=a[++f];g&&g.constructor===Object&&(b.B=g,g=a[++f],"function"===typeof g&&(b.l=g,b.i=a[++f],g=a[++f]));for(var h={};Array.isArray(g)&&"number"===typeof g[0]&&0<g[0];){for(var k=0;k<g.length;k++)h[g[k]]=g;g=a[++f]}for(k=1;void 0!==g;){"number"===typeof g&&(k+=g,g=a[++f]);var m=void 0;if(g instanceof F)var p=g;else p=Nb,f--;if(p.A){g=a[++f];m=a;var q=f;"function"==typeof g&&(g=g(),m[q]=g);m=
g}g=a[++f];q=k+1;"number"===typeof g&&0>g&&(q-=g,g=a[++f]);for(;k<q;k++){var n=h[k];e(b,k,m?d(p,m,n):c(p,n))}}Ob in a&&Kb in a&&(a.length=0);return b}var Ob=Symbol();function Pb(a,b){var c=a[b];if(c)return c;if(c=a.B)if(c=c[b]){c=Array.isArray(c)?c[0]instanceof F?c:[Qb,c]:[c,void 0];var d=c[0].g;if(c=c[1]){var e=Hb(c),f=Ib(c).g;c=(c=a.i)?c(f,e):function(g,h,k){return d(g,h,k,f,e)}}else c=d;return a[b]=c}}
function Jb(a,b,c){for(var d=M(a),e=+!!(d&512)-1,f=a.length,g=f+(d&256?-1:0),h=d&512?1:0;h<g;h++){var k=a[h];if(null!=k){var m=h-e,p=Pb(c,m);p&&p(b,k,m)}}if(d&256){a=a[f-1];for(var q in a)d=+q,Number.isNaN(d)||(e=a[q],null!=e&&(f=Pb(c,d))&&f(b,e,d))}}
function Rb(a,b,c){b=null==b||"string"===typeof b?b:void 0;if(null!=b){var d=!1;d=void 0===d?!1:d;if(Ia){if(d&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b))throw Error("Found an unpaired surrogate");b=(Ha||(Ha=new TextEncoder)).encode(b)}else{for(var e=0,f=new Uint8Array(3*b.length),g=0;g<b.length;g++){var h=b.charCodeAt(g);if(128>h)f[e++]=h;else{if(2048>h)f[e++]=h>>6|192;else{if(55296<=h&&57343>=h){if(56319>=h&&g<b.length){var k=b.charCodeAt(++g);if(56320<=k&&
57343>=k){h=1024*(h-55296)+k-56320+65536;f[e++]=h>>18|240;f[e++]=h>>12&63|128;f[e++]=h>>6&63|128;f[e++]=h&63|128;continue}else g--}if(d)throw Error("Found an unpaired surrogate");h=65533}f[e++]=h>>12|224;f[e++]=h>>6&63|128}f[e++]=h&63|128}}b=e===f.length?f:f.subarray(0,e)}D(a.g,8*c+2);D(a.g,b.length);E(a,a.g.end());E(a,b)}}
function Sb(a,b,c,d,e){b=b instanceof V?b.h:Array.isArray(b)?R(b,d[0],d[1]):void 0;if(null!=b){D(a.g,8*c+2);c=a.g.end();E(a,c);c.push(a.i);e(b,a);e=c.pop();for(e=a.i+a.g.length()-e;127<e;)c.push(e&127|128),e>>>=7,a.i++;c.push(e);a.i++}}
var Tb=new F(function(a,b,c){b=null==b?b:"number"===typeof b||"NaN"===b||"Infinity"===b||"-Infinity"===b?Number(b):void 0;null!=b&&(D(a.g,8*c+1),a=a.g,c=Pa||(Pa=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),Na=c.getUint32(0,!0),Oa=c.getUint32(4,!0),Sa(a,Na),Sa(a,Oa))},!1),Ub=new F(function(a,b,c){b=ib(b);null!=b&&null!=b&&(D(a.g,8*c),Ra(a.g,b))},!1),Vb=new F(Rb,!1),Wb=new F(Rb,!1),Qb=new F(Sb,!0),Nb=new F(Sb,!0),Xb;
Xb=new F(function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Sb(a,b[f],c,d,e)},!0);var Yb=new F(function(a,b,c){b=ib(b);null!=b&&(b=parseInt(b,10),D(a.g,8*c),Ra(a.g,b))},!1);function Cb(a){this.h=R(a)}na(Cb,V);var Zb=[1,2,3],$b=[4,5],ac=[0,Zb,$b,Yb,-1,Wb,Tb,Wb,Ub];function bc(a){this.h=R(a)}na(bc,V);bc.v=[1];bc.prototype.g=function(a){return function(){var b=new Ta;Jb(this.h,b,Ib(a));E(b,b.g.end());for(var c=new Uint8Array(b.i),d=b.l,e=d.length,f=0,g=0;g<e;g++){var h=d[g];c.set(h,f);f+=h.length}b.l=[c];return c}}([0,Xb,ac,Vb,Ub,Vb,Ub]);function cc(a){this.h=R(a)}na(cc,V);cc.prototype.setData=function(a,b){var c=Cb,d=this.h,e=M(d);eb(e);d=zb(d,e,c,2,!1,2);b=null!=b?b:new c;if("number"!==typeof a||0>a||a>d.length)throw Error();void 0!=a?d.splice(a,1,b):d.push(b);I(b.h)&2?Wa(d,8):Wa(d,16);return this};cc.v=[1,2];function dc(a){this.i=a;this.data=[];this.g=[]}dc.prototype.setData=function(a,b,c){this.i.includes(c)&&this.data.push({key:a,value:b,channel:c})};function ec(a){return a.data.some(function(b){return 1===b.channel})}dc.prototype.setAttribute=function(a,b){this.g.push({key:a,value:b})};
function fc(a,b,c,d){var e=new Cb;"string"===typeof a?T(e,3,Zb,jb(a)):d?T(e,1,Zb,null==a?a:gb(a)):T(e,2,Zb,null==a?a:gb(a));if("number"===typeof b){if(null==b)a=b;else{if("number"!==typeof b)throw Error("Value of float/double field must be a number, found "+typeof b+": "+b);a=b}T(e,4,$b,a)}else T(e,5,$b,jb(b));c&&yb(e,6,null==c?c:hb(c));return e};function W(){this.g=new dc([]);this.D=Date.now();this.i=[];this.u=this.o=!1;this.s=100}
W.prototype.init=function(a,b,c,d,e,f){var g=this;this.g=new dc(b);this.G=a;this.C=e;this.F=c;if(d){b=a=NaN;d=t(d);for(c=d.next();!c.done;c=d.next())e=t(c.value),c=e.next().value,e=e.next().value,6===c?a=Number(e):5===c?b=Number(e):this.g.setAttribute(c,e);!isNaN(a)&&0<=a?this.s=a:isNaN(b)||(this.o=!0,setInterval(this.l.bind(this),b),setTimeout(function(){gc(g,"timeout")},3E5),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&gc(g,"document_hidden")}),window.addEventListener("beforeunload",
function(){gc(g,"beforeunload")}))}if(f){f=t(f);for(a=f.next();!a.done;a=f.next())d=t(a.value),a=d.next().value,b=d.next().value,d=d.next().value,this.setData(a,b,d);"complete"===document.readyState?this.send():window.addEventListener("load",function(){g.send()})}};W.prototype.getBaseTime=function(){return this.D};W.prototype.setData=function(a,b,c){this.g.setData(a,b,c);this.i[c]?this.i[c]++:this.i[c]=1};W.prototype.setAttribute=function(a,b){this.g.setAttribute(a,b)};
W.prototype.send=function(a){var b=this;if(!this.o){var c=ec(this.g)?0:this.s;a=null!=a?a:c;0<a?setTimeout(function(){return void b.l()},a):this.l()}};
W.prototype.l=function(){if(0<this.g.data.length){var a=this.G,b=this.C,c=this.F,d=this.g,e=[];var f=t(d.g);for(var g=f.next();!g.done;g=f.next())g=g.value,e.push(fc(g.key,g.value,void 0,!0));f=[];d=t(d.data);for(g=d.next();!g.done;g=d.next())g=g.value,f.push(fc(g.key,g.value,g.channel,!1));d=new cc;e=Db(d,1,e);f=Db(e,2,f);e=new bc;f=Bb(f,1).concat(Bb(f,2));e=Db(e,1,f);a&&yb(e,2,jb(a));c&&yb(e,4,jb(c));b&&yb(e,5,null==b?b:hb(b));a="https://pagead2.googlesyndication.com/pagead/gen_204?id=mys&d="+Ga(e.g()).replace(/\//g,
"_").replace(/\+/g,"-");b=window;var h=void 0===h?!1:h;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Da(b,a,void 0===h?!1:h);this.g.data=[]}};function gc(a,b){a.u||(a.g.setData(32,b,4),a.i.forEach(function(c,d){a.g.setData(31,c,d)}),a.l(),a.u=!0)}
if(!window.mys||!window.mys.pingback){var hc=new W,X=["mys","pingback"],Y=u;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===hc?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=hc};}).call(this);
