(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{531:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,o){var r=new XMLHttpRequest,a=[],i=[],c={},u=function(){return{ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(JSON.parse(r.responseText))},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:u,headers:{keys:function(){return a},entries:function(){return i},get:function(e){return c[e.toLowerCase()]},has:function(e){return e.toLowerCase()in c}}}};for(var l in r.open(t.method||"get",e,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){a.push(t=t.toLowerCase()),i.push([t,n]),c[t]=c[t]?c[t]+","+n:n}),n(u())},r.onerror=o,r.withCredentials="include"==t.credentials,t.headers)r.setRequestHeader(l,t.headers[l]);r.send(t.body||null)})}},532:function(e,t,n){"use strict";var o=n(1),r=n.n(o),a=n(533),i=n.n(a),c=n(534),u=n.n(c);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function b(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function w(e,t){return(w=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var g=function(e){function t(e){var n;return f(this,t),(n=b(this,d(t).call(this,e))).handleChange=function(e){var t=e.target,o=t.name,r=t.value;n.setState(s({},o,r))},n.check=function(){var e=n.state,t=e.name,o=e.email;return!!t&&!!o},n.handleSubmit=function(){n.setState({submit:!0});var e=n.state,t,o,r,a,c={name:e.name,email:e.email,mobile:e.mobile,content:e.content};n.check()&&(n.setState({btnTxt:"Loading..."}),i()("https://now-express.qiuhanwei.now.sh/sendemail",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Object.keys(c).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(c[e])}).join("&")}).then(function(e){return e.text()}).then(function(e){var t=JSON.parse(e);console.log(t),n.setState({btnTxt:t.msg||"Slow network, try again later~"})}))},n.state={name:"",email:"",mobile:"",content:"",submit:!1,btnTxt:"Tell Us Your Request"},n}return y(t,e),p(t,[{key:"render",value:function e(){var t=this.state,n=t.name,o=t.email,a=t.mobile,i=t.content,c=t.submit,u=t.btnTxt;return r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("div",{className:"send-email-form-left"},r.a.createElement("div",{className:"left"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your Name*",className:"form-input full-width",value:n,onChange:this.handleChange}),c&&!n&&r.a.createElement("p",{className:"err-info"},"Name is required")),r.a.createElement("div",{className:"right"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your Email*",className:"form-input full-width",value:o,onChange:this.handleChange}),c&&!o&&r.a.createElement("p",{className:"err-info"},"Email is required"))),r.a.createElement("input",{type:"text",name:"mobile",placeholder:"Your Mobile",className:"send-email-form-right form-input",value:a,onChange:this.handleChange}),r.a.createElement("textarea",{cols:"40",rows:"10",value:i,placeholder:"Your Requirements...",className:"form-textarea",onChange:this.handleChange,name:"content"}),r.a.createElement("div",{className:"form-submit"},r.a.createElement("button",{onClick:this.handleSubmit,className:"form-submit-btn"},u||"Loading...")))}}]),t}(r.a.Component);t.a=g},533:function(e,t,n){e.exports=window.fetch||(window.fetch=n(531).default||n(531))},534:function(e,t,n){},563:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var o=n(1),r=n.n(o),a=n(532);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var h=function(e){function t(e){var n;return c(this,t),(n=s(this,m(t).call(this,e))).goServiceDetail=function(){var e=window.location.origin;window.location.href="".concat(e,"/#/contact")},n.state={},n}return p(t,e),l(t,[{key:"render",value:function e(){return r.a.createElement("div",{style:d.container},r.a.createElement("p",{className:"page-title",onClick:this.goServiceDetail},"CONTACT US"),r.a.createElement(a.a,null),r.a.createElement("div",{className:"contact-bg",onClick:this.goServiceDetail},r.a.createElement("div",{className:"w1200 main-wrapper"},r.a.createElement("h1",{className:"contact-txt"},"The BEST FOUNTAIN EXPERTS  \n                          YOU EVER NEED"),r.a.createElement("a",{href:"#contact",className:"banner-link"},"CONTACT US"))))}}]),t}(o.Component);h.displayName="Introduction";var d={container:{margin:"0 auto",padding:"80px 0 0"},title:{color:"rgba(0,0,0,0.8)",lineHeight:"38px",textAlign:"center",fontWeight:"bold",fontSize:"40px",margin:"0 0 24px"},desc:{color:"rgba(0,0,0,.6)",fontSize:"14px",lineHeight:"30px",textAlign:"center"}}}}]);