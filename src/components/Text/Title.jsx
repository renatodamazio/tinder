/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { h1, h2, h3, h4, h5, ParagraphyText } from "./Title.style";

export const Title = ({ variant, color, children, ...props }) => {
  const variantsMapping = {
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
  };

  const Component = variant ? variantsMapping[variant] : "p";

  return <Component {...props}>{children}</Component>;
};

export const Paragraphy = ({ children, ...props }) => {
  return <ParagraphyText {...props}>{children}</ParagraphyText>;
};

export default Title;
