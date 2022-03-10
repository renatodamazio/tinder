import React from "react";
import Image from "../UI/Images/Image";
import Button from "../UI/Buttons/Buttons";

import { Container } from "./Nav.styles";
export const Nav = (props) => {
  return (
    <Container {...props}>
      <Image src="/images/tinder-logo-color.svg" width="176px" />
      <Button variant="secondary-button">Login</Button>
    </Container>
  );
};

Nav.propTypes = {
  display: String,
};

export default Nav;
