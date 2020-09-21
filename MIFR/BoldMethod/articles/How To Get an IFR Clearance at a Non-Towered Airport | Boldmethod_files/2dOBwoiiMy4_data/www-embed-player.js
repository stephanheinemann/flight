(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
r("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.S=b.prototype}
function oa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.u=this.h=null}
function pa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
oa.prototype.A=function(a){this.g=a};
function qa(a,b){a.h={Fa:b,ra:!0};a.f=a.l||a.j}
oa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function w(a,b,c){a.f=c;return{value:b}}
oa.prototype.J=function(a){this.f=a};
function ra(a){this.f=new oa;this.g=a}
function sa(a,b){pa(a.f);var c=a.f.i;if(c)return ta(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return ua(a)}
function ta(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,qa(a.f,g),ua(a)}a.f.i=null;d.call(a.f,f);return ua(a)}
function ua(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,qa(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.ra)throw b.Fa;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function va(a){this.next=function(b){pa(a.f);a.f.i?b=ta(a,a.f.i.next,b,a.f.A):(a.f.A(b),b=ua(a));return b};
this["throw"]=function(b){pa(a.f);a.f.i?b=ta(a,a.f.i["throw"],b,a.f.A):(qa(a.f,b),b=ua(a));return b};
this["return"]=function(b){return sa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){var c=new va(new ra(b));na&&a.prototype&&na(c,a.prototype);return c}
r("Reflect",function(a){return a?a:{}});
r("Reflect.construct",function(){return ia});
r("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function wa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=wa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=wa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
r("Object.setPrototypeOf",function(a){return a||na});
function xa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ya="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)xa(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ya});
r("Promise",function(a){function b(g){this.f=0;this.h=void 0;this.g=[];this.m=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.G),reject:g(this.j)}};
b.prototype.G=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.M(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.l(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.N(h,g):this.l(g)};
b.prototype.j=function(g){this.A(2,g)};
b.prototype.l=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.h=h;2===this.f&&this.H();this.u()};
b.prototype.H=function(){var g=this;e(function(){if(g.D()){var h=da.console;"undefined"!==typeof h&&h.error(g.h)}},1)};
b.prototype.D=function(){if(this.m)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.h;return k(g)};
b.prototype.u=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.g(this.g[g]);this.g=null}};
var f=new c;b.prototype.M=function(g){var h=this.i();g.da(h.resolve,h.reject)};
b.prototype.N=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,t){return"function"==typeof q?function(z){try{l(q(z))}catch(E){m(E)}}:t}
var l,m,p=new b(function(q,t){l=q;m=t});
this.da(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.da=function(g,h){function k(){switch(l.f){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.g?f.g(k):this.g.push(k);this.m=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).da(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(z){return function(E){q[z]=E;t--;0==t&&l(q)}}
var q=[],t=0;do q.push(void 0),t++,d(k.value).da(p(q.length-1),m),k=h.next();while(!k.done)})};
return b});
function za(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.keys",function(a){return a?a:function(){return za(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return za(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==wa(this,b,"includes").indexOf(b,c||0)}});
r("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!xa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!xa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&xa(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&xa(k,g)&&xa(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&xa(k,g)&&xa(k[g],this.f)?delete k[g][this.f]:!1};
return b});
r("Array.prototype.entries",function(a){return a?a:function(){return za(this,function(b,c){return[b,c]})}});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&xa(h.g,l))for(var p=0;p<m.length;p++){var q=m[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:p,B:q}}return{id:l,list:m,index:-1,B:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.B?l.B.value=k:(l.B={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.B),this.f.previous.next=l.B,this.f.previous=l.B,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.B&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.B.previous.next=h.B.next,h.B.next.previous=h.B.previous,h.B.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).B};
e.prototype.get=function(h){return(h=d(this,h).B)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)xa(b,d)&&c.push([d,b[d]]);return c}});
r("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var y=this||self;function A(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Aa(a){if(a&&a!=y)return Ba(a.document);null===Ca&&(Ca=Ba(y.document));return Ca}
var Da=/^[\w+/_-]+[=]{0,2}$/,Ca=null;function Ba(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Da.test(a)?a:""}
function B(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ea(){}
function Fa(a){a.la=void 0;a.getInstance=function(){return a.la?a.la:a.la=new a}}
function Ga(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ha(a){var b=Ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a){return Object.prototype.hasOwnProperty.call(a,Ka)&&a[Ka]||(a[Ka]=++La)}
var Ka="closure_uid_"+(1E9*Math.random()>>>0),La=0;function Ma(a,b,c){return a.call.apply(a.bind,arguments)}
function Na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Ma:C=Na;return C.apply(null,arguments)}
function Oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function D(){return Date.now()}
function Pa(a,b){A(a,b,void 0)}
function F(a,b){function c(){}
c.prototype=b.prototype;a.S=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Qa(a){return a}
;function G(a){if(Error.captureStackTrace)Error.captureStackTrace(this,G);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(G,Error);G.prototype.name="CustomError";function Ra(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.i=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;function Sa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ta=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ua=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Va=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Xa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ya(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Za(a,b){var c=Ta(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function $a(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ab(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ha(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function bb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function cb(a,b){var c=Ha(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function db(a){var b=eb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function fb(a){for(var b in a)return!1;return!0}
function gb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function hb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ib(a){var b={},c;for(c in a)b[c]=a[c];return b}
function jb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=jb(a[c]);return b}
var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<kb.length;f++)c=kb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var mb;function nb(){if(void 0===mb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Qa,createScript:Qa,createScriptURL:Qa})}catch(c){y.console&&y.console.error(c.message)}mb=a}else mb=a}return mb}
;function ob(a,b){this.f=b===pb?a:""}
ob.prototype.R=!0;ob.prototype.O=function(){return this.f.toString()};
ob.prototype.ka=!0;ob.prototype.ha=function(){return 1};
function qb(a){if(a instanceof ob&&a.constructor===ob)return a.f;Ga(a);return"type_error:TrustedResourceUrl"}
var pb={};var rb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function sb(a,b){if(b)a=a.replace(tb,"&amp;").replace(ub,"&lt;").replace(vb,"&gt;").replace(wb,"&quot;").replace(xb,"&#39;").replace(yb,"&#0;");else{if(!zb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(tb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ub,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(vb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(wb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(xb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(yb,"&#0;"))}return a}
var tb=/&/g,ub=/</g,vb=/>/g,wb=/"/g,xb=/'/g,yb=/\x00/g,zb=/[\x00&<>"']/;function I(a,b){this.f=b===Ab?a:""}
I.prototype.R=!0;I.prototype.O=function(){return this.f.toString()};
I.prototype.ka=!0;I.prototype.ha=function(){return 1};
function Bb(a){if(a instanceof I&&a.constructor===I)return a.f;Ga(a);return"type_error:SafeUrl"}
var Cb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Db=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Eb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Fb(a){if(a instanceof I)return a;a="object"==typeof a&&a.R?a.O():String(a);Eb.test(a)||(a="about:invalid#zClosurez");return new I(a,Ab)}
var Ab={},Gb=new I("about:invalid#zClosurez",Ab);var Hb;a:{var Ib=y.navigator;if(Ib){var Jb=Ib.userAgent;if(Jb){Hb=Jb;break a}}Hb=""}function J(a){return-1!=Hb.indexOf(a)}
;function Kb(a,b,c){this.f=c===Lb?a:"";this.g=b}
Kb.prototype.ka=!0;Kb.prototype.ha=function(){return this.g};
Kb.prototype.R=!0;Kb.prototype.O=function(){return this.f.toString()};
var Lb={};function Mb(a,b){var c=nb();c=c?c.createHTML(a):a;return new Kb(c,b,Lb)}
;function Nb(a,b){var c=b instanceof I?b:Fb(b);a.href=Bb(c)}
function Ob(a,b){a.src=qb(b);var c=Aa(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Pb(a){return a=sb(a,void 0)}
function Qb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Rb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Sb(a){return a?decodeURI(a):a}
function K(a){return Sb(a.match(Rb)[3]||null)}
function Tb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Tb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ub(a){var b=[],c;for(c in a)Tb(c,a[c],b);return b.join("&")}
function Wb(a,b){var c=Ub(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var Xb=/#|$/;function L(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;var Yb=J("Opera"),Zb=J("Trident")||J("MSIE"),$b=J("Edge"),ac=J("Gecko")&&!(-1!=Hb.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),bc=-1!=Hb.toLowerCase().indexOf("webkit")&&!J("Edge");function cc(){var a=y.document;return a?a.documentMode:void 0}
var dc;a:{var ec="",fc=function(){var a=Hb;if(ac)return/rv:([^\);]+)(\)|;)/.exec(a);if($b)return/Edge\/([\d\.]+)/.exec(a);if(Zb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(bc)return/WebKit\/(\S+)/.exec(a);if(Yb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
fc&&(ec=fc?fc[1]:"");if(Zb){var gc=cc();if(null!=gc&&gc>parseFloat(ec)){dc=String(gc);break a}}dc=ec}var hc=dc,ic;if(y.document&&Zb){var jc=cc();ic=jc?jc:parseInt(hc,10)||void 0}else ic=void 0;var kc=ic;var lc=J("iPhone")&&!J("iPod")&&!J("iPad")||J("iPod"),mc=J("iPad");var nc={},oc=null;var M=window;function pc(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=qc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,rc[c])c=rc[c];else{c=String(c);if(!rc[c]){var f=/function\s+([^\(]+)/m.exec(c);rc[c]=f?f[1]:"[Anonymous]"}c=rc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function qc(a,b){b||(b={});b[sc(a)]=!0;var c=a.stack||"",d=a.wb;d&&!b[sc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=qc(d,b));return c}
function sc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var rc={};function tc(a){this.f=a||{cookie:""}}
n=tc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Cb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.sa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=rb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{sa:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=rb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var uc=new tc("undefined"==typeof document?null:document);var vc=!Zb||9<=Number(kc);function wc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=wc.prototype;n.clone=function(){return new wc(this.x,this.y)};
n.equals=function(a){return a instanceof wc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function xc(a,b){this.width=a;this.height=b}
n=xc.prototype;n.clone=function(){return new xc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function yc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function zc(a,b){bb(b,function(c,d){c&&"object"==typeof c&&c.R&&(c=c.O());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Ac.hasOwnProperty(d)?a.setAttribute(Ac[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Ac={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Bc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!vc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Pb(g.name),'"');if(g.type){f.push(' type="',Pb(g.type),'"');var h={};lb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Cc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):zc(f,g));2<d.length&&Dc(e,f,d);return f}
function Dc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ha(f)||Ia(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ia(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}H(g?$a(f):f,d)}}}
function Cc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Ec(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Fc(a){var b=Gc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Hc(){var a=[];Fc(function(b){a.push(b)});
return a}
var Gc={jb:"allow-forms",kb:"allow-modals",lb:"allow-orientation-lock",mb:"allow-pointer-lock",nb:"allow-popups",ob:"allow-popups-to-escape-sandbox",pb:"allow-presentation",qb:"allow-same-origin",rb:"allow-scripts",sb:"allow-top-navigation",tb:"allow-top-navigation-by-user-activation"},Ic=Sa(function(){return Hc()});
function Jc(){var a=Cc(document,"IFRAME"),b={};H(Ic(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function N(){this.g=this.g;this.A=this.A}
N.prototype.g=!1;N.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function Kc(a,b){a.g?b():(a.A||(a.A=[]),a.A.push(b))}
N.prototype.o=function(){if(this.A)for(;this.A.length;)this.A.shift()()};
function Lc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Mc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ha(d)?Mc.apply(null,d):Lc(d)}}
;var Nc={};function Oc(){}
function Pc(a,b){if(b!==Nc)throw Error("Bad secret");this.f=a}
v(Pc,Oc);Pc.prototype.toString=function(){return this.f};new Pc("about:blank",Nc);new Pc("about:invalid#zTSz",Nc);function Qc(a){Rc();var b=nb();a=b?b.createScriptURL(a):a;return new ob(a,pb)}
var Rc=Ea;function Sc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Tc=(new Date).getTime();function Uc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Vc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var q=g,t=0;64>t;t+=4)q[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=q[t-3]^q[t-8]^q[t-14]^q[t-16],q[t]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],E=e[2],V=e[3],hd=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var Wa=V^z&(E^V);var Vb=1518500249}else Wa=z^E^V,Vb=1859775393;else 60>t?(Wa=z&E|V&(z|E),Vb=2400959708):(Wa=z^E^V,Vb=3395469782);Wa=((p<<5|p>>>27)&4294967295)+Wa+hd+Vb+q[t]&4294967295;hd=V;V=E;E=(z<<30|z>>>2)&4294967295;z=p;p=Wa}e[0]=e[0]+p&4294967295;e[1]=e[1]+
z&4294967295;e[2]=e[2]+E&4294967295;e[3]=e[3]+V&4294967295;e[4]=e[4]+hd&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],z=0,E=p.length;z<E;++z)t.push(p.charCodeAt(z));p=t}q||(q=p.length);t=0;if(0==l)for(;t+64<q;)b(p.slice(t,t+64)),t+=64,m+=64;for(;t<q;)if(f[l++]=p[t++],m++,64==l)for(l=0,b(f);t+64<q;)b(p.slice(t,t+64)),t+=64,m+=64}
function d(){var p=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var t=63;56<=t;t--)f[t]=q&255,q>>>=8;b(f);for(t=q=0;5>t;t++)for(var z=24;0<=z;z-=8)p[q++]=e[t]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ea:function(){for(var p=d(),q="",t=0;t<p.length;t++)q+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return q}}}
;function Wc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),Xc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=Xc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Xc(a){var b=Vc();b.update(a);return b.Ea().toLowerCase()}
;function Yc(a){var b=Uc(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new tc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?y.__SAPISID:y.__APISID,c||(c=new tc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,Wc(Uc(d),
c,a||null)].join(" "):null}return null}
;function Zc(){this.g=[];this.f=-1}
Zc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Zc.prototype.get=function(a){return!!this.g[a]};
function $c(a){-1==a.f&&(a.f=Xa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function ad(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
ad.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function bd(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function cd(a){y.setTimeout(function(){throw a;},0)}
var dd;
function ed(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Cc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.qa;c.qa=null;e()}};
return function(e){d.next={qa:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function fd(){this.g=this.f=null}
var id=new ad(function(){return new gd},function(a){a.reset()});
fd.prototype.add=function(a,b){var c=id.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
fd.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function gd(){this.next=this.scope=this.f=null}
gd.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
gd.prototype.reset=function(){this.next=this.scope=this.f=null};function jd(a,b){kd||ld();md||(kd(),md=!0);nd.add(a,b)}
var kd;function ld(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);kd=function(){a.then(od)}}else kd=function(){var b=od;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!J("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(dd||(dd=ed()),dd(b)):y.setImmediate(b)}}
var md=!1,nd=new fd;function od(){for(var a;a=nd.remove();){try{a.f.call(a.scope)}catch(b){cd(b)}bd(id,a)}md=!1}
;function pd(){this.g=-1}
;function qd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
F(qd,pd);qd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function rd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
qd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)rd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){rd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){rd(this,e);f=0;break}}this.h=f;this.j+=b}};
qd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;rd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var sd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function td(){}
td.prototype.next=function(){throw sd;};
td.prototype.I=function(){return this};
function ud(a){if(a instanceof td)return a;if("function"==typeof a.I)return a.I(!1);if(Ha(a)){var b=0,c=new td;c.next=function(){for(;;){if(b>=a.length)throw sd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function vd(a,b){if(Ha(a))try{H(a,b,void 0)}catch(c){if(c!==sd)throw c;}else{a=ud(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==sd)throw c;}}}
function wd(a){if(Ha(a))return $a(a);a=ud(a);var b=[];vd(a,function(c){b.push(c)});
return b}
;function xd(a,b){this.h={};this.f=[];this.K=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof xd)for(c=yd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function yd(a){zd(a);return a.f.concat()}
n=xd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Ad;zd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Ad(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.K=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.K++,this.f.length>2*this.g&&zd(this),!0):!1};
function zd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.K++);this.h[a]=b};
n.forEach=function(a,b){for(var c=yd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new xd(this)};
n.I=function(a){zd(this);var b=0,c=this.K,d=this,e=new td;e.next=function(){if(c!=d.K)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw sd;var f=d.f[b++];return a?f:d.h[f]};
return e};function Bd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Cd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Dd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Bd(a).match(/\S+/g)||[],c=0<=Ta(c,b);return c}
function Ed(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Dd(a,"inverted-hdpi")&&Cd(a,Ua(a.classList?a.classList:Bd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Fd(a){var b=[];Gd(new Hd,a,b);return b.join("")}
function Hd(){}
function Gd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Gd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Id(d,c),c.push(":"),Gd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Id(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Jd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Kd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Id(a,b){b.push('"',a.replace(Kd,function(c){var d=Jd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Jd[c]=d);return d}),'"')}
;function Ld(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function O(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){Md(b,2,c)},function(c){Md(b,3,c)})}catch(c){Md(this,3,c)}}
function Nd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Nd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Od=new ad(function(){return new Nd},function(a){a.reset()});
function Pd(a,b,c){var d=Od.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Qd(a){if(a instanceof O)return a;var b=new O(Ea);Md(b,2,a);return b}
function Rd(a){return new O(function(b,c){c(a)})}
O.prototype.then=function(a,b,c){return Sd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
O.prototype.$goog_Thenable=!0;function Td(a,b){return Sd(a,null,b,void 0)}
O.prototype.cancel=function(a){if(0==this.f){var b=new Ud(a);jd(function(){Vd(this,b)},this)}};
function Vd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Vd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Wd(c),Xd(c,e,3,b)))}a.h=null}else Md(a,3,b)}
function Yd(a,b){a.g||2!=a.f&&3!=a.f||Zd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Sd(a,b,c,d){var e=Pd(null,null,null);e.f=new O(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ud?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Yd(a,e);return e.f}
O.prototype.u=function(a){this.f=0;Md(this,2,a)};
O.prototype.D=function(a){this.f=0;Md(this,3,a)};
function Md(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.u,f=a.D;if(d instanceof O){Yd(d,Pd(e||Ea,f||null,a));var g=!0}else if(Ld(d))d.then(e,f,a),g=!0;else{if(Ia(d))try{var h=d.then;if("function"===typeof h){$d(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.m=c,a.f=b,a.h=null,Zd(a),3!=b||c instanceof Ud||ae(a,c))}}
function $d(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Zd(a){a.l||(a.l=!0,jd(a.A,a))}
function Wd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
O.prototype.A=function(){for(var a;a=Wd(this);)Xd(this,a,this.f,this.m);this.l=!1};
function Xd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,be(b,c,d);else try{b.h?b.g.call(b.context):be(b,c,d)}catch(e){ce.call(null,e)}bd(Od,b)}
function be(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ae(a,b){a.j=!0;jd(function(){a.j&&ce.call(null,b)})}
var ce=cd;function Ud(a){G.call(this,a)}
F(Ud,G);Ud.prototype.name="cancel";function P(a){N.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
F(P,N);n=P.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function de(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Ya(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.T(b)}}
n.T=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ea):(c&&Za(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.P=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];ee(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.T(c)}}return 0!=e}return!1};
function ee(a,b,c){jd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(H(b,this.T,this),delete this.h[a])}else this.f.length=0,this.h={}};
n.o=function(){P.S.o.call(this);this.clear();this.i.length=0};function fe(a){this.f=a}
fe.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Fd(b))};
fe.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
fe.prototype.remove=function(a){this.f.remove(a)};function ge(a){this.f=a}
F(ge,fe);function he(a){this.data=a}
function ie(a){return void 0===a||a instanceof he?a:new he(a)}
ge.prototype.set=function(a,b){ge.S.set.call(this,a,ie(b))};
ge.prototype.g=function(a){a=ge.S.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ge.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function je(a){this.f=a}
F(je,ge);je.prototype.set=function(a,b,c){if(b=ie(b)){if(c){if(c<D()){je.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}je.S.set.call(this,a,b)};
je.prototype.g=function(a){var b=je.S.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())je.prototype.remove.call(this,a);else return b}};function ke(){}
;function le(){}
F(le,ke);le.prototype.clear=function(){var a=wd(this.I(!0)),b=this;H(a,function(c){b.remove(c)})};function me(a){this.f=a}
F(me,le);n=me.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.I=function(a){var b=0,c=this.f,d=new td;d.next=function(){if(b>=c.length)throw sd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function ne(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
F(ne,me);function oe(a,b){this.g=a;this.f=null;if(Zb&&!(9<=Number(kc))){pe||(pe=new xd);this.f=pe.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),pe.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
F(oe,le);var qe={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},pe=null;function re(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return qe[b]})}
n=oe.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(re(a),b);se(this)};
n.get=function(a){a=this.f.getAttribute(re(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(re(a));se(this)};
n.I=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new td;d.next=function(){if(b>=c.length)throw sd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);se(this)};
function se(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function te(a,b){this.g=a;this.f=b+"::"}
F(te,le);te.prototype.set=function(a,b){this.g.set(this.f+a,b)};
te.prototype.get=function(a){return this.g.get(this.f+a)};
te.prototype.remove=function(a){this.g.remove(this.f+a)};
te.prototype.I=function(a){var b=this.g.I(!0),c=this,d=new td;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function ue(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var ve=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",ve,void 0);function Q(a){ue(ve,arguments)}
function R(a,b){return a in ve?ve[a]:b}
function we(){return R("PLAYER_CONFIG",{})}
;var xe=[];function ye(a){xe.forEach(function(b){return b(a)})}
function ze(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b),ye(b)}}:a}
function S(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Q("ERRORS",b))}
function Ae(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Q("ERRORS",b))}
;var Be=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Be,void 0);function Ce(a){ue(Be,arguments)}
;function De(a,b,c,d){uc.set(""+a,b,{sa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function T(a){a=Ee(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Fe(a,b){var c=Ee(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Ee(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
;function Ge(a){a&&(a.dataset?a.dataset[He("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ie(a,b){return a?a.dataset?a.dataset[He(b)]:a.getAttribute("data-"+b):null}
var Je={};function He(a){return Je[a]||(Je[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function U(a,b){"function"===typeof a&&(a=ze(a));return window.setTimeout(a,b)}
function Ke(a){window.clearTimeout(a)}
;var Le=y.ytPubsubPubsubInstance||new P,Me=y.ytPubsubPubsubSubscribedKeys||{},Ne=y.ytPubsubPubsubTopicToKeys||{},Oe=y.ytPubsubPubsubIsSynchronous||{};function Pe(a,b){var c=Qe();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Me[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Oe[a]?f():U(f,0)}catch(g){S(g)}},void 0);
Me[d]=!0;Ne[a]||(Ne[a]=[]);Ne[a].push(d);return d}return 0}
function Re(a){var b=Qe();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),H(a,function(c){b.unsubscribeByKey(c);delete Me[c]}))}
function Se(a,b){var c=Qe();c&&c.publish.apply(c,arguments)}
function Te(a){var b=Qe();if(b)if(b.clear(a),a)Ue(a);else for(var c in Ne)Ue(c)}
function Qe(){return y.ytPubsubPubsubInstance}
function Ue(a){Ne[a]&&(a=Ne[a],H(a,function(b){Me[b]&&delete Me[b]}),a.length=0)}
P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.T;P.prototype.publish=P.prototype.P;P.prototype.clear=P.prototype.clear;A("ytPubsubPubsubInstance",Le,void 0);A("ytPubsubPubsubTopicToKeys",Ne,void 0);A("ytPubsubPubsubIsSynchronous",Oe,void 0);A("ytPubsubPubsubSubscribedKeys",Me,void 0);var Ve=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,We=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Xe(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ve,""),c=c.replace(We,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ye(a,b,c)}
function Ye(a,b,c){c=void 0===c?null:c;var d=Ze(a),e=document.getElementById(d),f=e&&Ie(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Pe(d,b),b=""+Ja(b),$e[b]=f),g||(e=af(a,d,function(){Ie(e,"loaded")||(Ge(e),Se(d),U(Oa(Te,d),0))},c)))}
function af(a,b,c,d){d=void 0===d?null:d;var e=Cc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ob(e,Qc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function bf(a){a=Ze(a);var b=document.getElementById(a);b&&(Te(a),b.parentNode.removeChild(b))}
function cf(a,b){if(a&&b){var c=""+Ja(b);(c=$e[c])&&Re(c)}}
function Ze(a){var b=document.createElement("a");Nb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Qb(a)}
var $e={};function df(){}
function ef(a,b){return ff(a,0,b)}
function gf(a,b){return ff(a,1,b)}
;function hf(){}
v(hf,df);function ff(a,b,c){isNaN(c)&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):U(a,c||0)}
function jf(a){if(!isNaN(a)){var b=B("yt.scheduler.instance.cancelJob");b?b(a):Ke(a)}}
hf.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
hf.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
Fa(hf);hf.getInstance();var kf=[],lf=!1;function mf(){if(!T("disable_ad_status_on_html5_clients")&&(!T("condition_ad_status_fetch_on_consent_cookie_html5_clients")||uc.get("CONSENT","").startsWith("YES+"))&&"1"!=cb(we(),"args","privembed")){var a=function(){lf=!0;"google_ad_status"in window?Q("DCLKSTAT",1):Q("DCLKSTAT",2)};
Xe("//static.doubleclick.net/instream/ad_status.js",a);kf.push(gf(function(){lf||"google_ad_status"in window||(cf("//static.doubleclick.net/instream/ad_status.js",a),lf=!0,Q("DCLKSTAT",3))},5E3))}}
function nf(){return parseInt(R("DCLKSTAT",0),10)}
;var of=0;A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++of},void 0);var pf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function qf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in pf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function rf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
qf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
qf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
qf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var eb=y.ytEventsEventsListeners||{};A("ytEventsEventsListeners",eb,void 0);var sf=y.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",sf,void 0);
function tf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return db(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ia(e[4])&&Ia(d)&&hb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var uf=Sa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function vf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=tf(a,b,c,d);if(e)return e;e=++sf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new qf(h);if(!Ec(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new qf(h);
h.currentTarget=a;return c.call(a,h)};
g=ze(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),uf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);eb[e]=[a,b,c,g,d];return e}
function wf(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in eb){var c=eb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?uf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete eb[b]}}))}
;var xf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function yf(a){this.u=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.F=vf(window,"mousemove",C(this.G,this));a=C(this.D,this);"function"===typeof a&&(a=ze(a));this.H=window.setInterval(a,25)}
F(yf,N);yf.prototype.G=function(a){void 0===a.f&&rf(a);var b=a.f;void 0===a.g&&rf(a);this.f=new wc(b,a.g)};
yf.prototype.D=function(){if(this.f){var a=xf();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.u();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
yf.prototype.o=function(){window.clearInterval(this.H);wf(this.F)};var zf={};
function Af(a){var b=void 0===a?{}:a;a=void 0===b.Ka?!0:b.Ka;b=void 0===b.Wa?!1:b.Wa;if(null==B("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?D()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Bf();vf(document,"keydown",Bf);vf(document,"keyup",Bf);vf(document,"mousedown",Bf);vf(document,"mouseup",Bf);a&&(b?vf(window,"touchmove",function(){Cf("touchmove",200)},{passive:!0}):(vf(window,"resize",function(){Cf("resize",200)}),vf(window,"scroll",function(){Cf("scroll",200)})));
new yf(function(){Cf("mouse",100)});
vf(document,"touchstart",Bf,{passive:!0});vf(document,"touchend",Bf,{passive:!0})}}
function Cf(a,b){zf[a]||(zf[a]=!0,gf(function(){Bf();zf[a]=!1},b))}
function Bf(){null==B("_lact",window)&&Af();var a=D();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Df(){var a=B("_lact",window),b;null==a?b=-1:b=Math.max(D()-a,0);return b}
;var Ef=window,W=Ef.ytcsi&&Ef.ytcsi.now?Ef.ytcsi.now:Ef.performance&&Ef.performance.timing&&Ef.performance.now&&Ef.performance.timing.navigationStart?function(){return Ef.performance.timing.navigationStart+Ef.performance.now()}:function(){return(new Date).getTime()};var Ff=Fe("initial_gel_batch_timeout",1E3),Gf=Math.pow(2,16)-1,Hf=null,If=0,Jf=void 0,Kf=0,Lf=0,Mf=0,Nf=!0,Of=y.ytLoggingTransportLogPayloadsQueue_||{};A("ytLoggingTransportLogPayloadsQueue_",Of,void 0);var Pf=y.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",Pf,void 0);var Qf=y.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Qf,void 0);
function Rf(){Ke(Kf);Ke(Lf);Lf=0;Jf&&Jf.isReady()?(Sf(Pf),"log_event"in Of&&Sf(Object.entries(Of.log_event)),Pf.clear(),delete Of.log_event):Tf()}
function Tf(){T("web_gel_timeout_cap")&&!Lf&&(Lf=U(Rf,6E4));Ke(Kf);var a=R("LOGGING_BATCH_TIMEOUT",Fe("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Nf&&(a=Ff);Kf=U(Rf,a)}
function Sf(a){var b=Jf,c=Math.round(W());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=jb({context:Uf(b.f||Vf())});e.events=f;(f=Qf[d])&&Wf(e,d,f);delete Qf[d];Xf(e,c);Yf(b,"log_event",e,{retry:!0,onSuccess:function(){If=Math.round(W()-c)}});
Nf=!1}}
function Xf(a,b){a.requestTimeMs=String(b);T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=R("EVENT_ID",void 0);if(c){var d=R("BATCH_CLIENT_COUNTER",void 0)||0;!d&&T("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Gf/2));d++;d>Gf&&(d=1);Q("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Hf&&If&&T("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Hf,roundtripMs:String(If)});Hf=c;If=0}}
function Wf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Zf=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",Zf,void 0);
function $f(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||W());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Df())};T("log_sequence_info_on_gel_web")&&d.V&&(a=e.context,b=d.V,Zf[b]=b in Zf?Zf[b]+1:0,a.sequence={index:Zf[b],groupKey:b},d.yb&&delete Zf[d.V]);d=d.ga;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Qf[d.token]=a,a=d.token);d=Pf.get(a)||[];Pf.set(a,d);d.push(e);c&&(Jf=new c);c=Fe("web_logging_max_batch")||100;e=
W();d.length>=c?Rf():10<=e-Mf&&(Tf(),Mf=e)}
;function ag(){var a=bg;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a,void 0)}
function cg(a){A("yt.ads.biscotti.lastId_",a,void 0)}
;function dg(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?ab(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};S(h)}}}return b}
function eg(a){var b=[];bb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function fg(a){"?"==a.charAt(0)&&(a=a.substr(1));return dg(a)}
function gg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=fg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Wb(a,e)+d}
;function hg(a){var b=ig;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(jg(b),kg(b));b.ca_type="image";a&&(b.bid=a);return b}
function jg(a){var b={};b.dt=Tc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?M:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!M.navigator&&"unknown"!==typeof M.navigator.javaEnabled&&!!M.navigator.javaEnabled&&M.navigator.javaEnabled();M.screen&&(b.u_h=M.screen.height,b.u_w=M.screen.width,b.u_ah=M.screen.availHeight,b.u_aw=M.screen.availWidth,b.u_cd=M.screen.colorDepth);
M.navigator&&M.navigator.plugins&&(b.u_nplug=M.navigator.plugins.length);M.navigator&&M.navigator.mimeTypes&&(b.u_nmime=M.navigator.mimeTypes.length);return b}
function kg(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new xc(l.clientWidth,l.clientHeight)).round()}catch(p){m=new xc(-12245933,-12245933)}k=m;m={};l=new Zc;y.SVGElement&&
y.document.createElementNS&&l.set(0);c=Jc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);y.crypto&&y.crypto.subtle&&l.set(3);y.TextDecoder&&y.TextEncoder&&l.set(4);l=$c(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!M.WebGLRenderingContext,m}
var ig=new function(){var a=window.document;this.f=window;this.g=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return eg(hg(a))},void 0);var lg="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function mg(){if(!lg)return null;var a=lg();return"open"in a?a:null}
function ng(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var og={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},pg="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
qg=!1;
function rg(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Rb)[1]||null,e=K(a);d&&e?(d=c,c=a.match(Rb),d=d.match(Rb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?K(c)==e&&(Number(c.match(Rb)[4]||null)||null)==(Number(a.match(Rb)[4]||null)||null):!0;d=T("web_ajax_ignore_global_headers_if_set");for(var f in og)e=R(og[f]),!e||!c&&K(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!K(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!K(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!K(a))b["X-YouTube-Ad-Signals"]=eg(hg(void 0));return b}
function sg(a){var b=window.location.search,c=K(a),d=Sb(a.match(Rb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=fg(b),f={};H(pg,function(g){e[g]&&(f[g]=e[g])});
return gg(a,f||{},!1)}
function tg(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ug(a,b);var d=vg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Ke(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||y;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ma&&b.ma.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.wa&&0<b.timeout&&(f=U(function(){e||(e=!0,Ke(f),b.wa.call(b.context||y))},b.timeout))}else wg(a,b)}
function wg(a,b){var c=b.format||"JSON";a=ug(a,b);var d=vg(a,b),e=!1,f=xg(a,function(k){if(!e){e=!0;h&&Ke(h);var l=ng(k),m=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)m=yg(a,c,k,b.xb);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.ma&&b.ma.call(p,k,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.U&&0<b.timeout){var g=b.U;var h=U(function(){e||(e=!0,f.abort(),Ke(h),g.call(b.context||y,f))},b.timeout)}return f}
function ug(a,b){b.Ab&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.ib;d&&(d[c]&&delete d[c],a=gg(a,d||{},!0));return a}
function vg(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=R("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.zb||K(a)&&!b.withCredentials&&K(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=fg(e),lb(e,f),e=b.xa&&"JSON"==b.xa?JSON.stringify(e):Ub(e));f=e||f&&!fb(f);!qg&&f&&"POST"!=b.method&&(qg=!0,S(Error("AJAX request with postData should use POST")));
return e}
function yg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ae(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?zg(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ag(g)})}d&&Bg(e);
return e}
function Bg(a){if(Ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Mb(a[b],null);a[c]=d}else Bg(a[b])}}
function zg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ag(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function xg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ze(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=mg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;T("debug_forward_web_query_parameters")&&(a=sg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=rg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Cg(){for(var a={},b=u(Object.entries(fg(R("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Dg(){return"INNERTUBE_API_KEY"in ve&&"INNERTUBE_API_VERSION"in ve}
function Vf(){return{innertubeApiKey:R("INNERTUBE_API_KEY",void 0),innertubeApiVersion:R("INNERTUBE_API_VERSION",void 0),La:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ma:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Oa:R("INNERTUBE_CONTEXT_HL",void 0),Na:R("INNERTUBE_CONTEXT_GL",void 0),Pa:R("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ra:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Qa:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Uf(a){var b={client:{hl:a.Oa,gl:a.Na,clientName:a.Ma,clientVersion:a.innertubeContextClientVersion,configInfo:a.La}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=R("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=R("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&T("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);R("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,Cg());return b}
function Eg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.vb||R("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().ub:b=Yc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),T("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
;function Fg(a){a=Object.assign({},a);delete a.Authorization;var b=Yc();if(b){var c=new qd;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ha(b);void 0===c&&(c=0);if(!oc){oc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));nc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===oc[k]&&(oc[k]=h)}}}c=nc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
function Gg(a){a=Fg(a);var b=new qd;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function Hg(){var a=new ne;(a=a.isAvailable()?new te(a,"yt.innertube"):null)||(a=new oe("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new je(a):null;this.g=document.domain||window.location.hostname}
Hg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Fd(b))}catch(f){return}else e=escape(b);De(a,e,c,this.g)};
Hg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=uc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Hg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;uc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ig;function Jg(){Ig||(Ig=new Hg);return Ig}
function Kg(a,b,c,d){if(d)return null;d=Jg().get("nextId",!0)||1;var e=Jg().get("requests",!0)||{};e[d]={method:a,request:b,authState:Fg(c),requestTime:Math.round(W())};Jg().set("nextId",d+1,86400,!0);Jg().set("requests",e,86400,!0);return d}
function Lg(a){var b=Jg().get("requests",!0)||{};delete b[a];Jg().set("requests",b,86400,!0)}
function Mg(a){var b=Jg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Fg(Eg(!1));hb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),Yf(a,d.method,e,{}));delete b[c]}}Jg().set("requests",b,86400,!0)}}
;function Ng(){}
;var Og=lc||mc;function Pg(a){var b=Hb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function Qg(a){if(!a)throw Error();throw a;}
function Rg(a){return a}
function X(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
X.all=function(a){return new X(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={L:0};f.L<a.length;f={L:f.L},++f.L)Sg(X.resolve(a[f.L]).then(function(g){return function(h){d[g.L]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
X.resolve=function(a){return new X(function(b,c){a instanceof X?a.then(b,c):b(a)})};
X.reject=function(a){return new X(function(b,c){c(a)})};
X.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Rg,e=null!==b&&void 0!==b?b:Qg;return new X(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Tg(c,c,d,f,g)}),c.onRejected.push(function(){Ug(c,c,e,f,g)})):"FULFILLED"===c.state.status?Tg(c,c,d,f,g):"REJECTED"===c.state.status&&Ug(c,c,e,f,g)})};
function Sg(a,b){a.then(void 0,b)}
function Tg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof X?Vg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ug(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof X?Vg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Vg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof X?Vg(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Wg(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Wg.prototype)}
v(Wg,Error);function Xg(){var a=Error.call(this,"IndexedDB is not supported.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Xg.prototype)}
v(Xg,Error);function Yg(){var a=Error.call(this,"The current transaction exceeded its quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Yg.prototype)}
v(Yg,Error);function Zg(){var a=Error.call(this,"The current transaction may have failed because of exceeding quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Zg.prototype)}
v(Zg,Error);function $g(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
function ah(a,b){return new X(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function bh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function ch(a){return new O(function(b,c){bh(a,b,c)})}
function dh(a){return new X(function(b,c){bh(a,b,c)})}
;function eh(a,b){this.f=a;this.options=b}
n=eh.prototype;n.add=function(a,b,c){return fh(this,[a],"readwrite",function(d){return gh(d,a).add(b,c)})};
n.clear=function(a){return fh(this,[a],"readwrite",function(b){return gh(b,a).clear()})};
n.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return fh(this,[a],"readonly",function(c){return gh(c,a).count(b)})};
function hh(a,b,c){a=a.f.createObjectStore(b,c);return new ih(a)}
n["delete"]=function(a,b){return fh(this,[a],"readwrite",function(c){return gh(c,a)["delete"](b)})};
n.get=function(a,b){return fh(this,[a],"readwrite",function(c){return gh(c,a).get(b)})};
function jh(a,b){return fh(a,["databases"],"readwrite",function(c){return kh(gh(c,"databases"),b,void 0)})}
function fh(a,b,c,d){c=void 0===c?"readonly":c;return new O(function(e,f){var g=a.f.transaction(b,c),h=new lh(g,b);Sg(d(h).then(function(k){Td(mh(h).then(function(){e(k)}),function(l){f(l)})}),function(k){f(k)})})}
function ih(a){this.f=a}
n=ih.prototype;n.add=function(a,b){var c=b?this.f.add(a,b):this.f.add(a);return dh(c)};
n.clear=function(){return dh(this.f.clear()).then(function(){})};
n.count=function(a){a=a?this.f.count(a):this.f.count();return dh(a)};
n["delete"]=function(a){return dh(this.f["delete"](a))};
n.get=function(a){return dh(this.f.get(a))};
n.index=function(a){return new nh(this.f.index(a))};
n.getName=function(){return this.f.name};
function kh(a,b,c){a=c?a.f.put(b,c):a.f.put(b);return dh(a)}
function lh(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new O(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;e?("QuotaExceededError"===e.name?Ae(new Yg):"UnknownError"===e.name&&Ae(new Zg),d(e)):d(new Wg)})})}
lh.prototype.abort=function(){this.f.abort();this.aborted=!0};
function mh(a){var b=a.f;b.commit&&!a.aborted&&b.commit();return a.done}
function gh(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new ih(c),a.g.set(c,d));return d}
function nh(a){this.f=a}
nh.prototype.count=function(a){a=a?this.f.count(a):this.f.count();return dh(a)};
nh.prototype.get=function(a){return dh(this.f.get(a))};
function oh(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ph(a).then(function(d){return ah(d,c)})}
function qh(a,b){this.request=a;this.f=b}
function ph(a){return dh(a).then(function(b){return null===b?null:new qh(a,b)})}
qh.prototype["delete"]=function(){return dh(this.f["delete"]()).then(function(){})};
qh.prototype.getValue=function(){return this.f.value};
qh.prototype.update=function(a){return dh(this.f.update(a))};function rh(a,b,c){function d(){p||(p=new eh(f.result,{closed:m}));return p}
var e=lh;var f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var g=c.blocked,h=c.blocking,k=c.f,l=c.upgrade,m=c.closed,p;l&&f.addEventListener("upgradeneeded",function(q){if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var t=d(),z=new e(f.transaction);l(t,q.oldVersion,q.newVersion,z)});
g&&f.addEventListener("blocked",function(){g()});
return ch(f).then(function(q){h&&q.addEventListener("versionchange",function(){h(d())});
k&&q.addEventListener("close",function(){k()});
return d()})}
function sh(a,b,c){c=void 0===c?{}:c;return rh(a,b,c)}
;var th,uh,vh=["getAll","getAllKeys","getKey","openKeyCursor"],wh=["getAll","getAllKeys","getKey","openKeyCursor"];
function xh(){return L(this,function b(){var c;return x(b,function(d){switch(d.f){case 1:var e;if(e=Og)e=/WebKit\/([0-9]+)/.exec(Hb),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Hb),e=!(e&&602<=parseInt(e[1],10)));if(e&&!T("ytidb_allow_on_ios_safari_v8_and_v9"))return d["return"](!1);try{if(!self.indexedDB)return d["return"](!1)}catch(f){return d["return"](!1)}d.l=2;d.j=3;return w(d,sh("yt-idb-test-do-not-use"),5);case 5:c=d.g;case 3:d.u=[d.h];d.l=0;d.j=0;if(c)try{c.close()}catch(f){}e=
d.u.splice(0)[0];(e=d.h=d.h||e)?e.ra?d.f=d.l||d.j:void 0!=e.J&&d.j<e.J?(d.f=e.J,d.h=null):d.f=d.j:d.f=4;break;case 2:return d.l=0,d.h=null,d["return"](!1);case 4:return d["return"](!0)}})})}
function yh(){return void 0!==th?Qd(th):new O(function(a){xh().then(function(b){th=b;a(b)})})}
function zh(){return void 0!==uh?Qd(uh):yh().then(function(a){if(!a)return!1;var b=u(vh);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(wh);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return uh=a})}
;var Ah;function Bh(){function a(b){b.close();Ah=void 0}
Ah||(Ah=Td(sh("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&hh(b,"databases",{keyPath:"actualName"})}}),function(b){return $g(b)?sh("YtIdbMeta",void 0,{blocking:a}):Rd(b)}));
return Ah}
function Ch(a){return Bh().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return jh(b,a)})})}
function Dh(a){return Bh().then(function(b){return b["delete"]("databases",a)})}
;function Eh(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return Rd(c)}return Td(Ch(b).then(function(){return a(b)}),function(c){return Td(Dh(b.actualName),function(){}).then(function(){return Rd(c)})})}
function Fh(){return yh().then(function(a){if(!a)throw new Xg;})}
function Gh(a,b){b=void 0===b?{}:b;return Fh().then(function(){return Eh(function(c){return sh(c.actualName,a,b)})})}
;function Hh(){X.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(Hh,X);Hh.reject=X.reject;Hh.resolve=X.resolve;Hh.all=X.all;var Ih;function Jh(){return L(this,function b(){return x(b,function(c){if(!Ih)try{Ih=Gh(1,{upgrade:function(d,e){1>e&&(hh(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),hh(d,"sapisid"))}})}catch(d){if(!$g(d))return S(d),c["return"](Promise.reject(d));
Ih=Gh()}return c["return"](Ih)})})}
function Kh(a){return L(this,function c(){var d,e,f;return x(c,function(g){if(1==g.f)return w(g,Lh(),2);if(3!=g.f)return d=g.g,w(g,Jh(),3);e=g.g;f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:d});return g["return"](e.add("LogsRequestsStore",f))})})}
function Mh(){return L(this,function b(){var c,d,e,f,g,h;return x(b,function(k){switch(k.f){case 1:return w(k,Lh(),2);case 2:return c=k.g,d=["NEW",c,0],e=["NEW",c,W()],f=IDBKeyRange.bound(d,e),w(k,Jh(),3);case 3:return g=k.g,h=void 0,w(k,fh(g,["LogsRequestsStore"],"readwrite",function(l){return oh(gh(l,"LogsRequestsStore").index("newRequest"),{query:f,direction:"prev"},function(m){m.getValue()&&(h=m.getValue(),h.status="QUEUED",m.update(h))})}),4);
case 4:return k["return"](h)}})})}
function Nh(a){return L(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Jh(),2);d=e.g;return e["return"](fh(d,["LogsRequestsStore"],"readwrite",function(f){var g=gh(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",kh(g,h).then(function(){return h})})}))})})}
function Oh(a){return L(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Jh(),2);d=e.g;return e["return"](fh(d,["LogsRequestsStore"],"readwrite",function(f){var g=gh(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,kh(g,h).then(function(){return h})):Hh.resolve(void 0)})}))})})}
function Ph(a){return L(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Jh(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function Lh(){return L(this,function b(){var c;return x(b,function(d){if(1==d.f){Ng.f||(Ng.f=new Ng);var e={};var f=Yc([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=R("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in ve||(e["X-Origin"]=window.location.origin),T("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in ve&&(e["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));e=Qd(e);return w(d,e,2)}c=d.g;return d["return"](Gg(c))})})}
;var Qh=Fe("network_polling_interval",3E4);function Rh(){this.i=0;this.f=window.navigator.onLine;Sh(this);Th(this)}
function Uh(){Rh.f||(Rh.f=new Rh);return Rh.f}
function Vh(a){var b=Wh,c=Xh;(new O(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)});
Yh(a)}
function Th(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function Sh(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function Yh(a){a.i||(Zh(a),window.navigator.onLine&&a.g&&a.g())}
function Zh(a){a.i=ef(function(){window.navigator.onLine?(!1===a.f&&S(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&S(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());Zh(a)},Qh)}
;var $h=Fe("networkless_throttle_timeout")||100,ai=Fe("networkless_retry_attempts")||1,bi=0;function ci(a,b){b=void 0===b?{}:b;di().then(function(c){var d=Uh().f;if(!c||T("networkless_bypass_write")||d&&T("vss_networkless_bypass_write"))wg(a,b);else{var e={url:a,options:b,timestamp:W(),status:"NEW",sendCount:0};Kh(e).then(function(f){e.id=f;f=Uh();f.f&&!T("networkless_always_offline")?ei(e):Vh(f)})["catch"](function(f){ei(e);
S(f)})}})}
function Wh(){var a=this;bi||(bi=gf(function(){return L(a,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Mh(),2);if(3!=e.f)return d=e.g,d?w(e,ei(d),3):(Xh(),e["return"]());bi=0;Wh();e.f=0})})},$h))}
function Xh(){jf(bi);bi=0}
function ei(a){return L(this,function c(){var d;return x(c,function(e){switch(e.f){case 1:if(!a.id){e.J(2);break}return w(e,Nh(a.id),3);case 3:(d=e.g)?a=d:Ae(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=W()-f)){e.J(4);break}Ae(Error("Networkless Logging: Stored logs request expired age limit"));if(!a.id){e.J(5);break}return w(e,Ph(a.id),5);case 5:return e["return"]();case 4:f=a=fi(a);var g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||
void 0===g?void 0:g.C)||void 0===h?0:h.requestTimeMs)f.options.C.requestTimeMs=Math.round(W());(a=f)&&wg(a.url,a.options);e.f=0}})})}
function fi(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return L(b,function h(){return x(h,function(k){if(1==k.f)return a&&a.id?a.sendCount<ai?w(k,Oh(a.id),6):w(k,Ph(a.id),2):k.J(2);2!=k.f&&Vh(Uh());c(e,f);k.f=0})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return L(b,function h(){return x(h,function(k){if(1==k.f)return a&&a.id?w(k,Ph(a.id),2):k.J(2);d(e,f);k.f=0})})};
return a}
function di(){return L(this,function b(){return x(b,function(c){return T("networkless_logging")?(2===Fe("networkless_ytidb_version")&&zh().then(function(d){return d}),c["return"](yh())):c["return"](!1)})})}
;function gi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(gi,Error);function hi(a){var b=this;this.f=null;a?this.f=a:Dg()&&(this.f=Vf());ef(function(){Mg(b)},5E3)}
hi.prototype.isReady=function(){!this.f&&Dg()&&(this.f=Vf());return!!this.f};
function Yf(a,b,c,d){!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ae(new gi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new gi("innertube xhrclient not ready",b,c,d);S(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",C:c,xa:"JSON",U:function(){d.U()},
wa:d.U,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
va:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
Bb:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.Pa)&&(g=e);var h=a.f.Ra||!1,k=Eg(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.Qa&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=gg(""+g+e,l||{},!0);di().then(function(p){if(d.retry&&T("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(T("networkless_gel")&&!p||!T("networkless_gel"))var q=Kg(b,
c,k,h);if(q){var t=f.onSuccess,z=f.va;f.onSuccess=function(E,V){Lg(q);t(E,V)};
c.va=function(E,V){Lg(q);z(E,V)}}}try{T("use_fetch_for_op_xhr")?tg(m,f):T("networkless_gel")&&d.retry?(f.method="POST",ci(m,f)):(f.method="POST",f.C||(f.C={}),wg(m,f))}catch(E){if("InvalidAccessError"==E.name)q&&(Lg(q),q=0),Ae(Error("An extension is blocking network request."));
else throw E;}q&&ef(function(){Mg(a)},5E3)})}
;function ii(a,b,c){c=void 0===c?{}:c;var d=hi;R("ytLoggingEventsDefaultDisabled",!1)&&hi==hi&&(d=null);$f(a,b,d,c)}
;var ji=[{ta:function(a){return"Cannot read property '"+a.key+"'"},
na:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ta:function(a){return"Cannot call '"+a.key+"'"},
na:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];function ki(){this.f=[];this.g=[]}
var li;var mi=new P;var ni=new Set,oi=0,pi=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function qi(a){ri(a,"WARNING")}
function ri(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var g=void 0===g?!1:g;if(a&&(T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),
(window&&window.yterr||g)&&!(5<=oi)&&0!==a.sampleWeight)){var h=pc(a);g=h.message||"Unknown Error";d=h.name||"UnknownError";e=h.lineNumber||"Not available";f=h.fileName||"Not available";h=h.stack||a.f||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],p="params."+l;k+=p.length;if(m)if(Array.isArray(m))for(var q=c,t=0;t<m.length&&!(m[t]&&(k+=si(t,m[t],p,q),500<k));t++);else if("object"===typeof m)for(q in q=void 0,t=c,m){if(m[q]&&
(k+=si(q,m[q],p,t),500<k))break}else c[p]=String(JSON.stringify(m)).substring(0,500),k+=c[p].length;else c[p]=String(JSON.stringify(m)).substring(0,500),k+=c[p].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in p=0,m){if(m[l]&&(k="params."+l,q=String(JSON.stringify(m[l])).substr(0,500),c[k]=q,p+=k.length+q.length,500<p))break}else c.params=String(JSON.stringify(m)).substr(0,500);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=
navigator.vendor);c={message:g,name:d,lineNumber:e,fileName:f,stack:h,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=u(ji);for(g=a.next();!g.done;g=a.next())if(g=g.value,g.na[c.name])for(e=u(g.na[c.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=c.message.match(f.regexp)){c.params["error.original"]=d[0];e=f.groups;f={};for(h=0;h<e.length;h++)f[e[h]]=d[h+1],c.params["error."+e[h]]=d[h+1];c.message=g.ta(f);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);
if(!(ni.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){mi.P("handleError",c);if(T("kevlar_gel_error_routing")){a=b;a:{g=u(pi);for(d=g.next();!d.done;d=g.next())if(Pg(d.value.toLowerCase())){g=!0;break a}g=!1}if(!g){g={stackTrace:c.stack};c.fileName&&(g.filename=c.fileName);d=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==d.length&&(1!==d.length||isNaN(Number(d[0]))?2!==d.length||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(g.lineNumber=Number(d[0]),
g.columnNumber=Number(d[1])):g.lineNumber=Number(d[0]));d=c.message;e=c.name;li||(li=new ki);f=li;a:{h=u(f.g);for(l=h.next();!l.done;l=h.next())if(l=l.value,c.message&&c.message.match(l.f)){f=l.weight;break a}f=u(f.f);for(h=f.next();!h.done;h=f.next())if(h=h.value,h.Da(c)){f=h.weight;break a}f=1}d={level:"ERROR_LEVEL_UNKNOWN",message:d,errorClassName:e,sampleWeight:f};"ERROR"===a?d.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(d.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:g};g={pageUrl:window.location.href,
kvPairs:[]};if(e=c.params)for(f=u(Object.keys(e)),h=f.next();!h.done;h=f.next())h=h.value,g.kvPairs.push({key:"client."+h,value:String(e[h])});e=R("SERVER_NAME",void 0);f=R("SERVER_VERSION",void 0);e&&f&&(g.kvPairs.push({key:"server.name",value:e}),g.kvPairs.push({key:"server.version",value:f}));ii("clientError",{errorMetadata:g,stackTrace:a,logMessage:d});Rf()}}a=c.params||{};b={ib:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},C:{url:R("PAGE_NAME",
window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.C){c.stack&&(b.C.stack=c.stack);g=u(Object.keys(a));for(d=g.next();!d.done;d=g.next())d=d.value,b.C["client."+d]=a[d];if(a=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(g=u(Object.keys(a)),d=g.next();!d.done;d=g.next())d=d.value,b.C[d]=a[d];a=R("SERVER_NAME",void 0);g=R("SERVER_VERSION",void 0);a&&g&&(b.C["server.name"]=a,b.C["server.version"]=g)}wg(R("ECATCHER_REPORT_HOST","")+"/error_204",
b);ni.add(c.message);oi++}}}
function si(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function ti(){this.g=!1;this.f=null}
ti.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,Xe(b,function(){g.g=!1;window.botguard?ui(g,c,d,f):(bf(b),qi(new gi("Unable to load Botguard","from "+b)))},e)):a&&(T("botguard_eval_with_script_tag")?(e=Cc(document,"SCRIPT"),e.textContent=a,e.nonce=Aa(),document.head.appendChild(e),document.head.removeChild(e)):eval(a),window.botguard?ui(this,c,d,f):qi(Error("Unable to load Botguard from JS")))};
function ui(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:Ea)}catch(e){qi(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){qi(e)}c&&c(b)}}
ti.prototype.dispose=function(){this.f=null};var vi=new ti;function wi(){return!!vi.f}
function xi(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return vi.f?vi.f.invoke(void 0,void 0,a):null}
;var yi=D().toString();
function zi(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=D();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(yi)for(a=1,b=0;b<yi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^yi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Ai=y.ytLoggingDocDocumentNonce_||zi();A("ytLoggingDocDocumentNonce_",Ai,void 0);var Bi=1;function Ci(a){this.f=a}
Ci.prototype.getAsJson=function(){var a={};void 0!==this.f.trackingParams?a.trackingParams=this.f.trackingParams:(a.veType=this.f.veType,void 0!==this.f.veCounter&&(a.veCounter=this.f.veCounter),void 0!==this.f.elementIndex&&(a.elementIndex=this.f.elementIndex));void 0!==this.f.dataElement&&(a.dataElement=this.f.dataElement.getAsJson());void 0!==this.f.youtubeData&&(a.youtubeData=this.f.youtubeData);return a};
Ci.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Ci.prototype.isClientVe=function(){return!this.f.trackingParams&&!!this.f.veType};function Di(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Ei(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Fi(a){return R(Ei(void 0===a?0:a),void 0)}
A("yt_logging_screen.getRootVeType",Fi,void 0);function Gi(){var a=Fi(0),b;a?b=new Ci({veType:a,youtubeData:void 0}):b=null;return b}
function Hi(){var a=R("csn-to-ctt-auth-info");a||(a={},Q("csn-to-ctt-auth-info",a));return a}
function Ii(a){a=void 0===a?0:a;var b=R(Di(a));if(!b&&!R("USE_CSN_FALLBACK",!0))return null;b||0!=a||(T("kevlar_client_side_screens")||T("c3_client_side_screens")?b="UNDEFINED_CSN":b=R("EVENT_ID"));return b?b:null}
A("yt_logging_screen.getCurrentCsn",Ii,void 0);function Ji(a,b,c){var d=Hi();(c=Ii(c))&&delete d[c];b&&(d[a]=b)}
function Ki(a){return Hi()[a]}
A("yt_logging_screen.getCttAuthInfo",Ki,void 0);function Li(a,b,c,d){c=void 0===c?0:c;if(a!==R(Di(c))||b!==R(Ei(c)))if(Ji(a,d,c),Q(Di(c),a),Q(Ei(c),b),0==c||T("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&$f("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ai,clientScreenNonce:a},hi)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
A("yt_logging_screen.setCurrentScreen",Li,void 0);function Mi(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=K(window.location.href);g&&f.push(g);g=K(d);if(0<=Ta(f,g)||!g&&0==d.lastIndexOf("/",0))if(T("autoescape_tempdata_url")&&(f=document.createElement("a"),Nb(f,d),d=f.href),d){g=d.match(Rb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Ii()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Qb(d).toString(36),e=e?Ub(e):"",De(b,e,k||5))}else k=b,e="ST-"+Qb(d).toString(36),k=k?Ub(k):"",De(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=Wb(a,l)+m;a=a instanceof I?a:Fb(a);c.href=Bb(a)}return!0}
;function Ni(a,b){this.version=a;this.args=b}
;function Oi(a,b){this.topic=a;this.f=b}
Oi.prototype.toString=function(){return this.topic};var Pi=B("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.T;P.prototype.publish=P.prototype.P;P.prototype.clear=P.prototype.clear;A("ytPubsub2Pubsub2Instance",Pi,void 0);var Qi=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",Qi,void 0);var Ri=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",Ri,void 0);var Si=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",Si,void 0);
A("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Ti(a,b){var c=Ui();c&&c.publish.call(c,a.toString(),a,b)}
function Vi(a){var b=Wi,c=Ui();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Qi[d])try{if(f&&b instanceof Oi&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.K){var l=new h;h.K=l.version}var m=h.K}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
$a(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){S(p)}},Si[b.toString()]?B("yt.scheduler.instance")?gf(g):U(g,0):g())});
Qi[d]=!0;Ri[b.toString()]||(Ri[b.toString()]=[]);Ri[b.toString()].push(d);return d}
function Xi(){var a=Yi,b=Vi(function(c){a.apply(void 0,arguments);Zi(b)});
return b}
function Zi(a){var b=Ui();b&&("number"===typeof a&&(a=[a]),H(a,function(c){b.unsubscribeByKey(c);delete Qi[c]}))}
function Ui(){return B("ytPubsub2Pubsub2Instance")}
;function $i(a){Ni.call(this,1,arguments);this.csn=a}
v($i,Ni);var Wi=new Oi("screen-created",$i),aj=[],bj=0;function cj(a,b,c){var d=T("use_default_events_client")?void 0:hi;b={csn:a,parentVe:b.getAsJson(),childVes:Va(c,function(f){return f.getAsJson()})};
c=u(c);for(var e=c.next();!e.done;e=c.next())e=e.value.getAsJson(),(fb(e)||!e.trackingParams&&!e.veType)&&qi(Error("Child VE logged with no data"));c={ga:Ki(a),V:a};"UNDEFINED_CSN"==a?dj("visualElementAttached",b,c):d?$f("visualElementAttached",b,d,c):ii("visualElementAttached",b,c)}
function dj(a,b,c){aj.push({payloadName:a,payload:b,options:c});bj||(bj=Xi())}
function Yi(a){if(aj){for(var b=u(aj),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,$f(c.payloadName,c.payload,null,c.options));aj.length=0}bj=0}
;function ej(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ib(b);this.assets=a.assets||{};this.attrs=a.attrs||ib(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ej.prototype.clone=function(){var a=new ej,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ga(c)?a[b]=ib(c):a[b]=c}return a};function fj(){N.call(this);this.f=[]}
v(fj,N);fj.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.Da)}N.prototype.o.call(this)};var gj=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function hj(a){a=a||"";if(window.spf){var b=a.match(gj);spf.style.load(a,b?b[1]:"",void 0)}else ij(a)}
function ij(a){var b=jj(a),c=document.getElementById(b),d=c&&Ie(c,"loaded");d||c&&!d||(c=kj(a,b,function(){Ie(c,"loaded")||(Ge(c),Se(b),U(Oa(Te,b),0))}))}
function kj(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Qc(a);d.rel="stylesheet";d.href=qb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function jj(a){var b=Cc(document,"A");Nb(b,new I(a,Ab));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Qb(a)}
;function lj(a,b,c,d){N.call(this);var e=this;this.m=this.aa=a;this.G=b;this.u=!1;this.api={};this.Y=this.F=null;this.H=new P;Kc(this,Oa(Lc,this.H));this.j={};this.N=this.Z=this.i=this.fa=this.f=null;this.M=!1;this.l=this.D=null;this.ba={};this.Aa=["onReady"];this.ea=null;this.oa=NaN;this.W={};this.h=d;mj(this);this.ca("WATCH_LATER_VIDEO_ADDED",this.Ta.bind(this));this.ca("WATCH_LATER_VIDEO_REMOVED",this.Ua.bind(this));this.ca("onAdAnnounce",this.Ca.bind(this));this.Ba=new fj(this);Kc(this,Oa(Lc,this.Ba));
this.X=0;c?this.X=U(function(){e.loadNewVideoConfig(c)},0):d&&(nj(this),oj(this))}
v(lj,N);n=lj.prototype;n.getId=function(){return this.G};
n.loadNewVideoConfig=function(a){if(!this.g){this.X&&(Ke(this.X),this.X=0);a instanceof ej||(a=new ej(a));this.fa=a;this.f=a.clone();nj(this);this.Z||(this.Z=pj(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=Sc(Number(a)||a);if(a=this.f.attrs.height)this.m.style.height=Sc(Number(a)||a);oj(this);this.u&&qj(this)}};
function nj(a){var b;a.h?b=a.h.rootElementId:b=a.f.attrs.id;a.i=b||a.i;"video-player"==a.i&&(a.i=a.G,a.h?a.h.rootElementId=a.G:a.f.attrs.id=a.G);a.m.id==a.i&&(a.i+="-player",a.h?a.h.rootElementId=a.i:a.f.attrs.id=a.i)}
n.Ha=function(){return this.fa};
function qj(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function rj(a){var b=!0,c=sj(a);c&&a.f&&(a=tj(a),b=Ie(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function oj(a){if(!a.g&&!a.M){var b=rj(a);if(b&&"html5"==(sj(a)?"html5":null))a.N="html5",a.u||uj(a);else if(vj(a),a.N="html5",b&&a.l)a.aa.appendChild(a.l),uj(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.D=function(){c=!0;var d=wj(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.aa,e,a.h);uj(a)};
a.M=!0;b?a.D():(Xe(tj(a),a.D),(b=a.h?a.h.cssUrl:a.f.assets.css)&&hj(b),xj(a)&&!c&&A("yt.player.Application.create",null,void 0))}}}
function sj(a){var b=yc(a.i);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.i));return b}
function uj(a){if(!a.g){var b=sj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.M=!1,!wj(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||yj(a)):a.oa=U(function(){uj(a)},50)}}
function yj(a){mj(a);a.u=!0;var b=sj(a);b.addEventListener&&(a.F=zj(a,b,"addEventListener"));b.removeEventListener&&(a.Y=zj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=zj(a,b,e))}for(var f in a.j)a.F(f,a.j[f]);qj(a);a.Z&&a.Z(a.api);a.H.P("onReady",a.api)}
function zj(a,b,c){var d=b[c];return function(){try{return a.ea=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ea=e,Ae(e))}}}
function mj(a){a.u=!1;if(a.Y)for(var b in a.j)a.Y(b,a.j[b]);for(var c in a.W)Ke(parseInt(c,10));a.W={};a.F=null;a.Y=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ca.bind(a);a.api.removeEventListener=a.Ya.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ia.bind(a);a.api.getPlayerType=a.Ja.bind(a);a.api.getCurrentVideoConfig=a.Ha.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Sa.bind(a)}
n.Sa=function(){return this.u};
n.ca=function(a,b){var c=this,d=pj(this,b);if(d){if(!(0<=Ta(this.Aa,a)||this.j[a])){var e=Aj(this,a);this.F&&this.F(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.u&&U(function(){d(c.api)},0)}};
n.Ya=function(a,b){if(!this.g){var c=pj(this,b);c&&de(this.H,a,c)}};
function pj(a,b){var c=b;if("string"==typeof b){if(a.ba[b])return a.ba[b];c=function(){var d=B(b);d&&d.apply(y,arguments)};
a.ba[b]=c}return c?c:null}
function Aj(a,b){var c="ytPlayer"+b+a.G;a.j[b]=c;y[c]=function(d){var e=U(function(){if(!a.g){a.H.P(b,d);var f=a.W,g=String(e);g in f&&delete f[g]}},0);
gb(a.W,String(e))};
return c}
n.Ca=function(a){Se("a11y-announce",a)};
n.Ta=function(a){Se("WATCH_LATER_VIDEO_ADDED",a)};
n.Ua=function(a){Se("WATCH_LATER_VIDEO_REMOVED",a)};
n.Ja=function(){return this.N||(sj(this)?"html5":null)};
n.Ia=function(){return this.ea};
function vj(a){a.cancel();mj(a);a.N=null;a.f&&(a.f.loaded=!1);var b=sj(a);b&&(rj(a)||!xj(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.aa;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.D){var a=tj(this);cf(a,this.D)}Ke(this.oa);this.M=!1};
n.o=function(){vj(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){S(b)}this.ba=null;for(var a in this.j)y[this.j[a]]=null;this.fa=this.f=this.api=null;delete this.aa;delete this.m;N.prototype.o.call(this)};
function xj(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function tj(a){return a.h?a.h.jsUrl:a.f.assets.js}
function wj(a,b){if(a.h)var c=a.h.serializedExperimentFlags;else a.f&&a.f.args&&(c=a.f.args.fflags);return"true"==dg(c||"")[b]}
;var Bj={},Cj="player_uid_"+(1E9*Math.random()>>>0);
function Dj(a,b,c){var d="player";c=void 0===c?!0:c;var e;"string"===typeof d?e=yc(d):e=d;d=e;e=Cj+"_"+Ja(d);var f=Bj[e];if(f&&c)return(b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true"))?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new lj(d,e,a,b);Bj[e]=f;Se("player-added",f.api);Kc(f,Oa(Ej,f));return f.api}
function Ej(a){delete Bj[a.getId()]}
;function Fj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Gj(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Hj(a)}
function Hj(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Ij(a,b,c,d){if(Ia(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Jj(a){a=void 0===a?!1:a;N.call(this);this.f=new P(a);Kc(this,Oa(Lc,this.f))}
F(Jj,N);Jj.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
Jj.prototype.j=function(a,b){this.g||this.f.P.apply(this.f,arguments)};function Kj(a,b,c){Jj.call(this);this.h=a;this.i=b;this.l=c}
v(Kj,Jj);function Lj(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(Fd(a),d.i))}}
Kj.prototype.o=function(){this.i=this.h=null;Jj.prototype.o.call(this)};function Mj(a){N.call(this);this.f=a;this.f.subscribe("command",this.ya,this);this.h={};this.j=!1}
v(Mj,N);n=Mj.prototype;n.start=function(){this.j||this.g||(this.j=!0,Lj(this.f,"RECEIVING"))};
n.ya=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=C(this.ab,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&Nj(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=Oj(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=Pj(a,c))&&this.j&&!this.g&&Lj(this.f,a,c))}}};
n.ab=function(a,b){this.j&&!this.g&&Lj(this.f,a,this.ia(a,b))};
n.ia=function(a,b){if(null!=b)return{value:b}};
function Nj(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
n.o=function(){var a=this.f;a.g||de(a.f,"command",this.ya,this);this.f=null;for(var b in this.h)Nj(this,b);N.prototype.o.call(this)};function Qj(a,b){Mj.call(this,b);this.i=a;this.start()}
v(Qj,Mj);Qj.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
Qj.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function Oj(a,b){switch(a){case "loadVideoById":return b=Hj(b),[b];case "cueVideoById":return b=Hj(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Ij(b),[b];case "cuePlaylist":return b=Ij(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Pj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Qj.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Mj.prototype.ia.call(this,a,b)};
Qj.prototype.o=function(){Mj.prototype.o.call(this);delete this.i};function Rj(a,b,c){N.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.u="*";this.i=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.u=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Ta(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
v(Rj,N);Rj.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.u)}catch(e){Ae(e)}}};
Rj.prototype.o=function(){window.removeEventListener("message",this.m);N.prototype.o.call(this)};function Sj(){var a=this.g=new Rj(!!R("WIDGET_ID_ENFORCE")),b=C(this.Xa,this);a.j=b;a.l=null;this.g.channel="widget";if(a=R("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
n=Sj.prototype;n.Xa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,Tj(this,a)),this.j[a]=!0)):this.ua(a,b,c)};
n.ua=function(){};
function Tj(a,b){return C(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Ga=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");H(this.i,this.za,this);this.i=[]};
n.ja=function(){return null};
function Uj(a,b){a.sendMessage("infoDelivery",b)}
n.za=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.za({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.g=null};function Vj(a){Sj.call(this);this.f=a;this.h=[];this.addEventListener("onReady",C(this.Va,this));this.addEventListener("onVideoProgress",C(this.fb,this));this.addEventListener("onVolumeChange",C(this.gb,this));this.addEventListener("onApiChange",C(this.Za,this));this.addEventListener("onPlaybackQualityChange",C(this.bb,this));this.addEventListener("onPlaybackRateChange",C(this.cb,this));this.addEventListener("onStateChange",C(this.eb,this));this.addEventListener("onWebglSettingsChanged",C(this.hb,
this))}
v(Vj,Sj);n=Vj.prototype;n.ua=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Fj(a)){var d=b;if(Ia(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Hj.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Gj.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Ij.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);Fj(a)&&Uj(this,this.ja())}};
n.Va=function(){var a=C(this.Ga,this);this.g.f=a};
n.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.ja=function(){if(!this.f)return null;var a=this.f.getApiInterface();Za(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=D()/1E3;return b};
n.eb=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Uj(this,a)};
n.bb=function(a){Uj(this,{playbackQuality:a})};
n.cb=function(a){Uj(this,{playbackRate:a})};
n.Za=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.gb=function(){Uj(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.fb=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Uj(this,a)};
n.hb=function(){var a={sphericalProperties:this.f.getSphericalProperties()};Uj(this,a)};
n.dispose=function(){Sj.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function Wj(a,b,c){N.call(this);this.f=a;this.i=c;this.j=vf(window,"message",C(this.l,this));this.h=new Kj(this,a,b);Kc(this,Oa(Lc,this.h))}
v(Wj,N);Wj.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
Wj.prototype.o=function(){wf(this.j);this.f=null;N.prototype.o.call(this)};function Xj(){var a=ib(Yj),b;return Td(new O(function(c,d){a.onSuccess=function(e){ng(e)?c(e):d(new Zj("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Zj("Unknown request error","net.unknown",e))};
a.U=function(e){d(new Zj("Request timed out","net.timeout",e))};
b=wg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Ud&&b.abort();
return Rd(c)})}
function Zj(a,b,c){G.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Zj,G);function ak(){this.g=0;this.f=null}
ak.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),Ld(a)?a:bk(a)):2===this.g&&b?(a=b.call(c,this.f),Ld(a)?a:ck(a)):this};
ak.prototype.getValue=function(){return this.f};
ak.prototype.$goog_Thenable=!0;function ck(a){var b=new ak;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function bk(a){var b=new ak;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function dk(a){G.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ek;this.isTimeout=a instanceof Zj&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ud}
v(dk,G);dk.prototype.name="BiscottiError";function ek(){G.call(this,"Biscotti ID is missing from server")}
v(ek,G);ek.prototype.name="BiscottiMissingError";var Yj={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},fk=null;
function bg(){if(T("disable_biscotti_fetch_on_html5_clients"))return Rd(Error("Fetching biscotti ID is disabled."));if(T("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!uc.get("CONSENT","").startsWith("YES+"))return Rd(Error("User has not consented - not fetching biscotti id."));if("1"===cb(we(),"args","privembed"))return Rd(Error("Biscotti ID is not available in private embed mode"));fk||(fk=Td(Xj().then(gk),function(a){return hk(2,a)}));
return fk}
function gk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ek;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ek;a=a.id;cg(a);fk=bk(a);ik(18E5,2);return a}
function hk(a,b){var c=new dk(b);cg("");fk=ck(c);0<a&&ik(12E4,a-1);throw c;}
function ik(a,b){U(function(){Td(Xj().then(gk,function(c){return hk(b,c)}),Ea)},a)}
function jk(){try{var a=B("yt.ads.biscotti.getId_");return a?a():bg()}catch(b){return Rd(b)}}
;function kk(a){if("1"!==cb(we(),"args","privembed")){a&&ag();try{jk().then(function(){},function(){}),U(kk,18E5)}catch(b){S(b)}}}
;var Y=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function lk(){this.f=R("ALT_PREF_COOKIE_NAME","PREF");var a=uc.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
n=lk.prototype;n.get=function(a,b){mk(a);nk(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){mk(a);nk(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
n.remove=function(a){mk(a);nk(a);delete Y[a]};
n.save=function(){De(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in Y)delete Y[a]};
n.dump=function(){var a=[],b;for(b in Y)a.push(b+"="+encodeURIComponent(String(Y[b])));return a.join("&")};
function nk(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function mk(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function ok(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Fa(lk);function pk(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!qk(a)||c.some(function(e){return!qk(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())rk(a,d.value);return a}
function rk(a,b){for(var c in b)if(qk(b[c])){if(c in a&&!qk(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});rk(a[c],b[c])}else if(sk(b[c])){if(c in a&&!sk(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);tk(a[c],b[c])}else a[c]=b[c];return a}
function tk(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,qk(d)?a.push(rk({},d)):sk(d)?a.push(tk([],d)):a.push(d);return a}
function qk(a){return"object"===typeof a&&!Array.isArray(a)}
function sk(a){return"object"===typeof a&&Array.isArray(a)}
;var uk={},vk=0;
function wk(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Pg("cobalt")){if(a){a instanceof I||(a="object"==typeof a&&a.R?a.O():String(a),Eb.test(a)?a=new I(a,Ab):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Db))&&Cb.test(b[1])?new I(a,Ab):null));a=Bb(a||Gb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Kb)){b="object"==typeof a;var f=null;b&&a.ka&&(f=a.ha());a=Mb(sb(b&&a.R?a.O():String(a)),f)}a instanceof Kb&&a.constructor===Kb?a=a.f:(Ga(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Fd(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Bc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)xg(a,b,"POST",e,d);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)xg(a,b,"GET","",d);else{b:{try{var g=new Ra({url:a});if(g.h&&g.g||g.i){var h=Sb(a.match(Rb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(Xb);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var q=c;break d}}c+=3}q=-1}if(0>q)var t=null;else{var z=a.indexOf("&",q);if(0>z||z>l)z=l;q+=3;t=decodeURIComponent(a.substr(q,z-q).replace(/\+/g," "))}k="1"!==t}f=!k;break b}}catch(E){}f=!1}f?xk(a)?(b&&b(),f=!0):f=!1:f=!1;f||yk(a,b)}}
function xk(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function yk(a,b){var c=new Image,d=""+vk++;uk[d]=c;c.onload=c.onerror=function(){b&&uk[d]&&b();delete uk[d]};
c.src=a}
;function zk(a,b){Ni.call(this,1,arguments)}
v(zk,Ni);function Ak(a,b){Ni.call(this,1,arguments)}
v(Ak,Ni);var Bk=new Oi("aft-recorded",zk),Ck=new Oi("timing-sent",Ak);var Dk=window;function Ek(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Fk=Dk.performance||Dk.mozPerformance||Dk.msPerformance||Dk.webkitPerformance||new Ek;var Gk=!1;C(Fk.clearResourceTimings||Fk.webkitClearResourceTimings||Fk.mozClearResourceTimings||Fk.msClearResourceTimings||Fk.oClearResourceTimings||Ea,Fk);function Hk(a){var b=Ik(a);if(b.aft)return b.aft;a=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Jk(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Pa("ytcsi."+(a||"")+"data_",b));return b}
function Kk(a){a=Jk(a);a.info||(a.info={});return a.info}
function Ik(a){a=Jk(a);a.tick||(a.tick={});return a.tick}
function Lk(a){var b=Jk(a).nonce;b||(b=zi(),Jk(a).nonce=b);return b}
function Mk(a){var b=Ik(a||""),c=Hk(a);c&&!Gk&&(Ti(Bk,new zk(Math.round(c-b._start),a)),Gk=!0)}
;function Nk(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a,void 0),A("ytcsi.reference",{},void 0));return a}
function Ok(a){a=a||"";var b=B("ytcsi.reference");b||(Nk(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Nk(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Pk=y.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",Pk,void 0);function Qk(){this.f=0}
function Rk(){Qk.f||(Qk.f=new Qk);return Qk.f}
Qk.prototype.tick=function(a,b,c){Sk(this,"tick_"+a+"_"+b)||ii("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Qk.prototype.info=function(a,b){var c=Object.keys(a).join("");Sk(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,ii("latencyActionInfo",c))};
Qk.prototype.span=function(a,b){var c=Object.keys(a).join("");Sk(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,ii("latencyActionSpan",a))};
function Sk(a,b){Pk[b]=Pk[b]||{count:0};var c=Pk[b];c.count++;c.time=W();a.f||(a.f=ef(function(){var d=W(),e;for(e in Pk)Pk[e]&&6E4<d-Pk[e].time&&delete Pk[e];a&&(a.f=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new gi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||qi(c)),!0):!1}
;var Z={},Tk=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid=
"requestIds",Z.GetBrowse_rid="requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",
Z.ncnp="webInfo.nonPreloadedNodeCount",Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",
Z.ssdm="shellStartupDurationMs",Z.aq="tvInfo.appQuality",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",
Z.rcl="mwebInfo.responseContentLength",Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),Uk="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Vk={},Wk=(Vk.ccs="CANARY_STATE_",Vk.mver="MEASUREMENT_VERSION_",Vk.pis="PLAYER_INITIALIZED_STATE_",Vk.yt_pt="LATENCY_PLAYER_",Vk.pa="LATENCY_ACTION_",Vk.yt_vst="VIDEO_STREAM_TYPE_",Vk),Xk="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Yk(a){return!!R("FORCE_CSI_ON_GEL",!1)||T("csi_on_gel")||!!Jk(a).useGel}
function Zk(a){a=Jk(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function $k(a,b,c){if(null!==b)if(Kk(c)[a]=b,Yk(c)){var d=b;b=Zk(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in Tk){b=Tk[a];0<=Ta(Uk,b)&&(d=!!d);a in Wk&&"string"===typeof d&&(d=Wk[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=pk({},e)}else 0<=Ta(Xk,a)||qi(new gi("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Yk(c)&&(b=Ok(c||""),pk(b.info,f),b=Zk(c),"gelInfos"in b||(b.gelInfos={}),pk(b.gelInfos,f),c=Lk(c),Rk().info(f,c))}else Ok(c||"").info[a]=b}
function al(a,b,c){var d=Ik(c);if(T("use_first_tick")&&bl(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Fk.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Fk.mark(e))}e=b||W();d[a]=e;e=Zk(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||W();if(Yk(c)){Ok(c||"").tick[a]=b||W();e=Lk(c);if("_start"===a){var f=Rk();Sk(f,"baseline_"+e)||ii("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Rk().tick(a,e,b);Mk(c);e=!0}else e=!1;if(!e){if(!B("yt.timing."+(c||"")+"pingSent_")&&
(f=R((c||"")+"TIMING_ACTION",void 0),e=Ik(c),B("ytglobal.timing"+(c||"")+"ready_")&&f&&bl("_start")&&Hk(c)))if(Mk(c),c)cl(c);else{f=!0;var g=R("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&cl(c)}Ok(c||"").tick[a]=b||W()}return d[a]}
function bl(a,b){var c=Ik(b);return a in c}
function cl(a){if(!Yk(a)){var b=Ik(a),c=Kk(a),d=b._start,e=R("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:R((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Hk(a);var h=Ik(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Kk(a).yt_pvis&&"youtube"===e&&($k("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=W();m={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),m[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;T("debug_csi_data")&&(c=B("yt.timing.csiData"),c||(c=[],Pa("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var t=void 0===t?"":t;xk(f,t)||wk(f,void 0,void 0,void 0,t)}else wk(f);A("yt.timing."+(a||"")+"pingSent_",!0,void 0);Ti(Ck,new Ak(m.aft+(Number(g)||0),a))}}
var dl=window;dl.ytcsi&&(dl.ytcsi.info=$k,dl.ytcsi.tick=al);var el=null,fl=null,gl=null,hl={};function il(a){var b=a.id;a=a.ve_type;var c=Bi++;a=new Ci({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});hl[b]=a;b=Ii();c=Gi();b&&c&&cj(b,c,[a])}
function jl(){var a=el.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function kl(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Li(b,a),a=Gi()))for(var c in hl){var d=hl[c];d&&cj(b,a,[d])}}
function ll(a){hl[a.id]=new Ci({trackingParams:a.tracking_params})}
function ml(a){var b=Ii(),c=hl[a.id];if(b&&c){a=T("use_default_events_client")?void 0:hi;var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={ga:Ki(b),V:b};"UNDEFINED_CSN"==b?dj("visualElementGestured",c,d):a?$f("visualElementGestured",c,a,d):ii("visualElementGestured",c,d)}}
function nl(a){a=a.ids;var b=Ii();if(b)for(var c=0;c<a.length;c++){var d=hl[a[c]];if(d){var e=b,f=T("use_default_events_client")?void 0:hi;d={csn:e,ve:d.getAsJson(),eventType:1};var g={ga:Ki(e),V:e};"UNDEFINED_CSN"==e?dj("visualElementShown",d,g):f?$f("visualElementShown",d,f,g):ii("visualElementShown",d,g)}}}
;A("yt.setConfig",Q,void 0);A("yt.config.set",Q,void 0);A("yt.setMsg",Ce,void 0);A("yt.msgs.set",Ce,void 0);A("yt.logging.errors.log",ri,void 0);
A("writeEmbed",function(){var a=R("PLAYER_CONFIG",void 0);if(!a){var b=R("PLAYER_VARS",void 0);b&&(a={args:b})}kk(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");a.args.forced_experiments||(b=window.location.href,-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=fg(1<b.length?b[1]:b[0])):b={},b.forced_experiments&&(a.args.forced_experiments=b.forced_experiments));a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");
window!=window.top&&c&&c!=document.URL&&(a.args.loaderUrl=c);el=a=(c=R("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c?Dj(a,c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1):Dj(a);a.addEventListener("onScreenChanged",kl);a.addEventListener("onLogClientVeCreated",il);a.addEventListener("onLogServerVeCreated",ll);a.addEventListener("onLogVeClicked",ml);a.addEventListener("onLogVesShown",nl);a.addEventListener("onVideoDataChange",jl);c=R("POST_MESSAGE_ID","player");
R("ENABLE_JS_API")?gl=new Vj(a):R("ENABLE_POST_API")&&"string"===typeof c&&"string"===typeof b&&(fl=new Wj(window.parent,c,b),gl=new Qj(a,fl.h));mf()},void 0);
var ol=ze(function(){al("ol");var a=lk.getInstance(),b=!!((ok("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Dd(document.body,"exp-invert-logo"))if(c&&!Dd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Dd(d,"inverted-hdpi")){var e=Bd(d);Cd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Dd(document.body,"inverted-hdpi")&&Ed();b!=c&&(b="f"+(Math.floor(119/31)+1),d=ok(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete Y[b]:(c=d.toString(16),Y[b]=c.toString()),a.save())}),pl=ze(function(){var a=el;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();R("PL_ATT")&&vi.dispose();a=0;for(var b=kf.length;a<b;a++)jf(kf[a]);kf.length=0;bf("//static.doubleclick.net/instream/ad_status.js");lf=!1;Q("DCLKSTAT",0);Mc(gl,fl);if(a=el)a.removeEventListener("onScreenChanged",kl),a.removeEventListener("onLogClientVeCreated",il),a.removeEventListener("onLogServerVeCreated",ll),a.removeEventListener("onLogVeClicked",ml),a.removeEventListener("onLogVesShown",nl),a.removeEventListener("onVideoDataChange",jl),a.destroy();
hl={}});
window.addEventListener?(window.addEventListener("load",ol),window.addEventListener("unload",pl)):window.attachEvent&&(window.attachEvent("onload",ol),window.attachEvent("onunload",pl));Pa("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||wi);Pa("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||xi);Pa("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||nf);
Pa("yt.player.exports.navigate",B("yt.player.exports.navigate")||Mi);Pa("yt.util.activity.init",B("yt.util.activity.init")||Af);Pa("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Df);Pa("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Bf);}).call(this);
