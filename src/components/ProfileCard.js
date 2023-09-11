import React from "react";
import { Avatar } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import headshot from '../images/headshot.png';
import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className="channel">
      <Avatar
        className="channel-logo"
        alt="Bella Huang"
        src={headshot}
      />
      <div className="channel-text">
        <h2>
          Bella Huang <CheckCircleIcon />
        </h2>
        <p>
          @Bellahuang3715 8 relevant experiences | 9 projects
        </p>
        <p>Computer Engineering @ UofT / System SWE Intern @ Qualcomm</p>
        <p>
        <a href="https://www.linkedin.com/in/bella-huang3715/">https://www.linkedin.com/in/bella-huang3715/</a>

        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
