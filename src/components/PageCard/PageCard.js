import React from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "./PageCard.css";

function PageCard({ title, subtitle, to, thumbnail, channel, profile }) {
  return (
    <div className="video-card">
      <Link to={to}>
        <img className="card-thumbnail" src={thumbnail} alt="" />
      </Link>
      <div className="card-info">
        <Avatar className="card-avatar" alt={channel} src={profile} />
        <div className="card-text">
          <h4>{title}</h4>
          <p>
            {channel}{" "}
            <div className="check-icon">
              <CheckCircleIcon />
            </div>
          </p>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default PageCard;
