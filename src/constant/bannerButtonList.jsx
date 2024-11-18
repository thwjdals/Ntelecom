import activationMethodsBtnImg from '../assets/images/button/activationMethodsBtnImg.png';
// 환경변수
import callBtnImg from '../assets/images/button/callBtnImg_hyo.png';
// import callBtnImg from '../assets/images/button/callBtnImg_yeo.png';
import chatBtnImg from '../assets/images/button/chatBtnImg.png';

const BANNER_BUTTON_LIST = [
  { src: activationMethodsBtnImg, alt: '개통방법 알아보기', path: '/activation-method' },
  // 환경변수
  { src: callBtnImg, alt: '전화 상담', href: 'tel:010-4494-6556' },
  // { src: callBtnImg, alt: '전화 상담', href: 'tel:010-9610-3434' },
  {
    src: chatBtnImg,
    alt: '채널톡 상담',
    // 환경변수
    handleOnClick: () => window.open('https://pf.kakao.com/_XpAvK'),
    // handleOnClick: () => window.open('https://pf.kakao.com/_kxhmxjC'),
  },
];

export default BANNER_BUTTON_LIST;
