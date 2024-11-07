"use strict";(self.webpackChunkntelecom_project=self.webpackChunkntelecom_project||[]).push([[291],{4301:(e,i,t)=>{t.d(i,{A:()=>o});var n=t(6540);const o=function(){const[e,i]=(0,n.useState)(window.innerWidth),[t,o]=(0,n.useState)(window.innerHeight),[r,s]=(0,n.useState)(window.innerWidth<=600||window.outerWidth<=600),[l,a]=(0,n.useState)(!1),d=()=>{i(window.innerWidth),o(window.innerHeight),s(window.innerWidth<=600||window.outerWidth<=600)};return(0,n.useEffect)((()=>(d(),a(!0),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d))),[]),{width:e,height:t,isMobile:r,isLoaded:l}}},2253:(e,i,t)=>{t.r(i),t.d(i,{default:()=>m});var n=t(6540),o=t(7767),r=t(6199),s=t(4301);const l=t.p+"asset/26baedc9a7aae48f105c.png",a=t.p+"asset/44cf0dea0b5015e36563.png",d=r.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 30px;
  flex-direction: ${e=>e.$isMobile?"column":"row"};
`,c=r.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: ${e=>e.$isMobile?"0 0 15px 0":"60px"};
  cursor: pointer;
`,w=r.Ay.p`
  font-size: ${e=>e.$isMobile?18:28}px;
  font-weight: 500;
  margin-bottom: 15px;
`,h=r.Ay.img`
  width: ${e=>e.$isMobile?60:95}%;
  height: auto;
`,m=()=>{const{isMobile:e}=(0,s.A)(),i=(0,o.Zp)();return n.createElement(n.Fragment,null,n.createElement(d,{$isMobile:e},n.createElement(c,{$isMobile:e,onClick:()=>i("/activation-method/KT")},n.createElement(w,{$isMobile:e},"앤텔레콤 멤버십 K망 개통방법"),n.createElement(h,{src:l,alt:"샘플",$isMobile:e})),n.createElement(c,{$isMobile:e,onClick:()=>i("/activation-method/LG")},n.createElement(w,{$isMobile:e},"앤텔레콤 멤버십 L망 개통방법"),n.createElement(h,{src:a,alt:"샘플",$isMobile:e}))))}}}]);