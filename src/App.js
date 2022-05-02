import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  const [resumeAnalysisData, setresumeAnalysisData] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainPage
                resumeAnalysisData={resumeAnalysisData}
                setresumeAnalysisData={setresumeAnalysisData}
              />
            }
          />
          <Route
            path="/results"
            element={<ResultsPage data={resumeAnalysisData} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
