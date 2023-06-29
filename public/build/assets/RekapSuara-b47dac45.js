import{r as l,W as I,j as t,F as $,a,g as O}from"./app-71ec72bf.js";import{P as o}from"./PrimaryButton-5c444baa.js";import{D as z,b as M,c as f}from"./DialogForm-b5bb6aa6.js";import{r as p,i as h,a as v}from"./jsx-runtime_commonjs-proxy-c931f3e8.js";import{A as q}from"./AlertDialog-ee145546.js";import"./LoadingButton-5260f33b.js";import"./styled-d5472c29.js";import"./InputLabel-96cc515b.js";import"./ownerWindow-b41c4029.js";import"./isHostComponent-73d6e646.js";import"./Select-11e55fd8.js";import"./DialogTitle-719443a4.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-c310e5a4.js";import"./Typography-a68132b2.js";import"./useControlled-11e756dc.js";import"./createSvgIcon-1bc4418c.js";import"./Close-c5a01a5e.js";import"./IconButton-b4687679.js";import"./Checkbox-9aeb0d64.js";import"./PasswordInput-111adfd8.js";import"./SecondaryButton-c8b1fadf.js";var n={},P=h;Object.defineProperty(n,"__esModule",{value:!0});var g=n.default=void 0,T=P(p()),A=v,E=(0,T.default)((0,A.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"}),"CheckCircleRounded");g=n.default=E;var s={},F=h;Object.defineProperty(s,"__esModule",{value:!0});var k=s.default=void 0,B=F(p()),G=v,L=(0,B.default)((0,G.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");k=s.default=L;function fe({users:C,suara:d}){const[S,r]=l.useState(!1),[x,c]=l.useState(!1),[b,_]=l.useState(""),{data:H,setData:u,post:N}=I({key:null,userId:null}),w=e=>{u("key",e.target.value)},R=e=>{u("userId",e),r(!0)},j=(e,i)=>{if(i&&i=="backdropClick")return r(!1);e&&N("banned"),r(!1)},m=(e,i)=>{c(!1)},D=e=>{_(`/storage/${e}`),c(!0)},y=[{field:"id",headerName:"ID",width:50},{field:"image",headerName:"Image",width:100,renderCell:e=>a("button",{onClick:()=>D(e.value),children:a("img",{src:`/storage/${e.value}`,width:50,height:50,alt:"foto-verifikasi",className:"rounded-lg"})})},{field:"name",headerName:"Nama",flex:1},{field:"email",headerName:"Email",flex:1},{field:"pemilihan",headerName:"Pemilihan",width:110,renderCell:e=>e.value==1?a(f,{title:"Suara sah",children:a(g,{color:"success"})}):a(f,{title:"Tidak sah",children:a(k,{color:"error"})})},{field:"action",headerName:"Aksi",flex:1,renderCell:e=>a(o,{color:e.row.pemilihan==1?"warning":"success",onClick:()=>R(e.id),children:e.row.pemilihan==1?"Tidak Sah":"Sah"}),disableClickEventBubbling:!0,sortable:!1,filterable:!1}];return t($,{children:[a("div",{className:"w-full",children:a("h1",{className:"text-2xl font-semibold text-center",children:"Rekap Suara"})}),t("div",{className:"my-4 flex justify-end w-full gap-4",children:[t("div",{className:"flex items-center gap-4 mx-4",children:[t("div",{children:["Sah : ",d.sah]}),t("div",{children:["Tidak Sah : ",d.tidakSah]})]}),a(o,{onClick:()=>O.reload(),color:"info",children:"Refresh"})]}),a("div",{className:"flex justify-center w-full",children:a(z,{rows:C,columns:y,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10,25,50,100],checkboxSelection:!1,disableRowSelectionOnClick:!0,autoHeight:!0})}),a(M,{open:S,handleClose:j,setKey:w}),a(q,{title:"Detail Gambar",content:a("img",{src:b,alt:"gambar-verifikasi"}),open:x,handleClose:m,dialogAction:a(o,{onClick:m,autoFocus:!0,children:"Tutup"})})]})}export{fe as default};