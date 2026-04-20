import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Companies from "./pages/Companies/Companies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
