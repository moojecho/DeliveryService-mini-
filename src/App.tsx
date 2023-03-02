import { Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { MainPage,OrderPage } from "./pages";

function App() {
  return (
    <DivApp>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<OrderPage />} />
      </Routes>
    </DivApp>
  );
}

const DivApp = styled.div`
  max-width: 390px;
  height: 844px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: -8px;
  font-family: NotoSanskr;
`;

export default App;
