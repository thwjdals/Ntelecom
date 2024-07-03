import React, { useEffect } from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import openCellphoneButtonImg from '../assets/image/openCellphoneButton.png';
import cellPhoneButtonImg from '../assets/image/cellPhoneButton.png';
import chatButtonImg from '../assets/image/chatButton.png';
import titleImg from '../assets/image/banner title.png';
import backgroundImg from '../assets/image/bannerCellphoneImg.png';
import mobileImage from '../assets/image/bannerImg3(mobile).png';
import { useNavigate } from 'react-router-dom';

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  max-width: 1200px;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: ${props => (props.$isMobile ? 'column' : 'row')};
  justify-content: ${props => (props.$isMobile ? '' : 'space-around')};
  align-items: ${props => (props.$isMobile ? 'center' : '')};
  width: 100%;
  gap: 15px;
  z-index: 3;
  flex: 1;
  bottom: ${props => (props.$isMobile ? 100 : 180)}px;
  padding: 0 20px;
`;

const Title = styled.img`
  position: absolute;
  top: 100px;
  width: 60%;
  left: 50px;
  z-index: 2;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 520px;
  right: 0;
  z-index: 1;
`;

const MobildImage = styled.img`
  position: absolute;
  width: 100%;
`;
const ImgButton = styled.img`
  max-width: 300px;
  min-width: 175px;
  height: auto;
  flex: 1;
`;
const Banner = ({ isMobile }) => {
  const navigate = useNavigate();

  const imgButtonOject = [
    { src: openCellphoneButtonImg, alt: '개통방법 알아보기', href: '/open-cellphone' },
    { src: cellPhoneButtonImg, alt: '전화 상담', href: 'tel:010-8667-4402' },
    {
      src: chatButtonImg,
      alt: '채널톡 상담',
      href: 'javascript: kakaoChatStart()',
    },
  ];

  return (
    <Content $isMobile={isMobile}>
      {!isMobile && (
        <ImgWrapper $isMobile={isMobile}>
          <Title src={titleImg} alt={'title'} $isMobile={isMobile} />
          <BackgroundImage src={backgroundImg} $isMobile={isMobile} />
        </ImgWrapper>
      )}
      {!!isMobile && (
        <ImgWrapper $isMobile={isMobile}>
          <MobildImage src={mobileImage} $isMobile={isMobile} />
        </ImgWrapper>
      )}
      <ButtonWrapper $isMobile={isMobile}>
        {imgButtonOject?.map(item => (
          <a href={item.href}>
            <ImgButton key={item.src} src={item.src} alt={item.alt} />
          </a>
        ))}
      </ButtonWrapper>
    </Content>
  );
};

export default Banner;
