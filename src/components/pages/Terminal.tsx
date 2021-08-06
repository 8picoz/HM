import React from "react";
import styled from "styled-components";
import { Input } from "../organisms/TerminalPage/input";
import { Output } from "../organisms/TerminalPage/Output";

const TerminalContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  margin: 0;
`;

const Terminal: React.VFC = () => {
  return (
    <TerminalContainer>
      <Output />
      <Input />
    </TerminalContainer>
  );
};

export { Terminal };
