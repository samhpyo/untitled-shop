import styled from 'styled-components';

// import astronaut from '../../assets/astronaut.jpg';

export const Container = styled.div`
  height: 80vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Section = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
`;
