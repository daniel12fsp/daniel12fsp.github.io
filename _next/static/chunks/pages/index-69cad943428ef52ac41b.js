_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"8oxB":function(e,t){var r,n,i=e.exports={};function c(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===c||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:c}catch(e){r=c}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,a=[],l=!1,f=-1;function d(){l&&s&&(l=!1,s.length?a=s.concat(a):f=-1,a.length&&h())}function h(){if(!l){var e=u(d);l=!0;for(var t=a.length;t;){for(s=a,a=[];++f<t;)s&&s[f].run();f=-1,t=a.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function b(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new p(e,t)),1!==a.length||l||u(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=b,i.addListener=b,i.once=b,i.off=b,i.removeListener=b,i.removeAllListeners=b,i.emit=b,i.prependListener=b,i.prependOnceListener=b,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return s})),r.d(t,"default",(function(){return a}));var n=r("rePB"),i=r("nKUr"),c=r("xPX6");r("q1tI");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){var t=e.title,r=e.link;return Object(i.jsx)("div",{children:Object(i.jsxs)("a",{href:Object(c.a)(r),children:[t," "]})})}var s=!0;function a(e){var t=e.posts;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:" Premissas desse blog"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Perder o medo de escrever"}),Object(i.jsx)("li",{children:"Documentar achados com exemplos pr\xe1ticos"}),Object(i.jsx)("li",{children:"Centralizar c\xf3digos, dicas e comandos"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:" Posts "}),t.map((function(e){return Object(i.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),e.link)}))]})]})}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])},xPX6:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return i}));var n=e.cwd(),i=("".concat(n,"/pages/posts"),function(e){return"posts/".concat(e)})}).call(this,r("8oxB"))}},[["vlRD",0,1]]]);