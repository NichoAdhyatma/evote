import{r as d,a as n,j as C}from"./app-e6603889.js";import{u as z,d as x,F as A,b as E,c as M}from"./InputLabel-fc2f3cad.js";import{g as L,a as F,s as S,_ as v,u as R,b as T,d as $,c as b,e as _}from"./styled-c62298f6.js";import{T as j}from"./Typography-f881f5b7.js";import{I as N}from"./IconButton-962c2c56.js";import{c as P}from"./createSvgIcon-3db1691b.js";function U(e){return F("MuiInputAdornment",e)}const V=L("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),I=V;var y;const D=["children","className","component","disablePointerEvents","disableTypography","position","variant"],k=(e,t)=>{const{ownerState:s}=e;return[t.root,t[`position${b(s.position)}`],s.disablePointerEvents===!0&&t.disablePointerEvents,t[s.variant]]},B=e=>{const{classes:t,disablePointerEvents:s,hiddenLabel:i,position:o,size:a,variant:r}=e,l={root:["root",s&&"disablePointerEvents",o&&`position${b(o)}`,r,i&&"hiddenLabel",a&&`size${b(a)}`]};return _(l,U,t)},O=S("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:k})(({theme:e,ownerState:t})=>v({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},t.variant==="filled"&&{[`&.${I.positionStart}&:not(.${I.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),W=d.forwardRef(function(t,s){const i=R({props:t,name:"MuiInputAdornment"}),{children:o,className:a,component:r="div",disablePointerEvents:l=!1,disableTypography:f=!1,position:u,variant:m}=i,c=T(i,D),p=z()||{};let h=m;m&&p.variant,p&&!h&&(h=p.variant);const g=v({},i,{hiddenLabel:p.hiddenLabel,size:p.size,disablePointerEvents:l,position:u,variant:h}),w=B(g);return n(x.Provider,{value:null,children:n(O,v({as:r,ownerState:g,className:$(w.root,a),ref:s},c,{children:typeof o=="string"&&!f?n(j,{color:"text.secondary",children:o}):C(d.Fragment,{children:[u==="start"?y||(y=n("span",{className:"notranslate",children:"​"})):null,o]})}))})}),H=W,q=P(n("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility"),G=P(n("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff"),tt=d.forwardRef(function({className:t="",label:s="TextField",isFocused:i=!1,...o},a){const r=a||d.useRef(),[l,f]=d.useState(!1),u=()=>f(c=>!c),m=c=>{c.preventDefault()};return d.useEffect(()=>{i&&r.current.focus()},[]),C(A,{variant:"standard",fullWidth:!0,margin:"dense",size:"small",children:[n(E,{htmlFor:o.id,children:s}),n(M,{...o,label:s,type:l?"text":"password",className:t,ref:r,endAdornment:n(H,{position:"end",children:n(N,{"aria-label":"toggle password visibility",onClick:u,onMouseDown:m,children:l?n(G,{}):n(q,{})})})})]})});export{H as I,tt as P};
