import React from "react";
import ProfileCard from "../../components/ProfileCard";
import FlagIcon from '@mui/icons-material/Flag';
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

import banner from '../../images/banner.png';
import "./Profile.css";

function Profile() {
  return (
    <div className="app-page">
      <div className="profile">
        <img
          className="profile-banner"
          src={banner}
        />
        <div className="profile-content">
          <ProfileCard />
          <hr />
          <div className="profile-body">
            <div className="left-col">
              <h4>Description</h4>
              <p>Hi, my name is Bella and I am a Computer Engineering student at the University of Toronto</p>
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
