import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Nuzlocke from "./pages/Nuzlocke";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuzlocke" element={<Nuzlocke />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
