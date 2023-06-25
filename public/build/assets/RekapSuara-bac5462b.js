import{r as n,W as I,j as t,F as y,a,g as $}from"./app-46c43222.js";import{P as s}from"./PrimaryButton-36bd97e1.js";import{b as O,D as M,T as f}from"./DialogForm-41633245.js";import{r as h,i as p,a as g}from"./jsx-runtime_commonjs-proxy-9f38f376.js";import{A as z}from"./AlertDialog-5dd76dc4.js";import"./LoadingButton-c0ff1656.js";import"./styled-71d035de.js";import"./InputLabel-3bba32eb.js";import"./ownerWindow-4b0f179e.js";import"./isHostComponent-73d6e646.js";import"./Select-9991a294.js";import"./DialogTitle-1407fa14.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-dc770eeb.js";import"./Typography-f9e22666.js";import"./useControlled-a90df4d3.js";import"./createSvgIcon-bfc551ed.js";import"./Close-69c4a0b1.js";import"./IconButton-972f1dda.js";import"./Checkbox-faf4cfbb.js";import"./PasswordInput-c5b88399.js";import"./SecondaryButton-837dbd62.js";var d={},T=p;Object.defineProperty(d,"__esModule",{value:!0});var v=d.default=void 0,q=T(h()),P=g,A=(0,q.default)((0,P.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"}),"CheckCircleRounded");v=d.default=A;var c={},E=p;Object.defineProperty(c,"__esModule",{value:!0});var C=c.default=void 0,F=E(h()),B=g,G=(0,F.default)((0,B.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");C=c.default=G;function me({users:l}){const[k,i]=n.useState(!1),[S,u]=n.useState(!1),[x,b]=n.useState(""),{data:L,setData:r,post:_}=I({key:null,userId:null}),w=e=>{r("key",e.target.value)},N=e=>{r("userId",e),i(!0)},R=(e,o)=>{if(o&&o=="backdropClick")return i(!1);e&&_("banned"),i(!1)},m=(e,o)=>{u(!1)},j=e=>{b(`/storage/${e}`),u(!0)},D=[{field:"id",headerName:"ID",width:50},{field:"image",headerName:"Image",width:100,renderCell:e=>a("button",{onClick:()=>j(e.value),children:a("img",{src:`/storage/${e.value}`,width:50,height:50,alt:"foto-verifikasi",className:"rounded-lg"})})},{field:"name",headerName:"Nama",flex:1},{field:"email",headerName:"Email",flex:1},{field:"pemilihan",headerName:"Pemilihan",width:110,renderCell:e=>e.value===1?a(f,{title:"Suara sah",children:a(v,{color:"success"})}):a(f,{title:"Tidak sah",children:a(C,{color:"error"})})},{field:"action",headerName:"Aksi",flex:1,renderCell:e=>a(s,{color:e.row.pemilihan?"warning":"success",onClick:()=>N(e.id),children:e.row.pemilihan?"Tidak Sah":"Sah"}),disableClickEventBubbling:!0,sortable:!1,filterable:!1}];return t(y,{children:[a("div",{className:"w-full",children:a("h1",{className:"text-2xl font-semibold text-center",children:"Rekap Suara"})}),t("div",{className:"my-4 flex justify-end w-full gap-4",children:[t("div",{className:"flex items-center gap-4 mx-4",children:[t("div",{children:["Sah :"," ",l.filter(e=>e.pemilihan===1).length]}),t("div",{children:["Tidak Sah :"," ",l.filter(e=>e.pemilihan===0).length]})]}),a(s,{onClick:()=>$.reload(),color:"info",children:"Refresh"})]}),a("div",{className:"flex justify-center w-full",children:a(O,{rows:l,onRowSelectionModelChange:e=>{r("selectId",e)},columns:D,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10,25,50,100],checkboxSelection:!1,disableRowSelectionOnClick:!0,autoHeight:!0})}),a(M,{open:k,handleClose:R,setKey:w}),a(z,{title:"Detail Gambar",content:a("img",{src:x,alt:"gambar-verifikasi"}),open:S,handleClose:m,dialogAction:a(s,{onClick:m,autoFocus:!0,children:"Tutup"})})]})}export{me as default};
