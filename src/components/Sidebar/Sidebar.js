import React from "react";
import SidebarItem from "./SidebarItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";

import "./Sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <SidebarItem Icon={HomeOutlinedIcon} title="Home" to="/" />
      <SidebarItem Icon={SubscriptionsOutlinedIcon} title="Profile" to="/profile" />
      <SidebarItem Icon={HistoryOutlinedIcon} title="Experiences" to="experiences" />
      <SidebarItem Icon={VideoLibraryOutlinedIcon} title="Projects" to="/projects" selected />
      <SidebarItem Icon={PlaylistPlayOutlinedIcon} title="More" to="more" />
      <hr />
    </div>
  );
}

export default Sidebar;
