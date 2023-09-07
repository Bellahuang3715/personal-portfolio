import React from "react";

import './SidebarItem.css';

function SidebarItem({ Icon, title, selected }) {
  return (
    <div className={`item ${selected && "selected"}`}>
      <Icon className="item-icon" />
      <h2 className="item-title">{title}</h2>
    </div>
  );
}

export default SidebarItem;
