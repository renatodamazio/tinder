/* eslint-disable react/prop-types */
import React from "react";
import { UL, Li } from "./List.style";

export const List = ({ items }) => {
  return (
    <UL>
      {items.map((item, index) => (
        <Li key={index}>{item}</Li>
      ))}
    </UL>
  );
};

export default List;
