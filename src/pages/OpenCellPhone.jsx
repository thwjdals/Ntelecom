import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';

const Text = styled.p`
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.lineheight}px;
`;

const OpenCellPhone = () => {
  const { isMobile } = useViewport();
  return (
    <>
      <Text fontSize={isMobile ? 12 : 16} lineheight={isMobile ? 18 : 20}>
        개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법
        개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법
        개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법
        개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법
        개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법
        개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법
        개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법
        개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법
        개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법 개통방법
      </Text>
      <article>content</article>
    </>
  );
};
export default OpenCellPhone;
