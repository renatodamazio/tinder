import React from "react";

import {
  PrimaryButton,
  SecondaryButton,
  Button,
  CloseButton,
  TertiaryButton,
} from "./Buttons.styles";

export const Buttons = (props) => {
  switch (props.variant) {
    case "primary-button":
      return <PrimaryButton {...props}>{props.children}</PrimaryButton>;
    case "secondary-button":
      return <SecondaryButton {...props}>{props.children}</SecondaryButton>;
    case "close-button":
      return <CloseButton {...props}>{props.children}</CloseButton>;
    case "tertiary-button":
      return <TertiaryButton {...props}>{props.children}</TertiaryButton>;
    default:
      return <Button {...props}>{props.children}</Button>;
  }
};

Buttons.propTypes = {
  variant: ["primary-button", "secondary-button"],
  children: [],
};

export default Buttons;
