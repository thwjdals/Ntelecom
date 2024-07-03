// import React from 'react';
// import styled from 'styled-components';
// import useViewport from '../hooks/useViewPort';

// const Container = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   max-width: 1200px;
//   margin: 0 auto;

//   @media (max-width: 1200px) {
//     justify-content: flex-start;
//   }
// `;

// const CellphoneImg = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 480px;
//   height: auto;
//   z-index: 1;

//   @media (max-width: 1200px) {
//     width: 480px;
//     right: 0;
//     left: auto;
//   }
// `;

// const MobileImg = styled.img`
//   max-width: 100%;
//   height: auto;
// `;

// const TextImg = styled.img`
//   position: absolute;
//   top: 200px;
//   right: 0;
//   width: 550px;
//   height: auto;
//   z-index: 2;

//   @media (max-width: 1200px) {
//     width: 60%;
//     top: 0;
//     left: 30px;
//     right: auto;
//     margin-top: 80px;
//   }
// `;

// const ButtonContainer = styled.div`
//   position: absolute;
//   bottom: 20px;
//   display: flex;
//   justify-content: center;
//   gap: 40px;
//   z-index: 3;
//   width: 100%;

//   @media (max-width: 1200px) {
//     position: absolute;
//     flex-direction: column;
//     align-items: center;
//     gap: 20px;
//     padding-bottom: 40px;
//     width: ${props => (props.isMobile ? '100%' : '450px')};
//     bottom: 0;
//   }
// `;

// const ButtonImg = styled.img`
//   width: 400px;
//   height: auto;

//   @media (max-width: 1200px) {
//     width: 80%;
//     max-width: 300px; /* Adjust the max-width to fit within smaller screens */
//   }
// `;

// const Main = () => {
//   const { isMobile } = useViewport();

//   return (
//     <Container>
//       {!isMobile ? (
//         <>
//           <TextImg src="../assets/image/banner title.png" alt="배너" />
//           <CellphoneImg src="../assets/image/bannerCellphoneImg.png" alt="배너" />
//         </>
//       ) : (
//         <MobileImg src="../assets/image/bannerImg(mobile).png" alt="배너" />
//       )}

//       <ButtonContainer isMobile={isMobile}>
//         <ButtonImg src="../assets/image/openCellphoneButton.png" alt="셀프 개통 방법 보러가기" />
//         <ButtonImg src="../assets/image/cellPhoneButton.png" alt="전화 상담" />
//         <ButtonImg src="../assets/image/chatButton.png" alt="채널톡 상담" />
//       </ButtonContainer>
//     </Container>
//   );
// };

// export default Main;

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
    <Container isMobile={isMobile}>
      <Banner isMobile={isMobile} />
    </Container>
  );
};

export default Main;
