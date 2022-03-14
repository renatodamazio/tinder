import styled from "styled-components";

export const Container = styled.main`
  padding-top: 93px;
  overflow: hidden;
  height: 100vh;
`;

export const Content = styled.section`
  padding: 0 36px;
`;

export const CardContainer = styled.div`
  width: 90vw;
  max-width: 400px;
  height: 300px;
  position: relative;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  position: absolute;
  background-color: #fff;
  top: 0;
  cursor: grab;
  color: #fff;
  width: 400px;
  height: 600px;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    width: 100%;
  }

  h3 {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 4px;
    text-align: center;
  }
`;
