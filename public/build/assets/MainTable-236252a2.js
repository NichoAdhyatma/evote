import{W as y,r as a,q as D,j as p,F as T,a as e,g as j}from"./app-46c43222.js";import{P as d}from"./PrimaryButton-36bd97e1.js";import{S as v}from"./SecondaryButton-837dbd62.js";import{Q as R,k as B}from"./react-toastify.esm-e1b22fd2.js";import{D as m,b as E}from"./DialogForm-41633245.js";import"./LoadingButton-c0ff1656.js";import"./styled-71d035de.js";import"./InputLabel-3bba32eb.js";import"./ownerWindow-4b0f179e.js";import"./isHostComponent-73d6e646.js";import"./Select-9991a294.js";import"./DialogTitle-1407fa14.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-dc770eeb.js";import"./Typography-f9e22666.js";import"./useControlled-a90df4d3.js";import"./createSvgIcon-bfc551ed.js";import"./Close-69c4a0b1.js";import"./IconButton-972f1dda.js";import"./Checkbox-faf4cfbb.js";import"./PasswordInput-c5b88399.js";function te({users:b}){const{data:F,setData:u,post:i,processing:s}=y({selectId:null,key:null}),[f,x]=a.useState(!1),[h,C]=a.useState(!1),[g,S]=a.useState(!1),[n,w]=a.useState(null),{flash:r}=D().props,N=b,l=t=>{u("key",t.target.value)},O=[{field:"id",headerName:"ID",width:50},{field:"name",headerName:"Nama",flex:1},{field:"email",headerName:"Email",flex:1},{field:"token",headerName:"Token",flex:1}],o=t=>{switch(w(t),t){case 1:x(!f);break;case 2:C(!h);break;case 3:S(!g);break}},c=(t,k)=>{if(k&&k=="backdropClick")return o(n);switch(n){case 1:t&&i(route("token"));break;case 2:t&&i(route("delete-token"));break;case 3:t&&i(route("send-mail"));break}o(n)};return a.useEffect(()=>{r.success&&(R.success(r.success,{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),r.success=null)},[r.success]),p(T,{children:[p("div",{className:"w-full",children:[e("h1",{className:"text-2xl font-semibold text-center",children:"Tabel Utama"}),p("div",{className:"flex justify-center my-4 gap-4",children:[e(d,{onClick:()=>o(3),color:"success",loading:s,children:"Kirim Token"}),e(d,{onClick:()=>o(1),loading:s,children:"Generate Token"}),e(d,{onClick:()=>o(2),color:"error",loading:s,children:"Hapus Token"}),e(v,{color:"warning",loading:s,onClick:()=>j.reload(),children:"Refresh Data"})]}),e(m,{open:f,handleClose:c,setKey:l}),e(m,{open:h,handleClose:c,setKey:l}),e(m,{open:g,handleClose:c,setKey:l})]}),e("div",{className:"flex justify-center w-full",children:e(E,{rows:N,onRowSelectionModelChange:t=>{u("selectId",t)},columns:O,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10,25],checkboxSelection:!0,disableRowSelectionOnClick:!0,autoHeight:!0})}),e(B,{})]})}export{te as default};
