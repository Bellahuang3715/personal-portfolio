import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
