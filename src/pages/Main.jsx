import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import Container from '@mui/material/Container';

const Text = styled.p`
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.lineHeight}px;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BannerCellphoneImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: auto;
  z-index: 1;

  @media (max-width: 1200px) {
    width: 600px;
    position: relative;
    right: 0;
    left: auto;
    top: 0;
    bottom: auto;
  }
`;

const BannerTextImg = styled.img`
  position: absolute;
  top: 250px;
  right: 0;
  width: 500px;
  height: auto;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 80%;
    top: 0;
    bottom: auto;
    right: auto;
    left: 0;
    margin-top: 20px; /* Adjust as needed */
  }
`;

const Main = () => {
  const { isMobile } = useViewport();
  return (
    <>
      {/* <Text fontSize={isMobile ? 12 : 16} lineHeight={isMobile ? 18 : 20}>
        배너
      </Text> */}
      <Container maxWidth="lg">
        <BannerContainer>
          <BannerTextImg src="../assets/image/banner title.png" alt="배너" />
          <BannerCellphoneImg src="../assets/image/bannerCellphoneImg.png" alt="배너" />
        </BannerContainer>
      </Container>
    </>
  );
};

export default Main;
