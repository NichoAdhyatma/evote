import{W as p,r as d,j as a,a as s,b as l}from"./app-46c43222.js";import{G as c}from"./GuestLayout-8107e5dc.js";import{T as u,I as f}from"./TextInput-8cd50f29.js";import{I as w}from"./InputLabel-3ea32f44.js";import{P as h}from"./PrimaryButton-36bd97e1.js";import"./ApplicationLogo-c454d00e.js";import"./InputLabel-3bba32eb.js";import"./styled-71d035de.js";import"./ownerWindow-4b0f179e.js";import"./isHostComponent-73d6e646.js";import"./LoadingButton-c0ff1656.js";function D(){const{data:e,setData:t,post:o,processing:i,errors:m,reset:n}=p({password:""});return d.useEffect(()=>()=>{n("password")},[]),a(c,{children:[s(l,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(w,{htmlFor:"password",value:"Password"}),s(u,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>t("password",r.target.value)}),s(f,{message:m.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(h,{className:"ml-4",disabled:i,children:"Confirm"})})]})]})}export{D as default};
