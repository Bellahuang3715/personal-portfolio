import React from 'react';
import SidebarItem from './SidebarItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';

import './Sidebar.css';

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <SidebarItem Icon={HomeOutlinedIcon} title="Home" selected />
        <SidebarItem Icon={VideoLibraryOutlinedIcon} title="Profile" selected />
        <SidebarItem Icon={HistoryOutlinedIcon} title="Experiences" />
        <SidebarItem Icon={PlaylistPlayOutlinedIcon} title="More" />
        <hr />
    </div>
  )
}

export default Sidebar