/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import Button from "../../UI/Buttons/Buttons";
import { Background, Content, Wrapper, Header } from "./AuthModal.styles";
import Title, { Paragraphy } from "../../Text/Title";
import List from "../../UI/List/List";
import Image from "../../UI/Images/Image";

export const AuthModal = ({ setShowModal }) => {
  return (
    <Background>
      <Content>
        <Header>
          <Button
            variant="close-button"
            onClick={() => setShowModal(false)}
          ></Button>
        </Header>
        <Wrapper>
          <Paragraphy style={{ display: "flex", justifyContent: "center" }}>
            <Image src="/images/favicon.png" alt="Tinder icon" width="32px" />
          </Paragraphy>

          <Title variant="h4" style={{ textAlign: "center", margin: "18px 0" }}>
            CREATE ACCOUNT
          </Title>

          <Paragraphy>
            By clicking Log In, you are agree to our terms. Learn how we process
            your data in or Privace Policy and Cookie Policy.
          </Paragraphy>
          <List
            key="items"
            items={[
              <Button
                key="item-1"
                variant="tertiary-button"
                style={{ width: "100%" }}
              >
                <Image
                  src="/images/logos/google.svg"
                  alt="Tinder icon"
                  width="22px"
                />
                <b>LOGIN WITH GOOGLE</b>
              </Button>,
              <Button
                key="item-2"
                variant="tertiary-button"
                style={{ width: "100%" }}
              >
                <Image
                  src="/images/logos/facebook.svg"
                  alt="Tinder icon"
                  width="22px"
                />
                <b>LOGIN WITH FACEBOOK</b>
              </Button>,
            ]}
          />
        </Wrapper>
      </Content>
    </Background>
  );
};

export default AuthModal;
