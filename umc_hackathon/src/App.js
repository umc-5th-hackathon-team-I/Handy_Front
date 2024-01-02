import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import LoginPage from "./pages/Login";
import Calender from "./pages/Calender";
import Join from "./pages/Join";
import Letter from "./pages/Letter";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/letter" element={<Letter/>} />
          <Route path="/join" element={<Join/>} />
          <Route path="/mypage" element={<MyPage/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 360px;
  height: 800px;
  @media (max-width: 360px) {
    font-size: 14px;
  }
`;
