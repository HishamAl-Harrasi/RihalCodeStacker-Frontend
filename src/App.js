import React, { Component } from "react";
import FileDropzone from "./components/FileDropzone";
import { ParticleBackground } from "./components/ParticleBackground";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      {/* <ParticleBackground /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
