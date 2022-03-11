import styled from "styled-components";

export const Background = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #000000ad;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 360px;
  height: 100%;
  max-height: 600px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

export const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
