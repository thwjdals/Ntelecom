import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';

const Text = styled.p`
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.lineHeight}px;
`;

const LGpaymentsystem = () => {
  const { isMobile } = useViewport();
  return (
    <>
      <Text fontSize={isMobile ? 12 : 16} lineHeight={isMobile ? 18 : 20}>
        LG 선불요금제
      </Text>
      <article>content</article>
    </>
  );
};
export default LGpaymentsystem;
