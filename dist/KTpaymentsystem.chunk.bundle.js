"use strict";(self.webpackChunkntelecom_project=self.webpackChunkntelecom_project||[]).push([[563],{4301:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(6540);const d=function(){const[e,t]=(0,n.useState)(window.innerWidth),[i,d]=(0,n.useState)(window.innerHeight),[o,r]=(0,n.useState)(window.innerWidth<=600||window.outerWidth<=600),[a,s]=(0,n.useState)(!1),c=()=>{t(window.innerWidth),d(window.innerHeight),r(window.innerWidth<=600||window.outerWidth<=600)};return(0,n.useEffect)((()=>(c(),s(!0),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c))),[]),{width:e,height:i,isMobile:o,isLoaded:a}}},7248:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var n=i(6540),d=i(6199),o=i(4301);const r=i.p+"asset/add8c565bdb637a28b55.jpg",a=i.p+"asset/e95a7bede1cceac080d2.jpg",s=d.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${e=>e.$isMobile?"column":"row"};
`,c=d.Ay.div`
  width: 100%;
  margin-bottom: 30px;
`,l=d.Ay.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`,w=()=>{const{isMobile:e}=(0,o.A)();return n.createElement(n.Fragment,null,n.createElement(s,{$isMobile:e},n.createElement(c,null,n.createElement(l,{src:r,alt:"kt망 요금제"})),n.createElement(c,null,n.createElement(l,{src:a,alt:"kt망 약정플랜"}))))}}}]);