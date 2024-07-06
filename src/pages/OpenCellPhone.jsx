import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import ktMembershipImg from '../assets/images/ktMembershipImg.png';
import lgMembershipImg from '../assets/images/lgMembershipImg.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  flex-direction: ${props => (props.$isMobile ? 'column' : 'row')};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: ${props => (props.$isMobile ? '0 0 15px 0' : '60px')};
`;

const SubTitle = styled.p`
  font-size: ${props => (props.$isMobile ? 18 : 28)}px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const ExampleImg = styled.img`
  width: ${props => (props.$isMobile ? 60 : 95)}%;
  height: auto;
`;

const OpenCellPhone = () => {
  const { isMobile } = useViewport();
  return (
    <Container $isMobile={isMobile}>
      <Content $isMobile={isMobile}>
        <SubTitle $isMobile={isMobile}>앤텔레 멤버심 K망 개통방법</SubTitle>
        <ExampleImg src={ktMembershipImg} alt="샘플" $isMobile={isMobile}></ExampleImg>
      </Content>
      <Content $isMobile={isMobile}>
        <SubTitle $isMobile={isMobile}>앤텔레 멤버심 L망 개통방법</SubTitle>
        <ExampleImg src={lgMembershipImg} alt="샘플" $isMobile={isMobile} />
      </Content>
    </Container>
  );
};
export default OpenCellPhone;
