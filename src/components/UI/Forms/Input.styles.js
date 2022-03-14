import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

export const Input = styled.input`
  background: #fff;
  padding: 16px;
  font-size: 16px;
  border: 2px solid rgb(144, 144, 144);
  border-radius: 10px;

  &:focus {
    border-color: blue;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
`;

export const TextareaStyle = styled.textarea`
  background: #fff;
  padding: 16px;
  font-size: 16px;
  border: 2px solid rgb(144, 144, 144);
  border-radius: 10px;
`;

export const RadioStyle = styled.div`
  input {
    display: none;
    &:checked + label {
      border-color: rgb(221, 39, 22);
    }
  }

  label {
    padding: 10px;
    border-radius: 10px;
    border: 2px solid rgb(144, 144, 144);
    display: flex;
    width: auto;
    display: inline-block;
    transition: all 0.3s;
    position: relative;
    cursor: pointer;
  }
`;
