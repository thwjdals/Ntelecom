import openCellphoneButtonImg from '../assets/images/openCellphoneButton.png';
import cellPhoneButtonImg from '../assets/images/cellPhoneButton.png';
import chatButtonImg from '../assets/images/chatButton.png';

const BANNER_BUTTON_LIST = [
  { src: openCellphoneButtonImg, alt: '개통방법 알아보기', href: '/open-cellphone' },
  { src: cellPhoneButtonImg, alt: '전화 상담', href: 'tel:010-8667-4402' },
  {
    src: chatButtonImg,
    alt: '채널톡 상담',
    href: 'javascript: kakaoChatStart()',
  },
];

export default BANNER_BUTTON_LIST;
