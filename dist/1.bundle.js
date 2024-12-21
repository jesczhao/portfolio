(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.clone=function(e){var t=e.title,n=e.description,r=e.base,o=e.canonical,a=e.meta,i=e.link,l=e.auto;try{return JSON.parse(JSON.stringify({title:t,description:n,base:r,canonical:o,meta:a,link:i,auto:l}))}catch(e){return{}}},t.defaults=function e(t,n){return Object.keys(n).reduce((function(o,a){return t.hasOwnProperty(a)?"object"===r(t[a])&&!Array.isArray(t[a])&&t[a]&&e(t[a],n[a]):t[a]=n[a],t}),t)},t.forEach=function(e,t){e&&e.length&&Array.prototype.slice.call(e).forEach(t)}},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.render=g;var a=n(0),i=s(a),l=s(n(1)),c=s(n(109)),u=n(107),f=n(112);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],r="link"===e?"href":"content";return Object.keys(t).forEach((function(o){var a=t[o];"string"!=typeof a?Object.keys(a).forEach((function(t){(Array.isArray(a[t])?a[t]:[a[t]]).forEach((function(a){var i;null!==a&&n.push((y(i={tagName:e},o,t),y(i,r,a),i))}))})):n.push(y({tagName:e},o,a))})),n}function b(e){return[].concat(h("meta",e.meta),h("link",e.link))}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=0,n=[];function r(e){var n=e.tagName,r=m(e,["tagName"]);return"meta"===n?i.default.createElement("meta",o({},r,{key:t++,"data-rdm":!0})):"link"===n?i.default.createElement("link",o({},r,{key:t++,"data-rdm":!0})):null}return e.title&&n.push(i.default.createElement("title",{key:t++},e.title)),b(e).reduce((function(e,t){return e.push(r(t)),e}),n)}var v=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props.children,t=i.default.Children.count(e);return 1===t?i.default.Children.only(e):t?i.default.createElement("div",null,this.props.children):null}}]),t}(a.Component);v.propTypes={title:l.default.oneOfType([l.default.string,l.default.func]),description:l.default.oneOfType([l.default.string,l.default.func]),canonical:l.default.oneOfType([l.default.string,l.default.func]),base:l.default.string,meta:l.default.objectOf(l.default.oneOfType([l.default.string,l.default.objectOf(l.default.oneOfType([l.default.string,l.default.arrayOf(l.default.string)]))])),link:l.default.objectOf(l.default.objectOf(l.default.oneOfType([l.default.string,l.default.arrayOf(l.default.string)]))),auto:l.default.objectOf(l.default.bool)};var w=(0,c.default)((function(e){for(var t={},n={title:void 0,description:void 0,canonical:void 0},r=!0,o=function(){r=e[a].hasOwnProperty("extend");var o=e[a],i=(0,u.clone)(e[a]);["title","description","canonical"].forEach((function(e){o.hasOwnProperty(e)&&("function"==typeof o[e]?n[e]=o[e](n[e]):void 0===n[e]&&(n[e]=o[e]))})),(0,u.defaults)(t,i)},a=e.length-1;r&&a>=0;a--)o();return"string"==typeof n.title&&(t.title=n.title),"string"==typeof n.description&&(0,u.defaults)(t,{meta:{name:{description:n.description}}}),"string"==typeof n.canonical&&(0,u.defaults)(t,{link:{rel:{canonical:n.canonical}}}),t.auto&&t.auto.ograph&&function(e){e.meta||(e.meta={});e.meta.property||(e.meta.property={});var t=e.meta.property;t&&(e.title&&!t["og:title"]&&(t["og:title"]=e.title),e.hasOwnProperty("description")&&!t["og:description"]&&(t["og:description"]=e.description),e.hasOwnProperty("canonical")&&!t["og:url"]&&(t["og:url"]=e.canonical))}(t),t}),(function(e){f.canUseDOM&&("string"==typeof e.title&&(document.title=e.title),(0,f.insertDocumentMeta)(b(e)))}))(v);w.renderAsReact=function(){return g(w.rewind())},t.default=w},109:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n(0),a=r(o),i=r(n(110)),l=r(n(111));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var f=[],s=void 0;function d(){s=e(f.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){function t(){return c(this,t),u(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return s},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,f=[],e},t.prototype.shouldComponentUpdate=function(e){return!l(e,this.props)},t.prototype.componentWillMount=function(){f.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=f.indexOf(this);f.splice(e,1),d()},t.prototype.render=function(){return a.createElement(r,this.props)},t}(o.Component);return p.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",p.canUseDOM=i.canUseDOM,p}}},110:function(e,t,n){var r;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r)}()},111:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var u=a[c];if(!l(u))return!1;var f=e[u],s=t[u];if(!1===(o=n?n.call(r,f,s,u):void 0)||void 0===o&&f!==s)return!1}return!0}},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0,t.removeDocumentMeta=a,t.insertDocumentMeta=function(e){a(),(0,r.forEach)(e,i)};var r=n(107);t.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement);function o(e){e.parentNode.removeChild(e)}function a(){(0,r.forEach)(document.querySelectorAll("head [data-rdm]"),o)}function i(e){var t=e.tagName,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["tagName"]),r=document.createElement(t);for(var o in n)e.hasOwnProperty(o)&&r.setAttribute(o,e[o]);r.setAttribute("data-rdm",""),document.getElementsByTagName("head")[0].appendChild(r)}},114:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r="\n11 years of experience developing or leading development of modern data-viz reporting platform, e-commerce \nwebsites, enterprise resource planning system, customer relationship management system, computer-aided translation workbench, \nonline bilingual dictionary, using modern front-end tech stack: React, Hooks, Redux, Typescript, Node.js, Express, Websocket,\nHTML, CSS, less, sass, styled component, Webpack, eslint, backend technologies in C#, .Net, Java, Groovy, Python Django, \nMSSQL, MYSQL, MongoDB, PostgreSQL, Memcached, RabbitMQ, AWS, Azure, and AI technologies including information retrieval, \nnatural language processing and speech recognition.\n",o={email:"jesczhao@gmail.com",phone:"650-314-3134",location:"Irvine, CA",futureLocation:"",linkedIn:"https://www.linkedin.com/in/jennifer-zhao-ca",gitHub:"https://github.com/jennifer-jz"},a={resumeDocPath:"/doc/resume.docx",resumePdfPath:"/doc/resume.pdf"}},117:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n(1),u=[],f=[];function s(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function d(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=s(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(e){t.error=e}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function p(e,t){return l.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function m(e,t){var s,d;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var m=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:p,webpack:null,modules:null},t),y=null;function h(){return y||(y=e(m.loader)),y.promise}return u.push(h),"function"==typeof m.webpack&&f.push((function(){if(e=m.webpack,"object"===r(n.m)&&e().every((function(e){return void 0!==e&&void 0!==n.m[e]})))return h();var e})),d=s=function(t){function n(r){o(this,n);var i=a(this,t.call(this,r));return i.retry=function(){i.setState({error:null,loading:!0,timedOut:!1}),y=e(m.loader),i._loadModule()},h(),i.state={error:y.error,pastDelay:!1,timedOut:!1,loading:y.loading,loaded:y.loaded},i}return i(n,t),n.preload=function(){return h()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(m.modules)&&m.modules.forEach((function(t){e.context.loadable.report(t)})),y.loading){"number"==typeof m.delay&&(0===m.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){e.setState({pastDelay:!0})}),m.delay)),"number"==typeof m.timeout&&(this._timeout=setTimeout((function(){e.setState({timedOut:!0})}),m.timeout));var t=function(){e._mounted&&(e.setState({error:y.error,loaded:y.loaded,loading:y.loading}),e._clearTimeouts())};y.promise.then((function(){t()})).catch((function(e){t()}))}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?l.createElement(m.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?m.render(this.state.loaded,this.props):null},n}(l.Component),s.contextTypes={loadable:c.shape({report:c.func.isRequired})},d}function y(e){return m(s,e)}y.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return m(d,e)};var h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return l.Children.only(this.props.children)},t}(l.Component);function b(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then((function(){if(e.length)return b(e)}))}h.propTypes={report:c.func.isRequired},h.childContextTypes={loadable:c.shape({report:c.func.isRequired}).isRequired},y.Capture=h,y.preloadAll=function(){return new Promise((function(e,t){b(u).then(e,t)}))},y.preloadReady=function(){return new Promise((function(e,t){b(f).then(e,e)}))},e.exports=y},125:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n.n(o),i=n(117),l=n.n(i),c=n(1),u=n.n(c),f=n(6),s=n(108),d=n.n(s),p=n(4),m=n(114),y=n(42),h=n(24),b=n(23),g=n(5),v="\n  .intro {\n    padding: 0 15px;\n    margin-bottom: 20px;\n\n    .name {\n        display: flex;\n        padding: 0 15px;\n    }\n\n    .description {\n        padding-left: 15px;\n        line-height: 1.5rem;\n        margin: .5rem 0 1rem;\n    }\n\n    h4 {\n        padding-left: 0;\n        margin-right: 20px;\n    }\n\n    a {\n        margin-left: 5px;\n    }\n  }\n\n  .panel {\n    .list-group {\n      margin: 12px;\n    }\n\n    .list-group-item {\n      display: list-item;\n      border: none;\n      font-weight: bold;\n      color: ".concat(g.b,";\n      padding: 7px;\n\n      .badge {\n        margin: 2px 3px;\n      }\n\n      a {\n        margin: 18px;\n      }\n    }\n  }\n\n  .product-demo .panel .panel-body {\n    overflow-x: auto;\n    padding: 15px 0;\n\n    .demos {\n      display: flex;\n      flex-wrap: nowrap;\n      padding: 0;\n  \n      > div {\n        margin-top: 0;\n        padding: 0 7.5px;\n\n        &:first-child {\n          padding-left: 15px;\n        }\n        &:last-child {\n          padding-right: 15px;\n        }\n      }\n    }\n  }\n\n\n");function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=l()({loader:function(){return n.e(11).then(n.bind(null,119))},loading:function(){return a.a.createElement(h.g,{image:!0})}}),j=l()({loader:function(){return n.e(10).then(n.bind(null,120))},loading:function(){return a.a.createElement(h.g,{image:!0})}}),x=l()({loader:function(){return n.e(13).then(n.bind(null,121))},loading:function(){return a.a.createElement(h.g,{image:!0})}}),k=l()({loader:function(){return n.e(9).then(n.bind(null,122))},loading:function(){return a.a.createElement(h.g,{image:!0})}}),P=l()({loader:function(){return n.e(12).then(n.bind(null,123))},loading:function(){return a.a.createElement(h.g,{image:!0})}}),S=function(e){var t=Object(p.d)(e),n=m.a.linkedIn,r=m.a.gitHub,i=m.b.resumeDocPath,l=m.b.resumePdfPath,c=e.match.params.activedemo,u=void 0===c?"":c,f=w(Object(o.useState)(null),2),s=f[0],g=f[1],v=Object(o.useRef)();Object(o.useEffect)((function(){if(u){var e=y.h.find((function(e){return e.id===u}));if(e){var t=Object(p.h)(e.id)||void 0;g({url:t}),O(v)}}}),[u]);var O=function(e){return window.scrollTo(0,e.current.offsetTop)};return a.a.createElement(d.a,t,a.a.createElement("div",{className:"container-fluid ".concat(e.className)},a.a.createElement("div",{className:"intro"},a.a.createElement("div",{className:"name"},a.a.createElement("h4",null,"Juanjuan Zhao (Jennifer)"),a.a.createElement(h.f,{href:l,title:"Resume"},a.a.createElement(b.a,{id:"fa-file-pdf-o"})),a.a.createElement(h.f,{href:i,title:"Resume"},a.a.createElement(b.a,{id:"fa-file-word-o"})),a.a.createElement(h.f,{href:n,title:"LinkedIn"},a.a.createElement(b.a,{id:"fa-linkedin-square"})),a.a.createElement(h.f,{href:r,title:"GitHub"},a.a.createElement(b.a,{id:"fab fa-github"}))),a.a.createElement("p",{className:"description"},m.c)),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-7"},a.a.createElement(k,{id:"Achievement",theme:"info",title:"Technical Achievement",titleUrl:"capability"}),a.a.createElement(x,{title:"Programming Languages & Tools",titleUrl:"capability"})),a.a.createElement("div",{className:"col-md-5"},a.a.createElement(E,{title:"Experience",titleUrl:"experience"}),a.a.createElement(j,{theme:"info",title:"As a Development Lead",titleUrl:"capability"}))),a.a.createElement("div",{ref:v},a.a.createElement(P,{theme:"danger",title:"Product Demo",titleUrl:"product",className:"product-demo"}))),s&&a.a.createElement(h.h,{visible:!!s,onClose:function(){return g(null)},url:s&&s.url}))};S.displayName="Home",S.propTypes={title:u.a.string,description:u.a.string,keywords:u.a.string,subject:u.a.string,className:u.a.string,match:u.a.object},S.defaultProps={title:"",description:"",keywords:"",subject:"",className:"",match:{}};var _,T,M=Object(f.a)(S)(r||(_=["",""],T||(T=_.slice(0)),r=Object.freeze(Object.defineProperties(_,{raw:{value:Object.freeze(T)}}))),v);t.default=M}}]);