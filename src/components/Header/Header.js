import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import iTube from "../../images/iTube.png";
import profile from "../../images/profile.png";
import "./Header.css";

function Header({ toggleSidebar }) {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header-left">
        <div className="menu-icon-wrapper" onClick={toggleSidebar}>
          <MenuIcon />
        </div>
        <Link to="/">
          <img className="header-logo" src={iTube} />
        </Link>
      </div>

      <div className="header-input">
        <input
          // onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Bella Huang"
          value={inputSearch}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header-search-icon" />
        </Link>
      </div>
      <MicOutlinedIcon className="header-icon-mic" />
      <div className="header-icons">
        <VideoCallOutlinedIcon className="header-icon" />
        <NotificationsOutlinedIcon className="header-icon" />
        <Link to="/profile">
          <Avatar src={profile} alt="Bella Huang" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
