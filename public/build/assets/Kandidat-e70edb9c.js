import{R as _,j as f,a,W as H,r as p,F as U,g as J}from"./app-71ec72bf.js";import{P as M}from"./PrimaryButton-5c444baa.js";import{r as K,i as L,a as W}from"./jsx-runtime_commonjs-proxy-c931f3e8.js";import{E as Q}from"./styled-d5472c29.js";import{T as $,D as X,b as ee}from"./DialogForm-b5bb6aa6.js";import{B as R}from"./PasswordInput-111adfd8.js";import{T as te}from"./Typography-a68132b2.js";import{D as ae}from"./IconButton-b4687679.js";import{A as ie}from"./AlertDialog-ee145546.js";import{D as re,b as le,c as ne,d as oe}from"./DialogTitle-719443a4.js";import{F as S}from"./InputLabel-96cc515b.js";import{S as se,M as j}from"./Select-11e55fd8.js";import{a as ue}from"./LoadingButton-5260f33b.js";import"./createSvgIcon-1bc4418c.js";import"./createChainedFunction-0bab83cf.js";import"./ownerWindow-b41c4029.js";import"./useControlled-11e756dc.js";import"./Close-c5a01a5e.js";import"./Paper-c310e5a4.js";import"./Checkbox-9aeb0d64.js";import"./isHostComponent-73d6e646.js";import"./SecondaryButton-c8b1fadf.js";var w={},de=L;Object.defineProperty(w,"__esModule",{value:!0});var G=w.default=void 0,ce=de(K()),me=W,pe=(0,ce.default)((0,me.jsx)("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");G=w.default=pe;var z={},fe=L;Object.defineProperty(z,"__esModule",{value:!0});var q=z.default=void 0,he=fe(K()),ge=W,ve=(0,he.default)((0,ge.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");q=z.default=ve;const be=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],ye=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],xe=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],Ce=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],E=(t,e,i)=>{let l=t;return typeof e=="string"||Array.isArray(e)?l=t.toLocaleString(e,i):(e===!0||i!==void 0)&&(l=t.toLocaleString(void 0,i)),l};function O(t,e){if(!Number.isFinite(t))throw new TypeError(`Expected a finite number, got ${typeof t}: ${t}`);e={bits:!1,binary:!1,...e};const i=e.bits?e.binary?Ce:xe:e.binary?ye:be;if(e.signed&&t===0)return` 0 ${i[0]}`;const l=t<0,m=l?"-":e.signed?"+":"";l&&(t=-t);let o;if(e.minimumFractionDigits!==void 0&&(o={minimumFractionDigits:e.minimumFractionDigits}),e.maximumFractionDigits!==void 0&&(o={maximumFractionDigits:e.maximumFractionDigits,...o}),t<1){const s=E(t,e.locale,o);return m+s+" "+i[0]}const u=Math.min(Math.floor(e.binary?Math.log(t)/Math.log(1024):Math.log10(t)/3),i.length-1);t/=(e.binary?1024:1e3)**u,o||(t=t.toPrecision(3));const y=E(Number(t),e.locale,o),d=i[u];return m+y+" "+d}const Fe=Q("label")`
  position: relative;

  input {
    opacity: 0 !important;
  }

  span {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
  }

  span.MuiFileInput-placeholder {
    color: gray;
  }
`,ke={Label:Fe},Me=_.forwardRef((t,e)=>{const{text:i,isPlaceholder:l,placeholder:m,...o}=t,u=_.useId();return f(ke.Label,{htmlFor:u,children:[a("input",{...o,ref:e,id:u}),i?a("span",{"aria-placeholder":m,className:l?"MuiFileInput-placeholder":"",children:i}):null]})});function Se(t){return t.length>0}function Be(t){return t.reduce((e,i)=>e+i.size,0)}function P(t){return typeof window<"u"&&t instanceof File}function Ae(t){return Array.from(t)}function De(t,e){if(t.length<e)return t;const i=Math.floor((e-1)/2);return`${t.slice(0,i)}…${t.slice(t.length-i)}`}function Ie(t){var v;const{value:e,onChange:i,disabled:l,getInputText:m,getSizeText:o,placeholder:u,hideSizeText:y,inputProps:d,InputProps:s,multiple:C,className:B,...A}=t,h=_.useRef(null),g=C||(d==null?void 0:d.multiple)||((v=s==null?void 0:s.inputProps)==null?void 0:v.multiple)||!1,D=()=>{const n=h.current;n&&(n.value="")},I=n=>{const b=n.target.files,k=b?Ae(b):[];D(),i==null||i(g?k:k[0])},N=n=>{n.preventDefault(),!l&&(i==null||i(C?[]:null))},x=Array.isArray(e)?Se(e):P(e),T=()=>{var n;if(e===null||Array.isArray(e)&&e.length===0)return u||"";if(typeof m=="function"&&e!==void 0)return m(e);if(e&&x){if(Array.isArray(e)&&e.length>1)return`${e.length} files`;const b=P(e)?e.name:((n=e[0])==null?void 0:n.name)||"";return De(b,20)}return""},F=()=>{if(typeof o=="function"&&e!==void 0)return o(e);if(x){if(Array.isArray(e)){const n=Be(e);return O(n)}if(P(e))return O(e.size)}return""};return a($,{type:"file",disabled:l,onChange:I,className:`MuiFileInput-TextField ${B||""}`,InputProps:{startAdornment:a(R,{position:"start",children:a(G,{})}),endAdornment:f(R,{position:"end",style:{visibility:x?"visible":"hidden"},children:[y?null:a(te,{variant:"caption",mr:"2px",className:"MuiFileInput-Typography-size-text",children:F()}),a(ae,{"aria-label":"Clear",title:"Clear",size:"small",disabled:l,className:"MuiFileInput-IconButton",onClick:N,children:a(q,{fontSize:"small"})})]}),...s,inputProps:{text:T(),multiple:g,isPlaceholder:e===null||Array.isArray(e)&&e.length===0,ref:h,placeholder:u,...d,...s==null?void 0:s.inputProps},inputComponent:Me},...A})}function Qe({candidate:t}){const{data:e,setData:i,post:l,processing:m}=H({candidate_name:null,level:"bem",image:null,key:null}),[o,u]=p.useState(null),[y,d]=p.useState(!1),s=t,C=[{field:"id",headerName:"ID",width:50},{field:"image",headerName:"Image",width:100,renderCell:r=>a("button",{onClick:()=>Y(r.value),children:a("img",{src:`/storage/${r.value}`,width:50,height:50,alt:"foto-verifikasi",className:"rounded-lg"})})},{field:"candidate_name",headerName:"Nama",flex:1},{field:"level",headerName:"Level",flex:1},{field:"action",headerName:"Aksi",flex:1,renderCell:r=>a(M,{onClick:()=>{u(r.row.id),d(!0)},color:"error",children:"Hapus"})}],[B,A]=p.useState("bem"),[h,g]=p.useState(!1),[D,I]=p.useState(null),[N,x]=p.useState(null),[T,F]=p.useState(!1),v=(r,c)=>{if(c&&c=="backdropClick")return g(!h);r&&l(route("kandidat.store")),g(!h)},n=(r,c)=>{F(!1)},b=(r,c)=>{if(c&&c=="backdropClick")return d(!1);r&&J.post("/delete-kandidat",{key:e.key,id:o}),d(falsecle)},k=r=>{A(r.target.value),i("level",r.target.value)},V=r=>{i("key",r.target.value)},Z=r=>{I(r),i("image",r)},Y=r=>{x(`/storage/${r}`),F(!0)};return a(U,{children:f("div",{className:"w-full",children:[a("h1",{className:"text-2xl text-center font-bold",children:"Kandidat"}),a("div",{className:"flex justify-center my-4",children:a(M,{onClick:()=>g(!0),children:"Tambah Kandidat"})}),f(re,{open:h,onClose:v,fullWidth:!0,children:[a(le,{children:"Form tambah candidate"}),f(ne,{className:"flex flex-col gap-6",children:[a(S,{fullWidth:!0,children:a($,{autoFocus:!0,id:"name",label:"Nama Kandidat",fullWidth:!0,variant:"standard",onChange:r=>i("candidate_name",r.target.value)})}),a(S,{fullWidth:!0,children:f(se,{labelId:"level",id:"level-select",value:B,label:"Level",onChange:k,variant:"standard",children:[a(j,{value:"bem",children:"BEM"}),a(j,{value:"blm",children:"BLM"})]})}),a(S,{fullWidth:!0,children:a(Ie,{label:"Foto Kandidat",id:"image-kandidat",value:D,onChange:Z,variant:"standard"})}),a(S,{fullWidth:!0,children:a($,{autoFocus:!0,id:"key",label:"Key",fullWidth:!0,variant:"standard",onChange:r=>i("key",r.target.value)})})]}),f(oe,{children:[a(ue,{onClick:(r,c)=>v(!1,c),children:"Cancel"}),a(M,{onClick:(r,c)=>v(!0,c),children:"Tambah"})]})]}),a(X,{rows:s,columns:C,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10,25,50,100],checkboxSelection:!1,disableRowSelectionOnClick:!0,autoHeight:!0}),a(ee,{open:y,handleClose:b,setKey:V}),a(ie,{title:"Detail Gambar",content:a("img",{src:N,alt:"gambar-kandidat"}),open:T,handleClose:n,dialogAction:a(M,{onClick:n,autoFocus:!0,children:"Tutup"})})]})})}export{Qe as default};
