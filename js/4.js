(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{551:function(e,t,n){e.exports={"next-sr-only":"FeatureDisplay--next-sr-only--vZTj0Yv",container:"FeatureDisplay--container--2RYSPmU",items:"FeatureDisplay--items--2590FSB",item:"FeatureDisplay--item--1c0ggF3",title:"FeatureDisplay--title--l-RsRgL",image:"FeatureDisplay--image--16UpRiW"}},558:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E});var r=n(228),o=n(101),a=n(1),i=n.n(a),c=n(551),s=n.n(c),l=n(153),u=n(99);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function b(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function w(e,t){return(w=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var g=o.a.Row,S=o.a.Col,E=function(e){function t(e){var n;return p(this,t),(n=b(this,d(t).call(this,e))).limitCharts=function(e){return e.length>160&&(e=e.substring(0,160)+"..."),e},n.handleGoService=function(e){sessionStorage&&sessionStorage.setItem("ty-fountain-service",e)},n.goServiceDetail=function(){n.handleGoService(u.a.data[0].title);var e=window.location.origin;window.location.href="".concat(e,"/#/service?solutions")},n.state={},n}return h(t,e),y(t,[{key:"render",value:function e(){var t=this;return i.a.createElement("div",{className:"pt100"},i.a.createElement("p",{className:"page-title",onClick:this.goServiceDetail},"Services & Solutions"),i.a.createElement("div",{className:s.a.container},i.a.createElement("div",{className:s.a.items},i.a.createElement(g,{gutter:"20",wrap:!0},u.a.data.map(function(e,n){return i.a.createElement(S,{key:n,xxs:"24",s:"12",l:"8"},i.a.createElement("div",{className:s.a.item},i.a.createElement(l.a,{icon:e.icon,className:"icon",size:"2x"}),i.a.createElement("h3",{className:s.a.title},e.title),i.a.createElement("p",{className:"description"},t.limitCharts(e.description)),i.a.createElement("a",{className:"link",href:"#service?solutions",onClick:function n(){return t.handleGoService(e.title)}},"More")))})))))}}]),t}(a.Component);E.displayName="FeatureDisplay",E.propTypes={},E.defaultProps={}}}]);