"use strict";(self.webpackChunkmain_bt5=self.webpackChunkmain_bt5||[]).push([[4223],{3385:function(e,t,n){var c=n(29439),s=n(72791),r=n(25211),a=n(34358),i=n(80184);t.Z=function(e){var t=e.leftContent,n=e.rightContent,l=s.useState(!1),d=(0,c.Z)(l,2),o=d[0],h=d[1];return(0,i.jsxs)("div",{className:"d-lg-flex d-md-block border position-relative leftRightBox",children:[(0,i.jsxs)("div",{className:"leftPart flex-shrink-0  bg-white border-end ".concat(o?"showLeftPart":""),children:[(0,i.jsx)(r.zx,{className:"d-lg-none d-md-block openCloseBtn",color:"danger",children:(0,i.jsx)("i",{className:"bi ".concat(o?"bi-x":"bi-list"),onClick:function(){h(!o)}})}),(0,i.jsx)(a.Z,{style:{height:"calc(100vh - 200px)"},children:t})]}),(0,i.jsxs)("div",{className:"rightPart",children:[n,o?(0,i.jsx)("div",{className:"contentOverlay"}):""]})]})}},44223:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var c=n(25211),s=n(1413),r=n(72791),a=n(59434),i=n(15979),l=n(80184),d=function(e){var t=e.onClick,n=e.contactName,s=e.active,r=e.id,a=e.thumb,i=e.status;return(0,l.jsx)(c.LY,{onClick:t,className:"w-100 cursor-pointer ".concat(s===r?"bg-light":""),children:(0,l.jsxs)("div",{className:"d-flex align-items-center p-3 mb-1",children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:a,alt:"user",className:"rounded-circle",width:"50"})}),(0,l.jsxs)("div",{className:"mx-3",children:[(0,l.jsx)("h5",{className:"mb-0",children:n}),(0,l.jsx)("small",{children:i})]})]})})},o=function(){var e=(0,a.I0)();(0,r.useEffect)((function(){e((0,i.gE)())}),[e]);var t=(0,a.v9)((function(e){return function(e,t){return e?e.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())})):e}(e.chatReducer.chats,e.chatReducer.chatSearch)})),n=(0,a.v9)((function(e){return e.chatReducer.chatContent}));return(0,l.jsx)(c.JL,{className:"",children:t.map((function(t){return(0,l.jsx)(d,(0,s.Z)((0,s.Z)({},t),{},{active:n,onClick:function(){return e((0,i.WR)(t.id))},thumb:t.thumb,status:t.status,contactName:t.name,chatExcerpt:t.excerpt}),t.id)}))})},h=function(){var e=(0,a.v9)((function(e){return e.chatReducer.chatSearch})),t=(0,a.I0)();return(0,l.jsx)("div",{className:"p-3 border-bottom",children:(0,l.jsx)(c.l0,{children:(0,l.jsx)(c.II,{className:"form-control mb-2",id:"searchUser",name:"searchUser",type:"text",onChange:function(e){return t((0,i.Hg)(e.target.value))},value:e,placeholder:"Search Contact..."})})})},u=n(34358),m=function(){var e=(0,a.v9)((function(e){return e.chatReducer.chats[e.chatReducer.chatContent-1]}));return(0,l.jsx)(l.Fragment,{children:e?(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"d-flex align-items-center p-3 border-bottom",children:[(0,l.jsx)(c.zx,{close:!0,className:"d-xs-block d-lg-none me-2"}),(0,l.jsx)("div",{className:"",children:(0,l.jsx)("img",{src:e.thumb,alt:"user",className:"rounded-circle",width:"46"})}),(0,l.jsxs)("div",{className:"mx-2",children:[(0,l.jsx)("h5",{className:"mb-0",children:e.name}),(0,l.jsx)("small",{children:e.status})]})]}),(0,l.jsx)(u.Z,{style:{height:"calc(100vh - 360px)"},children:(0,l.jsx)("ul",{className:"list-unstyled p-4",children:Object.keys(e.chatHistory).map((function(t){return Object.keys(e.chatHistory[t]).map((function(n){return Object.keys(e.chatHistory[t][n]).map((function(c){return"from"===c?(0,l.jsxs)("li",{className:"chat-item d-flex align-items-center",children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:e.thumb,alt:e.name,width:"50",className:"rounded-circle"})}),(0,l.jsx)("div",{className:"px-3",children:e.chatHistory[t][n][c].map((function(e){return(0,l.jsx)("div",{className:"bg-light d-table p-2 mb-1",children:e},e)}))})]},c):(0,l.jsx)("li",{className:"flex-row-reverse text-end d-flex my-1 ms-auto",children:(0,l.jsx)("div",{children:e.chatHistory[t][n][c].map((function(e){return(0,l.jsx)("div",{className:"p-2 d-table ms-auto bg-light mb-1",children:e},e)}))})},c)}))}))}))})})]}):(0,l.jsx)("div",{children:"Select chat"})})},x=n(29439),j=function(){var e=(0,r.useState)(""),t=(0,x.Z)(e,2),n=t[0],s=t[1],d=(0,a.I0)(),o=(0,a.v9)((function(e){return e.chatReducer.chatContent}));return(0,l.jsx)(c.l0,{onSubmit:function(e){e.preventDefault(),e.stopPropagation(),d((0,i.g_)(o,n)),s("")}.bind(),className:"card-body border-top",children:(0,l.jsxs)("div",{className:"d-flex",children:[(0,l.jsx)(c.II,{type:"text",className:"form-control me-2",placeholder:"Type your message",onChange:function(e){s(e.target.value)}.bind(null),value:n,required:!0}),(0,l.jsx)(c.zx,{onClick:function(){d((0,i.g_)(o,n)),s("")},color:"primary",disabled:!n,children:(0,l.jsx)("i",{className:"bi bi-send"})})]})})},f=n(3385),b=function(){return(0,l.jsx)(c.Zb,{children:(0,l.jsx)(c.eW,{children:(0,l.jsx)(f.Z,{leftContent:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{}),(0,l.jsx)(o,{})]}),rightContent:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{}),(0,l.jsx)(j,{})]})})})})}}}]);
//# sourceMappingURL=4223.f505c3d2.chunk.js.map