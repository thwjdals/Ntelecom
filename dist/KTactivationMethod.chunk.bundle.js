"use strict";(self.webpackChunkntelecom_project=self.webpackChunkntelecom_project||[]).push([[493],{6426:(e,t,i)=>{i.d(t,{I:()=>o,y:()=>n});const n=[{label:"K망 멤버십 어플 설치하기 (안드로이드)",href:"http://play.google.com/store/apps/details?id=nrcom.ntelecom.nrcmembership"},{label:"K망 멤버십 어플 설치하기 (아이폰)",href:"https://apps.apple.com/app/id1295585489"}],o=[{label:"L망 멤버십 어플 설치하기 (안드로이드)",href:"http://play.google.com/store/apps/details?id=nrcom.ntelecomlg.nrcmembershiplg&hl=ko"},{label:"L망 멤버십 어플 설치하기(아이폰)",href:"https://apps.apple.com/app/id1568423904"}]},4301:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(6540);const o=function(){const[e,t]=(0,n.useState)(window.innerWidth),[i,o]=(0,n.useState)(window.innerHeight),[r,l]=(0,n.useState)(window.innerWidth<=600||window.outerWidth<=600),[a,d]=(0,n.useState)(!1),s=()=>{t(window.innerWidth),o(window.innerHeight),l(window.innerWidth<=600||window.outerWidth<=600)};return(0,n.useEffect)((()=>(s(),d(!0),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s))),[]),{width:e,height:i,isMobile:r,isLoaded:a}}},3246:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var n=i(6540),o=i(6199),r=i(4301);const l=i.p+"asset/c4587f9416ca64197a38.jpg";var a=i(6426);const d=o.Ay.div`
  width: 100%;
  height: 100%;
`,s=o.Ay.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`,p=o.Ay.p`
  font-size: ${e=>e.$isMobile?24:32}px;
  font-weight: 600;
  margin-bottom: 30px;
`,c=o.Ay.img`
  width: 100%;
  height: auto;
`,h=o.Ay.button`
  text-decoration: none;
  color: white;
  padding: 10px 10px;
  display: inline-block;
  background-color: #1f1f1f;
  position: relative;
  border: 1px solid #1f1f1f;
  border-radius: 15px;
`,m=o.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: ${e=>e.$isMobile?"column":"row"};
  margin-bottom: 15px;
`,w=()=>{const{isMobile:e}=(0,r.A)();return n.createElement(n.Fragment,null,n.createElement(d,{$isMobile:e},n.createElement(m,{$isMobile:e},a.y.map((e=>n.createElement("a",{href:e.href},n.createElement(h,null,e.label))))),n.createElement(p,{$isMobile:e},"앤텔레콤 멤버십 K망 접수방법"),n.createElement(s,null,n.createElement(c,{src:l,alt:"샘플"}))))}}}]);