import React from "react";
import { A } from "./Link.styles";

export const Link = (props) => {
  return (
    <A {...props} className={props.className}>
      {props.children}
    </A>
  );
};

Link.propTypes = {
  children: "",
  className: "",
};
