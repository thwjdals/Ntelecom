import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';

const Text = styled.p`
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.lineHeight}px;
`;

const Main = () => {
  const { isMobile } = useViewport();
  return (
    <>
      <Text fontSize={isMobile ? 12 : 16} lineHeight={isMobile ? 18 : 20}>
        배너배배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너배너너배너
      </Text>
    </>
  );
};
export default Main;
