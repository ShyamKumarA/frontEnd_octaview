"use strict";(self.webpackChunkmain_bt5=self.webpackChunkmain_bt5||[]).push([[832],{60832:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var o=n(25211),r=n(29439),a=n(72791),c=n(59434);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"===i(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,n,o,r=f(a);function a(){return l(this,a),r.apply(this,arguments)}return t=a,(n=[{key:"componentDidMount",value:function(){!function(e,t){if(!document.head.querySelector("#"+e)){var n=document.createElement("style");n.textContent=t,n.type="text/css",n.id=e,document.head.appendChild(n)}}(this.props.name,this.props.css)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById(this.props.name);e.parentNode.removeChild(e)}},{key:"render",value:function(){return null}}])&&u(t.prototype,n),o&&u(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(a.Component),p=function(e){var t=e.imageBackgroundColor;return"\n  body {\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_container {\n    position: fixed;\n    z-index: 5000;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    touch-action: none;\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_content {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n\n  .__react_modal_image__modal_content img, \n  .__react_modal_image__modal_content svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    -ms-transform: translate3d(-50%, -50%, 0);\n    overflow: hidden;\n  }\n\n  .__react_modal_image__medium_img {\n    max-width: 98%;\n    max-height: 98%;\n    background-color: ".concat(t,";\n  }\n\n  .__react_modal_image__large_img {\n    cursor: move;\n    background-color: ").concat(t,"\n  }\n\n  .__react_modal_image__icon_menu a {\n    display: inline-block;\n    font-size: 40px;\n    cursor: pointer;\n    line-height: 40px;\n    box-sizing: border-box;\n    border: none;\n    padding: 0px 5px 0px 5px;\n    margin-left: 10px;\n    color: white;\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  .__react_modal_image__icon_menu {\n    display: inline-block;\n    float: right;\n  }\n\n  .__react_modal_image__caption {\n    display: inline-block;\n    color: white;\n    font-size: 120%;\n    padding: 10px;\n    margin: 0;\n  }\n\n  .__react_modal_image__header {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    overflow: hidden;\n  }\n")},y=function(){return a.createElement("svg",{fill:"#ffffff",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}))},v=function(){return a.createElement("svg",{fill:"#ffffff",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.createElement("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"}))},g=function(){return a.createElement("svg",{fill:"#ffffff",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},b=function(){return a.createElement("svg",{fill:"#ffffff",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},_=function(){return a.createElement("svg",{fill:"#ffffff",height:"48",viewBox:"0 0 24 24",width:"48",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"}),a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}))},w=function(){return a.createElement("svg",{fill:"#ffffff",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0zm0 0h24v24H0V0z"}),a.createElement("path",{d:"M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z"}))};var x=function(e){return function(t){(function(e){return document.location.hostname!==new URL(e,document.location).hostname})(e)&&(t.preventDefault(),fetch(e).then((function(t){return t.ok||console.error("Failed to download image, HTTP status "+t.status+" from "+e),t.blob().then((function(t){var n=document.createElement("a");n.setAttribute("download",e.split("/").pop()),n.href=URL.createObjectURL(t),n.click()}))})).catch((function(t){console.error(t),console.error("Failed to download image from "+e)})))}},j=function(e){var t=e.image,n=e.alt,o=e.zoomed,r=e.toggleZoom,c=e.toggleRotate,i=e.onClose,l=e.enableDownload,u=e.enableZoom,s=e.enableRotate;return a.createElement("div",{className:"__react_modal_image__header"},a.createElement("span",{className:"__react_modal_image__icon_menu"},l&&a.createElement("a",{href:t,download:!0,onClick:x(t)},a.createElement(g,null)),u&&a.createElement("a",{onClick:r},o?a.createElement(v,null):a.createElement(y,null)),s&&a.createElement("a",{onClick:c},a.createElement(w,null)),a.createElement("a",{onClick:i},a.createElement(b,null))),n&&a.createElement("span",{className:"__react_modal_image__caption"},n))};function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=P(e);if(t){var r=P(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return S(this,n)}}function S(e,t){if(t&&("object"===O(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return z(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(c,e);var t,n,o,r=M(c);function c(){var e;E(this,c);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return R(z(e=r.call.apply(r,[this].concat(n))),"state",{loading:!0}),R(z(e),"handleOnLoad",(function(){e.setState({loading:!1})})),R(z(e),"handleOnContextMenu",(function(t){!e.props.contextMenu&&t.preventDefault()})),e}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,o=e.src,r=e.style,c=e.handleDoubleClick;return a.createElement("div",null,this.state.loading&&a.createElement(_,null),a.createElement("img",{id:t,className:n,src:o,style:r,onLoad:this.handleOnLoad,onDoubleClick:c,onContextMenu:this.handleOnContextMenu}))}}])&&k(t.prototype,n),o&&k(t,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(a.Component);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=L(e);if(t){var r=L(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Z(this,n)}}function Z(e,t){if(t&&("object"===T(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(c,e);var t,n,o,r=V(c);function c(){var e;H(this,c);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return A(U(e=r.call.apply(r,[this].concat(n))),"state",{move:{x:0,y:0},moveStart:void 0,zoomed:!1,rotationDeg:0}),A(U(e),"handleKeyDown",(function(t){27!==t.keyCode&&13!==t.keyCode||e.props.onClose()})),A(U(e),"getCoordinatesIfOverImg",(function(t){var n=t.changedTouches?t.changedTouches[0]:t;if("react-modal-image-img"===n.target.id){var o=e.contentEl.getBoundingClientRect();return{x:n.clientX-o.left,y:n.clientY-o.top}}})),A(U(e),"handleMouseDownOrTouchStart",(function(t){if(t.preventDefault(),!(t.touches&&t.touches.length>1)){var n=e.getCoordinatesIfOverImg(t);n||e.props.onClose(),e.state.zoomed&&e.setState((function(e){return{moveStart:{x:n.x-e.move.x,y:n.y-e.move.y}}}))}})),A(U(e),"handleMouseMoveOrTouchMove",(function(t){if(t.preventDefault(),e.state.zoomed&&e.state.moveStart&&!(t.touches&&t.touches.length>1)){var n=e.getCoordinatesIfOverImg(t);n&&e.setState((function(e){return{move:{x:n.x-e.moveStart.x,y:n.y-e.moveStart.y}}}))}})),A(U(e),"handleMouseUpOrTouchEnd",(function(t){e.setState({moveStart:void 0})})),A(U(e),"toggleZoom",(function(t){t.preventDefault(),e.setState((function(e){return{zoomed:!e.zoomed,move:e.zoomed?{x:0,y:0}:e.move}}))})),A(U(e),"toggleRotate",(function(t){t.preventDefault(),360!==e.state.rotationDeg?e.setState((function(e){return{rotationDeg:e.rotationDeg+=90}})):e.setState({rotationDeg:90})})),e}return t=c,(n=[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown,!1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.medium,o=t.large,r=t.alt,c=t.onClose,i=t.hideDownload,l=t.hideZoom,u=t.showRotate,s=t.imageBackgroundColor,f=void 0===s?"black":s,d=this.state,m=d.move,y=d.zoomed,v=d.rotationDeg;return a.createElement("div",null,a.createElement(h,{name:"__react_modal_image__lightbox",css:p({imageBackgroundColor:f})}),a.createElement("div",{className:"__react_modal_image__modal_container"},a.createElement("div",{className:"__react_modal_image__modal_content",onMouseDown:this.handleMouseDownOrTouchStart,onMouseUp:this.handleMouseUpOrTouchEnd,onMouseMove:this.handleMouseMoveOrTouchMove,onTouchStart:this.handleMouseDownOrTouchStart,onTouchEnd:this.handleMouseUpOrTouchEnd,onTouchMove:this.handleMouseMoveOrTouchMove,ref:function(t){e.contentEl=t}},y&&a.createElement(D,{id:"react-modal-image-img",className:"__react_modal_image__large_img",src:o||n,style:{transform:"translate3d(-50%, -50%, 0) translate3d(".concat(m.x,"px, ").concat(m.y,"px, 0) rotate(").concat(v,"deg)"),WebkitTransform:"translate3d(-50%, -50%, 0) translate3d(".concat(m.x,"px, ").concat(m.y,"px, 0) rotate(").concat(v,"deg)"),MsTransform:"translate3d(-50%, -50%, 0) translate3d(".concat(m.x,"px, ").concat(m.y,"px, 0) rotate(").concat(v,"deg)")},handleDoubleClick:this.toggleZoom}),!y&&a.createElement(D,{id:"react-modal-image-img",className:"__react_modal_image__medium_img",src:n||o,handleDoubleClick:this.toggleZoom,contextMenu:!n,style:{transform:"translate3d(-50%, -50%, 0) rotate(".concat(v,"deg)"),WebkitTransform:"translate3d(-50%, -50%, 0) rotate(".concat(v,"deg)"),MsTransform:"translate3d(-50%, -50%, 0) rotate(".concat(v,"deg)")}})),a.createElement(j,{image:o||n,alt:r,zoomed:y,toggleZoom:this.toggleZoom,toggleRotate:this.toggleRotate,onClose:c,enableDownload:!i,enableZoom:!l,enableRotate:!!u})))}}])&&N(t.prototype,n),o&&N(t,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(a.Component);function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function X(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Q(e);if(t){var r=Q(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return q(this,n)}}function q(e,t){if(t&&("object"===W(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return J(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(c,e);var t,n,o,r=Y(c);function c(){var e;X(this,c);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return G(J(e=r.call.apply(r,[this].concat(n))),"state",{modalOpen:!1}),G(J(e),"toggleModal",(function(){e.setState((function(e){return{modalOpen:!e.modalOpen}}))})),e}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.small,o=e.smallSrcSet,r=e.medium,c=e.large,i=e.alt,l=e.hideDownload,u=e.hideZoom,s=e.showRotate,f=e.imageBackgroundColor,d=this.state.modalOpen;return a.createElement("div",null,a.createElement("img",{className:t,style:{cursor:"pointer",maxWidth:"100%",maxHeight:"100%"},onClick:this.toggleModal,src:n,srcSet:o,alt:i}),d&&a.createElement(I,{medium:r,large:c,alt:i,onClose:this.toggleModal,hideDownload:l,hideZoom:u,showRotate:s,imageBackgroundColor:f}))}}])&&F(t.prototype,n),o&&F(t,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(a.Component),ee=n(59202),te=n(80184),ne=function(){var e=(0,c.I0)(),t=(0,c.v9)((function(e){return e.userManageReducer})).data,n=(0,c.v9)((function(e){return e.AcceptUserManageReducer})).data,i=(0,c.v9)((function(e){return e.RejectUserManageReducer})).data;console.log(i);var l=(0,a.useState)(!1),u=(0,r.Z)(l,2),s=u[0],f=u[1],d=(0,a.useState)(!1),m=(0,r.Z)(d,2),h=m[0],p=m[1],y=(0,a.useState)(null),v=(0,r.Z)(y,2),g=v[0],b=v[1];(0,a.useEffect)((function(){e((0,ee.fD)())}),[e,n]);var _=function(){f(!1)},w=function(){p(!1)};return(0,te.jsxs)(o.Zb,{children:[(0,te.jsx)(o.eW,{children:(0,te.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,te.jsx)("div",{children:(0,te.jsx)(o.ll,{tag:"h4",children:"Pending Users"})}),(0,te.jsx)("div",{className:"mt-4 mt-md-0",children:(0,te.jsxs)(o.II,{type:"select",className:"custom-select",children:[(0,te.jsx)("option",{value:"0",children:"Monthly"}),(0,te.jsx)("option",{value:"1",children:"Daily"}),(0,te.jsx)("option",{value:"2",children:"Weekly"}),(0,te.jsx)("option",{value:"3",children:"Yearly"})]})})]})}),(0,te.jsx)(o.eW,{className:"bg-light d-flex align-items-center justify-content-between"}),(0,te.jsx)("div",{className:"table-responsive",children:(0,te.jsxs)(o.iA,{className:"text-nowrap align-middle mb-0",hover:!0,children:[(0,te.jsx)("thead",{children:(0,te.jsxs)("tr",{children:[(0,te.jsx)("th",{children:"#"}),(0,te.jsx)("th",{children:"Name"}),(0,te.jsx)("th",{children:"Phone"}),(0,te.jsx)("th",{children:"Document"}),(0,te.jsx)("th",{children:"Action"})]})}),(0,te.jsx)("tbody",{children:t&&t.userData.map((function(t,n){return(0,te.jsxs)("tr",{className:"border-top",children:[(0,te.jsx)("td",{children:(0,te.jsx)("h6",{className:"mb-0",children:n+1})}),(0,te.jsx)("td",{children:(0,te.jsx)("h6",{className:"mb-0",children:t.username})}),(0,te.jsx)("td",{children:(0,te.jsx)("h6",{className:"mb-0",children:t.phone})}),(0,te.jsx)("td",{className:"mb-0",children:t&&(0,te.jsx)("div",{style:{width:"80px"},children:(0,te.jsx)($,{small:"http://localhost:4001/uploads/".concat(t.aadhaar),large:"http://localhost:4001/uploads/".concat(t.aadhaar),alt:"screenshot"})})}),(0,te.jsxs)("td",{children:[(0,te.jsx)(o.zx,{className:"btn m-2",color:"success",onClick:function(){return e=t._id,b(e),void f(!0);var e},children:"Accept"}),(0,te.jsx)(o.zx,{className:"btn",color:"danger",onClick:function(){return n=t._id,void e((0,ee.jT)(n));var n},children:"Reject"})]})]},t.email)}))})]})}),(0,te.jsxs)(o.u_,{isOpen:s,toggle:_,children:[(0,te.jsx)(o.xB,{toggle:_,children:"Confirm Acceptance"}),(0,te.jsx)(o.fe,{children:"Are you sure you want to accept this user?"}),(0,te.jsxs)(o.mz,{children:[(0,te.jsx)(o.zx,{color:"secondary",onClick:_,children:"Cancel"}),(0,te.jsx)(o.zx,{color:"success",onClick:function(){e((0,ee.QX)(g)),p(!0),f(!1)},children:"Confirm"})]})]}),(0,te.jsxs)(o.u_,{isOpen:h,toggle:w,children:[(0,te.jsx)(o.fe,{children:"User accepted successfully!"}),(0,te.jsx)(o.mz,{children:(0,te.jsx)(o.zx,{color:"success",onClick:w,children:"Close"})})]})]})},oe=function(){return(0,te.jsx)(te.Fragment,{children:(0,te.jsx)(o.X2,{children:(0,te.jsx)(o.JX,{lg:"12",children:(0,te.jsx)(ne,{})})})})}}}]);
//# sourceMappingURL=832.47813314.chunk.js.map