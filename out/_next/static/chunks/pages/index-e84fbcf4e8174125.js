(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{326:function(e,r,o){"use strict";var t=o(4836);r.Z=void 0;var a=t(o(4938)),n=o(5893),i=(0,a.default)((0,n.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");r.Z=i},8312:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(565)}])},565:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return G}});var t=o(5944),a=o(9520),n=o(3366),i=o(7462),l=o(7294),s=o(6010),c=o(4780),p=o(948),d=o(1657),u=o(8216),f=o(629),g=o(1588),v=o(4867);function h(e){return(0,v.Z)("MuiAppBar",e)}(0,g.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var Z=o(5893);let m=["className","color","enableColorOnDark","position"],b=e=>{let{color:r,position:o,classes:t}=e,a={root:["root",`color${(0,u.Z)(r)}`,`position${(0,u.Z)(o)}`]};return(0,c.Z)(a,h,t)},x=(e,r)=>`${null==e?void 0:e.replace(")","")}, ${r})`,k=(0,p.ZP)(f.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:o}=e;return[r.root,r[`position${(0,u.Z)(o.position)}`],r[`color${(0,u.Z)(o.color)}`]]}})(({theme:e,ownerState:r})=>{let o="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,i.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},!e.vars&&(0,i.Z)({},"default"===r.color&&{backgroundColor:o,color:e.palette.getContrastText(o)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:e.palette[r.color].main,color:e.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"dark"===e.palette.mode&&!r.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===r.color&&(0,i.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,i.Z)({},"default"===r.color&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette.AppBar.defaultBg:x(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?e.vars.palette.text.primary:x(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette[r.color].main:x(e.vars.palette.AppBar.darkBg,e.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?e.vars.palette[r.color].contrastText:x(e.vars.palette.AppBar.darkColor,e.vars.palette[r.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===r.color?"inherit":"var(--AppBar-color)"},"transparent"===r.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),B=l.forwardRef(function(e,r){let o=(0,d.Z)({props:e,name:"MuiAppBar"}),{className:t,color:a="primary",enableColorOnDark:l=!1,position:c="fixed"}=o,p=(0,n.Z)(o,m),u=(0,i.Z)({},o,{color:a,position:c,enableColorOnDark:l}),f=b(u);return(0,Z.jsx)(k,(0,i.Z)({square:!0,component:"header",ownerState:u,elevation:4,className:(0,s.Z)(f.root,t,"fixed"===c&&"mui-fixed"),ref:r},p))});var y=o(7357);function C(e){return(0,v.Z)("MuiToolbar",e)}(0,g.Z)("MuiToolbar",["root","gutters","regular","dense"]);let z=["className","component","disableGutters","variant"],R=e=>{let{classes:r,disableGutters:o,variant:t}=e;return(0,c.Z)({root:["root",!o&&"gutters",t]},C,r)},w=(0,p.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:o}=e;return[r.root,!o.disableGutters&&r.gutters,r[o.variant]]}})(({theme:e,ownerState:r})=>(0,i.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===r.variant&&{minHeight:48}),({theme:e,ownerState:r})=>"regular"===r.variant&&e.mixins.toolbar),A=l.forwardRef(function(e,r){let o=(0,d.Z)({props:e,name:"MuiToolbar"}),{className:t,component:a="div",disableGutters:l=!1,variant:c="regular"}=o,p=(0,n.Z)(o,z),u=(0,i.Z)({},o,{component:a,disableGutters:l,variant:c}),f=R(u);return(0,Z.jsx)(w,(0,i.Z)({as:a,className:(0,s.Z)(f.root,t),ref:r,ownerState:u},p))});var S=o(5861),$=o(1796),I=o(7739);function N(e){return(0,v.Z)("MuiIconButton",e)}let M=(0,g.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),O=["edge","children","className","color","disabled","disableFocusRipple","size"],T=e=>{let{classes:r,disabled:o,color:t,edge:a,size:n}=e,i={root:["root",o&&"disabled","default"!==t&&`color${(0,u.Z)(t)}`,a&&`edge${(0,u.Z)(a)}`,`size${(0,u.Z)(n)}`]};return(0,c.Z)(i,N,r)},_=(0,p.ZP)(I.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:o}=e;return[r.root,"default"!==o.color&&r[`color${(0,u.Z)(o.color)}`],o.edge&&r[`edge${(0,u.Z)(o.edge)}`],r[`size${(0,u.Z)(o.size)}`]]}})(({theme:e,ownerState:r})=>(0,i.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,$.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12}),({theme:e,ownerState:r})=>{var o;let t=null==(o=(e.vars||e).palette)?void 0:o[r.color];return(0,i.Z)({},"inherit"===r.color&&{color:"inherit"},"inherit"!==r.color&&"default"!==r.color&&(0,i.Z)({color:null==t?void 0:t.main},!r.disableRipple&&{"&:hover":(0,i.Z)({},t&&{backgroundColor:e.vars?`rgba(${t.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,$.Fq)(t.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===r.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===r.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${M.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),P=l.forwardRef(function(e,r){let o=(0,d.Z)({props:e,name:"MuiIconButton"}),{edge:t=!1,children:a,className:l,color:c="default",disabled:p=!1,disableFocusRipple:u=!1,size:f="medium"}=o,g=(0,n.Z)(o,O),v=(0,i.Z)({},o,{edge:t,color:c,disabled:p,disableFocusRipple:u,size:f}),h=T(v);return(0,Z.jsx)(_,(0,i.Z)({className:(0,s.Z)(h.root,l),centerRipple:!0,focusRipple:!u,disabled:p,ref:r,ownerState:v},g,{children:a}))});var D=o(326),E=o(382);let H={fontSize:16,color:"common.white",ml:3};function F(){return(0,t.tZ)(y.Z,{sx:{flexGrow:1},children:(0,t.tZ)(B,{position:"static",children:(0,t.BX)(A,{children:[(0,t.tZ)(P,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:(0,t.tZ)(D.Z,{})}),(0,t.tZ)(S.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:(0,t.tZ)(E.C,{variant:"h6",underline:"none",color:"inherit",href:"#",sx:{fontSize:24},children:"FotoPie"})}),(0,t.tZ)(E.C,{color:"inherit",variant:"h6",underline:"none",href:"login",sx:H,children:"Log in"}),(0,t.tZ)(E.C,{variant:"h6",underline:"none",href:"signup",sx:{...H,color:"secondary.main"},children:"Sign Up"})]})})})}function G(){return(0,t.tZ)(a.Z,{maxWidth:"lg",children:(0,t.tZ)(t.HY,{children:(0,t.tZ)(F,{})})})}},382:function(e,r,o){"use strict";var t=o(5944),a=o(7294),n=o(6010),i=o(1163),l=o(1664),s=o.n(l),c=o(3795),p=o(948);let d=(0,p.ZP)("a")({}),u=a.forwardRef(function(e,r){let{to:o,linkAs:a,replace:n,scroll:i,shallow:l,prefetch:c,legacyBehavior:p=!0,locale:u,...f}=e;return(0,t.tZ)(s(),{href:o,prefetch:c,as:a,replace:n,scroll:i,shallow:l,passHref:!0,locale:u,legacyBehavior:p,children:(0,t.tZ)(d,{ref:r,...f})})}),f=a.forwardRef(function(e,r){let{activeClassName:o="active",as:a,className:l,href:s,legacyBehavior:p,linkAs:f,locale:g,noLinkStyle:v,prefetch:h,replace:Z,role:m,scroll:b,shallow:x,...k}=e,B=(0,i.useRouter)(),y="string"==typeof s?s:s.pathname,C=(0,n.Z)(l,{[o]:B.pathname===y&&o}),z="string"==typeof s&&(0===s.indexOf("http")||0===s.indexOf("mailto:"));if(z)return v?(0,t.tZ)(d,{className:C,href:s,ref:r,...k}):(0,t.tZ)(c.Z,{className:C,href:s,ref:r,...k});let R={to:s,linkAs:f||a,replace:Z,scroll:b,shallow:x,prefetch:h,legacyBehavior:p,locale:g};return v?(0,t.tZ)(u,{className:C,ref:r,...R,...k}):(0,t.tZ)(c.Z,{component:u,className:C,ref:r,...R,...k})});r.C=f}},function(e){e.O(0,[885,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);