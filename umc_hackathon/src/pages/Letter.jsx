import React from "react";
import styled from "styled-components";
import backgroundImg from "../img/letterBack.svg";
import LetterWrite from './../component/LetterWrite';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

function Letter() {
  return (
    <>
      <GlobalStyle />
      <C>
        <Cover>
            <LetterWrite/>
        </Cover>
      </C>
    </>
  );
}

const Cover = styled.div`
  width: 100%;
  height: 100%;
`;

const C = styled.div`
  background: url(${backgroundImg}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
`;



export default Letter;