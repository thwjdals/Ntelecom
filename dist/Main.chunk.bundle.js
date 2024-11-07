"use strict";(self.webpackChunkntelecom_project=self.webpackChunkntelecom_project||[]).push([[80],{4301:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(6540);const s=function(){const[e,t]=(0,n.useState)(window.innerWidth),[i,s]=(0,n.useState)(window.innerHeight),[o,a]=(0,n.useState)(window.innerWidth<=600||window.outerWidth<=600),[l,d]=(0,n.useState)(!1),c=()=>{t(window.innerWidth),s(window.innerHeight),a(window.innerWidth<=600||window.outerWidth<=600)};return(0,n.useEffect)((()=>(c(),d(!0),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c))),[]),{width:e,height:i,isMobile:o,isLoaded:l}}},8733:(e,t,i)=>{i.r(t),i.d(t,{default:()=>$});var n=i(6540),s=i(6199),o=i(4301);const a=i.p+"asset/6ce6287ab9e1a0ad3b1e.png",l=i.p+"asset/0d2d49cb5014559ad7ac.png",d=i.p+"asset/e6c5f37f1e997286f324.png",c=[{src:i.p+"asset/c002dcb562c056eb32ca.png",alt:"개통방법 알아보기",path:"/activation-method"},{src:i.p+"asset/ad3242fc9c23510bd59e.png",alt:"전화 상담",href:"tel:010-4419-4451"},{src:i.p+"asset/1c19452418e4b9e82c30.png",alt:"채널톡 상담",handleOnClick:()=>window.open("https://pf.kakao.com/_XpAvK")}];var r=i(7767);const h=s.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  max-width: 1200px;
`,p=s.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`,w=s.Ay.div`
  position: absolute;
  display: flex;
  flex-direction: ${e=>e.$isMobile?"column":"row"};
  justify-content: ${e=>e.$isMobile?"":"space-around"};
  align-items: ${e=>e.$isMobile?"center":""};
  width: ${e=>e.$isMobile?"75%;":"100%;"};
  height: auto;
  gap: 15px;
  z-index: 3;
  flex: 1;
  bottom: ${e=>e.$isMobile?"15%":"35%"};
  padding: 0 20px;
`,b=s.Ay.img`
  position: absolute;
  top: 100px;
  width: 60%;
  left: 50px;
  z-index: 2;
`,m=s.Ay.img`
  position: absolute;
  width: 520px;
  right: 0;
  z-index: 1;
`,u=s.Ay.img`
  width: 100%;
  height: auto;
`,f=s.Ay.img`
  max-width: 300px;
  min-width: 175px;
  width: 100%;
  flex: 1;
`,g=({isMobile:e,isLoaded:t})=>{const i=(0,r.Zp)();return t&&n.createElement(h,{$isMobile:e},!e&&n.createElement(p,{$isMobile:e},n.createElement(b,{src:a,alt:"title",$isMobile:e}),n.createElement(m,{src:l,$isMobile:e})),e&&n.createElement(p,{$isMobile:e},n.createElement(u,{src:d,$isMobile:e})),n.createElement(w,{$isMobile:e},c?.map((e=>n.createElement("a",{key:e.src,href:e.href?e.href:null},n.createElement(f,{key:e.href,src:e.src,alt:e.alt,onClick:e.handleOnClick?e.handleOnClick:()=>i(e.path)}))))))},x=s.Ay.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${e=>e.$isMobile?"100%":"100vh"};
`,$=()=>{const{isMobile:e,isLoaded:t}=(0,o.A)();return n.createElement(n.Fragment,null,n.createElement(x,{$isMobile:e},n.createElement(g,{isMobile:e,isLoaded:t})))}}}]);