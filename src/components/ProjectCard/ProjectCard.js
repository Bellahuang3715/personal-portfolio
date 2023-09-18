import React from "react";
import { Tooltip, Zoom } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "./ProjectCard.css";

function ProjectCard({ name, duration, current, tags, description, image }) {
  const tagsList = tags.map((tag) => <button className="button">{tag}</button>);

  return (
    <div className="video-row">
      <img className="video-img" src={image} alt="" />
      <div className="row-text">
        <h3>
          {name}{" "}
          {current && (
            <Tooltip
              arrow
              title="Current Project"
              placement="right"
              TransitionComponent={Zoom}
            >
              <CheckCircleIcon />
            </Tooltip>
          )}
        </h3>
        <p className="row-headline">{duration}</p>
        <div className="tags">{tagsList}</div>
        <p className="row-description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
