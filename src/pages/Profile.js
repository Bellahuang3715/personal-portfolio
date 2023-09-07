import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ProfileCard from "../components/ProfileCard";
import FlagIcon from '@mui/icons-material/Flag';
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

import "./Profile.css";

function Profile() {
  return (
    <div className="app-page">
      <Sidebar />
      <div className="profile">
        <img
          className="profile-banner"
          src="https://assets.website-files.com/622733c59bf20d8a074764f6/627a7569f1389244d2938298_pokemon-banner.png"
        />
        <div className="profile-content">
          <ProfileCard />
          <hr />
          <div className="profile-body">
            <div className="left-col">
              <h4>Description</h4>
              <p>This is a channel</p>
              <hr />
              <h4>Details</h4>
              <p>Table here</p>
              <hr />
              <h4>Links</h4>
            </div>
            <div className="right-col">
              <h4>Stats</h4>
              <hr />
              <p>Joined Sep 1, 2023</p>
              <p>100 views</p>
              <FlagIcon />
              <ReplyOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
