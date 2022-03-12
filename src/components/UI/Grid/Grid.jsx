/* eslint-disable react/prop-types */
import React from "react";
import { GridColumn } from "./Grid.styles";

export const Grid = (props) => {
  return <GridColumn {...props}>{props.children}</GridColumn>;
};
