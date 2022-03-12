/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { render } from "@testing-library/react";
import React, { Component } from "react";
import {
  Input,
  Label,
  TextareaStyle,
  Wrapper,
  RadioStyle,
} from "./Input.styles";

export const InputComponent = ({ label, htmlFor, ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input {...props} />
    </Wrapper>
  );
};

export const Textarea = ({ label, htmlFor, ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={htmlFor}>{label}</Label>
      <TextareaStyle {...props} />
    </Wrapper>
  );
};

export const Radio = ({ label, htmlFor, checked, value, ...props }) => {
  return (
    <RadioStyle>
      <Label htmlFor={htmlFor}>{label}</Label>
      <input
        type="radio"
        {...props}
        value={value}
        defaultChecked={checked === value}
      />
    </RadioStyle>
  );
};

export const RadioGroup = (props) => {
  return props.children.map((item, index) => (
    <Radio
      key={index}
      name={props.name}
      checked={props.checked}
      {...item.props}
    />
  ));
};

export default InputComponent;
