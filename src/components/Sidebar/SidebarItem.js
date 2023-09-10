import React from "react";
import { Link } from "react-router-dom";

import "./SidebarItem.css";

function SidebarItem({ Icon, title, to, selected }) {
  return (
    <Link to={to} className={`item ${selected && "selected"}`}>
      <Icon className="item-icon" />
      <h2 className="item-title">{title}</h2>
    </Link>
  );
}

export default SidebarItem;
