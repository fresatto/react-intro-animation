import styled from 'styled-components';

import Hero from '../../assets/img/hero.jpg';

export const Container = styled.section`
  height: 100vh;
  background-image: url(${Hero});
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 60px;

  height: 10vh;

  h1 {
    font-size: 32px;
    font-family: 'Lobster', cursive;
  }

  > ul {
    font-family: 'Heebo', sans-serif;
    list-style: none;

    display: flex;

    li {
      margin-left: 30px;
    }
  }
`;

export const BigText = styled.h2`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);

  font-family: 'Lobster';

  font-size: 4rem;
`;
