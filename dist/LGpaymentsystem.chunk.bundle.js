"use strict";(self.webpackChunkntelecom_project=self.webpackChunkntelecom_project||[]).push([[193],{4301:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(6540);const o=function(){const[e,t]=(0,n.useState)(window.innerWidth),[i,o]=(0,n.useState)(window.innerHeight),[r,d]=(0,n.useState)(window.innerWidth<=600||window.outerWidth<=600),[s,c]=(0,n.useState)(!1),l=()=>{t(window.innerWidth),o(window.innerHeight),d(window.innerWidth<=600||window.outerWidth<=600)};return(0,n.useEffect)((()=>(l(),c(!0),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l))),[]),{width:e,height:i,isMobile:r,isLoaded:s}}},8144:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var n=i(6540),o=i(6199),r=i(4301);const d=i.p+"asset/4cc14d827c2a61332013.jpg",s=i.p+"asset/412b49b568b39b2b0cb2.jpg",c=o.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${e=>e.$isMobile?"column":"row"};
`,l=o.Ay.div`
  width: 100%;
  margin-bottom: 30px;
`,a=o.Ay.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`,w=()=>{const{isMobile:e}=(0,r.A)();return n.createElement(n.Fragment,null,n.createElement(c,{$isMobile:e},n.createElement(l,null,n.createElement(a,{src:d,alt:"lg망 요금제"})),n.createElement(l,null,n.createElement(a,{src:s,alt:"lg망 약정플랜"}))))}}}]);