import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Nav from './Nav';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Nav />
      <MainContent>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
