import React from 'react';
import styled from 'styled-components';
import bannerTitleImg from '../assets/images/banner/bannerTitleImg.png';
import bannerCellphoneImg from '../assets/images/banner/bannerCellphoneImg.png';
import mobileBackgroundImg from '../assets/images/banner/mobile_background.png';
import BANNER_BUTTON_LIST from '../constant/bannerButtonList';
import { useNavigate } from 'react-router';
import PriorContent from '../assets/images/banner/사전승낙_효진.png'

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props => (props.$isMobile ? 'column' : 'row')};
  justify-content: center;
  max-width: 1200px;
`;

const ImgWrapper = styled.div`
position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: ${props => (props.$isMobile ? 'column' : 'row')};
  justify-content: ${props => (props.$isMobile ? '' : 'space-around')};
  align-items: ${props => (props.$isMobile ? 'center' : '')};
  width: ${props => (props.$isMobile ? '75%;' : '100%;')};
  height: auto;
  gap: 15px;
  z-index: 3;
  flex: 1;
  bottom: ${props => (props.$isMobile ? '7.5%' : '35%')};
  padding: 0 20px;
`;

const Title = styled.img`
  position: absolute;
  top: 100px;
  width: 60%;
  left: 50px;
  z-index: 2;
`;

const BannerCellphoneImg = styled.img`
  position: absolute;
  width: 520px;
  right: 0;
  z-index: 1;
`;

const MobileBackgroundImg = styled.img`
  width: 100%;
  height: auto;
`;
const ImgButton = styled.img`
  max-width: 300px;
  min-width: 175px;
  width: 100%;
  flex: 1;
`;
const TitleText = styled.div`
  position: absolute;
  font-size: 40px;
  top: 30px;
  left: 30px;
`;
const ContentText = styled.div`
  position: absolute;
  font-size: 20px;
  top: 80px;
  left: 30px;
`;

const Banner = ({ isMobile, isLoaded }) => {
  const navigate = useNavigate();

  return (
    isLoaded && (
      <Content $isMobile={isMobile}>
        {!isMobile && (
          <ImgWrapper $isMobile={isMobile}>
            <Title src={bannerTitleImg} alt={'title'} $isMobile={isMobile} />
            <BannerCellphoneImg src={bannerCellphoneImg} $isMobile={isMobile} />
          </ImgWrapper>
        )}

        {isMobile && (
          <ImgWrapper $isMobile={isMobile}>
            <MobileBackgroundImg src={mobileBackgroundImg} $isMobile={isMobile} />
            <TitleText>앤텔레콤</TitleText>
            <ContentText>온라인 개통 센터</ContentText>
        <ButtonWrapper $isMobile={isMobile}>
          {BANNER_BUTTON_LIST?.map(item => (
            <a key={item.src} href={item.href ? item.href : null}>
              <ImgButton
                key={item.href}
                src={item.src}
                alt={item.alt}
                onClick={item.handleOnClick ? item.handleOnClick : () => navigate(item.path)}
              />
            </a>
          ))}
        </ButtonWrapper>
          </ImgWrapper>
        )}

        {isMobile && (
          <ImgWrapper $isMobile={isMobile}>
            <MobileBackgroundImg src={PriorContent} $isMobile={isMobile} />
          </ImgWrapper>
        )}
      </Content>
    )
  );
};

export default Banner;
