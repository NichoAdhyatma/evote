import{W as c,r as d,j as a,a as e,b as p,e as f}from"./app-42910615.js";import{G as g}from"./GuestLayout-1d348ed4.js";import{T as i,I as o}from"./TextInput-f2749bdf.js";import{P as h}from"./PrimaryButton-3e02cdd9.js";import"./PasswordInput-5be15053.js";import"./ApplicationLogo-2aa0c112.js";import"./InputLabel-ea13a597.js";import"./styled-c5ff2dab.js";import"./ownerWindow-162f2156.js";import"./isHostComponent-73d6e646.js";import"./LoadingButton-d1c9b060.js";import"./Typography-8de24537.js";import"./IconButton-faf9a2fc.js";import"./createSvgIcon-256b4bf5.js";function R(){const{data:m,setData:s,post:n,processing:l,errors:t,reset:u}=c({name:"",email:"",password:"",password_confirmation:""});return d.useEffect(()=>()=>{u("password","password_confirmation")},[]),a(g,{children:[e(p,{title:"Register"}),a("form",{onSubmit:r=>{r.preventDefault(),n(route("register"))},children:[a("div",{children:[e(i,{id:"name",name:"name",label:"Nama",value:m.name,error:t.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:r=>s("name",r.target.value),required:!0}),e(o,{message:t.name,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(i,{id:"email",label:"Email",type:"email",name:"email",error:t.email,value:m.email,className:"mt-1 block w-full",autoComplete:"username",onChange:r=>s("email",r.target.value),required:!0}),e(o,{message:t.email,className:"mt-2"})]}),a("div",{className:"flex items-center justify-end mt-4",children:[e(f,{href:route("login"),className:"mr-5 underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Sudah punya akun ?"}),e(h,{loading:l,type:"submit",children:"Daftar"})]})]})]})}export{R as default};