import React from "react";
import Image from "../UI/Images/Image";
import Button from "../UI/Buttons/Buttons";
import { Link } from "../UI/Links/Link";

import { Container, Content } from "./Nav.styles";

export const Nav = (props) => {
  return (
    <Container {...props}>
      <Content>
        <Image src="/images/tinder-logo-color.svg" width="150px" />
        <Link to="/">Hello World</Link>
      </Content>
      <Button variant="secondary-button">Login</Button>
    </Container>
  );
};

export default Nav;
