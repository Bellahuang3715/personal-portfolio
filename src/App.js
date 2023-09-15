import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Experiences from "./pages/Experiences/Experiences";
import Projects from "./pages/Projects/Projects";
import More from "./pages/More/More";
import Layout from "./pages/Layout";

import "./App.css";

function App() {

  return (
    <div className="app">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal-portfolio" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
