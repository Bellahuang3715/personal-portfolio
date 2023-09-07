import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/ 375px-YouTube_Logo_2017.svg.png"
          />
        </Link>
        
      </div>

      <div className="header-input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Search"
          value={inputSearch}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header-search-icon" />
        </Link>
      </div>

      <div className="header-icons">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <Avatar
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png"
          alt="Bella Huang"
        />
      </div>
    </div>
  );
}

export default Header;
