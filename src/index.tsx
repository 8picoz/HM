import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { App } from "./components/App";

const marginPx = 20;

const GlobalStyle = createGlobalStyle`
    body {
        color: #DDDDDD;
        background-color: #000000;
        font-family: sans-serif;
        width: calc(100% - ${marginPx});
        height: calc(100% - ${marginPx});
        margin: ${marginPx}px;
        padding: 0;
    }
`;

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById("app")
);
