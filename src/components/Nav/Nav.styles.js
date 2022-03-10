import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  position: fixed;
  align-items: center;
  
  &.fixed {
    position: fixed;
   
    img {
      filter: brightness(0) invert(1);
    }
  }
`;
