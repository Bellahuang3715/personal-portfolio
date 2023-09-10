import React from 'react'

import './ProjectCard.css';

function ProjectCard({ name, duration, tags, description, image }) {

  const tagsList = tags.map((tag) => (
    <button className="button">
      {tag}
    </button>
  ));

  return (
    <div className="video-row">
        <img src={image} alt="" />
        <div className="row-text">
            <h3>{name}</h3>
            <p className="row-headline">
                {duration}
            </p>
            <div className="tags">
              {tagsList}
            </div>
            <p className="row-description">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard