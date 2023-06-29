import{a as e,W as c,r as u,j as m,b as p}from"./app-2c2fee0d.js";import{C as d}from"./Checkbox-c43446e2.js";import{G as f}from"./GuestLayout-5c9b1a4f.js";import{T as b,I as i}from"./TextInput-07c44230.js";import{P as h}from"./PrimaryButton-9f187551.js";import{P as g}from"./PasswordInput-82c84428.js";import{Q as k,k as x}from"./react-toastify.esm-3442f32f.js";import"./styled-90ede671.js";import"./InputLabel-bb8e6c6e.js";import"./ownerWindow-9ca3be68.js";import"./isHostComponent-73d6e646.js";import"./LoadingButton-9c2f4833.js";import"./useControlled-a5585d50.js";import"./createSvgIcon-1e0c993f.js";import"./ApplicationLogo-159b14bf.js";import"./Typography-1983ce85.js";import"./IconButton-a142d18f.js";function C({className:a="",...o}){return e(d,{...o,type:"checkbox",className:a})}function Q({status:a}){const{data:o,setData:s,post:l,processing:n,errors:r}=c({email:"",token:"",remember:!1});return u.useEffect(()=>{r.all&&k.error(r.all,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},[r]),m(f,{children:[e(p,{title:"Log in"}),a&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),m("form",{onSubmit:t=>{t.preventDefault(),l(route("login"))},children:[m("div",{children:[e(b,{id:"email",type:"email",name:"email",required:!0,className:"mt-1 block w-full",label:"Email",autoComplete:"username",isFocused:!0,onChange:t=>s("email",t.target.value)}),e(i,{message:r.email,className:"mt-2"})]}),m("div",{className:"mt-4",children:[e(g,{id:"token",name:"token",required:!0,label:"Token",className:"mt-1 block w-full",autoComplete:"current-token",onChange:t=>s("token",t.target.value)}),e(i,{message:r.token,className:"mt-2"})]}),e("div",{className:"block mt-4",children:m("label",{className:"flex items-center",children:[e(C,{name:"remember",checked:o.remember,onChange:t=>s("remember",t.target.checked)}),e("span",{className:"text-sm text-gray-600",children:"Remember me"})]})}),e("div",{className:"flex items-center justify-end mt-4",children:e(h,{loading:n,type:"submit",children:"Masuk"})})]}),e(x,{limit:5})]})}export{Q as default};