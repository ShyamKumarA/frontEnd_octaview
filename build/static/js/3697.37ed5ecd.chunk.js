"use strict";(self.webpackChunkmain_bt5=self.webpackChunkmain_bt5||[]).push([[3697],{63697:function(e,s,n){n.r(s);var a=n(4942),r=n(1413),l=n(74165),c=n(15861),d=n(29439),i=n(59434),t=n(72791),o=n(16871),h=n(25211),x=n(67303),m=(n(5462),n(49693)),j=n(80184);s.default=function(){var e=(0,t.useState)("2"),s=(0,d.Z)(e,2),n=s[0],u=s[1],p=(0,t.useState)({name:"",email:"",address:"",password:"",txnPassword:"",phone:"",country:"India"}),f=(0,d.Z)(p,2),v=f[0],I=f[1],N=(0,o.UO)().userId,g=(0,i.I0)(),w=(0,i.v9)((function(e){return e.userProfileManageReducer})).data;console.log(w),(0,t.useEffect)((function(){g((0,m.mM)(N))}),[g,N]);var b=function(e){n!==e&&u(e)},y=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(s){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g((0,m.Xo)({id:s,formData:v}));case 3:I({name:"",email:"",address:"",password:"",txnPassword:"",phone:"",country:"India"}),x.Am.success("User profile updated successfully."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x.Am.error("Failed to update user profile. Please try again.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(s){return e.apply(this,arguments)}}(),_=function(e){var s=e.target,n=s.name,l=s.value;I((0,r.Z)((0,r.Z)({},v),{},(0,a.Z)({},n,l)))};return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(h.X2,{children:(0,j.jsx)(h.JX,{xs:"12",md:"12",lg:"12",children:(0,j.jsxs)(h.Zb,{children:[(0,j.jsxs)(h.JL,{tabs:!0,children:[(0,j.jsx)(h.LY,{children:(0,j.jsx)(h.OL,{className:"2"===n?"active bg-transparent":"cursor-pointer",onClick:function(){b("2")},children:"Profile"})}),(0,j.jsx)(h.LY,{children:(0,j.jsx)(h.OL,{className:"3"===n?"active bg-transparent":"cursor-pointer",onClick:function(){b("3")},children:"Setting"})})]}),(0,j.jsxs)(h.I5,{activeTab:n,children:[(0,j.jsx)(h.Jm,{tabId:"2",children:(0,j.jsx)(h.X2,{children:(0,j.jsx)(h.JX,{sm:"12",children:(0,j.jsxs)("div",{className:"p-4",children:[(0,j.jsxs)(h.X2,{children:[(0,j.jsxs)(h.JX,{md:"3",xs:"6",className:"border-end",children:[(0,j.jsx)("strong",{children:"Full Name"}),(0,j.jsx)("br",{}),(0,j.jsx)("p",{className:"text-muted",children:w&&w.name})]}),(0,j.jsxs)(h.JX,{md:"3",xs:"6",className:"border-end",children:[(0,j.jsx)("strong",{children:"Mobile"}),(0,j.jsx)("br",{}),(0,j.jsx)("p",{className:"text-muted",children:w&&w.phone})]}),(0,j.jsxs)(h.JX,{md:"3",xs:"6",className:"border-end",children:[(0,j.jsx)("strong",{children:"Email"}),(0,j.jsx)("br",{}),(0,j.jsx)("p",{className:"text-muted",children:w&&w.email})]}),(0,j.jsxs)(h.JX,{md:"3",xs:"6",className:"border-end",children:[(0,j.jsx)("strong",{children:"Location"}),(0,j.jsx)("br",{}),(0,j.jsx)("p",{className:"text-muted",children:"India"})]})]}),(0,j.jsx)("h4",{className:"font-medium mt-4",children:(0,j.jsx)("strong",{children:" Detailed view"})}),(0,j.jsx)("hr",{}),(0,j.jsxs)("h5",{className:"mt-4",children:["Wallet Amount ",(0,j.jsx)("span",{className:"float-end",children:w&&w.totalIncome})]}),(0,j.jsx)("hr",{}),(0,j.jsxs)("h5",{className:"mt-4",children:["DailyBonus ",(0,j.jsx)("span",{className:"float-end",children:w&&w.dailyBonus})]}),(0,j.jsx)("hr",{}),(0,j.jsxs)("h5",{className:"mt-4",children:["LevelRoi ",(0,j.jsx)("span",{className:"float-end",children:w&&w.levelRoi})]}),(0,j.jsx)("hr",{}),(0,j.jsxs)("h5",{className:"mt-4",children:["capitalAmount ",(0,j.jsx)("span",{className:"float-end",children:w&&w.capitalAmount})]}),(0,j.jsx)("hr",{}),(0,j.jsxs)("h5",{className:"mt-4",children:["Direct Income ",(0,j.jsx)("span",{className:"float-end",children:w&&w.directIncome})]}),(0,j.jsx)("hr",{}),(0,j.jsx)(h.Ex,{color:"warning",value:100})]})})})}),(0,j.jsx)(h.Jm,{tabId:"3",children:(0,j.jsx)(h.X2,{children:(0,j.jsx)(h.JX,{sm:"12",children:(0,j.jsx)("div",{className:"p-4",children:(0,j.jsxs)(h.l0,{children:[(0,j.jsxs)(h.cw,{children:[(0,j.jsx)(h.__,{children:"Full Name"}),(0,j.jsx)(h.II,{type:"name",name:"username",value:v.name,placeholder:w&&w.name,onChange:_})]}),(0,j.jsxs)(h.cw,{children:[(0,j.jsx)(h.__,{children:"Email"}),(0,j.jsx)(h.II,{type:"email",name:"email",value:v.email,placeholder:w&&w.email,onChange:_})]}),(0,j.jsxs)(h.cw,{children:[(0,j.jsx)(h.__,{children:"Address"}),(0,j.jsx)(h.II,{type:"text",name:"address",value:v.address,placeholder:w&&w.address,onChange:_})]}),(0,j.jsxs)(h.cw,{children:[(0,j.jsx)(h.__,{children:"Change Password"}),(0,j.jsx)(h.II,{type:"text",name:"password",value:v.password,placeholder:"******",onChange:_})]}),(0,j.jsxs)(h.cw,{children:[(0,j.jsx)(h.__,{children:"Change Txn Password"}),(0,j.jsx)(h.II,{type:"text",name:"txnPassword",value:v.txnPassword,placeholder:"******",onChange:_})]}),(0,j.jsxs)(h.cw,{children:[(0,j.jsx)(h.__,{children:"Phone No"}),(0,j.jsx)(h.II,{type:"text",name:"phone",value:v.phone,placeholder:w&&w.phone,onChange:_})]}),(0,j.jsxs)(h.cw,{children:[(0,j.jsx)(h.__,{children:"Select Country"}),(0,j.jsxs)(h.II,{type:"select",name:"country",value:v.country,onChange:_,children:[(0,j.jsx)("option",{value:"USA",children:"USA"}),(0,j.jsx)("option",{value:"India",children:"India"}),(0,j.jsx)("option",{value:"America",children:"America"})]})]}),(0,j.jsx)(h.zx,{color:"primary",onClick:function(){return y(w&&w.id)},children:"Update Profile"})]})})})})})]})]})})})})}}}]);
//# sourceMappingURL=3697.37ed5ecd.chunk.js.map