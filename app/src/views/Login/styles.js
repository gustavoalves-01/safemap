import styled from 'styled-components';

export const Container = styled.main`
  background: var(--black);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  #bg {
      width: 100vw;
      height: 100vh;
      position: fixed;
      z-index: 0;
  }

  #map {
   
    width: 25%;
    transform: translate(-50%, -50%);
  }
`;
