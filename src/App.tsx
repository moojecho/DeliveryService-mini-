import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { MainPage } from "./pages";

function App() {
  return (
    <DivApp>
      <Routes>
        <Route path="/" element ={<MainPage />} />
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
`;

export default App;
