(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{536:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n(1),o=n.n(r),i=n(99);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var b=[{img:"thumb-1"},{img:"thumb-2"},{img:"thumb-3"},{img:"thumb-4"},{img:"thumb-5"},{img:"thumb-6"}],h=function(e){function t(e){var n;return c(this,t),(n=p(this,f(t).call(this,e))).handleGoService=function(e){sessionStorage&&sessionStorage.setItem("ty-fountain-project",e)},n.goServiceDetail=function(e){n.handleGoService(e||i.a.projectsData[0].title);var t=n.props.setProps;if(t)t(e);else{var r=window.location.origin;window.location.href="".concat(r,"/#/project")}},n.state={},n}return m(t,e),l(t,[{key:"render",value:function e(){var t=this,n=i.a.projectsData;return o.a.createElement("div",{className:"pt100"},o.a.createElement("p",{className:"page-title",onClick:function e(){return t.goServiceDetail()}},"Recent Projects"),o.a.createElement("div",{style:w.container},o.a.createElement("div",{style:w.silder,className:"w1200 main-wrapper"},n.map(function(e,n){return o.a.createElement("span",{className:"dib",style:w.wrapper},o.a.createElement("div",{key:n,style:w.item,className:"".concat(e.thumb),onClick:function n(){return t.goServiceDetail(e.title)}}),o.a.createElement("h3",{style:w.title},e.title))}))))}}]),t}(r.Component);h.displayName="Feature",h.propTypes={},h.defaultProps={};var w={container:{padding:"80px 0",background:"#F6F7F9"},wrapper:{width:"260px",margin:"10px",verticalAlign:"top",cursor:"pointer"},title:{whiteSpace:"normal"},item:{width:"260px",height:"220px"},silder:{overflowX:"auto",whiteSpace:"nowrap"}}}}]);