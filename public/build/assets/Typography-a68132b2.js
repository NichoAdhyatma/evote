import{b as y,_ as i,B as T,D as B,a as C,g as W,E as _,c as f,u as M,d as $,e as R}from"./styled-d5472c29.js";import{r as j,a as U}from"./app-71ec72bf.js";const A=["sx"],E=a=>{var t,r;const e={systemProps:{},otherProps:{}},n=(t=a==null||(r=a.theme)==null?void 0:r.unstable_sxConfig)!=null?t:T;return Object.keys(a).forEach(o=>{n[o]?e.systemProps[o]=a[o]:e.otherProps[o]=a[o]}),e};function N(a){const{sx:t}=a,r=y(a,A),{systemProps:e,otherProps:n}=E(r);let o;return Array.isArray(t)?o=[e,...t]:typeof t=="function"?o=(...p)=>{const s=t(...p);return B(s)?i({},e,s):e}:o=i({},e,t),i({},n,{sx:o})}function O(a){return C("MuiTypography",a)}W("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const D=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],L=a=>{const{align:t,gutterBottom:r,noWrap:e,paragraph:n,variant:o,classes:p}=a,s={root:["root",o,a.align!=="inherit"&&`align${f(t)}`,r&&"gutterBottom",e&&"noWrap",n&&"paragraph"]};return R(s,O,p)},S=_("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${f(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>i({margin:0},t.variant&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=a=>k[a]||a,z=j.forwardRef(function(t,r){const e=M({props:t,name:"MuiTypography"}),n=w(e.color),o=N(i({},e,{color:n})),{align:p="inherit",className:s,component:h,gutterBottom:d=!1,noWrap:x=!1,paragraph:c=!1,variant:l="body1",variantMapping:g=m}=o,v=y(o,D),u=i({},o,{align:p,color:n,className:s,component:h,gutterBottom:d,noWrap:x,paragraph:c,variant:l,variantMapping:g}),b=h||(c?"p":g[l]||m[l])||"span",P=L(u);return U(S,i({as:b,ref:r,ownerState:u,className:$(P.root,s)},v))}),q=z;export{q as T,N as e};
