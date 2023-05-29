import React from "react";
import Login from "./components/Login";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        {/* <Route path="/" element={<Login />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
