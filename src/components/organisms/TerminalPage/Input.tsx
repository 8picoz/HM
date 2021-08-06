import React from "react";
import styled from "styled-components";

const InputStyle = styled.textarea`
  border: none;
  resize: none;
  display: block;
  overflow: auto;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Input: React.VFC = () => {
  return (
    <div>
      <p>aaa</p>
      <InputStyle></InputStyle>
    </div>
  );
};

export { Input };
