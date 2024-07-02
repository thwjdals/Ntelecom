import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';

const Text = styled.p`
  color: #5c5c5c;
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.lineHeight}px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
  align-items: center;
`;

const Bar = styled.div`
  border-left: 1px solid #aaaaaa;
  height: 16px;
`;
const Footer = () => {
  const { isMobile } = useViewport();
  return (
    <>
      <Text fontSize={isMobile ? 12 : 16} lineHeight={isMobile ? 18 : 20}>
        <Wrapper>
          <p>앤텔레콤 셀프개통</p>
          <Bar />
          <p>000-00-00000</p>
          <Bar />
          <p>abcd@naver.com</p>
        </Wrapper>
        <Wrapper>
          <p>서울특별시 OO구 OOO로 111, 3층 000호 (OO동, OO프라자)</p>
        </Wrapper>
        <Wrapper>
          <p>대표 홍길동</p>
          <Bar />
          <p>010-0000-0000</p>
        </Wrapper>
      </Text>
    </>
  );
};
export default Footer;
