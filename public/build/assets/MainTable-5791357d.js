import{W as y,r as i,j as c,F as D,a as t,g as O}from"./app-71ec72bf.js";import{S as T}from"./SecondaryButton-c8b1fadf.js";import{P as d}from"./PrimaryButton-5c444baa.js";import{b as m,D as j}from"./DialogForm-b5bb6aa6.js";import"./LoadingButton-5260f33b.js";import"./styled-d5472c29.js";import"./InputLabel-96cc515b.js";import"./ownerWindow-b41c4029.js";import"./isHostComponent-73d6e646.js";import"./Select-11e55fd8.js";import"./DialogTitle-719443a4.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-c310e5a4.js";import"./Typography-a68132b2.js";import"./useControlled-11e756dc.js";import"./createSvgIcon-1bc4418c.js";import"./Close-c5a01a5e.js";import"./IconButton-b4687679.js";import"./Checkbox-9aeb0d64.js";import"./PasswordInput-111adfd8.js";function Y({users:g}){const{data:R,setData:p,post:n,processing:o}=y({selectId:null,key:null}),[u,b]=i.useState(!1),[f,x]=i.useState(!1),[h,S]=i.useState(!1),[r,w]=i.useState(null),C=g,l=e=>{p("key",e.target.value)},N=[{field:"id",headerName:"ID",width:50},{field:"name",headerName:"Nama",flex:1},{field:"email",headerName:"Email",flex:1},{field:"token",headerName:"Token",flex:1}],a=e=>{switch(w(e),e){case 1:b(!u);break;case 2:x(!f);break;case 3:S(!h);break}},s=(e,k)=>{if(k&&k=="backdropClick")return a(r);switch(r){case 1:e&&n(route("token"));break;case 2:e&&n(route("delete-token"));break;case 3:e&&n(route("send-mail"));break}a(r)};return c(D,{children:[c("div",{className:"w-full",children:[t("h1",{className:"text-2xl font-semibold text-center",children:"Tabel Utama"}),c("div",{className:"flex justify-center my-4 gap-4",children:[t(d,{onClick:()=>a(3),color:"success",loading:o,children:"Kirim Token"}),t(d,{onClick:()=>a(1),loading:o,children:"Generate Token"}),t(d,{onClick:()=>a(2),color:"error",loading:o,children:"Hapus Token"}),t(T,{color:"warning",loading:o,onClick:()=>O.reload(),children:"Refresh Data"})]}),t(m,{open:u,handleClose:s,setKey:l}),t(m,{open:f,handleClose:s,setKey:l}),t(m,{open:h,handleClose:s,setKey:l})]}),t("div",{className:"flex justify-center w-full",children:t(j,{rows:C,onRowSelectionModelChange:e=>{p("selectId",e)},columns:N,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10,25,50,100],checkboxSelection:!0,disableRowSelectionOnClick:!0,autoHeight:!0})})]})}export{Y as default};
