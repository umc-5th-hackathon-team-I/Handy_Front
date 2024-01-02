import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 340px;

  @media (max-width: 340px) {
    padding: 10px;
    font-size: 14px;
  }
`;
