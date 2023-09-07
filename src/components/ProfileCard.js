import React from "react";
import { Avatar } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className="channel">
      <Avatar
        className="channel-logo"
        alt="Bella Huang"
        src="https://archives.bulbagarden.net/media/upload/thumb/b/bd/Latias_M05.png/1200px-Latias_M05.png"
      />
      <div className="channel-text">
        <h2>
          Bella Huang <CheckCircleIcon />
        </h2>
        <p>
          @Bellahuang3715 100 subscribers 10 videos
        </p>
        <p>Hi, welcome to my channel</p>
        <a href="https://www.linkedin.com/in/bella-huang3715/">https://www.linkedin.com/in/bella-huang3715/</a>
      </div>
    </div>
  );
}

export default ProfileCard;
