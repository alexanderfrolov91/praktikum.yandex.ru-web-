!function(n){function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(t){return n[t]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=1089)}({102:function(n,t,r){"use strict";function e(n){var t=n.document,r=t.getElementsByTagName("head")[0];return r||(r=t.createElement("head"),t.documentElement.appendChild(r)),r}r.d(t,"a",(function(){return e}))},1089:function(n,t,r){"use strict";r.r(t);var e=r(371),o=r(496),a=r(358),i=r(261);Object(a.a)(),e.a._cleanup=a.a,e.a.init=o.a,e.a.preloadScripts=i.a},112:function(n,t,r){"use strict";r.d(t,"a",(function(){return f}));var e=r(82),o=r(19),a="undefined"===typeof window?void 0:window.performance,i=a&&Object(o.a)(a.now),u=a&&a.timing&&a.timing.navigationStart?a.timing.navigationStart:Object(e.a)(),c=0,f=i?function(){return a.now()}:function(){return n=Object(e.a)()-u,c=Math.max(n,c);var n}},12:function(n,t){function r(){for(;c.length;)c[0](),c.shift()}function e(n){this.a=f,this.b=void 0,this.f=[];var t=this;try{n((function(n){!function n(t,r){if(t.a==f){if(r==t)throw new TypeError;var e=!1;try{var o=r&&r.then;if(null!=r&&"object"==typeof r&&"function"==typeof o)return void o.call(r,(function(r){e||n(t,r),e=!0}),(function(n){e||a(t,n),e=!0}))}catch(u){return void(e||a(t,u))}t.a=0,t.b=r,i(t)}}(t,n)}),(function(n){a(t,n)}))}catch(r){a(t,r)}}function o(n){return new e((function(t){t(n)}))}function a(n,t){if(n.a==f){if(t==n)throw new TypeError;n.a=1,n.b=t,i(n)}}function i(n){!function(n){c.push(n),1==c.length&&u()}((function(){if(n.a!=f)for(;n.f.length;){var t=(o=n.f.shift())[0],r=o[1],e=o[2],o=o[3];try{0==n.a?e("function"==typeof t?t.call(void 0,n.b):n.b):1==n.a&&("function"==typeof r?e(r.call(void 0,n.b)):o(n.b))}catch(a){o(a)}}}))}var u,c=[];u=function(){setTimeout(r)};var f=2;e.prototype.g=function(n){return this.c(void 0,n)},e.prototype.c=function(n,t){var r=this;return new e((function(e,o){r.f.push([n,t,e,o]),i(r)}))},e.resolve=o,e.reject=function(n){return new e((function(t,r){r(n)}))},e.race=function(n){return new e((function(t,r){for(var e=0;e<n.length;e+=1)o(n[e]).c(t,r)}))},e.all=function(n){return new e((function(t,r){function e(r){return function(e){i[r]=e,(a+=1)==n.length&&t(i)}}var a=0,i=[];0==n.length&&t(i);for(var u=0;u<n.length;u+=1)o(n[u]).c(e(u),r)}))},e.prototype.then=e.prototype.c,e.prototype.catch=e.prototype.g,n.exports=window.Promise||e},130:function(n,t,r){"use strict";r.d(t,"a",(function(){return a}));var e=r(219),o=r(281),a=function(n,t,r){var a=Object(o.a)("1.0-"+t,r);return"https://"+e.a+a+"js/"+n}},134:function(n,t,r){"use strict";function e(n,t){for(var r=new RegExp("[?&]"+n+"=*([^&#]*)","g"),e=null,o=null;o=r.exec(t);)e=o;return e&&"string"===typeof e[1]?decodeURIComponent(e[1]):void 0}r.d(t,"a",(function(){return e}))},135:function(n,t,r){"use strict";function e(n){if(void 0!==n){var t=n&&n.match&&n.match(o);if(t&&t[1])return parseInt(t[1],10);throw new Error("paramsObject.version must be a string like [1.0-0] or undefined")}}r.d(t,"a",(function(){return e}));var o=/1\.0-(\d+)/},136:function(n,t,r){"use strict";r.d(t,"a",(function(){return e}));var e="other"},148:function(n,t,r){"use strict";r.d(t,"a",(function(){return e}));var e={service:r(162).a,useSendBeacon:!0,logUrl:"https://log.strm.yandex.ru/log",version:"1.0-5836"}},149:function(n,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"e",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return c}));var e="videoplayer",o=e+"-bundle-url",a=e+"-version",i=e+"-debug-logcalls",u=e+"-debug-logevents",c=e+"-debug-loginternals"},162:function(n,t,r){"use strict";r.d(t,"a",(function(){return e}));var e="StreamPlayer"},163:function(n,t,r){"use strict";var e;r.d(t,"a",(function(){return e})),function(n){n.FRAME_API="video-player-iframe-api-bundle.js",n.FRAME_API_MODERN="video-player-iframe-api-bundle.modern.js",n.STREAM_PLAYER="stream_player_js.js",n.STREAM_PLAYER_MODERN="stream_player_js.modern.js",n.FRAME_PLAYER="player.js"}(e||(e={}))},164:function(n,t,r){"use strict";r.d(t,"a",(function(){return o}));var e=r(218),o=Object(e.a)([{id:5836,percent:100}])},188:function(n,t,r){"use strict";r.d(t,"a",(function(){return o}));var e=r(31),o=function(n){return Object(e.a)(n.navigator.sendBeacon)}},189:function(n,t,r){"use strict";function e(n,t,r){void 0===r&&(r=window);var e=Object(o.a)(r),u=t(Object(i.a)(n,e));if(u)return console&&Object(a.a)(console.warn)&&console.warn("using "+n+"="+u+" from query"),u;var c=t(function(n){try{var t=localStorage.getItem(n);if(!t)return;return t}catch(r){return}}(n));return c?(console&&Object(a.a)(console.warn)&&console.warn("using "+n+"="+c+" from localStorage"),c):void 0}r.d(t,"a",(function(){return e}));var o=r(50),a=r(19),i=r(134)},19:function(n,t,r){"use strict";function e(n){return"function"===typeof n||"Function"===Object(o.a)(n)}r.d(t,"a",(function(){return e}));var o=r(61)},190:function(n,t,r){"use strict";r.d(t,"a",(function(){return e})),r.d(t,"b",(function(){return o}));var e="/yandex-video-player-iframe-api-bundles/",o="/yandex-video-player-iframe-api-bundles-stable/"},202:function(n,t,r){"use strict";function e(n,t){return void 0===t&&(t=window),Object(o.a)(i.e,(function(n){return n&&parseInt(n,10)}),t)||Object(a.a)(n)}r.d(t,"a",(function(){return e}));var o=r(189),a=r(135),i=r(149)},207:function(n,t,r){"use strict";r.d(t,"a",(function(){return e}));r(334);var e=window.Ya.streamPlayer},218:function(n,t,r){"use strict";function e(n){for(var t=100*Object(o.a)(),r=0,e=0;e<n.length;e++)if(t<(r+=n[e].percent))return n[e].id;return n[0].id}r.d(t,"a",(function(){return e}));var o=r(55)},219:function(n,t,r){"use strict";r.d(t,"a",(function(){return e}));var e="yastatic.net"},220:function(n,t,r){"use strict";function e(n){return Object(o.a)(n).filter((function(n){var t=n[1];return Boolean(t)})).map((function(n){return n[0]}))}r.d(t,"a",(function(){return e}));var o=r(65)},23:function(n,t,r){"use strict";var e;r.d(t,"a",(function(){return e})),function(n){n.DEFAULT="DEFAULT",n.MEDIA="MEDIA",n.NETWORK_MEDIA="NETWORK_MEDIA",n.NETWORK_PLAYER="NETWORK_PLAYER",n.NETWORK_TIMEOUT="NETWORK_TIMEOUT",n.NO_CODECS="NO_CODECS",n.CANNOT_PLAY="CANNOT_PLAY",n.UNSUPPORTED_ENV="UNSUPPORTED_ENV",n.EXCEPTION="EXCEPTION",n.ADS="ADS",n.CONFIG="CONFIG",n.REGIONAL="REGIONAL",n.DRM="DRM"}(e||(e={}))},236:function(n,t,r){"use strict";function e(n,t){var r=n.version,e=n.useAbdBundle,v=Object(a.a)(l.a,Object(o.a)(t)),p=Object(d.a)(r,t),b=c.b&&Object(c.a)(p||f.a)?u.a.FRAME_API_MODERN:u.a.FRAME_API,O=p&&p<=330?"stream_player.min.js":b;return v&&Object(i.a)(v)?v:p?Object(s.a)(O,p,e):Object(s.a)(O,f.a,e)}r.d(t,"a",(function(){return e}));var o=r(50),a=r(134),i=r(257),u=r(163),c=r(83),f=r(164),s=r(130),d=r(202),l=r(149)},256:function(n,t,r){"use strict";function e(n){var t;try{t=JSON.stringify(n)}catch(r){}return t}r.d(t,"a",(function(){return e}))},257:function(n,t,r){"use strict";r.d(t,"a",(function(){return o}));var e=new RegExp(["https?://","(\\w+\\.)?","(?:","(?:yandex|yastatic|yandex-team|yastat)\\.","(?:ru|net)\\/","|","localhost\\/",")",".*"].join(""),"i"),o=function(n){return e.test(n.trim())}},260:function(n,t,r){"use strict";function e(n,t){void 0===n&&(n="a"),void 0===t&&(t="z");var r,e,o,a=(r=n.charCodeAt(0),e=t.charCodeAt(0),o=r+Object(f.a)()*(e+1-r),o=Math.floor(o));return String.fromCharCode(a)}function o(){return(o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n}).apply(this,arguments)}function a(n){var t=n.dropCacheOnRetry,r=void 0!==t&&t,a=n.onBeforeLoad,f=void 0===a?u.a:a,d=n.retries,l=void 0===d?0:d;if(!n.checkLoad||!n.checkLoad()){var v=f,p=0;return r&&l>0&&(v=function(n){if(f(n),p>0){var t=-1===n.src.indexOf("?")?"?":"&",r=function(n){for(var t=[],r=0;r<n;r++)t.push(e());return t.join("")}(4);n.src+=t+r}p++}),function n(t){var r=t.src,e=t.win,a=void 0===e?window:e,f=t.charset,d=void 0===f?"utf-8":f,l=t.async,v=void 0===l||l,p=t.retries,b=void 0===p?0:p,O=t.onRetry,y=void 0===O?u.a:O,m=t.retryDelay,h=void 0===m?0:m,j=t.checkLoad,E=void 0===j?s:j,g=t.onBeforeLoad,w=void 0===g?u.a:g,_=t.onLoad,A=void 0===_?u.a:_,S=t.onError,N=void 0===S?u.a:S,L=a.document.createElement("script"),I=function(e){b>0?(y(e),n(o({},t,{src:r,retries:b-1}))):N(e),Object(c.a)(L)};L.type="text/javascript",L.async=v,L.onload=function(){return E(L)?A():I(new Error("checkLoad for "+r+" failed"))},L.onerror=function(n){try{a.setTimeout((function(){I(n)}),h)}catch(n){}},L.src=r,L.charset=d,w(L),Object(i.a)(a).appendChild(L)}(o({},n,{onBeforeLoad:v}))}n.onLoad&&n.onLoad()}r.d(t,"a",(function(){return a}));var i=r(102),u=r(5),c=r(51),f=r(55),s=function(n){return!0}},261:function(n,t,r){"use strict";(function(n){function e(t){var r=document.createElement("link");return r.rel="preload",r.as="script",new n((function(n){r.onload=n,r.href=t,r.crossOrigin="anonymous",b.appendChild(r)})).then(i.a)}function o(t){void 0===t&&(t={});var r=Object(p.a)(t.version)||d.a,o=s.b&&Object(s.a)(r),a=t.features,i=void 0===a?{}:a,u=Object(c.a)(i),b=Object(f.a)({featuresEnabled:u,shouldLoadModern:o}),y=[Object(v.a)(t,window),Object(l.a)(O,r,t.useAbdBundle),Object(l.a)(b+".js",r,t.useAbdBundle)];return n.all(y.map(e)).then((function(){return y}))}r.d(t,"b",(function(){return e})),r.d(t,"a",(function(){return o}));var a=r(102),i=r(5),u=r(163),c=r(220),f=r(357),s=r(83),d=r(164),l=r(130),v=r(236),p=r(202),b=Object(a.a)(window),O=u.a.FRAME_PLAYER}).call(this,r(12))},27:function(n,t,r){"use strict";function e(n){return"string"===typeof n}r.d(t,"a",(function(){return e}))},281:function(n,t,r){"use strict";r.d(t,"a",(function(){return o}));var e=r(190),o=function(n,t){return""+(t?e.b:e.a)+n+"/"}},282:function(n,t,r){"use strict";function e(n){if(n.indexOf(o.a.NativeUI)>-1)return{enableSkin:!1,playerScriptFileName:a.a.NATIVE_UI};if(0===n.length)return{enableSkin:!0,playerScriptFileName:a.a.DEFAULT};var t=n.some((function(n){return i.indexOf(n)>-1})),r=n.some((function(n){return u.indexOf(n)>-1}));return t||r?n.every((function(n){return i.indexOf(n)>-1}))?{enableSkin:!0,playerScriptFileName:a.a.KINOPOISK}:{enableSkin:!0,playerScriptFileName:r?a.a.FULL:a.a.DEFAULT}:{enableSkin:!0,playerScriptFileName:a.a.DEFAULT}}r.d(t,"a",(function(){return e}));var o=r(45),a=r(49),i=[o.a.Xray,o.a.SkippableFragments,o.a.CloseButton],u=[o.a.SkippableFragments,o.a.Xray,o.a.NonStop,o.a.Recommendations]},31:function(n,t,r){"use strict";function e(n){if(!n||!n.toString)return!1;var t=n.toString();return/\[native code\]/.test(t)||/\/\* source code not available \*\//.test(t)}r.d(t,"a",(function(){return e}))},334:function(n,t,r){"use strict";var e=window;e.Ya||(e.Ya={}),e.Ya.streamPlayer||(e.Ya.streamPlayer={})},342:function(n,t,r){"use strict";(function(n){function e(){return(e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n}).apply(this,arguments)}function o(t){return new n((function(n,r){Object(a.a)(e({},t,{onLoad:n,onError:r}))}))}r.d(t,"a",(function(){return o}));var a=r(260)}).call(this,r(12))},357:function(n,t,r){"use strict";function e(n){var t=n.featuresEnabled,r=n.shouldLoadModern,e=Object(a.a)(t).playerScriptFileName;return r?function(n){switch(n){case o.a.DEFAULT:return o.b.DEFAULT;case o.a.FULL:return o.b.FULL;case o.a.NATIVE_UI:return o.b.NATIVE_UI;case o.a.KINOPOISK:return o.b.KINOPOISK;default:return n}}(e):e}r.d(t,"a",(function(){return e}));var o=r(49),a=r(282)},358:function(n,t,r){"use strict";(function(n){function e(t){Object(s.a)(t);try{var r=Object(f.a)(t,window);return void 0===a&&(a=Object(u.a)({src:r,retries:3,dropCacheOnRetry:!0,onBeforeLoad:function(n){n.crossOrigin="anonymous"},checkLoad:function(){return Object(i.a)(c.a.create)}})),{promise:a,bundleUrl:r}}catch(e){return{promise:n.reject(e),bundleUrl:""}}}function o(){delete c.a.create,a=void 0}r.d(t,"b",(function(){return e})),r.d(t,"a",(function(){return o}));var a,i=r(19),u=r(342),c=r(207),f=r(236),s=r(261)}).call(this,r(12))},371:function(n,t,r){"use strict";r.d(t,"a",(function(){return e}));r(334);var e=window.Ya.streamPlayer},40:function(n,t,r){"use strict";function e(n){void 0===n&&(n=window);try{return(n.navigator||{}).userAgent||""}catch(t){return""}}r.d(t,"a",(function(){return e}))},45:function(n,t,r){"use strict";var e;r.d(t,"a",(function(){return e})),function(n){n.TestFeature="TestFeature",n.NativeUI="NativeUI",n.SkippableFragments="SkippableFragments",n.Xray="Xray",n.NonStop="NonStop",n.Recommendations="Recommendations",n.CloseButton="CloseButton"}(e||(e={}))},48:function(n,t,r){"use strict";function e(n){if("function"===typeof Object.keys)return Object.keys(n);var t=[];for(var r in n)Object(o.a)(n,r)&&t.push(r);return t}r.d(t,"a",(function(){return e}));var o=r(62)},49:function(n,t,r){"use strict";var e,o;r.d(t,"a",(function(){return e})),r.d(t,"b",(function(){return o})),function(n){n.FULL="stream_player_js.full",n.DEFAULT="stream_player_js",n.NATIVE_UI="stream_player_js.native_ui",n.KINOPOISK="stream_player_js.kinopoisk"}(e||(e={})),function(n){n.FULL="stream_player_js.full.modern",n.DEFAULT="stream_player_js.modern",n.NATIVE_UI="stream_player_js.native_ui.modern",n.KINOPOISK="stream_player_js.kinopoisk.modern"}(o||(o={}))},496:function(n,t,r){"use strict";(function(n){function e(){return(e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n}).apply(this,arguments)}function o(n,t){if(null==n)return{};var r,e,o={},a=Object.keys(n);for(e=0;e<a.length;e++)r=a[e],t.indexOf(r)>=0||(o[r]=n[r]);return o}r.d(t,"a",(function(){return b}));var a=r(40),i=r(50),u=r(5),c=r(256),f=r(136),s=r(162),d=r(148),l=r(23),v=r(207),p=r(358),b=function(t){var r=t.version,b=t.handlers,O=void 0===b?{}:b,y=o(t,["version","handlers"]),m=O.onReady,h=void 0===m?u.a:m,j=O.onError,E=void 0===j?u.a:j,g=o(O,["onReady","onError"]),w=Object(p.b)({version:r,useAbdBundle:t.useAbdBundle,features:t.features}),_=w.promise,A=w.bundleUrl;return _.catch((function(r){return function(n){var t=n.bundleUrl,e=n.params,o=(e.source||{}).additionalParams,u=(void 0===o?{}:o).from||f.a;try{var v,p=new XMLHttpRequest;p.open("POST",d.a.logUrl+"?StreamPlayer=1.0-5836&event=LoaderInitError",!0),p.send(JSON.stringify({service:s.a,tags:(v={},v.event_LoaderInitError=1,v),data:{bundleUrl:t,params:Object(c.a)(e),category:l.a.NETWORK_PLAYER},labels:{version:"1.0-5836",from:u},timestamp:Date.now(),eventType:"fatal",eventName:"LoaderInitError",location:Object(i.a)(window),userAgent:Object(a.a)()}))}catch(r){}}({bundleUrl:A,params:t}),n.reject(r)})).then((function(){return new n((function(n,t){var r,o=e({},g,{onReady:function(t){h(t),n(r)},onError:function(n){E(n),n&&n.isFatal&&t(n)}});r=v.a.create(e({},y,{handlers:o}))}))}))}}).call(this,r(12))},5:function(n,t,r){"use strict";function e(){}r.d(t,"a",(function(){return e}))},50:function(n,t,r){"use strict";function e(n){if(n&&n.location){var t=n.location;return"function"===typeof t.toString?t.toString():t.href||""}return""}r.d(t,"a",(function(){return e}))},51:function(n,t,r){"use strict";function e(n){if(n){var t=n.parentElement;t&&t.removeChild(n)}}r.d(t,"a",(function(){return e}))},55:function(n,t,r){"use strict";r.d(t,"a",(function(){return u}));var e=r(31),o=!Object(e.a)(Math.random)||Math.random()===Math.random(),a=r(112),i=Date.now()*Object(a.a)()%2147483647,u=o?function(){return((i=16807*i%2147483647)-1)/2147483646}:function(){return Math.random()}},61:function(n,t,r){"use strict";r.d(t,"a",(function(){return a}));var e={}.toString,o=/\[object (\w+)\]/,a=function(n){var t=e.call(n);if(!t)return null;var r=t.match(o);if(!r)return null;var a=r[1];return a||null}},62:function(n,t,r){"use strict";function e(n,t){return Object.prototype.hasOwnProperty.call(n,t)}r.d(t,"a",(function(){return e}))},65:function(n,t,r){"use strict";function e(n){return"function"===typeof Object.entries?Object.entries(n):Object(o.a)(n).map((function(t){return[t,n[t]]}))}r.d(t,"a",(function(){return e}));var o=r(48)},82:function(n,t,r){"use strict";r.d(t,"a",(function(){return o}));var e=r(19),o=Date&&Object(e.a)(Date.now)?function(){return Date.now()}:function(){return(new Date).getTime()}},83:function(n,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u}));var e=r(27),o=r(188),a=r(135),i=function(n){try{var t=Object(e.a)(n)?Object(a.a)(n):n;return"number"===typeof t&&t>=1410}catch(r){return!1}},u=(i("1.0-5836"),function(n){return function(n){try{if("noModule"in n.HTMLScriptElement.prototype)return!0}catch(t){}return!1}(n)&&Object(o.a)(n)}(window))}});