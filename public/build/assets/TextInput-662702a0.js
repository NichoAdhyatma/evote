import{a as s,r as n,j as c}from"./app-e6603889.js";import{F as f,b as d,c as m}from"./InputLabel-fc2f3cad.js";function I({message:t,className:r="",...e}){return t?s("p",{...e,className:"text-sm text-red-600 "+r,children:t}):null}const h=n.forwardRef(function({className:r="",label:e="TextField",isFocused:i=!1,type:l="",...a},u){const o=u||n.useRef();return n.useEffect(()=>{i&&o.current.focus()},[]),c(f,{variant:"standard",fullWidth:!0,margin:"dense",size:"small",children:[s(d,{htmlFor:a.id,children:e}),s(m,{...a,type:l,className:r,ref:o})]})});export{I,h as T};
