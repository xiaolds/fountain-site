(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{546:function(e,t,n){},553:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var r=n(1),a=n.n(r),o=n(546),i=n.n(o);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var y=function(e){function t(e){var n;return s(this,t),(n=f(this,p(t).call(this,e))).isSelected=function(e){return e?" selected":""},n.onMouseEnter=function(e){var t=e.currentTarget.dataset.index,r=parseInt(t,10);isNaN(r)||n.setState({selectedIndex:r})},n.handleGoService=function(e){sessionStorage&&sessionStorage.setItem("ty-fountain-product",e)},n.goServiceDetail=function(){n.handleGoService("Home Fountain");var e=window.location.origin;window.location.href="".concat(e,"/#/service?products")},n.state={selectedIndex:0},n}return m(t,e),u(t,[{key:"render",value:function e(){var t=this,n=this.state.selectedIndex;return a.a.createElement("div",{className:"pt100"},a.a.createElement("p",{className:"page-title",onClick:this.goServiceDetail},"What We Can Do"),a.a.createElement("div",{className:"light-bg"},a.a.createElement("div",{className:"hy-friends-list"},a.a.createElement("a",{href:"#service?products",className:"hy-friends-item ".concat(0===n?"selected":""),"data-index":"0",onMouseEnter:this.onMouseEnter,onClick:function e(){return t.handleGoService("Water Screen")}},a.a.createElement("div",{className:"hy-friends-img pro1"}),a.a.createElement("h4",null,"Water Screen"),a.a.createElement("p",null,"3D Water Screen Show is a feast combined with science and creativity.")),a.a.createElement("a",{href:"#service?products",className:"hy-friends-item ".concat(1===n?"selected":""),"data-index":"1",onMouseEnter:this.onMouseEnter,onClick:function e(){return t.handleGoService("Water Curtain")}},a.a.createElement("div",{className:"hy-friends-img pro2"}),a.a.createElement("h4",null,"Water Curtain"),a.a.createElement("p",null,"it brings infinite fun and vitality to interior environment, and fashion to plazas and parks.")),a.a.createElement("a",{href:"#service?products",className:"hy-friends-item ".concat(2===n?"selected":""),"data-index":"2",onMouseEnter:this.onMouseEnter,onClick:function e(){return t.handleGoService("Water Fountain")}},a.a.createElement("div",{className:"hy-friends-img pro3"}),a.a.createElement("h4",null,"Water Fountain"),a.a.createElement("p",null,"We are transforming static water into dynamic, pouring soul into it, and companioning it with multiple lighting effects.")),a.a.createElement("a",{href:"#service?products",className:"hy-friends-item ".concat(3===n?"selected":""),"data-index":"3",onMouseEnter:this.onMouseEnter,onClick:function e(){return t.handleGoService("Music Fountain")}},a.a.createElement("div",{className:"hy-friends-img pro4"}),a.a.createElement("h4",null,"Music Fountain"),a.a.createElement("p",null,"A way to deeply involve with the spectator through the most fundamental and fascinating substance on earth.")))))}}]),t}(r.Component);y.displayName="SlideBanner",y.propTypes={},y.defaultProps={}}}]);