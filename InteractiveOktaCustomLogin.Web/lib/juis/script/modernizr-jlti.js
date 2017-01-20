/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-csscalc-csstransforms-dataset-flexbox-flexboxtweener-geolocation-input-inputtypes-mediaqueries-queryselector-serviceworker-svg-setclasses-shiv !*/
!function(e,t,n){function r(e,t){return typeof e===t}function a(){var e,t,n,a,i,o,s;for(var l in b)if(b.hasOwnProperty(l)){if(e=[],t=b[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)o=e[i],s=o.split("."),1===s.length?Modernizr[s[0]]=a:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=a),y.push((a?"":"no-")+s.join("-"))}}function i(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?S.className.baseVal=t:S.className=t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=o(x?"svg":"body"),e.fake=!0),e}function l(e,n,r,a){var i,l,c,u,d="modernizr",f=o("div"),p=s();if(parseInt(r,10))for(;r--;)c=o("div"),c.id=a?a[r]:d+(r+1),f.appendChild(c);return i=o("style"),i.type="text/css",i.id="s"+d,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),l=n(f,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):f.parentNode.removeChild(f),!!l}function c(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var a;for(var i in e)if(e[i]in t)return n===!1?e[i]:(a=t[e[i]],r(a,"function")?d(a,n||t):a);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var a=t.length;if("CSS"in e&&"supports"in e.CSS){for(;a--;)if(e.CSS.supports(p(t[a]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];a--;)i.push("("+p(t[a])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,a,i){function s(){d&&(delete F.style,delete F.modElem)}if(i=r(i,"undefined")?!1:i,!r(a,"undefined")){var l=m(e,a);if(!r(l,"undefined"))return l}for(var d,f,p,h,g,v=["modernizr","tspan","samp"];!F.style&&v.length;)d=!0,F.modElem=o(v.shift()),F.style=F.modElem.style;for(p=e.length,f=0;p>f;f++)if(h=e[f],g=F.style[h],c(h,"-")&&(h=u(h)),F.style[h]!==n){if(i||r(a,"undefined"))return s(),"pfx"==t?h:!0;try{F.style[h]=a}catch(y){}if(F.style[h]!=g)return s(),"pfx"==t?h:!0}return s(),!1}function g(e,t,n,a,i){var o=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+j.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?h(s,t,a,i):(s=(e+" "+q.join(o+" ")+o).split(" "),f(s,t,n))}function v(e,t,r){return g(e,n,n,t,r)}var y=[],b=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("queryselector","querySelector"in t&&"querySelectorAll"in t),Modernizr.addTest("serviceworker","serviceWorker"in navigator),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var S=t.documentElement,x="svg"===S.nodeName.toLowerCase();x||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,c(t)}function i(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function o(e,n,r){if(n||(n=t),d)return n.createElement(e);r||(r=i(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function s(e,n){if(e||(e=t),d)return e.createDocumentFragment();n=n||i(e);for(var a=n.frag.cloneNode(),o=0,s=r(),l=s.length;l>o;o++)a.createElement(s[o]);return a}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function c(e){e||(e=t);var r=i(e);return!b.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||l(e,r),e}var u,d,f="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,d=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:d,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:s,addElements:a};e.html5=b,c(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof e?e:this,t);var E=o("input"),w="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),T={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)T[t[n]]=!!(t[n]in E);return T.list&&(T.list=!(!o("datalist")||!e.HTMLDataListElement)),T}(w);var k="search tel url email datetime date month week time datetime-local number range color".split(" "),_={};Modernizr.inputtypes=function(e){for(var r,a,i,o=e.length,s="1)",l=0;o>l;l++)E.setAttribute("type",r=e[l]),i="text"!==E.type&&"style"in E,i&&(E.value=s,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&E.style.WebkitAppearance!==n?(S.appendChild(E),a=t.defaultView,i=a.getComputedStyle&&"textfield"!==a.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,S.removeChild(E)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?E.checkValidity&&E.checkValidity()===!1:E.value!=s)),_[e[l]]=!!i;return _}(k);var N=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=N,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=o("a");return n.style.cssText=e+N.join(t+e),!!n.style.length});var z=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=z,Modernizr.addTest("mediaqueries",z("only all"));var A="Moz O ms Webkit",j=C._config.usePrefixes?A.split(" "):[];C._cssomPrefixes=j;var q=C._config.usePrefixes?A.toLowerCase().split(" "):[];C._domPrefixes=q;var M={elem:o("modernizr")};Modernizr._q.push(function(){delete M.elem});var F={style:M.elem.style};Modernizr._q.unshift(function(){delete F.style}),C.testAllProps=g,C.testAllProps=v,Modernizr.addTest("backgroundsize",v("backgroundSize","100%",!0)),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),Modernizr.addTest("flexboxtweener",v("flexAlign","end",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),Modernizr.addTest("dataset",function(){var e=o("div");return e.setAttribute("data-a-b","c"),!(!e.dataset||"c"!==e.dataset.aB)}),a(),i(y),delete C.addTest,delete C.addAsyncTest;for(var P=0;P<Modernizr._q.length;P++)Modernizr._q[P]();e.Modernizr=Modernizr}(window,document);