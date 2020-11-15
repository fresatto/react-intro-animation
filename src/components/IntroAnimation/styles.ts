import styled from 'styled-components';

export const MessageWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background-color: #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;

  z-index: 1010;

  margin: 0 auto;

  h2 {
    font-family: 'Heebo', sans-serif;
    font-size: 6rem;
    overflow: hidden;

    > span {
      display: inline-block;
      /* transform: translateY(100%); */
    }
  }
`;

export const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background-color: gray;
  z-index: 1005;
`;
