import React from "react";
import Button from "../../components/UI/Buttons/Buttons";
import { Container, Content } from "./Home.styles";
import Nav from "../../components/Nav/Nav";
export const Home = () => {
  return (
    <Container>
      <Nav className="fixed"/>
      <Content>
        <Button variant="primary-button">Create Account</Button>
      </Content>
    </Container>
  );
};

export default Home;
