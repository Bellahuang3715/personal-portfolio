import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-page">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
