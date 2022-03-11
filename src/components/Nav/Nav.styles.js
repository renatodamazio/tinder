import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 18px;
  position: fixed;
  align-items: center;

  a {
    padding: 0 16px;
    font-size: 18px;
  }

  &.fixed {
    position: fixed;

    img {
      filter: brightness(0) invert(1);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;
