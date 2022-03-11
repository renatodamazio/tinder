import React, { useState } from "react";
import Button from "../../components/UI/Buttons/Buttons";
import { Container, Content } from "./Home.styles";
import Nav from "../../components/Nav/Nav";
import Title from "../../components/Text/Title";

import AuthModal from "../../components/Modal/AuthModal/AuthModal";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      {showModal && (
        <AuthModal showModal={showModal} setShowModal={setShowModal} />
      )}
      <Nav className="fixed" />
      <Content>
        <Title variant="h1" style={{ textAlign: "center" }}>
          Swipe Right®
        </Title>
        <Button
          variant="primary-button"
          onClick={() => setShowModal(true)}
          style={{ minWidth: 260 }}
        >
          Create Account
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
