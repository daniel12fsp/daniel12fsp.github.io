_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{A8RH:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/criar-uma-aplicacao-js-que-roda-em-container-docker",function(){return n("FP2a")}])},FP2a:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return b}));var t=n("rePB");function o(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=n("q1tI"),r=n.n(s);function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){c(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.a.createContext({}),N=function(e){var a=r.a.useContext(l),n=a;return e&&(n="function"===typeof e?e(a):m(m({},a),e)),n},i={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=N(n),l=t,d=p["".concat(s,".").concat(l)]||p[l]||i[l]||o;return n?r.a.createElement(d,m(m({ref:a},c),{},{components:n})):r.a.createElement(d,m({ref:a},c))}));function k(e,a){var n=arguments,t=a&&a.mdxType;if("string"===typeof e||t){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c.mdxType="string"===typeof e?e:t,s[1]=c;for(var m=2;m<o;m++)s[m]=n[m];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}function f(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?f(Object(n),!0).forEach((function(a){Object(t.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}d.displayName="MDXCreateElement";var g={};function b(e){var a=e.components,n=o(e,["components"]);return k("wrapper",y(y(y({},g),n),{},{components:a,mdxType:"MDXLayout"}),k("h1",null,"#1 - Criar uma aplicacao js que roda em container docker"),k("h2",null,"Aplica\xe7\xe3o gen\xe9rica que vamos gerar uma imagem"),k("pre",y({},{className:"language-js"}),k("code",y({parentName:"pre"},{className:"language-js"}),k("span",y({parentName:"code"},{className:"token comment"}),"/* salvar o arquivo ./app.js */"),"\n\n",k("span",y({parentName:"code"},{className:"token keyword"}),"const")," http ",k("span",y({parentName:"code"},{className:"token operator"}),"=")," ",k("span",y({parentName:"code"},{className:"token function"}),"require"),k("span",y({parentName:"code"},{className:"token punctuation"}),"("),k("span",y({parentName:"code"},{className:"token string"}),'"http"'),k("span",y({parentName:"code"},{className:"token punctuation"}),")"),k("span",y({parentName:"code"},{className:"token punctuation"}),";"),"\n",k("span",y({parentName:"code"},{className:"token keyword"}),"const")," url ",k("span",y({parentName:"code"},{className:"token operator"}),"=")," ",k("span",y({parentName:"code"},{className:"token function"}),"require"),k("span",y({parentName:"code"},{className:"token punctuation"}),"("),k("span",y({parentName:"code"},{className:"token string"}),'"url"'),k("span",y({parentName:"code"},{className:"token punctuation"}),")"),k("span",y({parentName:"code"},{className:"token punctuation"}),";"),"\n",k("span",y({parentName:"code"},{className:"token keyword"}),"const")," port ",k("span",y({parentName:"code"},{className:"token operator"}),"=")," process",k("span",y({parentName:"code"},{className:"token punctuation"}),"."),k("span",y({parentName:"code"},{className:"token property-access"}),"env"),k("span",y({parentName:"code"},{className:"token punctuation"}),"."),k("span",y({parentName:"code"},{className:"token constant"}),"PORT")," ",k("span",y({parentName:"code"},{className:"token operator"}),"||")," ",k("span",y({parentName:"code"},{className:"token number"}),"3000"),k("span",y({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",k("span",y({parentName:"code"},{className:"token keyword"}),"const")," server ",k("span",y({parentName:"code"},{className:"token operator"}),"=")," http",k("span",y({parentName:"code"},{className:"token punctuation"}),"."),k("span",y({parentName:"code"},{className:"token method function property-access"}),"createServer"),k("span",y({parentName:"code"},{className:"token punctuation"}),"("),k("span",y({parentName:"code"},{className:"token punctuation"}),"("),k("span",y({parentName:"code"},{className:"token parameter"}),"req",k("span",y({parentName:"span"},{className:"token punctuation"}),",")," res"),k("span",y({parentName:"code"},{className:"token punctuation"}),")")," ",k("span",y({parentName:"code"},{className:"token arrow operator"}),"=>")," ",k("span",y({parentName:"code"},{className:"token punctuation"}),"{"),"\n  res",k("span",y({parentName:"code"},{className:"token punctuation"}),"."),k("span",y({parentName:"code"},{className:"token method function property-access"}),"writeHead"),k("span",y({parentName:"code"},{className:"token punctuation"}),"("),k("span",y({parentName:"code"},{className:"token number"}),"200"),k("span",y({parentName:"code"},{className:"token punctuation"}),",")," ",k("span",y({parentName:"code"},{className:"token punctuation"}),"{")," ",k("span",y({parentName:"code"},{className:"token string"}),'"Content-Type"'),k("span",y({parentName:"code"},{className:"token operator"}),":")," ",k("span",y({parentName:"code"},{className:"token string"}),'"text/html"')," ",k("span",y({parentName:"code"},{className:"token punctuation"}),"}"),k("span",y({parentName:"code"},{className:"token punctuation"}),")"),k("span",y({parentName:"code"},{className:"token punctuation"}),";"),"\n  res",k("span",y({parentName:"code"},{className:"token punctuation"}),"."),k("span",y({parentName:"code"},{className:"token property-access"}),"statusCode")," ",k("span",y({parentName:"code"},{className:"token operator"}),"=")," ",k("span",y({parentName:"code"},{className:"token number"}),"200"),k("span",y({parentName:"code"},{className:"token punctuation"}),";"),"\n  res",k("span",y({parentName:"code"},{className:"token punctuation"}),"."),k("span",y({parentName:"code"},{className:"token method function property-access"}),"write"),k("span",y({parentName:"code"},{className:"token punctuation"}),"("),k("span",y({parentName:"code"},{className:"token template-string"}),k("span",y({parentName:"span"},{className:"token template-punctuation string"}),"`"),k("span",y({parentName:"span"},{className:"token string"}),"<h1>Hello World</h1>"),k("span",y({parentName:"span"},{className:"token template-punctuation string"}),"`")),k("span",y({parentName:"code"},{className:"token punctuation"}),")"),k("span",y({parentName:"code"},{className:"token punctuation"}),";"),"\n  res",k("span",y({parentName:"code"},{className:"token punctuation"}),"."),k("span",y({parentName:"code"},{className:"token method function property-access"}),"end"),k("span",y({parentName:"code"},{className:"token punctuation"}),"("),k("span",y({parentName:"code"},{className:"token punctuation"}),")"),k("span",y({parentName:"code"},{className:"token punctuation"}),";"),"\n",k("span",y({parentName:"code"},{className:"token punctuation"}),"}"),k("span",y({parentName:"code"},{className:"token punctuation"}),")"),k("span",y({parentName:"code"},{className:"token punctuation"}),";"),"\n\nserver",k("span",y({parentName:"code"},{className:"token punctuation"}),"."),k("span",y({parentName:"code"},{className:"token method function property-access"}),"listen"),k("span",y({parentName:"code"},{className:"token punctuation"}),"("),"port",k("span",y({parentName:"code"},{className:"token punctuation"}),",")," ",k("span",y({parentName:"code"},{className:"token punctuation"}),"("),k("span",y({parentName:"code"},{className:"token punctuation"}),")")," ",k("span",y({parentName:"code"},{className:"token arrow operator"}),"=>")," ",k("span",y({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",k("span",y({parentName:"code"},{className:"token console class-name"}),"console"),k("span",y({parentName:"code"},{className:"token punctuation"}),"."),k("span",y({parentName:"code"},{className:"token method function property-access"}),"log"),k("span",y({parentName:"code"},{className:"token punctuation"}),"("),k("span",y({parentName:"code"},{className:"token template-string"}),k("span",y({parentName:"span"},{className:"token template-punctuation string"}),"`"),k("span",y({parentName:"span"},{className:"token string"}),"Server listening on the port "),k("span",y({parentName:"span"},{className:"token interpolation"}),k("span",y({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"port",k("span",y({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),k("span",y({parentName:"span"},{className:"token template-punctuation string"}),"`")),k("span",y({parentName:"code"},{className:"token punctuation"}),")"),k("span",y({parentName:"code"},{className:"token punctuation"}),";"),"\n",k("span",y({parentName:"code"},{className:"token punctuation"}),"}"),k("span",y({parentName:"code"},{className:"token punctuation"}),")"),k("span",y({parentName:"code"},{className:"token punctuation"}),";"),"\n")),k("h2",null,"Criar Dockerfile(Receita da aplica\xe7\xe3o)"),k("pre",y({},{className:"language-dockerfile"}),k("code",y({parentName:"pre"},{className:"language-dockerfile"}),k("span",y({parentName:"code"},{className:"token comment"}),"# salvar  ./Dockerfile\\n"),"\n",k("span",y({parentName:"code"},{className:"token keyword"}),"FROM")," node",k("span",y({parentName:"code"},{className:"token punctuation"}),":"),"slim\n\n",k("span",y({parentName:"code"},{className:"token keyword"}),"WORKDIR")," /usr/home\n\n",k("span",y({parentName:"code"},{className:"token keyword"}),"COPY")," app.js .\n\n",k("span",y({parentName:"code"},{className:"token keyword"}),"EXPOSE")," 3000\n\n",k("span",y({parentName:"code"},{className:"token keyword"}),"CMD")," ",k("span",y({parentName:"code"},{className:"token punctuation"}),"["),k("span",y({parentName:"code"},{className:"token string"}),'"node"'),k("span",y({parentName:"code"},{className:"token punctuation"}),",")," ",k("span",y({parentName:"code"},{className:"token string"}),'"app.js"'),k("span",y({parentName:"code"},{className:"token punctuation"}),"]"),"\n\n")),k("h2",null,"Buildar/Construir a imagem docker"),k("pre",y({},{className:"language-dockerfile"}),k("code",y({parentName:"pre"},{className:"language-dockerfile"}),k("span",y({parentName:"code"},{className:"token comment"}),"# Na pasta aonde est\xe1 o Dockerfile e app.js"),"\ndocker build ",k("span",y({parentName:"code"},{className:"token punctuation"}),"-"),"t generic_app",k("span",y({parentName:"code"},{className:"token punctuation"}),":"),"v1\n\n")),k("h2",null,"Executar aplica\xe7\xe3o constu\xedda"),k("pre",y({},{className:"language-bash"}),k("code",y({parentName:"pre"},{className:"language-bash"}),"docker run --name app -p ",k("span",y({parentName:"code"},{className:"token number"}),"3000"),":3000 -it generic_app:v1\n")),k("h2",null,"Bom vc ser\xe1 capaz de ver nesse link"),k("p",null,"http://localhost:3000/"))}b.isMDXComponent=!0},Qetd:function(e,a,n){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},rePB:function(e,a,n){"use strict";function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}n.d(a,"a",(function(){return t}))}},[["A8RH",0,1]]]);