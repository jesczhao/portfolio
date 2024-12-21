(window.webpackJsonp=window.webpackJsonp||[]).push([[2,8],{107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.clone=function(e){var t=e.title,n=e.description,r=e.base,a=e.canonical,o=e.meta,i=e.link,l=e.auto;try{return JSON.parse(JSON.stringify({title:t,description:n,base:r,canonical:a,meta:o,link:i,auto:l}))}catch(e){return{}}},t.defaults=function e(t,n){return Object.keys(n).reduce((function(a,o){return t.hasOwnProperty(o)?"object"===r(t[o])&&!Array.isArray(t[o])&&t[o]&&e(t[o],n[o]):t[o]=n[o],t}),t)},t.forEach=function(e,t){e&&e.length&&Array.prototype.slice.call(e).forEach(t)}},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.render=g;var o=n(0),i=p(o),l=p(n(1)),c=p(n(109)),u=n(107),s=n(112);function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],r="link"===e?"href":"content";return Object.keys(t).forEach((function(a){var o=t[a];"string"!=typeof o?Object.keys(o).forEach((function(t){(Array.isArray(o[t])?o[t]:[o[t]]).forEach((function(o){var i;null!==o&&n.push((y(i={tagName:e},a,t),y(i,r,o),i))}))})):n.push(y({tagName:e},a,o))})),n}function b(e){return[].concat(h("meta",e.meta),h("link",e.link))}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=0,n=[];function r(e){var n=e.tagName,r=m(e,["tagName"]);return"meta"===n?i.default.createElement("meta",a({},r,{key:t++,"data-rdm":!0})):"link"===n?i.default.createElement("link",a({},r,{key:t++,"data-rdm":!0})):null}return e.title&&n.push(i.default.createElement("title",{key:t++},e.title)),b(e).reduce((function(e,t){return e.push(r(t)),e}),n)}var v=function(e){function t(){return f(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props.children,t=i.default.Children.count(e);return 1===t?i.default.Children.only(e):t?i.default.createElement("div",null,this.props.children):null}}]),t}(o.Component);v.propTypes={title:l.default.oneOfType([l.default.string,l.default.func]),description:l.default.oneOfType([l.default.string,l.default.func]),canonical:l.default.oneOfType([l.default.string,l.default.func]),base:l.default.string,meta:l.default.objectOf(l.default.oneOfType([l.default.string,l.default.objectOf(l.default.oneOfType([l.default.string,l.default.arrayOf(l.default.string)]))])),link:l.default.objectOf(l.default.objectOf(l.default.oneOfType([l.default.string,l.default.arrayOf(l.default.string)]))),auto:l.default.objectOf(l.default.bool)};var w=(0,c.default)((function(e){for(var t={},n={title:void 0,description:void 0,canonical:void 0},r=!0,a=function(){r=e[o].hasOwnProperty("extend");var a=e[o],i=(0,u.clone)(e[o]);["title","description","canonical"].forEach((function(e){a.hasOwnProperty(e)&&("function"==typeof a[e]?n[e]=a[e](n[e]):void 0===n[e]&&(n[e]=a[e]))})),(0,u.defaults)(t,i)},o=e.length-1;r&&o>=0;o--)a();return"string"==typeof n.title&&(t.title=n.title),"string"==typeof n.description&&(0,u.defaults)(t,{meta:{name:{description:n.description}}}),"string"==typeof n.canonical&&(0,u.defaults)(t,{link:{rel:{canonical:n.canonical}}}),t.auto&&t.auto.ograph&&function(e){e.meta||(e.meta={});e.meta.property||(e.meta.property={});var t=e.meta.property;t&&(e.title&&!t["og:title"]&&(t["og:title"]=e.title),e.hasOwnProperty("description")&&!t["og:description"]&&(t["og:description"]=e.description),e.hasOwnProperty("canonical")&&!t["og:url"]&&(t["og:url"]=e.canonical))}(t),t}),(function(e){s.canUseDOM&&("string"==typeof e.title&&(document.title=e.title),(0,s.insertDocumentMeta)(b(e)))}))(v);w.renderAsReact=function(){return g(w.rewind())},t.default=w},109:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n(0),o=r(a),i=r(n(110)),l=r(n(111));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s=[],p=void 0;function f(){p=e(s.map((function(e){return e.props}))),d.canUseDOM?t(p):n&&(p=n(p))}var d=function(e){function t(){return c(this,t),u(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return p},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=p;return p=void 0,s=[],e},t.prototype.shouldComponentUpdate=function(e){return!l(e,this.props)},t.prototype.componentWillMount=function(){s.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},t.prototype.render=function(){return o.createElement(r,this.props)},t}(a.Component);return d.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",d.canUseDOM=i.canUseDOM,d}}},110:function(e,t,n){var r;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},111:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var u=o[c];if(!l(u))return!1;var s=e[u],p=t[u];if(!1===(a=n?n.call(r,s,p,u):void 0)||void 0===a&&s!==p)return!1}return!0}},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0,t.removeDocumentMeta=o,t.insertDocumentMeta=function(e){o(),(0,r.forEach)(e,i)};var r=n(107);t.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement);function a(e){e.parentNode.removeChild(e)}function o(){(0,r.forEach)(document.querySelectorAll("head [data-rdm]"),a)}function i(e){var t=e.tagName,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["tagName"]),r=document.createElement(t);for(var a in n)e.hasOwnProperty(a)&&r.setAttribute(a,e[a]);r.setAttribute("data-rdm",""),document.getElementsByTagName("head")[0].appendChild(r)}},113:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),i=n(1),l=n.n(i),c=n(6),u=n(48),s=n(24),p=n(4),f=n(5),d=["className","urlHead","data","large"];function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h=function(e){var t=e.className,n=e.urlHead,r=e.data,a=e.large,i=y(e,d),l=r.demo?r.id:"",c=r.demo?"".concat(n,"/").concat(l):void 0,f=r.url||void 0,h=r.caption||r.title,b=r.img,g=r.imgFull||r.img,v=r.demo?void 0:f||g;return o.a.createElement("div",m({className:"".concat(a?"col-lg-12":""," ").concat(t)},Object(p.a)(i)),o.a.createElement("div",{className:"content"},o.a.createElement("p",{className:"title"},r.title),r.demo&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.f,{id:l,to:c,title:h},o.a.createElement(u.a,{title:h,src:b})),o.a.createElement(s.a,{large:!0,keyword:"Demo Video",to:c})),!r.demo&&r.url&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.f,{href:v,title:h},o.a.createElement(u.a,{title:h,src:b})),o.a.createElement(s.a,{large:!0,keyword:"Live Demo",href:v})),!r.demo&&!r.url&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.f,{href:v,title:h},o.a.createElement(u.a,{title:h,src:b})),o.a.createElement(s.a,{large:!0,keyword:"View Screenshot",href:v}))))};h.displayName="DemoItemUnstyled",h.propTypes={className:l.a.string,urlHead:l.a.string,data:l.a.object,large:l.a.bool},h.defaultProps={className:"",urlHead:"",data:{},large:!1};var b,g,v=Object(c.a)(h)(r||(b=["\n  margin: 15px auto;\n  border-radius: 2px;\n\n  .content {\n    background-color: ",";\n    padding: 10px;\n    position: relative;\n    transition: all 0.3s ease-in-out;\n\n    > a > .imageloader {\n      & > img, & > .preloader {\n        ","\n        margin: 0 auto;\n      }\n      & > .preloader {\n        ","\n      }\n    }\n\n    p.title {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    &:hover {\n      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.35);\n      transform: translate(0, -10px);\n      opacity: 1;\n\n      p.title {\n        font-size: 1rem;\n        white-space: normal;\n        position: absolute;\n      }\n\n      .imageloader {\n        margin-top: 2.5rem;\n      }\n\n      .badge {\n        display: block;\n        z-index: 10;\n      }\n\n      &::after {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        background: #202121;\n        opacity: 0.3;\n        z-index: 0;\n      }\n    }\n\n    .badge {\n      display: none;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n    }\n\n    .title {\n      font-weight: bold;\n      background: ",";\n      color: ",";\n      padding: 2px 5px;\n      opacity: 0.7;\n      transition: font-size 0.5s ease-in-out;\n    }\n  \n    .tags {\n      margin-top: 5px;\n      text-align: left;\n\n      .badge {\n          margin-right:5px;\n      }\n    }\n  }\n"],g||(g=b.slice(0)),r=Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(g)}}))),f.c,(function(e){return e.large?"\n          height: auto;\n        ":"\n          height: 150px;\n          width: 280px;\n        "}),(function(e){return e.large?"\n          @media (min-width: 768px) {\n            height: 500px;\n          }\n          @media (min-width: 576px) and (max-width: 768px) {\n            height: 300px;\n          }\n          @media (max-width: 576px) {\n            height: 100px;\n          }\n        ":""}),f.j,f.e);t.default=v},115:function(e,t,n){"use strict";var r,a=n(0),o=n.n(a),i=n(1),l=n.n(i),c=n(6),u=n(24),s=n(4),p=["className","data"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=function(e){var t=e.className,n=e.data,r=d(e,p);return o.a.createElement("p",f({className:t},Object(s.a)(r)),n.period,o.a.createElement(u.e,null,n.title),n.url&&o.a.createElement(u.f,{href:n.url,icon:!0}),o.a.createElement("span",{className:"keywords"},n.keywords&&n.keywords.map((function(e,t){return o.a.createElement(u.a,{key:t,keyword:e})}))))};m.displayName="ProjectItemUnstyled",m.propTypes={className:l.a.string,data:l.a.object},m.defaultProps={className:"",data:{}};var y,h,b=Object(c.a)(m)(r||(y=["\n  margin: .5rem 0 1.2rem;\n  position: relative;\n\n  .keywords {\n    display: block;\n    position: absolute;\n    top: -20px;\n    left: 125px;\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n  }\n\n  &:hover {\n    .keywords {\n      opacity: 1;\n    }\n  }\n"],h||(h=y.slice(0)),r=Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(h)}}))));t.a=b},129:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),i=n(6),l=n(1),c=n.n(l),u=n(108),s=n.n(u),p=n(113),f=n(115),d=n(4),m=n(24),y=n(42);var h=function(e){var t=Object(d.d)(e);return o.a.createElement(s.a,t,o.a.createElement("div",{className:"container-fluid ".concat(e.className)},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-9"},o.a.createElement(m.i,{className:"projects",theme:"info",title:"Natural Language Processing (NLP) Projects"},y.k.map((function(e,t){return o.a.createElement(f.a,{key:t,data:e})}))),o.a.createElement(m.i,{theme:"info",title:"NLP Product Demo",className:"nlp-product-demo"},o.a.createElement("div",{className:"row demos"},y.j.map((function(e,t){return o.a.createElement(p.default,{key:t,data:e,urlHead:"/home",className:"col-lg-3 col-md-6 col-sm-12"})}))))),o.a.createElement("div",{className:"col-md-3"},o.a.createElement(m.i,{theme:"info",title:"NLP Skill Set"},o.a.createElement("ul",null,o.a.createElement("li",null,"Information retrieval",o.a.createElement("ul",null,o.a.createElement("li",null,"index building and compression"),o.a.createElement("li",null,"text classification and clustering"),o.a.createElement("li",null,"query search based on similarity"),o.a.createElement("li",null,"query expansion"),o.a.createElement("li",null,"web crawling"))),o.a.createElement("li",null,"Natural Language Processing",o.a.createElement("ul",null,o.a.createElement("li",null,"tokenization"),o.a.createElement("li",null,"stemmatization"),o.a.createElement("li",null,"lemmatization"),o.a.createElement("li",null,"sentence splitting"),o.a.createElement("li",null,"syntactic parsing"),o.a.createElement("li",null,"named entity extraction"),o.a.createElement("li",null,"Chinese word segmentation"),o.a.createElement("li",null,"phrase extraction"),o.a.createElement("li",null,"text chunking"))),o.a.createElement("li",null,"Computer-Aided Translation",o.a.createElement("ul",null,o.a.createElement("li",null,"spell check"),o.a.createElement("li",null,"grammatical check"),o.a.createElement("li",null,"phrase translation check"),o.a.createElement("li",null,"real-time alignment of sentence pairs")))))))))};h.displayName="Nlp",h.propTypes={title:c.a.string,description:c.a.string,keywords:c.a.string,subject:c.a.string,className:c.a.string},h.defaultProps={title:"",description:"",keywords:"",subject:"",className:""};var b,g,v=Object(i.a)(h)(r||(b=["",""],g||(g=b.slice(0)),r=Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(g)}}))),"\n  .panel-body > p {\n      position: relative;\n      margin-bottom: 1.2rem;\n  }\n  .projects {\n    p .keywords {\n      display: block;\n      position: absolute;\n      top: -20px;\n      left: 125px;\n      opacity: 0;\n      transition: opacity 0.3s ease-in-out;\n    }\n\n    p:hover {\n      .keywords {\n        opacity: 1;\n      }\n    }\n  }\n\n  .nlp-product-demo {\n    .panel-body {\n        padding: 15px 0;\n    }\n    .demos {\n        > div {\n            margin-top: 0;\n            padding: 0 7.5px;\n  \n            &:first-child {\n                padding-left: 15px;\n            }\n            &:last-child {\n                padding-right: 15px;\n            }\n        }\n    }\n  }\n\n");t.default=v}}]);