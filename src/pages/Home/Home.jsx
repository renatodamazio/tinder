import React, { useState } from "react";
import Button from "../../components/UI/Buttons/Buttons";
import { Container, Content } from "./Home.styles";
import Nav from "../../components/Nav/Nav";

import AuthModal from "../../components/Modal/AuthModal/AuthModal";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      {showModal && <AuthModal showModal={showModal} setShowModal={setShowModal} />}
      <Nav className="fixed" />
      <Content>
        <Button variant="primary-button" onClick={() => setShowModal(true)}>
          Create Account
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
