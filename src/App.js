import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import SearchPage from "./SearchPage";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/" element={<Content />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
