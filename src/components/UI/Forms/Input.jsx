/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Grid } from "../Grid/Grid";
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
      <input
        type="radio"
        {...props}
        value={value}
        defaultChecked={checked === value}
      />
      <Label htmlFor={htmlFor}>{label}</Label>
    </RadioStyle>
  );
};

export const RadioGroup = (props) => {
  return (
    <Grid rows={1}>
      <Label>{props.label}</Label>
      <Grid cols={props.cols} gap="16px">
        {props.children.map((item, index) => (
          <Radio
            key={index}
            name={props.name}
            checked={props.checked}
            {...item.props}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default InputComponent;
