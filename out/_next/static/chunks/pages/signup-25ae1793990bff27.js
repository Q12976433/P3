(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7805:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return a(4347)}])},4347:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r=a(5944);a(7294);var n=a(9661),i=a(3321),l=a(480),o=a(9368),s=a(3795),c=a(6886),u=a(7357),m=a(3845),d=a(5861),Z=a(5582),h=a(7536),p=a(4518),f=a(353),g=a(7533),v=a(6310),w=a(1163),y=a(4144);let b=(0,v.Ry)({firstName:(0,v.Z_)().max(15).required(),lastName:(0,v.Z_)().max(15).required(),email:(0,v.Z_)().email().required(),password:(0,v.Z_)().min(2).max(20).required()});function x(){let e=(0,w.useRouter)(),t=(0,h.cI)({resolver:(0,g.X)(b)}),a=async t=>{try{let a=await (0,y.Z)("/api/user/create","POST",t);console.log(a),200===a.status&&e.push("verifyemail")}catch(e){alert("Email is already been used,please go to the login page."),console.log(e)}};return(0,r.BX)(Z.Z,{component:"main",maxWidth:"xs",children:[(0,r.BX)(u.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.tZ)(n.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,r.tZ)(m.Z,{})}),(0,r.tZ)(d.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,r.tZ)(h.RV,{...t,children:(0,r.BX)(u.Z,{component:"form",onSubmit:t.handleSubmit(a),sx:{mt:3},children:[(0,r.tZ)(f.Z,{name:"firstName",label:"First Name",id:"firstName",autoComplete:"fistName"}),(0,r.tZ)(f.Z,{name:"lastName",label:"Last Name",id:"lastName",autoComplete:"lastName"}),(0,r.tZ)(f.Z,{name:"email",label:"Email Address",id:"email",autoComplete:"email"}),(0,r.tZ)(f.Z,{name:"password",label:"Password",id:"password",type:"password",autoComplete:"current-password"}),(0,r.tZ)(l.Z,{control:(0,r.tZ)(o.Z,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}),(0,r.BX)(i.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:["Sign UP",(0,r.tZ)(s.Z,{href:"verifyemail"})]}),(0,r.tZ)(c.ZP,{container:!0,justifyContent:"flex-end",children:(0,r.tZ)(c.ZP,{item:!0,children:(0,r.tZ)(s.Z,{href:"login",variant:"body2",children:"Already have an account? Log in"})})})]})})]}),(0,r.tZ)(p.Z,{sx:{mt:5}})]})}},4518:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(5944),n=a(5861),i=a(3795);function l(e){return(0,r.BX)(n.Z,{variant:"body2",color:"text.secondary",align:"center",...e,children:["Copyright \xa9 ",(0,r.tZ)(i.Z,{color:"inherit",href:"https://mui.com/",children:"FotoPie"})," ",new Date().getFullYear(),"."]})}},353:function(e,t,a){"use strict";var r=a(5944),n=a(1903),i=a(7536);let l=e=>{var t,a;let{label:l,name:o,id:s,type:c}=e,{register:u,formState:{errors:m,isSubmitting:d}}=(0,i.Gc)();return(0,r.tZ)(r.HY,{children:(0,r.tZ)(n.Z,{label:l,id:s,error:!!m[o],helperText:null!==(a=null===(t=m[o])||void 0===t?void 0:t.message)&&void 0!==a?a:"",type:c,disabled:d,fullWidth:!0,margin:"normal",variant:"outlined",autoFocus:!0,...u(o)})})};t.Z=l},4144:function(e,t,a){"use strict";var r=a(6154);let n=r.Z.create({timeout:1e4,withCredentials:!0});n.interceptors.request.use(e=>{let t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e});let i=async(e,t,a,r)=>await n.request({url:e,method:t,["get"===t.toLocaleLowerCase()?"params":"data"]:a,...r});t.Z=i}},function(e){e.O(0,[116,321,554,345,488,903,154,881,113,644,216,774,888,179],function(){return e(e.s=7805)}),_N_E=e.O()}]);