import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* min-height: 100vh; */
`;

// const MainContent = styled.main`
//   flex: 1;
// `;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Nav />

      <Outlet />

      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
