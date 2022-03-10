import styled from "styled-components";

export const PrimaryButton = styled.button`
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 30px;
  background: linear-gradient(45deg, rgb(254, 48, 114), rgb(255, 89, 64));

  &:hover {
    background: linear-gradient(260deg, #fe3072, #ff5940);
  }
`;

export const SecondaryButton = styled.button`
  color: rgb(254, 48, 144);
  font-size: 16px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 4px;
  background: rgb(255, 255, 255);
  font-weight: bold;
`;

export const CloseButton = styled.button`
  border: 3px solid rgb(0, 0, 0);
  width: 30px;
  height: 30px;
  border-radius: 80px;
  cursor: pointer;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
  transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:before,
  &:after {
    content: "";
    width: 18px;
    height: 4px;
    border-radius: 16px;
    position: absolute;
    background: rgb(0, 0, 0);
  }

  &:before {
    transform: rotate(46deg);
  }

  &:after {
    transform: rotate(-46deg);
  }

  &:hover {
    color: #000;
    opacity: 1;
    transform: rotate(180deg);
  }
`;

export const Button = styled.button`
  background: 0;
  font-size: 16px;
  cursor: pointer;
`;
