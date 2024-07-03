import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';

const Text = styled.p`
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.lineHeight}px;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;
const KTpaymentsystem = () => {
  const { isMobile } = useViewport();
  return (
    <Div>
      <Text fontSize={isMobile ? 12 : 16} lineHeight={isMobile ? 18 : 20}>
        KT 선불요금제
      </Text>
      <article>content</article>
    </Div>
  );
};
export default KTpaymentsystem;
