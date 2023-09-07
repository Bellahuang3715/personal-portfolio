import React from 'react'

import './VideoRow.css';

function VideoRow({views, subs, description, timestamp, channel, title, image}) {
  return (
    <div className="row">
        <img src={image} alt="" />
        <div className="row-text">
            <h3>{title}</h3>
            <p className="row-headline">
                {channel} *{" "}
                <span className='row-subs'>
                    <span className='row-numSubs'>{subs}</span>
                </span>{" "}
                {views} views * {timestamp}
            </p>
            <p className="row-description">{description}</p>
        </div>
    </div>
  )
}

export default VideoRow