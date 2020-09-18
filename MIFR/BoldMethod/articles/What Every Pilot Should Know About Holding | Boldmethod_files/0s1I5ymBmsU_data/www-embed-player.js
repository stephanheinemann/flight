(function(){var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca;
if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;da=fa.a;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca;
function t(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function u(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}}
function ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ka(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function la(){la=function(){};
ja.Symbol||(ja.Symbol=ma)}
function oa(a,b){this.f=a;ia(this,"description",{configurable:!0,writable:!0,value:b})}
oa.prototype.toString=function(){return this.f};
var ma=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new oa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function pa(){la();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return qa(aa(this))}});
pa=function(){}}
function qa(a){pa();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a}
function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ra="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)v(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ra});
u("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=q(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!v(k,g)){var l=new c;ia(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!v(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&v(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&v(k,g)&&v(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&v(k,g)&&v(k[g],this.f)?delete k[g][this.f]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return qa(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.g[l];if(n&&v(h.g,l))for(var p=0;p<n.length;p++){var w=n[p];if(k!==k&&w.key!==w.key||k===w.key)return{id:l,list:n,index:p,u:w}}return{id:l,list:n,index:-1,u:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=q(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(q([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
pa();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.u&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.u.previous.next=h.u.next,h.u.next.previous=h.u.previous,h.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).u};
e.prototype.get=function(h){return(h=d(this,h).u)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.f=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
pa();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var sa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ba(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
u("Reflect.construct",function(){return sa});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ka(this,b,"includes").indexOf(b,c||0)}});
var x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var ta=/^[\w+/_-]+[=]{0,2}$/,ua=null;function z(a,b){for(var c=a.split("."),d=b||x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function va(){}
function wa(a){a.ha=void 0;a.getInstance=function(){return a.ha?a.ha:a.ha=new a}}
function xa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ya(a){return"array"==xa(a)}
function za(a){var b=xa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Aa(a){return"function"==xa(a)}
function Ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Ca="closure_uid_"+(1E9*Math.random()>>>0),Da=0;function Ea(a,b,c){return a.call.apply(a.bind,arguments)}
function Fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=Ea:A=Fa;return A.apply(null,arguments)}
function Ga(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var B=Date.now||function(){return+new Date};
function Ia(a,b){y(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function D(a){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
C(D,Error);D.prototype.name="CustomError";var Ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},La=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ma=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Na(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Oa(a,b){var c=Ja(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Pa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Qa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(za(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ra(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Sa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ta(a,b){var c=za(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Ua(a){var b=Va,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Wa(a){for(var b in a)return!1;return!0}
function Xa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ya(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Za(a){var b={},c;for(c in a)b[c]=a[c];return b}
function $a(a){var b=xa(a);if("object"==b||"array"==b){if(Aa(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=$a(a[c]);return b}return a}
var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function cb(a,b){this.f=a===db&&b||"";this.g=eb}
cb.prototype.J=!0;cb.prototype.I=function(){return this.f};
function fb(){var a=gb;return a instanceof cb&&a.constructor===cb&&a.g===eb?a.f:"type_error:Const"}
var eb={},db={},gb=new cb(db,"");function hb(a,b){this.f=a===ib&&b||"";this.g=jb}
hb.prototype.J=!0;hb.prototype.I=function(){return this.f.toString()};
hb.prototype.ga=!0;hb.prototype.da=function(){return 1};
function kb(a){if(a instanceof hb&&a.constructor===hb&&a.g===jb)return a.f;xa(a);return"type_error:TrustedResourceUrl"}
var jb={},ib={};var lb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function mb(a,b){if(b)a=a.replace(nb,"&amp;").replace(ob,"&lt;").replace(pb,"&gt;").replace(qb,"&quot;").replace(rb,"&#39;").replace(sb,"&#0;");else{if(!tb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(nb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ob,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(pb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(qb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(rb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(sb,"&#0;"))}return a}
var nb=/&/g,ob=/</g,pb=/>/g,qb=/"/g,rb=/'/g,sb=/\x00/g,tb=/[\x00&<>"']/;function G(a,b){this.f=a===ub&&b||"";this.g=vb}
G.prototype.J=!0;G.prototype.I=function(){return this.f.toString()};
G.prototype.ga=!0;G.prototype.da=function(){return 1};
function wb(a){if(a instanceof G&&a.constructor===G&&a.g===vb)return a.f;xa(a);return"type_error:SafeUrl"}
var xb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function yb(a){if(a instanceof G)return a;a="object"==typeof a&&a.J?a.I():String(a);xb.test(a)||(a="about:invalid#zClosurez");return new G(ub,a)}
var vb={},ub={};var zb;a:{var Ab=x.navigator;if(Ab){var Bb=Ab.userAgent;if(Bb){zb=Bb;break a}}zb=""};function Cb(){this.f="";this.h=Db;this.g=null}
Cb.prototype.ga=!0;Cb.prototype.da=function(){return this.g};
Cb.prototype.J=!0;Cb.prototype.I=function(){return this.f.toString()};
function Eb(a){if(a instanceof Cb&&a.constructor===Cb&&a.h===Db)return a.f;xa(a);return"type_error:SafeHtml"}
var Db={};function Gb(a,b){var c=new Cb;c.f=a;c.g=b;return c}
Gb("<!DOCTYPE html>",0);var Hb=Gb("",0);Gb("<br>",0);function Ib(a,b){var c=b instanceof G?b:yb(b);a.href=wb(c)}
function Jb(a,b){a.src=kb(b);if(null===ua)b:{var c=x.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&ta.test(c)){ua=c;break b}ua=""}c=ua;c&&a.setAttribute("nonce",c)}
;function Kb(a){return a=mb(a,void 0)}
function Lb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Mb=-1!=zb.indexOf("Trident")||-1!=zb.indexOf("MSIE"),Nb;var Ob;if(x.document&&Mb){var Pb=x.document;Ob=Pb?Pb.documentMode:void 0}else Ob=void 0;Nb=Ob;var Qb={},Rb=null;var H=window;function Sb(a){this.f=a||{cookie:""}}
m=Sb.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c,d,e,f){if("object"===typeof c){var g=c.g;f=c.secure;e=c.domain;d=c.path;c=c.f}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===c&&(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(B()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f+(null!=g?";samesite="+g:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=lb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",0,b,c);return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=lb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Tb=new Sb("undefined"==typeof document?null:document);function Ub(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Vb[b]?b=Vb[b]:(b=String(b),Vb[b]||(c=/function\s+([^\(]+)/m.exec(b),Vb[b]=c?c[1]:"[Anonymous]"),b=Vb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Vb={};var Wb=!Mb||9<=Number(Nb);function Xb(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Xb.prototype;m.clone=function(){return new Xb(this.x,this.y)};
m.equals=function(a){return a instanceof Xb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Yb(a,b){this.width=a;this.height=b}
m=Yb.prototype;m.clone=function(){return new Yb(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Zb(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function $b(a,b){Sa(b,function(c,d){c&&"object"==typeof c&&c.J&&(c=c.I());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:ac.hasOwnProperty(d)?a.setAttribute(ac[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var ac={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function bc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Wb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Kb(g.name),'"');if(g.type){f.push(' type="',Kb(g.type),'"');var h={};bb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=cc(e,f);g&&("string"===typeof g?f.className=g:ya(g)?f.className=g.join(" "):$b(f,g));2<d.length&&dc(e,f,d);return f}
function dc(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!za(f)||Ba(f)&&0<f.nodeType?d(f):F(ec(f)?Pa(f):f,d)}}
function cc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function ec(a){if(a&&"number"==typeof a.length){if(Ba(a))return"function"==typeof a.item||"string"==typeof a.item;if(Aa(a))return"function"==typeof a.item}return!1}
function fc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function gc(a){hc();return new hb(ib,a)}
var hc=va;var ic=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){return a?decodeURI(a):a}
function J(a,b){return b.match(ic)[a]||null}
function jc(a,b,c){if(ya(b))for(var d=0;d<b.length;d++)jc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function kc(a){var b=[],c;for(c in a)jc(c,a[c],b);return b.join("&")}
function lc(a,b){var c=kc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var mc=/#|$/;function nc(a,b){var c=a.search(mc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function oc(a){var b=pc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function qc(){var a=[];oc(function(b){a.push(b)});
return a}
var pc={Za:"allow-forms",ab:"allow-modals",bb:"allow-orientation-lock",cb:"allow-pointer-lock",eb:"allow-popups",fb:"allow-popups-to-escape-sandbox",gb:"allow-presentation",hb:"allow-same-origin",ib:"allow-scripts",jb:"allow-top-navigation",kb:"allow-top-navigation-by-user-activation"},rc=Ra(function(){return qc()});
function sc(){var a=cc(document,"IFRAME"),b={};F(rc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function tc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var uc=(new Date).getTime();function vc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function wc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var w=g,r=0;64>r;r+=4)w[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=w[r-3]^w[r-8]^w[r-14]^w[r-16],w[r]=(p<<1|p>>>31)&4294967295;p=e[0];var E=e[1],U=e[2],na=e[3],Bc=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var Ha=na^E&(U^na);var Fb=1518500249}else Ha=E^U^na,Fb=1859775393;else 60>r?(Ha=E&U|na&(E|U),Fb=2400959708):(Ha=E^U^na,Fb=3395469782);Ha=((p<<5|p>>>27)&4294967295)+Ha+Bc+Fb+w[r]&4294967295;Bc=na;na=U;U=(E<<30|E>>>2)&4294967295;E=p;p=Ha}e[0]=e[0]+p&4294967295;e[1]=
e[1]+E&4294967295;e[2]=e[2]+U&4294967295;e[3]=e[3]+na&4294967295;e[4]=e[4]+Bc&4294967295}
function c(p,w){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],E=0,U=p.length;E<U;++E)r.push(p.charCodeAt(E));p=r}w||(w=p.length);r=0;if(0==l)for(;r+64<w;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<w;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<w;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],w=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=w&255,w>>>=8;b(f);for(r=w=0;5>r;r++)for(var E=24;0<=E;E-=8)p[w++]=e[r]>>E&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,va:function(){for(var p=d(),w="",r=0;r<p.length;r++)w+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return w}}}
;function xc(a,b,c){var d=[],e=[];if(1==(ya(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),yc(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=yc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function yc(a){var b=wc();b.update(a);return b.va().toLowerCase()}
;function zc(a){var b=vc(String(x.location.href));var c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?x.__SAPISID:x.__APISID;if(!c){var d=new Sb(document);(c=d.get(b?"SAPISID":"APISID"))||(c=d.get("__Secure-3PAPISID"))}b=c;if(!b)return null;c=vc(String(x.location.href));c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")?"SAPISIDHASH":"APISIDHASH";return(d=String(x.location.href))&&b&&c?[c,xc(vc(d),b,a||null)].join(" "):null}
;function Ac(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Ac.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Cc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Dc(a){x.setTimeout(function(){throw a;},0)}
var Ec;
function Fc(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==zb.indexOf("Presto")&&(a=function(){var e=cc(document,"IFRAME");e.style.display="none";e.src=kb(new hb(ib,fb())).toString();document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Eb(Hb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=A(function(k){if(("*"==h||
k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&-1==zb.indexOf("Trident")&&-1==zb.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ka;c.ka=null;e()}};
return function(e){d.next={ka:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in cc(document,"SCRIPT")?function(e){var f=cc(document,"SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){x.setTimeout(e,0)}}
;function Gc(){this.g=this.f=null}
var Ic=new Ac(function(){return new Hc},function(a){a.reset()});
Gc.prototype.add=function(a,b){var c=Ic.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Gc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Hc(){this.next=this.scope=this.f=null}
Hc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Hc.prototype.reset=function(){this.next=this.scope=this.f=null};function Jc(a,b){Kc||Lc();Mc||(Kc(),Mc=!0);Nc.add(a,b)}
var Kc;function Lc(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);Kc=function(){a.then(Oc)}}else Kc=function(){var b=Oc;
!Aa(x.setImmediate)||x.Window&&x.Window.prototype&&-1==zb.indexOf("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Ec||(Ec=Fc()),Ec(b)):x.setImmediate(b)}}
var Mc=!1,Nc=new Gc;function Oc(){for(var a;a=Nc.remove();){try{a.f.call(a.scope)}catch(b){Dc(b)}Cc(Ic,a)}Mc=!1}
;function Pc(){this.g=-1}
;function Qc(){this.g=64;this.f=[];this.l=[];this.A=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
C(Qc,Pc);Qc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Rc(a,b,c){c||(c=0);var d=a.A;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Qc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Rc(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Rc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Rc(this,e);f=0;break}}this.h=f;this.j+=b}};
Qc.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Rc(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function K(){this.g=this.g;this.A=this.A}
K.prototype.g=!1;K.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
function Sc(a,b){a.g?b():(a.A||(a.A=[]),a.A.push(b))}
K.prototype.m=function(){if(this.A)for(;this.A.length;)this.A.shift()()};
function Tc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Uc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];za(d)?Uc.apply(null,d):Tc(d)}}
;function Vc(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Wc(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Xc(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Vc(a).match(/\S+/g)||[],c=0<=Ja(c,b);return c}
function Yc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Xc(a,"inverted-hdpi")&&Wc(a,Ka(a.classList?a.classList:Vc(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Zc="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function $c(){}
$c.prototype.next=function(){throw Zc;};
$c.prototype.D=function(){return this};
function ad(a){if(a instanceof $c)return a;if("function"==typeof a.D)return a.D(!1);if(za(a)){var b=0,c=new $c;c.next=function(){for(;;){if(b>=a.length)throw Zc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function bd(a,b){if(za(a))try{F(a,b,void 0)}catch(c){if(c!==Zc)throw c;}else{a=ad(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Zc)throw c;}}}
function cd(a){if(za(a))return Pa(a);a=ad(a);var b=[];bd(a,function(c){b.push(c)});
return b}
;function dd(a,b){this.h={};this.f=[];this.F=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof dd)for(c=ed(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ed(a){fd(a);return a.f.concat()}
m=dd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||gd;fd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function gd(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.h={};this.F=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.F++,this.f.length>2*this.g&&fd(this),!0):!1};
function fd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.F++);this.h[a]=b};
m.forEach=function(a,b){for(var c=ed(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new dd(this)};
m.D=function(a){fd(this);var b=0,c=this.F,d=this,e=new $c;e.next=function(){if(c!=d.F)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Zc;var f=d.f[b++];return a?f:d.h[f]};
return e};function hd(a){var b=[];id(new jd,a,b);return b.join("")}
function jd(){}
function id(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),id(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),kd(d,c),c.push(":"),id(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":kd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ld={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},md=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function kd(a,b){b.push('"',a.replace(md,function(c){var d=ld[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),ld[c]=d);return d}),'"')}
;function nd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function L(a){this.f=0;this.A=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=va)try{var b=this;a.call(void 0,function(c){od(b,2,c)},function(c){od(b,3,c)})}catch(c){od(this,3,c)}}
function pd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
pd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var qd=new Ac(function(){return new pd},function(a){a.reset()});
function rd(a,b,c){var d=qd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function sd(a){return new L(function(b,c){c(a)})}
L.prototype.then=function(a,b,c){return td(this,Aa(a)?a:null,Aa(b)?b:null,c)};
L.prototype.$goog_Thenable=!0;function ud(a,b){return td(a,null,b,void 0)}
L.prototype.cancel=function(a){if(0==this.f){var b=new vd(a);Jc(function(){wd(this,b)},this)}};
function wd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?wd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):xd(c),yd(c,e,3,b)))}a.h=null}else od(a,3,b)}
function zd(a,b){a.g||2!=a.f&&3!=a.f||Ad(a);a.i?a.i.next=b:a.g=b;a.i=b}
function td(a,b,c,d){var e=rd(null,null,null);e.f=new L(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof vd?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;zd(a,e);return e.f}
L.prototype.w=function(a){this.f=0;od(this,2,a)};
L.prototype.B=function(a){this.f=0;od(this,3,a)};
function od(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.w,f=a.B;if(d instanceof L){zd(d,rd(e||va,f||null,a));var g=!0}else if(nd(d))d.then(e,f,a),g=!0;else{if(Ba(d))try{var h=d.then;if(Aa(h)){Bd(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.A=c,a.f=b,a.h=null,Ad(a),3!=b||c instanceof vd||Cd(a,c))}}
function Bd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ad(a){a.l||(a.l=!0,Jc(a.o,a))}
function xd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
L.prototype.o=function(){for(var a;a=xd(this);)yd(this,a,this.f,this.A);this.l=!1};
function yd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Dd(b,c,d);else try{b.h?b.g.call(b.context):Dd(b,c,d)}catch(e){Ed.call(null,e)}Cc(qd,b)}
function Dd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Cd(a,b){a.j=!0;Jc(function(){a.j&&Ed.call(null,b)})}
var Ed=Dc;function vd(a){D.call(this,a)}
C(vd,D);vd.prototype.name="cancel";function M(a){K.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.o=!!a}
C(M,K);m=M.prototype;m.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Fd(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Na(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.N(b)}}
m.N=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=va):(c&&Oa(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.M=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var g=c[e];Gd(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.N(c)}}return 0!=e}return!1};
function Gd(a,b,c){Jc(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.h[a];b&&(F(b,this.N,this),delete this.h[a])}else this.f.length=0,this.h={}};
m.m=function(){M.L.m.call(this);this.clear();this.i.length=0};function Hd(a){this.f=a}
Hd.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,hd(b))};
Hd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Hd.prototype.remove=function(a){this.f.remove(a)};function Id(a){this.f=a}
C(Id,Hd);function Jd(a){this.data=a}
function Kd(a){return void 0===a||a instanceof Jd?a:new Jd(a)}
Id.prototype.set=function(a,b){Id.L.set.call(this,a,Kd(b))};
Id.prototype.g=function(a){a=Id.L.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Id.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ld(a){this.f=a}
C(Ld,Id);Ld.prototype.set=function(a,b,c){if(b=Kd(b)){if(c){if(c<B()){Ld.prototype.remove.call(this,a);return}b.expiration=c}b.creation=B()}Ld.L.set.call(this,a,b)};
Ld.prototype.g=function(a){var b=Ld.L.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<B()||c&&c>B())Ld.prototype.remove.call(this,a);else return b}};function Md(){}
;function Nd(){}
C(Nd,Md);Nd.prototype.clear=function(){var a=cd(this.D(!0)),b=this;F(a,function(c){b.remove(c)})};function Od(a){this.f=a}
C(Od,Nd);m=Od.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.D=function(a){var b=0,c=this.f,d=new $c;d.next=function(){if(b>=c.length)throw Zc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Pd(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
C(Pd,Od);function Qd(a,b){this.g=a;this.f=null;if(Mb&&!(9<=Number(Nb))){Rd||(Rd=new dd);this.f=Rd.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Rd.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
C(Qd,Nd);var Sd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Rd=null;function Td(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Sd[b]})}
m=Qd.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Td(a),b);Ud(this)};
m.get=function(a){a=this.f.getAttribute(Td(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Td(a));Ud(this)};
m.D=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new $c;d.next=function(){if(b>=c.length)throw Zc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ud(this)};
function Ud(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Vd(a,b){this.g=a;this.f=b+"::"}
C(Vd,Nd);Vd.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Vd.prototype.get=function(a){return this.g.get(this.f+a)};
Vd.prototype.remove=function(a){this.g.remove(this.f+a)};
Vd.prototype.D=function(a){var b=this.g.D(!0),c=this,d=new $c;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Wd(){this.g=[];this.f=-1}
Wd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Wd.prototype.get=function(a){return!!this.g[a]};
function Xd(a){-1==a.f&&(a.f=Ma(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Yd(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Zd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",Zd,void 0);function N(a){Yd(Zd,arguments)}
function O(a,b){return a in Zd?Zd[a]:b}
function $d(a){return O(a,void 0)}
function ae(){return O("PLAYER_CONFIG",{})}
;function be(){var a=ce;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function de(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;function ee(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){P(b)}}:a}
function P(a,b,c,d,e){var f=z("yt.logging.errors.log");f?f(a,b,c,d,e):(f=O("ERRORS",[]),f.push([a,b,c,d,e]),N("ERRORS",f))}
function fe(a){P(a,"WARNING",void 0,void 0,void 0)}
;function ge(a){var b=[];Sa(a,function(c,d){var e=encodeURIComponent(String(d)),f;ya(c)?f=c:f=[c];F(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function he(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ya(b[f])?Qa(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){var h=Error("Error decoding URL component");h.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?fe(h):P(h)}}return b}
function ie(a,b){return je(a,b||{},!0)}
function je(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=he(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return lc(a,e)+d}
;function ke(a){var b=le;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(me(b),ne(b));b.ca_type="image";a&&(b.bid=a);return b}
function me(a){var b={};b.dt=uc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?H:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!H.navigator&&"unknown"!==typeof H.navigator.javaEnabled&&!!H.navigator.javaEnabled&&H.navigator.javaEnabled();H.screen&&(b.u_h=H.screen.height,b.u_w=H.screen.width,b.u_ah=H.screen.availHeight,b.u_aw=H.screen.availWidth,b.u_cd=H.screen.colorDepth);
H.navigator&&H.navigator.plugins&&(b.u_nplug=H.navigator.plugins.length);H.navigator&&H.navigator.mimeTypes&&(b.u_nmime=H.navigator.mimeTypes.length);return b}
function ne(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var n=(new Yb(l.clientWidth,l.clientHeight)).round()}catch(p){n=new Yb(-12245933,-12245933)}k=n;n={};l=new Wd;x.SVGElement&&
x.document.createElementNS&&l.set(0);c=sc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);x.crypto&&x.crypto.subtle&&l.set(3);x.TextDecoder&&x.TextEncoder&&l.set(4);l=Xd(l);n.bc=l;n.bih=k.height;n.biw=k.width;n.brdim=b.join();a=a.g;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!H.WebGLRenderingContext,n}
var le=new function(){var a=window.document;this.f=window;this.g=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return ge(ke(a))},void 0);B();function Q(a){a=oe(a);return"string"===typeof a&&"false"===a?!1:!!a}
function pe(a,b){var c=oe(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function oe(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;var qe=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function re(){if(!qe)return null;var a=qe();return"open"in a?a:null}
function se(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function R(a,b){Aa(a)&&(a=ee(a));return window.setTimeout(a,b)}
function S(a){window.clearTimeout(a)}
;var te={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ue="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
ve=!1;
function we(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(1,a),e=I(J(3,a));d&&e?(d=c,c=a.match(ic),d=d.match(ic),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?I(J(3,c))==e&&(Number(J(4,c))||null)==(Number(J(4,a))||null):!0;d=Q("web_ajax_ignore_global_headers_if_set");for(var f in te)e=O(te[f]),!e||!c&&!xe(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||xe(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(Q("pass_biscotti_id_in_header_ajax")||Q("pass_biscotti_id_in_header_ajax_tv"))&&(c||
xe(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=ge(ke(void 0)));return b}
function ye(a){var b=window.location.search,c=I(J(3,a)),d=I(J(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=he(b),f={};F(ue,function(g){e[g]&&(f[g]=e[g])});
return je(a,f||{},!1)}
function xe(a,b){var c=O("CORS_HEADER_WHITELIST")||{},d=I(J(3,a));return d?(c=c[d])?0<=Ja(c,b):!1:!0}
function ze(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ae(a,b);var d=Be(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&S(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||x;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.ia&&b.ia.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.na&&0<b.timeout&&(f=R(function(){e||(e=!0,S(f),b.na.call(b.context||x))},b.timeout))}else Ce(a,b)}
function Ce(a,b){var c=b.format||"JSON";a=Ae(a,b);var d=Be(a,b),e=!1,f,g=De(a,function(h){if(!e){e=!0;f&&S(f);var k=se(h),l=null,n=400<=h.status&&500>h.status,p=500<=h.status&&600>h.status;if(k||n||p)l=Ee(c,h,b.ob);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};n=b.context||x;k?b.onSuccess&&b.onSuccess.call(n,h,l):b.onError&&b.onError.call(n,h,l);b.ia&&b.ia.call(n,h,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.O&&0<b.timeout&&(f=R(function(){e||(e=!0,g.abort(),S(f),b.O.call(b.context||x,g))},b.timeout));
return g}
function Ae(a,b){b.rb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0),d=b.Ya;d&&(d[c]&&delete d[c],a=ie(a,d));return a}
function Be(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=$d("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.qb||I(J(3,a))&&!b.withCredentials&&I(J(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=he(e),bb(e,f),e=b.oa&&"JSON"==b.oa?JSON.stringify(e):kc(e));f=e||f&&!Wa(f);!ve&&f&&"POST"!=b.method&&(ve=!0,P(Error("AJAX request with postData should use POST")));
return e}
function Ee(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Fe(b):null)d={},F(b.getElementsByTagName("*"),function(e){d[e.tagName]=Ge(e)})}c&&He(d);
return d}
function He(a){if(Ba(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Gb(a[b],null);a[c]=d}else He(a[b])}}
function Fe(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ge(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function De(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ee(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=re();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;Q("debug_forward_web_query_parameters")&&(a=ye(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=we(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ie={},Je=0;
function Ke(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=zb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof G||(a="object"==typeof a&&a.J?a.I():String(a),xb.test(a)||(a="about:invalid#zClosurez"),a=new G(ub,a)),b=wb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Cb?a=b:(d="object"==typeof b,a=null,d&&b.ga&&(a=b.da()),b=mb(d&&b.J?b.I():String(b)),a=Gb(b,a)),a=Eb(a).toString(),a=encodeURIComponent(String(hd(a)))),/^[\s\xa0]*$/.test(a)||(a=bc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?De(a,b,"POST",e,d):O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?De(a,b,"GET","",d):Le(a,b)||Me(a,b))}
function Le(a,b){var c=Zd.EXPERIMENT_FLAGS;if(!c||!c.web_use_beacon_api_for_ad_click_server_pings)return!1;c=I(J(5,a));return c&&-1!=c.indexOf("/aclk")&&"1"===nc(a,"ae")&&"1"===nc(a,"act")?Ne(a)?(b&&b(),!0):!1:!1}
function Ne(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Me(a,b){var c=new Image,d=""+Je++;Ie[d]=c;c.onload=c.onerror=function(){b&&Ie[d]&&b();delete Ie[d]};
c.src=a}
;var Oe={},Pe=0;
function Qe(a,b,c,d,e,f){f=f||{};f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Pe||(Q("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+e.stack),
window.console.log(c.join("\n"),e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=Ub(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&Aa(window.yterr)&&window.yterr(a),Oe[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Ya:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},C:{url:O("PAGE_NAME",window.location.href),
file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.C.stack=e);for(var g in f)b.C["client."+g]=f[g];if(g=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var h in g)b.C[h]=g[h];Ce(O("ECATCHER_REPORT_HOST","")+"/error_204",b);Oe[a.message]=!0;Pe++}}
;var Re=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",Re,void 0);function Se(a){Yd(Re,arguments)}
;function Te(a){a&&(a.dataset?a.dataset[Ue("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ve(a,b){return a?a.dataset?a.dataset[Ue(b)]:a.getAttribute("data-"+b):null}
var We={};function Ue(a){return We[a]||(We[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Xe=z("ytPubsubPubsubInstance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.N;M.prototype.publish=M.prototype.M;M.prototype.clear=M.prototype.clear;y("ytPubsubPubsubInstance",Xe,void 0);var Ye=z("ytPubsubPubsubSubscribedKeys")||{};y("ytPubsubPubsubSubscribedKeys",Ye,void 0);var Ze=z("ytPubsubPubsubTopicToKeys")||{};y("ytPubsubPubsubTopicToKeys",Ze,void 0);var $e=z("ytPubsubPubsubIsSynchronous")||{};y("ytPubsubPubsubIsSynchronous",$e,void 0);
function af(a,b){var c=bf();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Ye[d]&&b.apply(window,e)};
try{$e[a]?f():R(f,0)}catch(g){P(g)}},void 0);
Ye[d]=!0;Ze[a]||(Ze[a]=[]);Ze[a].push(d);return d}return 0}
function cf(a){var b=bf();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),F(a,function(c){b.unsubscribeByKey(c);delete Ye[c]}))}
function df(a,b){var c=bf();c&&c.publish.apply(c,arguments)}
function ef(a){var b=bf();if(b)if(b.clear(a),a)ff(a);else for(var c in Ze)ff(c)}
function bf(){return z("ytPubsubPubsubInstance")}
function ff(a){Ze[a]&&(a=Ze[a],F(a,function(b){Ye[b]&&delete Ye[b]}),a.length=0)}
;var gf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,hf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function jf(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(gf,""),c=c.replace(hf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else kf(a,b,c)}
function kf(a,b,c){c=void 0===c?null:c;var d=lf(a),e=document.getElementById(d),f=e&&Ve(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=af(d,b),b=""+(b[Ca]||(b[Ca]=++Da)),mf[b]=f),g||(e=nf(a,d,function(){Ve(e,"loaded")||(Te(e),df(d),R(Ga(ef,d),0))},c)))}
function nf(a,b,c,d){d=void 0===d?null:d;var e=cc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Jb(e,gc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function of(a){a=lf(a);var b=document.getElementById(a);b&&(ef(a),b.parentNode.removeChild(b))}
function pf(a,b){if(a&&b){var c=""+(b[Ca]||(b[Ca]=++Da));(c=mf[c])&&cf(c)}}
function lf(a){var b=document.createElement("a");Ib(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Lb(a)}
var mf={};function qf(){}
function rf(a,b){return sf(a,1,b)}
;function tf(){}
t(tf,qf);function sf(a,b,c){isNaN(c)&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):R(a,c||0)}
tf.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
tf.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};
wa(tf);tf.getInstance();var uf=[],vf=!1;function wf(){if("1"!=Ta(ae(),"args","privembed")){var a=function(){vf=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
jf("//static.doubleclick.net/instream/ad_status.js",a);uf.push(rf(function(){vf||"google_ad_status"in window||(pf("//static.doubleclick.net/instream/ad_status.js",a),vf=!0,N("DCLKSTAT",3))},5E3))}}
function xf(){return parseInt(O("DCLKSTAT",0),10)}
;function yf(){this.g=!1;this.f=null}
yf.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.g=!0,jf(b,function(){f.g=!1;if(window.botguard)zf(f,c,d);else{of(b);var g=Error("Unable to load Botguard");g.params="from "+b;fe(g)}},e)):a&&(eval(a),window.botguard?zf(this,c,d):fe(Error("Unable to load Botguard from JS")))};
function zf(a,b,c){try{a.f=new window.botguard.bg(b)}catch(d){fe(d)}c&&c(b)}
yf.prototype.dispose=function(){this.f=null};var Af=window,T=Af.ytcsi&&Af.ytcsi.now?Af.ytcsi.now:Af.performance&&Af.performance.timing&&Af.performance.now?function(){return Af.performance.timing.navigationStart+Af.performance.now()}:function(){return(new Date).getTime()};var Bf=new yf,Cf=!1,Df=0,Ef="";function Ff(a){Q("botguard_periodic_refresh")?Df=T():Q("botguard_always_refresh")&&(Ef=a)}
function Gf(a){if(a){if(Bf.g)return!1;if(Q("botguard_periodic_refresh"))return 72E5<T()-Df;if(Q("botguard_always_refresh"))return Ef!=a}else return!1;return!Cf}
function Hf(){return!!Bf.f}
function If(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Bf.f?Bf.f.invoke(void 0,void 0,a):null}
;var Jf=0;y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++Jf},void 0);var Kf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Lf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in Kf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}
function Mf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Lf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Lf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Lf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Va=z("ytEventsEventsListeners")||{};y("ytEventsEventsListeners",Va,void 0);var Nf=z("ytEventsEventsCounter")||{count:0};y("ytEventsEventsCounter",Nf,void 0);
function Of(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ua(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ba(e[4])&&Ba(d)&&Ya(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Pf=Ra(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Of(a,b,c,d);if(e)return e;e=++Nf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Lf(h);if(!fc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Lf(h);
h.currentTarget=a;return c.call(a,h)};
g=ee(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Pf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Va[e]=[a,b,c,g,d];return e}
function Qf(a){a&&("string"==typeof a&&(a=[a]),F(a,function(b){if(b in Va){var c=Va[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Pf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Va[b]}}))}
;var Rf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Sf(a){this.w=a;this.f=null;this.j=0;this.o=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.G=V(window,"mousemove",A(this.H,this));a=A(this.B,this);Aa(a)&&(a=ee(a));this.K=window.setInterval(a,25)}
C(Sf,K);Sf.prototype.H=function(a){void 0===a.f&&Mf(a);var b=a.f;void 0===a.g&&Mf(a);this.f=new Xb(b,a.g)};
Sf.prototype.B=function(){if(this.f){var a=Rf();if(0!=this.j){var b=this.o,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.w();this.l=d}this.j=a;this.o=this.f;this.i=(this.i+1)%4}};
Sf.prototype.m=function(){window.clearInterval(this.K);Qf(this.G)};var Tf={};
function Uf(a){var b=void 0===a?{}:a;a=void 0===b.Aa?!0:b.Aa;var c=void 0===b.Ma?!1:b.Ma,d=void 0===b.Xa?!1:b.Xa;null==z("_lact",window)&&(b=parseInt(O("LACT"),10),b=isFinite(b)?B()-Math.max(b,0):-1,y("_lact",b,window),y("_fact",b,window),-1==b&&Vf(),V(document,"keydown",function(e){return Vf(d,e)}),V(document,"keyup",function(e){return Vf(d,e)}),V(document,"mousedown",function(e){return Vf(d,e)}),V(document,"mouseup",function(e){return Vf(d,e)}),a&&(c?V(window,"touchmove",function(e){Wf("touchmove",200,
d,e)},{passive:!0}):(V(window,"resize",function(e){Wf("resize",200,d,e)}),V(window,"scroll",function(e){Wf("scroll",200,d,e)}))),new Sf(function(){Wf("mouse",100)}),V(document,"touchstart",function(e){return Vf(d,e)},{passive:!0}),V(document,"touchend",function(e){return Vf(d,e)},{passive:!0}))}
function Wf(a,b,c,d){Tf[a]||(Tf[a]=!0,rf(function(){Vf(c,d);Tf[a]=!1},b))}
function Vf(a,b){if(!Xf(a,b)){null==z("_lact",window)&&Uf();var c=B();y("_lact",c,window);-1==z("_fact",window)&&y("_fact",c,window);(c=z("ytglobal.ytUtilActivityCallback_"))&&c()}}
function Xf(a,b){return a&&b&&b.path?!!Na(b.path,function(c){return"YTM-CUSTOM-CONTROL"==c.tagName}):!1}
function Yf(){var a=z("_lact",window);return null==a?-1:Math.max(B()-a,0)}
;var Zf=Math.pow(2,16)-1,$f=null,ag=0,bg={log_event:"events",log_interaction:"interactions"},cg=Object.create(null);cg.log_event="GENERIC_EVENT_LOGGING";cg.log_interaction="INTERACTION_LOGGING";var dg=new Set(["log_event"]),eg={},fg=0,gg=0,hg=0,W=z("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",W,void 0);var ig=z("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",ig,void 0);var jg=z("ytLoggingTransportDispatchedStats_")||{};
y("ytLoggingTransportDispatchedStats_",jg,void 0);y("ytytLoggingTransportCapturedTime_",z("ytLoggingTransportCapturedTime_")||{},void 0);function kg(){S(fg);S(gg);gg=0;if(!Wa(W)){for(var a in W){var b=eg[a];b&&(lg(a,b),delete W[a])}Wa(W)||mg()}}
function mg(){Q("web_gel_timeout_cap")&&!gg&&(gg=R(kg,6E4));S(fg);fg=R(kg,O("LOGGING_BATCH_TIMEOUT",pe("web_gel_debounce_ms",1E4)))}
function ng(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function lg(a,b){var c=bg[a],d=jg[a]||{};jg[a]=d;var e=Math.round(T());for(p in W[a]){var f=$a,g=b.f;g={client:{hl:g.Ea,gl:g.Da,clientName:g.Ca,clientVersion:g.innertubeContextClientVersion,configInfo:g.Ba}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));h=O("EXPERIMENTS_TOKEN","");""!==h&&(g.client.experimentsToken=h);var k=h=void 0,l=[],n=O("EXPERIMENTS_FORCED_FLAGS",{});for(k in n)l.push({key:k,value:String(n[k])});k=O("EXPERIMENT_FLAGS",{});for(h in k)h.startsWith("force_")&&
void 0===n[h]&&l.push({key:h,value:String(k[h])});h=l;0<h.length&&(g.request={internalExperimentFlags:h});O("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&(g.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=ng(a,p);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=ig[p])a:{l=p;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||
{};f.context.user.credentialTransferTokens=[{token:l,scope:h}]}delete ig[p];f.requestTimeMs=e;if(g=$d("EVENT_ID"))h=(O("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>Zf&&(h=1),N("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,$f&&ag&&Q("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:$f,roundtripMs:ag}),$f=g,ag=0;og(b,a,f,{retry:dg.has(a),onSuccess:A(pg,this,T())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var p=d.diffCount||0;d.averageTimeBetweenDispatchesMs=
p?(d.averageTimeBetweenDispatchesMs*p+c)/(p+1):c;d.diffCount=p+1}d.previousDispatchMs=e}
function pg(a){ag=Math.round(T()-a)}
;var qg=z("ytLoggingGelSequenceIdObj_")||{};y("ytLoggingGelSequenceIdObj_",qg,void 0);
function rg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||T());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Yf())};Q("log_sequence_info_on_gel_web")&&d.P&&(a=e.context,b=d.P,qg[b]=b in qg?qg[b]+1:0,a.sequence={index:qg[b],groupKey:b},d.pb&&delete qg[d.P]);(d=d.ca)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),ig[d.token]=a,d=ng("log_event",d.token)):d=ng("log_event");d.push(e);c&&(eg.log_event=new c);c=pe("web_logging_max_batch")||
100;e=T();d.length>=c?kg():10<=e-hg&&(mg(),hg=e)}
;function sg(a){this.f=a}
function tg(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,null!=a.f.veCounter&&(b.veCounter=a.f.veCounter),null!=a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=tg(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
sg.prototype.toString=function(){return JSON.stringify(tg(this))};
var ug=1;function vg(a,b){this.version=a;this.args=b}
;function wg(a,b){this.topic=a;this.f=b}
wg.prototype.toString=function(){return this.topic};var xg=z("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.N;M.prototype.publish=M.prototype.M;M.prototype.clear=M.prototype.clear;y("ytPubsub2Pubsub2Instance",xg,void 0);var yg=z("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",yg,void 0);var zg=z("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",zg,void 0);var Ag=z("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",Ag,void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Bg(a,b){var c=Cg();c&&c.publish.call(c,a.toString(),a,b)}
function Dg(a){var b=Eg,c=Cg();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=z("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(yg[d])try{if(f&&b instanceof wg&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.F){var l=new h;h.F=l.version}var n=h.F}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Pa(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){P(p)}},Ag[b.toString()]?z("yt.scheduler.instance")?rf(g):R(g,0):g())});
yg[d]=!0;zg[b.toString()]||(zg[b.toString()]=[]);zg[b.toString()].push(d);return d}
function Fg(){var a=Gg,b=Dg(function(c){a.apply(void 0,arguments);Hg(b)});
return b}
function Hg(a){var b=Cg();b&&("number"===typeof a&&(a=[a]),F(a,function(c){b.unsubscribeByKey(c);delete yg[c]}))}
function Cg(){return z("ytPubsub2Pubsub2Instance")}
;function Ig(a){vg.call(this,1,arguments);this.csn=a}
t(Ig,vg);var Eg=new wg("screen-created",Ig),Jg=[],Kg=0;function Lg(a,b,c){var d=Mg;b={csn:a,parentVe:tg(b),childVes:La(c,function(f){return tg(f)})};
c=q(c);for(var e=c.next();!e.done;e=c.next())e=tg(e.value),(Wa(e)||!e.trackingParams&&!e.veType)&&Qe(Error("Child VE logged with no data"),"WARNING");c={ca:void 0,P:a};"UNDEFINED_CSN"==a?Ng("visualElementAttached",b,c):rg("visualElementAttached",b,d,c)}
function Ng(a,b,c){Jg.push({La:a,payload:b,options:c});Kg||(Kg=Fg())}
function Gg(a){if(Jg){for(var b=q(Jg),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,rg(c.La,c.payload,null,c.options));Jg.length=0}Kg=0}
;function Og(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.mb||O("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().lb:b=zc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),Q("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
function Pg(a){a=Object.assign({},a);delete a.Authorization;var b=zc();if(b){var c=new Qc;c.update(O("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;za(b);void 0===c&&(c=0);if(!Rb){Rb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Qb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Rb[k]&&(Rb[k]=h)}}}c=Qb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],n=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[l],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Qg(a,b,c,d){Tb.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function Rg(){var a=new Pd;(a=a.isAvailable()?new Vd(a,"yt.innertube"):null)||(a=new Qd("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Ld(a):null;this.g=document.domain||window.location.hostname}
Rg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,B()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(hd(b))}catch(f){return}else e=escape(b);Qg(a,e,c,this.g)};
Rg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Tb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Rg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Tb.remove(""+a,"/",void 0===b?"youtube.com":b)};var Sg=new Rg;function Tg(a,b,c,d){if(d)return null;d=Sg.get("nextId",!0)||1;var e=Sg.get("requests",!0)||{};e[d]={method:a,request:b,authState:Pg(c),requestTime:Math.round(T())};Sg.set("nextId",d+1,86400,!0);Sg.set("requests",e,86400,!0);return d}
function Ug(a){var b=Sg.get("requests",!0)||{};delete b[a];Sg.set("requests",b,86400,!0)}
function Vg(a){var b=Sg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Pg(Og(!1));Ya(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),og(a,d.method,e,{}));delete b[c]}}Sg.set("requests",b,86400,!0)}}
;function Mg(a){var b=this;this.f=a||{innertubeApiKey:$d("INNERTUBE_API_KEY"),innertubeApiVersion:$d("INNERTUBE_API_VERSION"),Ba:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ca:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:$d("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ea:$d("INNERTUBE_CONTEXT_HL"),Da:$d("INNERTUBE_CONTEXT_GL"),Fa:$d("INNERTUBE_HOST_OVERRIDE")||"",Ga:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};sf(function(){Vg(b)},0,5E3)}
function og(a,b,c,d){!O("VISITOR_DATA")&&.01>Math.random()&&P(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,oa:"JSON",O:function(){d.O()},
na:d.O,onSuccess:function(w,r){if(d.onSuccess)d.onSuccess(r)},
ma:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,r){if(d.onError)d.onError(r)},
sb:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Fa;g&&(f=g);g=a.f.Ga||!1;var h=Og(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=ie(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&Q("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Tg(b,c,h,g))){var n=e.onSuccess,p=e.ma;e.onSuccess=function(w,r){Ug(l);n(w,r)};
c.ma=function(w,r){Ug(l);p(w,r)}}try{Q("use_fetch_for_op_xhr")?ze(k,e):(e.method="POST",e.C||(e.C={}),Ce(k,e))}catch(w){if("InvalidAccessError"==w)l&&(Ug(l),l=0),P(Error("An extension is blocking network request."),"WARNING");
else throw w;}l&&sf(function(){Vg(a)},0,5E3)}
;var Wg=B().toString();
function Xg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=B();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Wg)for(a=1,b=0;b<Wg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Wg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Yg=z("ytLoggingTimeDocumentNonce_")||Xg();y("ytLoggingTimeDocumentNonce_",Yg,void 0);function Zg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function $g(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ah(a){return O($g(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",ah,void 0);function bh(){var a=ah(0),b;a?b=new sg({veType:a,youtubeData:void 0}):b=null;return b}
function ch(a){a=void 0===a?0:a;var b=O(Zg(a));b||0!=a||(Q("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=O("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",ch,void 0);function dh(a,b,c){c=void 0===c?0:c;if(a!==O(Zg(c))||b!==O($g(c)))N(Zg(c),a),N($g(c),b),0==c&&(b=function(){setTimeout(function(){a&&rg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Yg,clientScreenNonce:a},Mg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
y("yt_logging_screen.setCurrentScreen",dh,void 0);function eh(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=I(J(3,window.location.href));g&&f.push(g);g=I(J(3,d));if(0<=Ja(f,g)||!g&&0==d.lastIndexOf("/",0))if(Q("autoescape_tempdata_url")&&(f=document.createElement("a"),Ib(f,d),d=f.href),d){g=d.match(ic);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&(b.itct||b.ved)&&
(b.csn=b.csn||ch()),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e="ST-"+Lb(d).toString(36),b=b?kc(b):"",Qg(e,b,k||5))}else k="ST-"+Lb(d).toString(36),b=b?kc(b):"",Qg(k,b,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=lc(a,l)+n;a=a instanceof G?a:yb(a);c.href=wb(a)}return!0}
;function fh(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Za(b);this.assets=a.assets||{};this.attrs=a.attrs||Za(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
fh.prototype.clone=function(){var a=new fh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==xa(c)?a[b]=Za(c):a[b]=c}return a};function gh(){K.call(this);this.f=[]}
t(gh,K);gh.prototype.m=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.nb)}K.prototype.m.call(this)};var hh=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function ih(a){a=a||"";if(window.spf){var b=a.match(hh);spf.style.load(a,b?b[1]:"",void 0)}else jh(a)}
function jh(a){var b=kh(a),c=document.getElementById(b),d=c&&Ve(c,"loaded");d||c&&!d||(c=lh(a,b,function(){Ve(c,"loaded")||(Te(c),df(b),R(Ga(ef,b),0))}))}
function lh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=gc(a);d.rel="stylesheet";d.href=kb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function kh(a){var b=cc(document,"A");Ib(b,new G(ub,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Lb(a)}
;function mh(a,b,c,d){K.call(this);var e=this;this.l=this.X=a;this.U=b;this.w=!1;this.api={};this.V=this.G=null;this.H=new M;Sc(this,Ga(Tc,this.H));this.i={};this.R=this.W=this.h=this.ba=this.f=null;this.K=!1;this.j=this.B=null;this.Y={};this.sa=["onReady"];this.aa=null;this.ja=NaN;this.S={};this.o=d;nh(this);this.Z("WATCH_LATER_VIDEO_ADDED",this.Ia.bind(this));this.Z("WATCH_LATER_VIDEO_REMOVED",this.Ja.bind(this));this.Z("onAdAnnounce",this.ua.bind(this));this.ta=new gh(this);Sc(this,Ga(Tc,this.ta));
this.T=0;c?this.T=R(function(){e.loadNewVideoConfig(c)},0):d&&(oh(this),ph(this))}
t(mh,K);m=mh.prototype;m.getId=function(){return this.U};
m.loadNewVideoConfig=function(a){if(!this.g){this.T&&(S(this.T),this.T=0);a instanceof fh||(a=new fh(a));this.ba=a;this.f=a.clone();oh(this);this.W||(this.W=qh(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=tc(Number(a)||a);if(a=this.f.attrs.height)this.l.style.height=tc(Number(a)||a);ph(this);this.w&&rh(this)}};
function oh(a){var b;a.o?b=a.o.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.U,a.f.attrs.id=a.U);a.l.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
m.xa=function(){return this.ba};
function rh(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function sh(a){var b=!0,c=th(a);c&&a.f&&(a=uh(a),b=Ve(c,"version")==a);return b&&!!z("yt.player.Application.create")}
function ph(a){if(!a.g&&!a.K){var b=sh(a);if(b&&"html5"==(th(a)?"html5":null))a.R="html5",a.w||vh(a);else if(wh(a),a.R="html5",b&&a.j)a.X.appendChild(a.j),vh(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.B=function(){c=!0;var d=z("yt.player.Application.create"),e=a.f?a.f.clone():void 0;d(a.X,e,a.o);vh(a)};
a.K=!0;b?a.B():(jf(uh(a),a.B),ih(a.o?a.o.cssUrl:a.f.assets.css),xh(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function th(a){var b=Zb(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function vh(a){if(!a.g){var b=th(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||yh(a)):a.ja=R(function(){vh(a)},50)}}
function yh(a){nh(a);a.w=!0;var b=th(a);b.addEventListener&&(a.G=zh(a,b,"addEventListener"));b.removeEventListener&&(a.V=zh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=zh(a,b,e))}for(var f in a.i)a.G(f,a.i[f]);rh(a);a.W&&a.W(a.api);a.H.M("onReady",a.api)}
function zh(a,b,c){var d=b[c];return function(){try{return a.aa=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.aa=e,fe(e))}}}
function nh(a){a.w=!1;if(a.V)for(var b in a.i)a.V(b,a.i[b]);for(var c in a.S)S(parseInt(c,10));a.S={};a.G=null;a.V=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Z.bind(a);a.api.removeEventListener=a.Oa.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.ya.bind(a);a.api.getPlayerType=a.za.bind(a);a.api.getCurrentVideoConfig=a.xa.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Ha.bind(a)}
m.Ha=function(){return this.w};
m.Z=function(a,b){var c=this,d=qh(this,b);if(d){if(!(0<=Ja(this.sa,a)||this.i[a])){var e=Ah(this,a);this.G&&this.G(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.w&&R(function(){d(c.api)},0)}};
m.Oa=function(a,b){if(!this.g){var c=qh(this,b);c&&Fd(this.H,a,c)}};
function qh(a,b){var c=b;if("string"==typeof b){if(a.Y[b])return a.Y[b];c=function(){var d=z(b);d&&d.apply(x,arguments)};
a.Y[b]=c}return c?c:null}
function Ah(a,b){var c="ytPlayer"+b+a.U;a.i[b]=c;x[c]=function(d){var e=R(function(){if(!a.g){a.H.M(b,d);var f=a.S,g=String(e);g in f&&delete f[g]}},0);
Xa(a.S,String(e))};
return c}
m.ua=function(a){df("a11y-announce",a)};
m.Ia=function(a){df("WATCH_LATER_VIDEO_ADDED",a)};
m.Ja=function(a){df("WATCH_LATER_VIDEO_REMOVED",a)};
m.za=function(){return this.R||(th(this)?"html5":null)};
m.ya=function(){return this.aa};
function wh(a){a.cancel();nh(a);a.R=null;a.f&&(a.f.loaded=!1);var b=th(a);b&&(sh(a)||!xh(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.X;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&pf(uh(this),this.B);S(this.ja);this.K=!1};
m.m=function(){wh(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){P(b)}this.Y=null;for(var a in this.i)x[this.i[a]]=null;this.ba=this.f=this.api=null;delete this.X;delete this.l;K.prototype.m.call(this)};
function xh(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function uh(a){return a.o?a.o.jsUrl:a.f.assets.js}
;var Bh={},Ch="player_uid_"+(1E9*Math.random()>>>0);function Dh(a){delete Bh[a.getId()]}
;var Eh=window,X=Eh.performance||Eh.mozPerformance||Eh.msPerformance||Eh.webkitPerformance||{};function Fh(a,b){if(Q("debug_csi_data")){var c=z("yt.timing.csiData");c||(c=[],y("yt.timing.csiData",c,void 0));c.push({page:location.href,time:new Date,args:a})}c="";for(var d in a)a.hasOwnProperty(d)&&(c+="&"+d+"="+a[d]);d="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var e=void 0===e?"":e;Ne(d,e)||Ke(d,void 0,void 0,void 0,e)}else Ke(d);Ia("yt.timing.pingSent_",!0)}
function Gh(){var a=Hh();if(a.aft)return a.aft;for(var b=O("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Ih(){var a=Hh(),b=a.pbr,c=a.vc;a=a.pbs;return!!(b&&c&&a&&b<c&&c<a&&Jh().yt_pvis)}
function Kh(){var a;(a=z("ytcsi.data_"))||(a={tick:{},info:{}},Ia("ytcsi.data_",a));return a}
function Jh(){var a=Kh();a.info||(a.info={});return a.info}
function Hh(){var a=Kh();a.tick||(a.tick={});return a.tick}
function Lh(){var a=Kh().nonce;a||(a=Xg(),Kh().nonce=a);return a}
;function Mh(a,b,c){c=void 0===c?{}:c;var d=Mg;O("ytLoggingEventsDefaultDisabled",!1)&&Mg==Mg&&(d=null);rg(a,b,d,c)}
;var Nh=z("ytLoggingLatencyUsageStats_")||{};y("ytLoggingLatencyUsageStats_",Nh,void 0);var Oh=0;function Ph(a){Nh[a]=Nh[a]||{count:0};var b=Nh[a];b.count++;b.time=T();Oh||(Oh=sf(Qh,0,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;Qe(c,b)}return!0}return!1}
function Qh(){var a=T(),b;for(b in Nh)6E4<a-Nh[b].time&&delete Nh[b];Oh=0}
;function Rh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Sh(a)||c.some(function(e){return!Sh(e)}))throw Error("Only objects may be merged.");
c=q(c);for(d=c.next();!d.done;d=c.next())Th(a,d.value);return a}
function Th(a,b){for(var c in b)if(Sh(b[c])){if(c in a&&!Sh(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Th(a[c],b[c])}else if(Uh(b[c])){if(c in a&&!Uh(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Vh(a[c],b[c])}else a[c]=b[c];return a}
function Vh(a,b){for(var c=q(b),d=c.next();!d.done;d=c.next())d=d.value,Sh(d)?a.push(Th({},d)):Uh(d)?a.push(Vh([],d)):a.push(d);return a}
function Sh(a){return"object"===typeof a&&!Array.isArray(a)}
function Uh(a){return"object"===typeof a&&Array.isArray(a)}
;function Wh(a){a=Error.call(this,a);this.message=a.message;"stack"in a&&(this.stack=a.stack)}
t(Wh,Error);var Y={},Xh=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="getHomeRequestId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav=
"kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.prt="playbackRequiresTap",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",
Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Yh="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Zh={},$h=(Zh.mver="MEASUREMENT_VERSION_",Zh.pis="PLAYER_INITIALIZED_STATE_",Zh.yt_pt="LATENCY_PLAYER_",Zh.pa="LATENCY_ACTION_",Zh.yt_vst="VIDEO_STREAM_TYPE_",Zh),ai="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts tds rcl GetSettings_rid plt ytu_pvis".split(" ");
function bi(){return Q("csi_on_gel")||!!Kh().useGel}
function ci(){var a=Kh();if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function di(a,b){vg.call(this,1,arguments)}
t(di,vg);function ei(a,b){vg.call(this,1,arguments)}
t(ei,vg);var fi=new wg("aft-recorded",di),gi=new wg("timing-sent",ei);var hi={vc:!0},ii=!1;
function ji(){Jh().yt_lt="hot_bg";if(bi()){var a="hot_bg";var b=ci();if(b.gelInfos)b.gelInfos.info_yt_lt=!0;else{var c={};b.gelInfos=(c.info_yt_lt=!0,c)}if("yt_lt"in Xh){b=Xh.yt_lt;0<=Ja(Yh,b)&&(a=!!a);"yt_lt"in $h&&"string"===typeof a&&(a=$h.yt_lt+a.toUpperCase());b=b.split(".");for(var d=c={},e=0;e<b.length-1;e++){var f=b[e];d[f]={};d=d[f]}d[b[b.length-1]]=a;a=Rh({},c)}else 0<=Ja(ai,"yt_lt")||(a=new Wh("Unknown label logged with GEL CSI"),a.params={label:"yt_lt"},fe(a)),a=void 0;a&&bi()&&(b=ci(),
"gelInfos"in b||(b.gelInfos={}),Rh(b.gelInfos,a),b=Lh(),c=Object.keys(a).join(""),Ph("info_"+c+"_"+b)||(a.clientActionNonce=b,Mh("latencyActionInfo",a)))}}
function ki(){if(!bi()){var a=Hh(),b=Jh(),c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&ya(a[f])){var d=f.slice(1);if(d in hi){var e=La(a[f],function(l){return Math.round(l-c)});
b["all_"+d]=e.join()}delete a[f]}e=O("CSI_SERVICE_NAME","youtube");var f={v:2,s:e,action:O("TIMING_ACTION",void 0)};d=ji.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var g=window.location.protocol+z("ytplayer.config.assets.js");(g=X.getEntriesByName?X.getEntriesByName(g)[0]:null)?b.h5jse=Math.round(b.h5jse-g.responseEnd):delete b.h5jse}a.aft=Gh();Ih()&&"youtube"==e&&(ji(),e=a.vc,g=a.pbs,delete a.aft,b.aft=Math.round(g-e));for(var h in b)"_"!=h.charAt(0)&&(f[h]=b[h]);a.ps=T();h={};e=[];for(var k in a)"_"!=
k.charAt(0)&&(g=Math.round(a[k]-c),h[k]=g,e.push(k+"."+g));f.rt=e.join(",");(a=z("ytdebug.logTiming"))&&a(f,h);Fh(f,!!b.ap);Bg(gi,new ei(h.aft+(d||0),void 0))}}
A(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||va,X);function li(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function mi(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return ni(a)}
function ni(a,b,c){if(Ba(a)){b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function oi(a,b,c,d){if(Ba(a)&&!ya(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
;function pi(a){a=void 0===a?!1:a;K.call(this);this.f=new M(a);Sc(this,Ga(Tc,this.f))}
C(pi,K);pi.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
pi.prototype.j=function(a,b){this.g||this.f.M.apply(this.f,arguments)};function qi(a,b,c){pi.call(this);this.h=a;this.i=b;this.l=c}
t(qi,pi);function ri(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(hd(a),d.i))}}
qi.prototype.m=function(){this.i=this.h=null;pi.prototype.m.call(this)};function si(a){K.call(this);this.f=a;this.f.subscribe("command",this.qa,this);this.h={};this.j=!1}
t(si,K);m=si.prototype;m.start=function(){this.j||this.g||(this.j=!0,ri(this.f,"RECEIVING"))};
m.qa=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=A(this.Qa,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&ti(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=ui(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=vi(a,c))&&this.j&&!this.g&&ri(this.f,a,c))}}};
m.Qa=function(a,b){this.j&&!this.g&&ri(this.f,a,this.ea(a,b))};
m.ea=function(a,b){if(null!=b)return{value:b}};
function ti(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
m.m=function(){var a=this.f;a.g||Fd(a.f,"command",this.qa,this);this.f=null;for(var b in this.h)ti(this,b);K.prototype.m.call(this)};function wi(a,b){si.call(this,b);this.i=a;this.start()}
t(wi,si);wi.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
wi.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function ui(a,b){switch(a){case "loadVideoById":return b=ni(b),[b];case "cueVideoById":return b=ni(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=oi(b),[b];case "cuePlaylist":return b=oi(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function vi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
wi.prototype.ea=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return si.prototype.ea.call(this,a,b)};
wi.prototype.m=function(){si.prototype.m.call(this);delete this.i};function xi(a,b,c){K.call(this);var d=this;c=c||O("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.w="*";this.i=c;this.sessionId=null;this.channel="widget";this.B=!!a;this.o=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.B&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.w=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Ja(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.o)}
t(xi,K);xi.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.w)}catch(e){P(e,"WARNING")}}};
xi.prototype.m=function(){window.removeEventListener("message",this.o);K.prototype.m.call(this)};function yi(){var a=this.g=new xi(!!O("WIDGET_ID_ENFORCE")),b=A(this.Na,this);a.j=b;a.l=null;this.g.channel="widget";if(a=O("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
m=yi.prototype;m.Na=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,zi(this,a)),this.j[a]=!0)):this.la(a,b,c)};
m.la=function(){};
function zi(a,b){return A(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.wa=function(){this.l=!0;this.sendMessage("initialDelivery",this.fa());this.sendMessage("onReady");F(this.i,this.ra,this);this.i=[]};
m.fa=function(){return null};
function Ai(a,b){a.sendMessage("infoDelivery",b)}
m.ra=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.ra({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.g=null};function Bi(a){yi.call(this);this.f=a;this.h=[];this.addEventListener("onReady",A(this.Ka,this));this.addEventListener("onVideoProgress",A(this.Ua,this));this.addEventListener("onVolumeChange",A(this.Va,this));this.addEventListener("onApiChange",A(this.Pa,this));this.addEventListener("onPlaybackQualityChange",A(this.Ra,this));this.addEventListener("onPlaybackRateChange",A(this.Sa,this));this.addEventListener("onStateChange",A(this.Ta,this));this.addEventListener("onWebglSettingsChanged",A(this.Wa,
this))}
t(Bi,yi);m=Bi.prototype;m.la=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&li(a)){var d=b;if(Ba(d[0])&&!ya(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=ni.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=mi.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=oi.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);li(a)&&Ai(this,this.fa())}};
m.Ka=function(){var a=A(this.wa,this);this.g.f=a};
m.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
m.fa=function(){if(!this.f)return null;var a=this.f.getApiInterface();Oa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0==e.search("get")||0==e.search("is")){var f=0;0==e.search("get")?f=3:0==e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=B()/1E3;return b};
m.Ta=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:B()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Ai(this,a)};
m.Ra=function(a){Ai(this,{playbackQuality:a})};
m.Sa=function(a){Ai(this,{playbackRate:a})};
m.Pa=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Va=function(){Ai(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
m.Ua=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:B()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Ai(this,a)};
m.Wa=function(){var a={sphericalProperties:this.f.getSphericalProperties()};Ai(this,a)};
m.dispose=function(){yi.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function Ci(a,b,c){K.call(this);this.f=a;this.i=c;this.j=V(window,"message",A(this.l,this));this.h=new qi(this,a,b);Sc(this,Ga(Tc,this.h))}
t(Ci,K);Ci.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
Ci.prototype.m=function(){Qf(this.j);this.f=null;K.prototype.m.call(this)};function Di(){var a=Za(Ei),b;return ud(new L(function(c,d){a.onSuccess=function(e){se(e)?c(e):d(new Fi("Request failed, status="+e.status,"net.badstatus",e))};
a.onError=function(e){d(new Fi("Unknown request error","net.unknown",e))};
a.O=function(e){d(new Fi("Request timed out","net.timeout",e))};
b=Ce("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof vd&&b.abort();
return sd(c)})}
function Fi(a,b){D.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
t(Fi,D);function Gi(){this.g=0;this.f=null}
Gi.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),nd(a)?a:Hi(a)):2===this.g&&b?(a=b.call(c,this.f),nd(a)?a:Ii(a)):this};
Gi.prototype.getValue=function(){return this.f};
Gi.prototype.$goog_Thenable=!0;function Ii(a){var b=new Gi;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function Hi(a){var b=new Gi;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function Ji(a){D.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ki;this.isTimeout=a instanceof Fi&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof vd}
t(Ji,D);Ji.prototype.name="BiscottiError";function Ki(){D.call(this,"Biscotti ID is missing from server")}
t(Ki,D);Ki.prototype.name="BiscottiMissingError";var Ei={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Li=null;function ce(){if("1"===Ta(ae(),"args","privembed"))return sd(Error("Biscotti ID is not available in private embed mode"));Li||(Li=ud(Di().then(Mi),function(a){return Ni(2,a)}));
return Li}
function Mi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ki;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ki;a=a.id;de(a);Li=Hi(a);Oi(18E5,2);return a}
function Ni(a,b){var c=new Ji(b);de("");Li=Ii(c);0<a&&Oi(12E4,a-1);throw c;}
function Oi(a,b){R(function(){ud(Di().then(Mi,function(c){return Ni(b,c)}),va)},a)}
function Pi(){try{var a=z("yt.ads.biscotti.getId_");return a?a():ce()}catch(b){return sd(b)}}
;function Qi(a){if("1"!==Ta(ae(),"args","privembed")){a&&be();try{Pi().then(function(){},function(){}),R(Qi,18E5)}catch(b){P(b)}}}
;var Z=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Ri(){this.f=O("ALT_PREF_COOKIE_NAME","PREF");var a=Tb.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
m=Ri.prototype;m.get=function(a,b){Si(a);Ti(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){Si(a);Ti(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
m.remove=function(a){Si(a);Ti(a);delete Z[a]};
m.save=function(){Qg(this.f,this.dump(),63072E3)};
m.clear=function(){for(var a in Z)delete Z[a]};
m.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Ti(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Si(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ui(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
wa(Ri);var Vi=null,Wi=null,Xi=null,Yi={};function Zi(a){var b=a.id;a=a.ve_type;var c=ug++;a=new sg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Yi[b]=a;b=ch();c=bh();b&&c&&Lg(b,c,[a])}
function $i(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(dh(b,a),a=bh()))for(var c in Yi){var d=Yi[c];d&&Lg(b,a,[d])}}
function aj(a){Yi[a.id]=new sg({trackingParams:a.tracking_params})}
function bj(a){var b=ch(),c=Yi[a.id];if(b&&c){a=Mg;c={csn:b,ve:tg(c),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};var d={ca:void 0,P:b};"UNDEFINED_CSN"==b?Ng("visualElementGestured",c,d):rg("visualElementGestured",c,a,d)}}
function cj(a){a=a.ids;var b=ch();if(b)for(var c=0;c<a.length;c++){var d=Yi[a[c]];if(d){var e=Mg;d={csn:b,ve:tg(d),eventType:1};var f={ca:void 0,P:b};"UNDEFINED_CSN"==b?Ng("visualElementShown",d,f):rg("visualElementShown",d,e,f)}}}
;y("yt.setConfig",N,void 0);y("yt.config.set",N,void 0);y("yt.setMsg",Se,void 0);y("yt.msgs.set",Se,void 0);y("yt.logging.errors.log",Qe,void 0);
y("writeEmbed",function(){var a=O("PLAYER_CONFIG",void 0);Qi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=O("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);O("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");b="player";b="string"===typeof b?Zb(b):b;var d=Ch+"_"+(b[Ca]||(b[Ca]=++Da)),e=Bh[d];e&&(void 0===f||f)?e.loadNewVideoConfig(a):(e=new mh(b,d,a,void 0),Bh[d]=e,df("player-added",e.api),Sc(e,Ga(Dh,e)));a=e.api;
Vi=a;a.addEventListener("onScreenChanged",$i);a.addEventListener("onLogClientVeCreated",Zi);a.addEventListener("onLogServerVeCreated",aj);a.addEventListener("onLogVeClicked",bj);a.addEventListener("onLogVesShown",cj);var f=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?Xi=new Bi(a):O("ENABLE_POST_API")&&"string"===typeof f&&"string"===typeof c&&(Wi=new Ci(window.parent,f,c),Xi=new wi(a,Wi.h));c=$d("BG_P");Gf(c)&&(O("BG_I")||O("BG_IU"))&&(Cf=!0,Bf.initialize(O("BG_I",null),O("BG_IU",null),c,Ff,void 0));
wf()},void 0);
y("yt.www.watch.ads.restrictioncookie.spr",function(a){Ke(a+"mac_204?action_fcts=1");return!0},void 0);
var dj=ee(function(){var a=Hh(),b;(b=!Q("use_first_tick"))||(b=!("ol"in Hh()));if(b)if(b="ol",X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b)),b=T(),a.ol&&(a._ol=a._ol||[a.ol],a._ol.push(b)),a.ol=b,b=ci(),b.gelTicks&&(b.gelTicks.tick_ol=!0),T(),bi()?(b=Lh(),Ph("tick_ol_"+b)||Mh("latencyActionTicked",{tickName:"ol",clientActionNonce:b},{timestamp:void 0}),b=!0):b=!1,b)O("TIMING_AFT_KEYS",["ol"]).includes("ol")&&(b=Gh(),ii||(Bg(fi,new di(Math.round(b-a._start),void 0)),ii=!0));else if(!z("yt.timing.pingSent_")&&
(b=O("TIMING_ACTION",void 0),a=Hh(),z("ytglobal.timingready_")&&b&&a._start&&(b=Gh()))){ii||(Bg(fi,new di(Math.round(b-a._start),void 0)),ii=!0);b=!0;var c=O("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&ki()}a=Ri.getInstance();c=!!((Ui("f"+(Math.floor(119/31)+1))||0)&67108864);b=1<window.devicePixelRatio;document.body&&Xc(document.body,"exp-invert-logo")&&(b&&!Xc(document.body,"inverted-hdpi")?(d=document.body,d.classList?d.classList.add("inverted-hdpi"):
Xc(d,"inverted-hdpi")||(e=Vc(d),Wc(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi")))):!b&&Xc(document.body,"inverted-hdpi")&&Yc());c!=b&&(c="f"+(Math.floor(119/31)+1),d=Ui(c)||0,d=b?d|67108864:d&-67108865,0==d?delete Z[c]:(b=d.toString(16),Z[c]=b.toString()),a.save())}),ej=ee(function(){var a=Vi;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();O("PL_ATT")&&Bf.dispose();a=0;for(var b=uf.length;a<b;a++){var c=uf[a];if(!isNaN(c)){var d=z("yt.scheduler.instance.cancelJob");d?d(c):S(c)}}uf.length=0;of("//static.doubleclick.net/instream/ad_status.js");vf=!1;N("DCLKSTAT",0);Uc(Xi,Wi);if(a=Vi)a.removeEventListener("onScreenChanged",$i),a.removeEventListener("onLogClientVeCreated",Zi),a.removeEventListener("onLogServerVeCreated",aj),a.removeEventListener("onLogVeClicked",bj),a.removeEventListener("onLogVesShown",
cj),a.destroy();Yi={}});
window.addEventListener?(window.addEventListener("load",dj),window.addEventListener("unload",ej)):window.attachEvent&&(window.attachEvent("onload",dj),window.attachEvent("onunload",ej));Ia("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||Hf);Ia("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||If);Ia("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||xf);
Ia("yt.player.exports.navigate",z("yt.player.exports.navigate")||eh);Ia("yt.util.activity.init",z("yt.util.activity.init")||Uf);Ia("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||Yf);Ia("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||Vf);}).call(this);
