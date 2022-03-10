import React from "react";
import Button from "../../UI/Buttons/Buttons";
import { Background, Content, Wrapper, Header } from "./AuthModal.styles";

export const AuthModal = ({ setShowModal }) => {
  return (
    <Background>
      <Content>
        <Header>
          <Button variant="close-button" onClick={() => setShowModal(false)}></Button>
        </Header>
        <Wrapper>HELLO WORLD</Wrapper>
      </Content>
    </Background>
  );
};

AuthModal.propTypes = {
  setShowModal: {},
};

export default AuthModal;
