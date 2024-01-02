import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import LoginPage from "./pages/Login";
import Calender from "./pages/Calender";
import Invite from "./pages/Invite";
import LetterBox from "./pages/LetterBox";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/letterbox" element={<LetterBox />} />
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
