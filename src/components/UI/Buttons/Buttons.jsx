import React from "react";

import { PrimaryButton, SecondaryButton } from "./Buttons.styles";

export const Buttons = (props) => {
  switch (props.variant) {
    case "primary-button":
      return <PrimaryButton {...props}>{props.children}</PrimaryButton>;
    case "secondary-button":
      return <SecondaryButton {...props}>{props.children}</SecondaryButton>;
    default:
      return <button>{props.children}</button>;
  }
};

Buttons.propTypes = {
  variant: "",
  children: [],
};

export default Buttons;
