/* eslint-disable react/prop-types */
import React from "react";
import { Col, Row } from "./Grid.styles";

export const Grid = (props) => {
  return props.cols ? <Col {...props}>{props.children}</Col> : <Row {...props}>{props.children}</Row>;
};
