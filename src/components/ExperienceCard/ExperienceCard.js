import React from "react";
import { Avatar, Tooltip, Zoom } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "./ExperienceCard.css";

function ExperienceCard({ image, company, title, duration, current, description, tags }) {

  const tagsList = tags && tags.map((tag) => (
    <button className="button">
      {tag}
    </button>
  ));

  const descriptionList = description.map((line) => (
    <u1>
      <li>{line}</li>
    </u1>
  ));

  return (
    <div className="channel">
      <Avatar className="channel-logo" alt={title} src={image} />
      <div className="channel-text">
        <h4>
          {title}{" "}
          {current && (
            <Tooltip
              arrow
              title="Current Position"
              placement="right"
              TransitionComponent={Zoom}
            >
              <CheckCircleIcon />
            </Tooltip>
          )}
        </h4>
        <p>
          @{company} | {duration}
        </p>
        <div className="tags">{tagsList}</div>
        <p>
          <u1>{descriptionList}</u1>
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
