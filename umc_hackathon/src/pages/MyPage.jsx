import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backgroundImg from "../img/mineBack.svg";
import goback from "../img/mypageBack.svg";
import { createGlobalStyle } from "styled-components";
import Mine from "../component/Mine";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

function MyPage() {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <C>
        <Cover>
          <img src={goback} alt="back" onClick={() => navigate(-1)} />
          <Mine />
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
