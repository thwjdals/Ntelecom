import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import Banner from '../components/Banner';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Main = () => {
  const { isMobile } = useViewport();

  return (
    <Container>
      <Banner isMobile={isMobile} />
    </Container>
  );
};

export default Main;
