import styled from "styled-components";

export const PrimaryButton = styled.button`
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 30px;
  background: linear-gradient(45deg, #fe3072, #ff5940);

  &:hover {
    background:linear-gradient( 260deg, #fe3072, #ff5940);
  }
`;
