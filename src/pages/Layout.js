import React, { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import "./Layout.css";

function Layout({ children }) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  
  return (
    <div>
      <Header toggleSidebar={toggleSidebar}/>
      <div className="layout">
        <Sidebar isOpen={sidebarIsOpen}/>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
