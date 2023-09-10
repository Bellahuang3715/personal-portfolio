import React from "react";
import { NavLink } from "react-router-dom";

import "./SidebarItem.css";

function SidebarItem({ Icon, title, to }) {
  return (
    <NavLink to={to} className="item" activeClassName="selected" >
      <Icon className="item-icon" />
      <h2 className="item-title">{title}</h2>
    </NavLink>
  );
}

export default SidebarItem;
