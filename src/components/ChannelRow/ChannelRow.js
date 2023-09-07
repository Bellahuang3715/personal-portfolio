import React from 'react'
import { Avatar } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import './ChannelRow.css';

function ChannelRow({ image, channel, subs, numVideos, description, verified }) {
  return (
    <div className="channel">
        <Avatar className="channel-logo" alt={channel} src={image} />
        <div className='channel-text'>
            <h4>
                {channel} {verified && <CheckCircleIcon />}
            </h4>
            <p>
                {subs} subscribers * {numVideos} videos
            </p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow