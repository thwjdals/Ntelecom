"use strict";(self.webpackChunkntelecom_project=self.webpackChunkntelecom_project||[]).push([[333],{8478:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var l=n(6540),i=n(7767),a=n(6199),o=n(5556),r=n.n(o),s=n(9828),c=n(8161),p=n(356),d=n(7135),m=n(1641),h=n(9799),x=n(4090),b=n(7211),u=n(4545),w=n(2274),E=n(8532),y=n(4073),g=n(6990),A=n(7951);const f=n.p+"asset/f639b405111da50348b3.png",k=[{label:"K망 요금제",path:"/KTpaymentsystem"},{label:"L망 요금제",path:"/LGpaymentsystem"},{label:"개통방법",path:"/activation-method",dropdown:[{label:"K망 개통방법",path:"/activation-method/KT"},{label:"L망 개통방법",path:"/activation-method/LG"}]},{label:"상담 문의",path:"/chat"}];var v=n(4301);const M=a.Ay.img`
  width: ${e=>e.$isMobile?"90px":"160px"};
  height: 100%;
  cursor: pointer;
`,$=a.Ay.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  display: ${e=>e.open?"block":"none"};
  z-index: 1000;
`,C=e=>{const t=(0,i.Zp)(),{isMobile:n}=(0,v.A)(),{window:a}=e,[o,r]=l.useState(!1),[C,S]=l.useState(!1),z=()=>{r((e=>!e))},L=e=>{S(e)},W=e=>{t(e),S(!1)},K=l.createElement(c.A,{onClick:z,sx:{textAlign:"center"}},l.createElement(y.A,{variant:"h6",href:"/",sx:{my:2,cursor:"pointer"},onClick:()=>t("/")},"앤텔레콤"),l.createElement(p.A,null),l.createElement(h.A,null,k.map((e=>l.createElement(x.Ay,{key:e.label,disablePadding:!0},l.createElement(b.A,{href:e.path,sx:{textAlign:"center"}},l.createElement(u.A,{primary:e.label}))))))),j=void 0!==a?()=>a().document.body:void 0;return l.createElement(c.A,{justifyContent:"center",sx:{display:"flex",bgcolor:"white",height:"auto"}},l.createElement(s.A,{component:"nav",position:"static",sx:{bgcolor:"#fff",boxShadow:"none",borderBottom:"1px solid #e0e0e0"}},l.createElement(A.A,{maxWidth:"lg",height:"100%"},l.createElement(E.A,{height:"100%"},l.createElement(m.A,{color:"black","aria-label":"open drawer",edge:"start",onClick:z,sx:{mr:2,display:{sm:"none"}}},l.createElement(w.A,null)),l.createElement(M,{$isMobile:n,src:f,alt:"앤텔레콤",onClick:()=>t("/")}),l.createElement(y.A,{component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"flex"},alignItems:"center",justifyContent:"start"}}),l.createElement(c.A,{sx:{display:{xs:"none",sm:"block"},position:"relative"}},k.map((e=>e.dropdown?l.createElement(c.A,{key:e.label,onMouseEnter:()=>L(!0),onMouseLeave:()=>L(!1),sx:{display:"inline-block",position:"relative"}},l.createElement(g.A,{sx:{color:"black",mx:2},onClick:()=>W(e.path)},e.label),l.createElement($,{open:C},e.dropdown.map((e=>l.createElement(g.A,{key:e.label,onClick:()=>W(e.path),sx:{display:"block",width:"100%",textAlign:"left",color:"grey",padding:"8px 12px",fontSize:13}},e.label))))):l.createElement(g.A,{key:e.label,onClick:()=>t(e.path),sx:{color:"black",mx:2}},e.label))))))),l.createElement("nav",null,l.createElement(d.Ay,{container:j,variant:"temporary",open:o,onClose:z,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}}},K)))};C.propTypes={window:r().func};const S=C,z=a.Ay.div`
  color: #5c5c5c;
  font-size: ${e=>e.$isMobile?8:14}px;
  line-height: ${e=>e.$isMobile?5:20}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`,L=a.Ay.div`
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
  align-items: center;
`,W=a.Ay.div`
  border-left: 1px solid #aaaaaa;
  height: ${e=>e.$isMobile?8:16}px;
`,K=()=>{const{isMobile:e}=(0,v.A)();return l.createElement(z,{$isMobile:e},l.createElement(L,null,l.createElement("span",null,"앤텔레콤 셀프개통"),l.createElement(W,{$isMobile:e}),l.createElement("span",null,"010-4419-4451"),l.createElement(W,{$isMobile:e}),l.createElement("span",null,"대표 임효진")))},j=n.p+"asset/f2b1d6ec56798ea775eb.png",G=a.Ay.div`
  display: flex;
  flex-direction: column;
`,T=a.Ay.div`
  padding: ${e=>"/"==e.$pathname?"none":"32px"};
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: auto;
`,_=a.Ay.img`
  position: fixed;
  z-index: 999;
  right: 20px;
  bottom: 20px;
  width: '72px';
  height: '72px';
`,H=()=>{const{pathname:e}=(0,i.zy)();return l.createElement(G,null,l.createElement(S,null),l.createElement(T,{$pathname:e},l.createElement(i.sv,null)),"/"!==e?l.createElement(_,{src:j,alt:"상담톡",onClick:()=>window.open("https://pf.kakao.com/_XpAvK")}):null,l.createElement(K,null))}},4301:(e,t,n)=>{n.d(t,{A:()=>i});var l=n(6540);const i=function(){const[e,t]=(0,l.useState)(window.innerWidth),[n,i]=(0,l.useState)(window.innerHeight),[a,o]=(0,l.useState)(window.innerWidth<=600||window.outerWidth<=600),[r,s]=(0,l.useState)(!1),c=()=>{t(window.innerWidth),i(window.innerHeight),o(window.innerWidth<=600||window.outerWidth<=600)};return(0,l.useEffect)((()=>(c(),s(!0),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c))),[]),{width:e,height:n,isMobile:a,isLoaded:r}}}}]);