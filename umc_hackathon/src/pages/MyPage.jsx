import React from "react";
import styled from "styled-components";
import backgroundImg from "../img/letterBack.svg";
import { createGlobalStyle } from "styled-components";
import Mine from "../component/Mine";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

function MyPage() {
  return (
    <>
      <GlobalStyle />
      <C>
        <Cover>
            <Mine/>
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



export default MyPage;