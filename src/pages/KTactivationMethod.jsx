import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import ExampleImage from '../assets/images/exampleImage.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

const Title = styled.p`
  font-size: ${props => (props.$isMobile ? 24 : 32)}px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const ExampleImg = styled.img`
  width: 100%;
  height: auto;
`;

const KTactivationMethod = () => {
  const { isMobile } = useViewport();
  return (
    <Container>
      <Title $isMobile={isMobile}>앤텔레콤 멤버십 K망 접수방법</Title>
      <Content>
        <ExampleImg src={ExampleImage} alt="샘플"></ExampleImg>
      </Content>
    </Container>
  );
};
export default KTactivationMethod;
