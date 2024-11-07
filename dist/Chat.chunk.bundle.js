"use strict";(self.webpackChunkntelecom_project=self.webpackChunkntelecom_project||[]).push([[977],{4301:(e,i,t)=>{t.d(i,{A:()=>o});var n=t(6540);const o=function(){const[e,i]=(0,n.useState)(window.innerWidth),[t,o]=(0,n.useState)(window.innerHeight),[r,s]=(0,n.useState)(window.innerWidth<=600||window.outerWidth<=600),[d,l]=(0,n.useState)(!1),c=()=>{i(window.innerWidth),o(window.innerHeight),s(window.innerWidth<=600||window.outerWidth<=600)};return(0,n.useEffect)((()=>(c(),l(!0),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c))),[]),{width:e,height:t,isMobile:r,isLoaded:d}}},8929:(e,i,t)=>{t.r(i),t.d(i,{default:()=>h});var n=t(6540),o=t(6199),r=t(4301);const s=t.p+"asset/d4b324015ba3b7b4bdc6.png",d=t.p+"asset/be72136b95e70ccc3c86.png",l=o.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0px;
  flex-direction: ${e=>e.$isMobile?"column":"row"};
  justify-content: center;
`,c=o.Ay.div`
  height: 100%;
  display: flex;

  align-items: center;
  flex-direction: column;
  margin: ${e=>e.$isMobile?"0 0 15px 0":"10px"};
  cursor: pointer;
`,a=o.Ay.img`
  width: ${e=>e.$isMobile?60:95}%;
  max-width: 350px;
  height: auto;
`,w=o.Ay.img`
  width: ${e=>e.$isMobile?60:95}%;
  max-width: 350px;
  height: auto;
`,h=()=>{const{isMobile:e}=(0,r.A)();return n.createElement(n.Fragment,null,n.createElement(l,{$isMobile:e},n.createElement(c,{$isMobile:e,onClick:()=>window.open("https://pf.kakao.com/_XpAvK")},n.createElement(w,{$isMobile:e,src:d,alt:"카카오톡연결"})),n.createElement("a",{href:"tel:010-4419-4451"},n.createElement(c,{$isMobile:e},n.createElement(a,{$isMobile:e,src:s,alt:"전화연결"})))))}}}]);