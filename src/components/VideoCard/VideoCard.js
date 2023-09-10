import React from 'react'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom';

import './VideoCard.css';

function VideoCard({ to, title, image, channel, views, timestamp, profile }) {
  return (
    <div className="video-card">
        <Link to={to}>
            <img className="card-thumbnail" src={image} alt=""/>
        </Link>
        <div className='card-info'>
            <Avatar 
                className='card-avatar'
                alt={channel}
                src={profile}
            />
            <div className='card-text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} * {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard