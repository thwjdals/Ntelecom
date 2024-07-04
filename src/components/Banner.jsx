import React from 'react';
import styled from 'styled-components';
import titleImg from '../assets/images/banner title.png';
import backgroundImg from '../assets/images/bannerCellphoneImg.png';
import mobileImage from '../assets/images/bannerImg3(mobile).png';
import BANNER_BUTTON_LIST from '../constant/bannerButtonList';
import { useNavigate } from 'react-router';

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
    </Content>
  );
};

export default Banner;
