/*! For license information please see 2095.6d7173aa.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmain_bt5=self.webpackChunkmain_bt5||[]).push([[2095],{32095:function(e,t,r){r.r(t),r.d(t,{default:function(){return J}});var n=r(72791),o=r(25211),a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},a(e,t)};var c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};function s(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function i(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],c=0,s=a.length;c<s;c++,o++)n[o]=a[c];return n}var l=function(e,t){var r=null;return function(){clearTimeout(r);var n=arguments,o=this;r=setTimeout((function(){e.apply(o,n)}),t)}},u=Object.prototype.hasOwnProperty,p=Object.prototype.toString;var f=function(e){if(null==e)return!0;if("boolean"==typeof e)return!1;if("number"==typeof e)return 0===e;if("string"==typeof e)return 0===e.length;if("function"==typeof e)return 0===e.length;if(Array.isArray(e))return 0===e.length;if(e instanceof Error)return""===e.message;if(e.toString==p)switch(e.toString()){case"[object File]":case"[object Map]":case"[object Set]":return 0===e.size;case"[object Object]":for(var t in e)if(u.call(e,t))return!1;return!0}return!1};function d(e,t,r,n){var o,a=null==(o=n)||"number"===typeof o||"boolean"===typeof o?n:r(n),c=t.get(a);return"undefined"===typeof c&&(c=e.call(this,n),t.set(a,c)),c}function h(e,t,r){var n=Array.prototype.slice.call(arguments,3),o=r(n),a=t.get(o);return"undefined"===typeof a&&(a=e.apply(this,n),t.set(o,a)),a}function y(e,t,r,n,o){return r.bind(t,e,n,o)}function m(e,t){return y(e,this,1===e.length?d:h,t.cache.create(),t.serializer)}function v(){return JSON.stringify(arguments)}function g(){this.cache=Object.create(null)}g.prototype.has=function(e){return e in this.cache},g.prototype.get=function(e){return this.cache[e]},g.prototype.set=function(e,t){this.cache[e]=t};var b={create:function(){return new g}},w=function(e,t){var r=t&&t.cache?t.cache:b,n=t&&t.serializer?t.serializer:v;return(t&&t.strategy?t.strategy:m)(e,{cache:r,serializer:n})},k={variadic:function(e,t){return y(e,this,h,t.cache.create(),t.serializer)},monadic:function(e,t){return y(e,this,d,t.cache.create(),t.serializer)}};w.strategies=k;var N=function(e){return!!e&&!f(e)},O=function(e){return N(e)?e:[]},K=function(e){var t,r=e.data,n=s(e,["data"]),o=O(r),a=c({parent:"",level:0},n);return Array.isArray(o)?o.reduce((function(e,t,r){var n=c({node:t,index:r,nodeName:t.key},a);return i(e,x(n))}),[]):(t=o,Object.entries(t).sort((function(e,t){return e[1].index-t[1].index})).reduce((function(e,t){var r=t[0],n=t[1],o=c({node:n,nodeName:r},a);return i(e,x(o))}),[]))},S=function(e){var t=e.label,r=e.searchTerm,n=function(e){return e.trim().toLowerCase()};return n(t).includes(n(r))},j=function(e){return e.label},x=function(e){var t=e.node,r=e.nodeName,n=e.matchSearch,o=void 0===n?S:n,a=e.locale,l=void 0===a?j:a,u=s(e,["node","nodeName","matchSearch","locale"]),p=u.parent,f=u.level,d=u.openNodes,h=u.searchTerm,y=t.nodes,m=t.label,v=void 0===m?"unknown":m,g=s(t,["nodes","label"]),b=[p,r].filter((function(e){return e})).join("/"),w=N(y),k=w&&(d.includes(b)||!!h),x=l(c({label:v},g)),T=!h||o(c({label:x,searchTerm:h},g)),A=c(c(c({},u),g),{label:x,hasNodes:w,isOpen:k,key:b}),I=O(y),q=k?K(c(c({data:I,locale:l,matchSearch:o},u),{parent:b,level:f+1})):[];return T?i([A],q):q},T=w(K),A=K;var I,q,C=(I=function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var c=r.apply(null,o);c&&e.push(c)}else if("object"===a)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()},I(q={exports:{}},q.exports),q.exports),E=function(e){var t=e.on,r=e.openedIcon,o=e.closedIcon;return n.createElement("div",{role:"img","aria-label":"Toggle",className:"rstm-toggle-icon-symbol"},t?r:o)},P=function(e){var t=e.hasNodes,r=void 0!==t&&t,o=e.isOpen,a=void 0!==o&&o,s=e.level,i=void 0===s?0:s,l=e.onClick,u=e.toggleNode,p=e.active,f=e.focused,d=e.openedIcon,h=void 0===d?"-":d,y=e.closedIcon,m=void 0===y?"+":y,v=e.label,g=void 0===v?"unknown":v,b=e.style,w=void 0===b?{}:b;return n.createElement("li",{className:C("rstm-tree-item","rstm-tree-item-level"+i,{"rstm-tree-item--active":p},{"rstm-tree-item--focused":f}),style:c({paddingLeft:.75+2*(r?0:1)+1.75*i+"rem"},w),role:"button","aria-pressed":p,onClick:l},r&&n.createElement("div",{className:"rstm-toggle-icon",onClick:function(e){r&&u&&u(),e.stopPropagation()}},n.createElement(E,{on:a,openedIcon:h,closedIcon:m})),g)},z=function(e){var t=e.search,r=e.items;return n.createElement(n.Fragment,null,t&&n.createElement("input",{className:"rstm-search","aria-label":"Type and search",type:"search",placeholder:"Type and search",onChange:function(e){var r=e.target.value;t&&t(r)}}),n.createElement("ul",{className:"rstm-tree-item-group"},r.map((function(e){var t=e.key,r=s(e,["key"]);return n.createElement(P,c({key:t},r))}))))},_=function(e){var t=e.children,r=e.up,o=e.down,a=e.left,c=e.right,s=e.enter;return n.createElement("div",{tabIndex:0,onKeyDown:function(e){switch(e.key){case"ArrowUp":r();break;case"ArrowDown":o();break;case"ArrowLeft":a();break;case"ArrowRight":c();break;case"Enter":s()}}},t)},D=function(e){return console.log(e)},F=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={openNodes:t.props.initialOpenNodes||[],searchTerm:"",activeKey:t.props.initialActiveKey||"",focusKey:t.props.initialFocusKey||""},t.resetOpenNodes=function(e,r,n){var o=t.props.initialOpenNodes,a=Array.isArray(e)&&e||o||[];t.setState({openNodes:a,searchTerm:"",activeKey:r||"",focusKey:n||r||""})},t.search=function(e){var r=t.props.debounceTime;l((function(e){return t.setState({searchTerm:e})}),r)(e)},t.toggleNode=function(e){if(!t.props.openNodes){var r=t.state.openNodes,n=r.includes(e)?r.filter((function(t){return t!==e})):i(r,[e]);t.setState({openNodes:n})}},t.generateItems=function(){var e=t.props,r=e.data,n=e.onClickItem,o=e.locale,a=e.matchSearch,s=t.state.searchTerm,i=t.props.openNodes||t.state.openNodes,l=t.props.activeKey||t.state.activeKey,u=t.props.focusKey||t.state.focusKey,p=t.props.cacheSearch?T:A;return(r?p({data:r,openNodes:i,searchTerm:s,locale:o,matchSearch:a}):[]).map((function(e){var r=e.key===u,o=e.key===l,a=e.hasNodes?function(){return t.toggleNode(e.key)}:void 0;return c(c({},e),{focused:r,active:o,onClick:function(){var r=t.props.activeKey||e.key;t.setState({activeKey:r,focusKey:r}),n&&n(e)},toggleNode:a})}))},t.getKeyDownProps=function(e){var r=t.props.onClickItem,n=t.state,o=n.focusKey,a=n.activeKey,l=(n.searchTerm,e.findIndex((function(e){return e.key===(o||a)}))),u=function(e){var t=e.key.split("/");return t.length>1?t.slice(0,t.length-1).join("/"):e.key};return{up:function(){t.setState((function(t){var r=t.focusKey;return{focusKey:l>0?e[l-1].key:r}}))},down:function(){t.setState((function(t){var r=t.focusKey;return{focusKey:l<e.length-1?e[l+1].key:r}}))},left:function(){var r=e[l];r&&t.setState((function(e){var t=e.openNodes,n=s(e,["openNodes"]),o=t.filter((function(e){return e!==r.key}));return r.isOpen?c(c({},n),{openNodes:o,focusKey:r.key}):c(c({},n),{focusKey:u(r)})}))},right:function(){var r=e[l],n=r.hasNodes,o=r.key;n&&t.setState((function(e){return{openNodes:i(e.openNodes,[o])}}))},enter:function(){t.setState((function(e){return{activeKey:e.focusKey}})),r&&r(e[l])}}},t}return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.componentDidUpdate=function(e){var t=this.props,r=t.data,n=t.initialOpenNodes,o=t.resetOpenNodesOnDataUpdate;e.data!==r&&o&&n&&this.setState({openNodes:n})},t.prototype.render=function(){var e=this.props,t=e.children,r=e.hasSearch,o=e.disableKeyboard,a=this.state.searchTerm,s=this.search,i=this.generateItems(),l=this.resetOpenNodes,u=t||z,p=r?{search:s,resetOpenNodes:l,items:i,searchTerm:a}:{items:i,resetOpenNodes:l};return o?u(p):n.createElement(_,c({},this.getKeyDownProps(i)),u(p))},t.defaultProps={data:{},onClickItem:D,debounceTime:125,children:z,hasSearch:!0,cacheSearch:!0,resetOpenNodesOnDataUpdate:!1,disableKeyboard:!1},t}(n.Component),L=F,U=r(80184),J=function(){return(0,U.jsx)("div",{children:(0,U.jsx)(o.X2,{children:(0,U.jsx)(o.JX,{children:(0,U.jsx)(o.Zb,{children:(0,U.jsx)(o.eW,{children:(0,U.jsx)(L,{data:[{key:"mammal",label:"Mammal",nodes:[{key:"canidae",label:"Canidae",nodes:[{key:"dog",label:"Dog",nodes:[],url:"https://www.google.com/search?q=dog"},{key:"fox",label:"Fox",nodes:[],url:"https://www.google.com/search?q=fox"},{key:"wolf",label:"Wolf",nodes:[],url:"https://www.google.com/search?q=wolf"}],url:"https://www.google.com/search?q=canidae"}],url:"https://www.google.com/search?q=mammal"},{key:"reptile",label:"Reptile",nodes:[{key:"squamata",label:"Squamata",nodes:[{key:"lizard",label:"Lizard",url:"https://www.google.com/search?q=lizard"},{key:"snake",label:"Snake",url:"https://www.google.com/search?q=snake"},{key:"gekko",label:"Gekko",url:"https://www.google.com/search?q=gekko"}],url:"https://www.google.com/search?q=squamata"}],url:"https://www.google.com/search?q=reptile"}]})})})})})})}}}]);
//# sourceMappingURL=2095.6d7173aa.chunk.js.map