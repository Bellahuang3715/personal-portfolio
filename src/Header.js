import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

import "./Header.css";

function Header() {
  return (
    <div className="header">

      <div className="header-left">
        <MenuIcon />
        <img
          className="header-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/375px-YouTube_Logo_2017.svg.png"
        />
      </div>

      <div className="header-input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header-search-icon"/>
      </div>

      <div className="header-icons">
        <VideoCallIcon className="header-icon"/>
        <AppsIcon className="header-icon"/>
        <NotificationsIcon className="header-icon"/>
        <Avatar
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png"
          alt="Bella Huang"
        />
      </div>
      
    </div>
  );
}

export default Header;
