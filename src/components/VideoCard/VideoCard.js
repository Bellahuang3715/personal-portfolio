import React from 'react'
import { Avatar } from '@mui/material'

import './VideoCard.css';

function VideoCard({ title, image, channel, views, timestamp, profile }) {
  return (
    <div className="video-card">
        <img className="card-thumbnail" src={image} alt=""/>
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