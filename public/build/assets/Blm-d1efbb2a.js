import{j as r,F as t,a}from"./app-71ec72bf.js";import{P as c}from"./PrimaryButton-5c444baa.js";import{d as m}from"./CheckCircle-752fe9eb.js";import"./LoadingButton-5260f33b.js";import"./styled-d5472c29.js";import"./jsx-runtime_commonjs-proxy-c931f3e8.js";import"./createSvgIcon-1bc4418c.js";import"./createChainedFunction-0bab83cf.js";import"./ownerWindow-b41c4029.js";import"./useControlled-11e756dc.js";function v({handlePilihan:s,blm:e,candidate:l}){return r(t,{children:[a("h1",{className:"font-semibold text-center my-4",children:"Pemilihan Ketua BLM FH"}),a("div",{className:"flex flex-wrap gap-8 items-center w-full justify-center",children:l.map((i,n)=>r("div",{className:"flex flex-col gap-4 items-center",children:[a("div",{className:"h-60",children:a("img",{src:`/storage/${i.image}`,alt:"kandidat",width:250,height:250,className:"min-h-[250]"})}),a("p",{className:"font-bold mt-4",children:i.candidate_name}),a(c,{className:"mt-4",onClick:()=>s("blm",i.id),variant:e===i.id?"outlined":"contained",startIcon:e===i.id?a(m,{}):a(t,{}),color:e===i.id?"success":"primary",children:e===i.id?"Dipilih":"pilih"})]},n))})]})}export{v as default};
