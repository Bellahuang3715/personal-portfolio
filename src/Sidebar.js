import React from 'react';
import SidebarItem from './SidebarItem';
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarItem Icon={HomeIcon} title="Home" selected />
        <SidebarItem Icon={WhatshotIcon} title="Trending" />
        <SidebarItem Icon={SubscriptionsIcon} title="Subscription" />
        <hr />
    </div>
  )
}

export default Sidebar