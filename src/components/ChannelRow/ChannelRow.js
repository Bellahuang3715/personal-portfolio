import React from 'react'
import { Avatar } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import './ChannelRow.css';

function ChannelRow({ image, company, title, duration, description, tags }) {

  const tagsList = tags.map((tag) => (
    <button className="button">
      {tag}
    </button>
  ));
  return (
    <div className="channel">
        <Avatar className="channel-logo" alt={title} src={image} />
        <div className='channel-text'>
            <h4>
                {title} <CheckCircleIcon />
            </h4>
            <p>
                @{company} | {duration}
            </p>
            <div className="tags">
              {tagsList}
            </div>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow