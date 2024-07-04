import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import Button_kakaoChannelChat from '../assets/images/Button_kakaoChannelChat.png';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const KakaoChatImg = styled.img`
  position: fixed;
  z-index: 999;
  right: 20px;
  bottom: 20px;
  width: '72px';
  height: '72px';
`;
const Layout = () => {
  const { pathname } = useLocation();
  return (
    <LayoutWrapper>
      <Nav />
      <Outlet />
      {pathname !== '/' ? (
        <KakaoChatImg src={Button_kakaoChannelChat} alt="상담톡" onClick={() => kakaoChatStart()} />
      ) : null}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
