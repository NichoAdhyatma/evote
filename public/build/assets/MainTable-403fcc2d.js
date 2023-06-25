import{W as I,r as a,q as F,j as m,F as R,a as e,g as A}from"./app-e6603889.js";import{A as B}from"./AlertDialog-29e56b41.js";import{S as E}from"./SecondaryButton-e50b957a.js";import{Q as G,k as H}from"./react-toastify.esm-909add7c.js";import{P as r}from"./PrimaryButton-bc2b7c20.js";import{D as u,b as M}from"./DialogForm-bb089ac0.js";import"./styled-c62298f6.js";import"./LoadingButton-d7bd651f.js";import"./ownerWindow-a80d2419.js";import"./createChainedFunction-0bab83cf.js";import"./isHostComponent-73d6e646.js";import"./Paper-4d49dead.js";import"./Typography-f881f5b7.js";import"./InputLabel-fc2f3cad.js";import"./Select-820845a9.js";import"./useControlled-d9255c7b.js";import"./createSvgIcon-3db1691b.js";import"./Close-a610ad6f.js";import"./IconButton-962c2c56.js";import"./Checkbox-af8332d5.js";import"./PasswordInput-bef0d4ca.js";function le({users:C}){const{data:P,setData:p,post:l,processing:i}=I({selectId:null,key:null}),[f,S]=a.useState(!1),[h,w]=a.useState(!1),[g,x]=a.useState(!1),[k,N]=a.useState(!1),[n,O]=a.useState(null),[D,v]=a.useState(null),{flash:c}=F().props,y=C,d=t=>{p("key",t.target.value)},T=t=>{v(`/storage/${t.value}`),o(4)},j=[{field:"id",headerName:"ID",width:50},{field:"image",headerName:"Image",width:100,renderCell:t=>e("button",{onClick:()=>T(t),children:e("img",{src:`/storage/${t.value}`,width:50,height:50,alt:"foto-verifikasi",className:"rounded-lg"})})},{field:"name",headerName:"Nama",flex:1},{field:"email",headerName:"Email",flex:1},{field:"token",headerName:"Token",flex:1}],o=t=>{switch(O(t),t){case 1:S(!f);break;case 2:w(!h);break;case 3:x(!g);break;case 4:N(!k);break}},s=(t,b)=>{if(b&&b=="backdropClick")return o(n);switch(n){case 1:t&&l(route("token"));break;case 2:t&&l(route("delete-token"));break;case 3:t&&l(route("send-mail"));break}o(n)};return a.useEffect(()=>{c.success&&G.success(c.success,{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},[c.success]),m(R,{children:[m("div",{className:"w-full",children:[e("h1",{className:"text-2xl font-semibold text-center",children:"Tabel Utama"}),m("div",{className:"flex justify-center my-4 gap-4",children:[e(r,{onClick:()=>o(3),color:"success",loading:i,children:"Kirim Token"}),e(r,{onClick:()=>o(1),loading:i,children:"Generate Token"}),e(r,{onClick:()=>o(2),color:"error",loading:i,children:"Hapus Token"}),e(E,{color:"warning",loading:i,onClick:()=>A.reload(),children:"Refresh Data"})]}),e(u,{open:f,handleClose:s,setKey:d}),e(u,{open:h,handleClose:s,setKey:d}),e(u,{open:g,handleClose:s,setKey:d}),e(B,{title:"Detail Gambar",content:e("img",{src:D,alt:"gambar-verifikasi"}),open:k,handleClose:s,dialogAction:e(r,{onClick:()=>s(!0),autoFocus:!0,children:"Tutup"})})]}),e("div",{className:"flex justify-center w-full",children:e(M,{rows:y,onRowSelectionModelChange:t=>{p("selectId",t)},columns:j,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10,25],checkboxSelection:!0,disableRowSelectionOnClick:!0,autoHeight:!0})}),e(H,{})]})}export{le as default};
