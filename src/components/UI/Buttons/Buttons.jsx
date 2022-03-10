import React from "react";

import { PrimaryButton, SecondaryButton, Button, CloseButton } from "./Buttons.styles";

export const Buttons = (props) => {
  switch (props.variant) {
    case "primary-button":
      return <PrimaryButton {...props}>{props.children}</PrimaryButton>;
    case "secondary-button":
      return <SecondaryButton {...props}>{props.children}</SecondaryButton>;
    case "close-button":
      return <CloseButton {...props}>{props.children}</CloseButton>;
    default:
      return <Button {...props}>{props.children}</Button>;
  }
};

Buttons.propTypes = {
  variant: ["primary-button", "secondary-button"],
  children: [],
};

export default Buttons;
