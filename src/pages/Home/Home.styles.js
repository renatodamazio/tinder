import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/images/home-bg.jpg") center center no-repeat;
`;

export const Content = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0) 100%
    );

`