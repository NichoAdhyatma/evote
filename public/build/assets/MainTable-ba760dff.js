import{W as N,r as i,j as o,F as O,a as t,g as j}from"./app-137eb9d1.js";import{S as R}from"./SecondaryButton-0d6fdc43.js";import{P as d}from"./PrimaryButton-5ccb9114.js";import{b as p,D as T}from"./DialogForm-3e3cddc0.js";import{r as _,i as H,a as z}from"./jsx-runtime_commonjs-proxy-ec3f7063.js";import{Q as I}from"./react-toastify.esm-c234a1a5.js";import{D as M}from"./IconButton-b672f0ad.js";import"./LoadingButton-e1ecdc19.js";import"./styled-246d18b4.js";import"./InputLabel-27aaedda.js";import"./ownerWindow-01f65a04.js";import"./isHostComponent-73d6e646.js";import"./Select-40895f87.js";import"./DialogTitle-56bf8315.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-0248fdc8.js";import"./Typography-3f55d31f.js";import"./useControlled-4795f8d6.js";import"./createSvgIcon-82247112.js";import"./Close-bc5e2f3c.js";import"./Checkbox-5da2df6b.js";import"./PasswordInput-f3e67e48.js";var m={},q=H;Object.defineProperty(m,"__esModule",{value:!0});var v=m.default=void 0,B=q(_()),P=z,V=(0,B.default)((0,P.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");v=m.default=V;function ce({users:C}){const{data:E,setData:u,post:l,processing:r}=N({selectId:null,key:null}),[f,x]=i.useState(!1),[h,b]=i.useState(!1),[g,S]=i.useState(!1),[n,y]=i.useState(null),w=C,s=e=>{u("key",e.target.value)},D=[{field:"id",headerName:"ID",width:50},{field:"name",headerName:"Nama",flex:1},{field:"email",headerName:"Email",flex:1},{field:"token",headerName:"Token",flex:1,renderCell:e=>o("div",{className:"flex items-center gap-4",children:[t(M,{"aria-label":"copy-token",onClick:()=>{navigator.clipboard.writeText(e.value),I.info("Berhasil terkopi",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"})},children:t(v,{})}),o("p",{children:[" ",e.value]})]})}],a=e=>{switch(y(e),e){case 1:x(!f);break;case 2:b(!h);break;case 3:S(!g);break}},c=(e,k)=>{if(k&&k=="backdropClick")return a(n);switch(n){case 1:e&&l(route("token"));break;case 2:e&&l(route("delete-token"));break;case 3:e&&l(route("send-mail"));break}a(n)};return o(O,{children:[o("div",{className:"w-full",children:[t("h1",{className:"text-2xl font-semibold text-center",children:"Tabel Utama"}),o("div",{className:"flex justify-center my-4 gap-4",children:[t(d,{onClick:()=>a(3),color:"success",loading:r,children:"Kirim Token"}),t(d,{onClick:()=>a(1),loading:r,children:"Generate Token"}),t(d,{onClick:()=>a(2),color:"error",loading:r,children:"Hapus Token"}),t(R,{loading:r,onClick:()=>j.reload(),children:"Refresh Data"})]}),t(p,{open:f,handleClose:c,setKey:s}),t(p,{open:h,handleClose:c,setKey:s}),t(p,{open:g,handleClose:c,setKey:s})]}),t("div",{className:"flex justify-center w-full",children:t(T,{rows:w,onRowSelectionModelChange:e=>{u("selectId",e)},columns:D,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10,25,50,100],checkboxSelection:!0,disableRowSelectionOnClick:!0,autoHeight:!0})})]})}export{ce as default};