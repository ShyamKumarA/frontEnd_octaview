"use strict";(self.webpackChunkmain_bt5=self.webpackChunkmain_bt5||[]).push([[5358],{34233:function(e,t,n){var r=n(93433),s=n(29439),i=n(72791),a=n(25211),l=n(34358),c=n(73024),o=n(88802),d=n(87681),m=n(18814),u=n(80184);t.Z=function(){var e=(0,i.useState)([{username:"Kevin Hsu",content:"Lorem Ipsum is simply dummy text of the printing & type setting industry.",img:d,id:1},{username:"Alice Chen",content:"It\u2019s Great opportunity to work.",img:d,id:2},{username:"Kevin Hsu",content:"I would love to join the team.",img:d,id:3},{username:"KevHs",content:"Whats budget of the new project.",img:m,id:4},{username:"Alice Chen",content:"Well we have good budget for the project",img:d,id:5},{username:"Kevin Hsu",content:"Lorem Ipsum is simply dummy text of the printing.",img:m,id:6},{username:"Alice Chen",content:"Lorem Ipsum is simply dummy text.",img:d,id:7}]),t=(0,s.Z)(e,2),n=t[0],x=t[1],h=(0,i.useState)(""),p=(0,s.Z)(h,2),f=p[0],j=p[1],g="Kevin Hsu";return(0,u.jsx)("div",{className:"w-100",children:(0,u.jsxs)(o.Z,{title:"Chat",children:[(0,u.jsx)("ul",{className:"list-unstyled",children:(0,u.jsx)(l.Z,{style:{height:"420px"},children:n.map((function(e){return(0,u.jsxs)("li",{className:"chat ".concat(g===e.username?"d-flex flex-row-reverse text-end mt-2":"d-flex gap-3 ms-auto mt-2"),children:[(0,u.jsx)("div",{children:g!==e.username&&(0,u.jsx)("img",{src:e.img,alt:"".concat(e.username,"'s profile pic"),width:"45",className:"rounded-circle"})}),(0,u.jsxs)("div",{className:"p-2 mb-1 rounded ".concat(g===e.username?"bg-light-primary":"bg-light"),children:[" ",e.content]})]},e.id)}))})}),(0,u.jsx)("div",{className:"border-top pt-4",children:(0,u.jsx)(a.l0,{onSubmit:function(e){return function(e){e.preventDefault(),x([].concat((0,r.Z)(n),[{username:"Kevin Hsu",content:(0,u.jsx)("span",{children:f}),img:m,id:n.length+1}]),j(""))}(e)},children:(0,u.jsxs)(a.X2,{className:"gx-0",children:[(0,u.jsx)(a.JX,{xs:"10",children:(0,u.jsx)("div",{className:"input-field mt-0 mb-0",children:(0,u.jsx)(a.II,{type:"text",placeholder:"Type and enter",className:"form-control border-0",value:f,onChange:function(e){var t=e.target.value;j(t)}})})}),(0,u.jsx)(a.JX,{xs:"2",className:"text-end",children:(0,u.jsx)(a.zx,{color:"info",type:"submit",value:"submit",children:(0,u.jsx)(c.Z,{width:18})})})]})})})]})})}},47294:function(e,t,n){var r=n(25211),s=n(34358),i=n(87681),a=n(18814),l=n(66891),c=n(88905),o=n(38546),d=n(80184),m=[{id:1,image:i,status:"online",title:"Event Today",desc:"Just a reminder of the event.",time:"9:10 PM"},{id:2,image:a,status:"busy",title:"Send Email",desc:"Just send my admin!",time:"9:02 AM"},{id:3,image:l,status:"away",title:"Check Email",desc:"Just check emails for today.",time:"9:02 AM"},{id:4,image:c,status:"offline",title:"Settings",desc:"You can customize this template as you want.",time:"9:08 AM"},{id:5,image:o,status:"busy",title:"Send Email",desc:"Just send my admin!",time:"9:02 AM"},{id:6,image:i,status:"online",title:"Event Today",desc:"Just a reminder of the event.",time:"9:10 PM"}];t.Z=function(){return(0,d.jsxs)(r.Zb,{className:"w-100",children:[(0,d.jsx)("div",{className:"p-4",children:(0,d.jsx)(r.ll,{tag:"h4",children:"You have 5 new messages"})}),(0,d.jsx)(s.Z,{style:{height:"460px"},children:(0,d.jsx)(r.NX,{flush:!0,children:m.map((function(e){return(0,d.jsx)(r.WI,{className:"px-4",action:!0,tag:"a",href:"/",children:(0,d.jsxs)("div",{className:"d-flex align-items-center gap-3 py-2",children:[(0,d.jsx)("img",{src:e.image,alt:"user",className:"rounded-circle flex-shrink-0",width:"45"}),(0,d.jsxs)("div",{className:"col-9",children:[(0,d.jsx)(r.bq,{className:"fw-medium mb-0",children:e.title}),(0,d.jsx)(r.aq,{className:"text-muted text-truncate mb-0 d-block",children:e.desc}),(0,d.jsx)("small",{className:"text-muted",children:e.time})]})]})},e.id)}))})})]})}},74304:function(e,t,n){var r=n(25211),s=n(34358),i=n(87681),a=n(18814),l=n(66891),c=n(88905),o=n(38546),d=n(80184),m=[{image:i,name:"James Anderson",comment:"Lorem Ipsum is simply dummy text of the printing and type setting industry.",status:"Pending",date:"April 14, 2022"},{image:a,name:"Michael Jorden",comment:"Rpsum is simply dummy text of the printing and type setting industry.",status:"Approved",date:"May 14, 2022"},{image:l,name:"Johnathan Doeting",comment:"Frem Ipsum is simply dummy text of the printing and type setting industry.",status:"Approved",date:"June 14, 2022"},{image:c,name:"Daniel Kristeen",comment:"LorTsum is simply dummy text of the printing and type setting industry.",status:"Pending",date:"July 14, 2022"},{image:o,name:"Jan Petrovic",comment:"Mem Ipsum is simply dummy text of the printing and type setting industry.",status:"Rejected",date:"Aug 14, 2022"},{image:i,name:"Hanna Gover",comment:"Lorem Ipsum is simply dummy text of the printing and type setting industry.",status:"Pending",date:"April 14, 2022"}];t.Z=function(){return(0,d.jsxs)(r.Zb,{children:[(0,d.jsx)(r.eW,{children:(0,d.jsx)(r.ll,{tag:"h4",children:"Recent Comments"})}),(0,d.jsx)(s.Z,{style:{height:"600px"},children:(0,d.jsx)(r.NX,{flush:!0,children:m.map((function(e){return(0,d.jsxs)(r.WI,{action:!0,href:"#",tag:"a",className:"d-flex p-3 w-100",children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:e.image,alt:"user",width:"50",className:"rounded-circle me-3"})}),(0,d.jsxs)("div",{className:"w-100",children:[(0,d.jsx)(r.bq,{className:"fw-medium mb-0",children:e.name}),(0,d.jsx)(r.aq,{className:"my-1 text-muted",children:e.comment}),(0,d.jsxs)("div",{className:"d-flex align-items-center gap-3 mt-3",children:[(0,d.jsx)("small",{className:"text-muted",children:e.date}),(0,d.jsx)("div",{children:"Pending"===e.status?(0,d.jsx)(r.Ct,{color:"primary",className:"text-dark-white",children:"Pending"}):"Rejected"===e.status?(0,d.jsx)(r.Ct,{color:"danger",className:"text-dark-white",children:"Rejected"}):(0,d.jsx)(r.Ct,{color:"cyan",className:"text-dark-white",children:"Approved"})})]})]})]},e.name)}))})})]})}},65108:function(e,t,n){var r=n(29439),s=n(72791),i=n(25211),a=n(38965),l=n(88802),c=n(80184);t.Z=function(){var e=(0,s.useState)([{id:1,content:"Design sign up flow",time:"2 mins ago",completed:!1,badges:[{id:1,color:"cyan",text:"designer"},{id:2,color:"primary",text:"developer"}]},{id:2,content:"Landing page content",time:"10 mins ago",completed:!1,badges:[]},{id:3,content:"Design use case page",time:"12 mins ago",completed:!1,badges:[{id:1,color:"danger",text:"designer"},{id:2,color:"cyan",text:"HR"}]},{id:4,content:"Define a new tool for metrics",time:"15 mins ago",completed:!0,badges:[{id:1,color:"cyan",text:"designer"},{id:2,color:"primary",text:"developer"}]},{id:5,content:"Check Severny Bootstrap admin",time:"6 months ago",completed:!1,badges:[{id:2,color:"info",text:"HR"}]},{id:6,content:"Develop React Mobile App",time:"1 year ago",completed:!1,badges:[{id:1,color:"cyan",text:"design"},{id:2,color:"primary",text:"developer"}]}]),t=(0,r.Z)(e,2),n=t[0],o=t[1];return(0,c.jsx)("div",{className:"w-100",children:(0,c.jsx)(l.Z,{title:"Todo List",className:"h-100",children:(0,c.jsx)("div",{className:"todo-widget mt-3",children:(0,c.jsx)(i.NX,{className:"list-task todo-list list-group mb-0","data-role":"tasklist",children:n.map((function(e){return(0,c.jsxs)(i.WI,{className:"list-group-item d-flex align-items-start todo-item ps-0 border-0 ".concat(e.completed?"completed":""),children:[(0,c.jsxs)(i.cw,{check:!0,inline:!0,children:[(0,c.jsx)(i.II,{type:"checkbox",checked:e.completed,id:e.id,"data-toggle":"checkbox",onChange:function(){return t=e.id,void o(n.map((function(e){return e.id===t&&(e.completed=!e.completed),e})));var t}}),(0,c.jsx)(i.__,{className:"mb-0 d-block",htmlFor:e.id,check:!0,children:(0,c.jsx)("span",{className:"todo-desc",children:e.content})}),(0,c.jsx)("span",{className:"text-muted fs-7 d-block mb-2",children:e.time}),e.badges.map((function(e){return(0,c.jsx)("div",{className:"d-inline-block ",children:(0,c.jsx)(i.Ct,{color:e.color,className:"me-1",children:e.text})},e.id)}))]}),(0,c.jsx)("span",{className:"cursor-pointer ms-auto",onClick:function(){return t=e.id,void o(n.filter((function(e){return e.id!==t})));var t},children:(0,c.jsx)(a.Z,{className:"text-muted",width:18})})]},e.id)}))})})})})}},743:function(e,t,n){n(72791);var r=n(25211),s=n(80184),i=[{title:"Cras justo odio",icon:"bi bi-bell",color:"primary",date:"6 minute ago",id:1},{title:"New user registered.",icon:"bi bi-person",color:"info",date:"6 minute ago",id:2},{title:"Server #1 overloaded.",icon:"bi bi-hdd",color:"danger",date:"6 minute ago",id:3},{title:"New order received.",icon:"bi bi-bag-check",color:"success",date:"6 minute ago",id:4},{title:"Cras justo odio",icon:"bi bi-bell",color:"dark",date:"6 minute ago",id:5},{title:"Server #1 overloaded.",icon:"bi bi-hdd",color:"warning",date:"6 minute ago",id:6}];t.Z=function(){return(0,s.jsxs)(r.Zb,{className:"w-100",children:[(0,s.jsx)(r.eW,{children:(0,s.jsx)(r.ll,{tag:"h4",className:"mb-0",children:"Feeds"})}),(0,s.jsx)(r.NX,{flush:!0,children:i.map((function(e){return(0,s.jsxs)(r.WI,{action:!0,href:"/",tag:"a",className:"d-flex align-items-center py-3 px-4 border-0",children:[(0,s.jsx)(r.zx,{className:"rounded-circle d-flex align-items-center justify-content-center me-3 circle-sm",color:e.color,children:(0,s.jsx)("i",{className:"fs-5 + ".concat(e.icon)})}),e.title,(0,s.jsx)("small",{className:"ms-auto text-muted text-small",children:e.date})]},e.id)}))})]})}},69120:function(e,t,n){n(72791);var r=n(25211),s=n(9087),i=n(43297),a=n(29024),l=n(94617),c=n(74060),o=n(80184);t.Z=function(){return(0,o.jsxs)(r.Zb,{className:"w-100",children:[(0,o.jsx)(r.eW,{children:(0,o.jsx)(r.ll,{tag:"h4",children:"Weather"})}),(0,o.jsx)(r.eW,{className:"bg-light",children:(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsxs)("span",{children:[(0,o.jsx)("h2",{className:"mb-1",children:"Monday"}),(0,o.jsx)("span",{className:"text-muted",children:"7th May 2017"})]}),(0,o.jsxs)("div",{className:"ms-auto d-flex align-items-center",children:[(0,o.jsx)(s.Z,{width:32,height:32,className:"text-primary me-2"}),(0,o.jsxs)("div",{className:"display-6 mt-2",children:["32",(0,o.jsx)("sup",{children:"\xb0F"})]})]})]})}),(0,o.jsxs)(r.eW,{children:[(0,o.jsxs)(r.X2,{children:[(0,o.jsxs)(r.JX,{md:"6",children:[(0,o.jsxs)(r.X2,{className:"pb-2",children:[(0,o.jsx)(r.JX,{xs:"6",children:(0,o.jsx)("span",{className:"text-muted",children:"Wind"})}),(0,o.jsx)(r.JX,{xs:"6",className:"text-truncate",children:(0,o.jsx)("span",{className:"fw-medium w-100",children:"ESE 17 mph"})})]}),(0,o.jsxs)(r.X2,{className:"py-2",children:[(0,o.jsx)(r.JX,{xs:"6",children:(0,o.jsx)("span",{className:"text-muted text-nowrap",children:"Humidity"})}),(0,o.jsx)(r.JX,{xs:"6",className:"text-truncate",children:(0,o.jsx)("span",{className:"fw-medium w-100",children:"83%"})})]}),(0,o.jsxs)(r.X2,{className:"py-2",children:[(0,o.jsx)(r.JX,{xs:"6",children:(0,o.jsx)("span",{className:"text-muted text-nowrap",children:"Pressure"})}),(0,o.jsx)(r.JX,{xs:"6",className:"text-truncate",children:(0,o.jsx)("span",{className:"fw-medium w-100",children:"28.56 in"})})]})]}),(0,o.jsxs)(r.JX,{md:"6",children:[(0,o.jsxs)(r.X2,{className:"pb-2",children:[(0,o.jsx)(r.JX,{xs:"6",className:"text-truncate",children:(0,o.jsx)("span",{className:"text-muted w-100",children:"Cloud Cover"})}),(0,o.jsx)(r.JX,{xs:"6",className:"text-truncate",children:(0,o.jsx)("span",{className:"fw-medium w-100",children:"78%"})})]}),(0,o.jsxs)(r.X2,{className:"py-2",children:[(0,o.jsx)(r.JX,{xs:"6",className:"text-truncate",children:(0,o.jsx)("span",{className:"text-muted w-100",children:"Ceiling"})}),(0,o.jsx)(r.JX,{xs:"6",className:"text-truncate",children:(0,o.jsx)("span",{className:"fw-medium w-100",children:"25760 ft"})})]})]})]}),(0,o.jsxs)(r.X2,{className:"mt-4 pt-3",children:[(0,o.jsxs)(r.JX,{xs:"4",md:"2",className:"text-center",children:[(0,o.jsx)("h5",{className:"text-muted",children:"Tue"}),(0,o.jsx)("div",{className:"my-3",children:(0,o.jsx)(s.Z,{width:20,className:"text-info"})}),(0,o.jsxs)("h4",{className:"text-nowrap fw-medium mb-0",children:["31",(0,o.jsx)("sup",{children:"\xb0F"})]})]}),(0,o.jsxs)(r.JX,{xs:"4",md:"2",className:"text-center",children:[(0,o.jsx)("h5",{className:"text-muted text-nowrap",children:"Wed"}),(0,o.jsx)("div",{className:"my-3",children:(0,o.jsx)(i.Z,{width:20,className:"text-info"})}),(0,o.jsxs)("h4",{className:"text-nowrap fw-medium mb-0",children:["34",(0,o.jsx)("sup",{children:"\xb0F"})]})]}),(0,o.jsxs)(r.JX,{xs:"4",md:"2",className:"text-center",children:[(0,o.jsx)("h5",{className:"text-muted",children:"Thu"}),(0,o.jsx)("div",{className:"my-3",children:(0,o.jsx)(a.Z,{width:20,className:"text-info"})}),(0,o.jsxs)("h4",{className:"text-nowrap fw-medium mb-0",children:["12",(0,o.jsx)("sup",{children:"\xb0F"})]})]}),(0,o.jsxs)(r.JX,{xs:"4",md:"2",className:"text-center mt-4 mt-md-0",children:[(0,o.jsx)("h5",{className:"text-muted",children:"Fri"}),(0,o.jsx)("div",{className:"my-3",children:(0,o.jsx)(l.Z,{width:20,className:"text-info"})}),(0,o.jsxs)("h4",{className:"text-nowrap fw-medium mb-0",children:["20",(0,o.jsx)("sup",{children:"\xb0F"})]})]}),(0,o.jsxs)(r.JX,{xs:"4",md:"2",className:"text-center mt-4 mt-md-0",children:[(0,o.jsx)("h5",{className:"text-muted",children:"Sat"}),(0,o.jsx)("div",{className:"my-3",children:(0,o.jsx)(c.Z,{width:20,className:"text-info"})}),(0,o.jsxs)("h4",{className:"text-nowrap fw-medium mb-0",children:["21",(0,o.jsx)("sup",{children:"\xb0F"})]})]}),(0,o.jsxs)(r.JX,{xs:"4",md:"2",className:"text-center mt-4 mt-md-0",children:[(0,o.jsx)("h5",{className:"text-muted",children:"Sun"}),(0,o.jsx)("div",{className:"my-3",children:(0,o.jsx)(s.Z,{width:20,className:"text-info"})}),(0,o.jsxs)("h4",{className:"text-nowrap fw-medium mb-0",children:["23",(0,o.jsx)("sup",{children:"\xb0F"})]})]})]})]})]})}},75358:function(e,t,n){n.r(t);n(72791);var r=n(25211),s=n(74304),i=n(65108),a=n(34233),l=n(82076),c=n(743),o=n(47294),d=n(25539),m=n(69120),u=n(80184);t.default=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(r.X2,{children:[(0,u.jsxs)(r.JX,{xs:"12",lg:"4",children:[(0,u.jsx)(s.Z,{}),(0,u.jsx)(i.Z,{}),(0,u.jsx)(d.Z,{})]}),(0,u.jsxs)(r.JX,{xs:"12",lg:"4",children:[(0,u.jsx)(a.Z,{}),(0,u.jsx)(l.Z,{}),(0,u.jsx)(m.Z,{})]}),(0,u.jsxs)(r.JX,{xs:"12",lg:"4",children:[(0,u.jsx)(c.Z,{}),(0,u.jsx)(o.Z,{})]})]})})}},9087:function(e,t,n){var r=n(72791),s=n(52007),i=n.n(s);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=(0,r.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,o=l(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.createElement("line",{x1:"8",y1:"19",x2:"8",y2:"21"}),r.createElement("line",{x1:"8",y1:"13",x2:"8",y2:"15"}),r.createElement("line",{x1:"16",y1:"19",x2:"16",y2:"21"}),r.createElement("line",{x1:"16",y1:"13",x2:"16",y2:"15"}),r.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),r.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"17"}),r.createElement("path",{d:"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="CloudDrizzle",t.Z=c},29024:function(e,t,n){var r=n(72791),s=n(52007),i=n.n(s);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=(0,r.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,o=l(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.createElement("path",{d:"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"}),r.createElement("polyline",{points:"13 11 9 17 15 17 11 23"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="CloudLightning",t.Z=c},94617:function(e,t,n){var r=n(72791),s=n(52007),i=n.n(s);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=(0,r.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,o=l(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.createElement("line",{x1:"16",y1:"13",x2:"16",y2:"21"}),r.createElement("line",{x1:"8",y1:"13",x2:"8",y2:"21"}),r.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"23"}),r.createElement("path",{d:"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="CloudRain",t.Z=c},74060:function(e,t,n){var r=n(72791),s=n(52007),i=n.n(s);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=(0,r.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,o=l(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.createElement("path",{d:"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"}),r.createElement("line",{x1:"8",y1:"16",x2:"8.01",y2:"16"}),r.createElement("line",{x1:"8",y1:"20",x2:"8.01",y2:"20"}),r.createElement("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"}),r.createElement("line",{x1:"12",y1:"22",x2:"12.01",y2:"22"}),r.createElement("line",{x1:"16",y1:"16",x2:"16.01",y2:"16"}),r.createElement("line",{x1:"16",y1:"20",x2:"16.01",y2:"20"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="CloudSnow",t.Z=c},43297:function(e,t,n){var r=n(72791),s=n(52007),i=n.n(s);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=(0,r.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,o=l(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.createElement("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Cloud",t.Z=c},73024:function(e,t,n){var r=n(72791),s=n(52007),i=n.n(s);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=(0,r.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,o=l(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),r.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Send",t.Z=c},38965:function(e,t,n){var r=n(72791),s=n(52007),i=n.n(s);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=(0,r.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,o=l(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.createElement("polyline",{points:"3 6 5 6 21 6"}),r.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),r.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),r.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Trash2",t.Z=c}}]);
//# sourceMappingURL=5358.a82d7adc.chunk.js.map