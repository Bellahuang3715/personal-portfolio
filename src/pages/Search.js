import React from "react";
import { TuneOutlined } from "@mui/icons-material";
import Sidebar from "../components/Sidebar/Sidebar";
import ChannelRow from "../components/ChannelRow/ChannelRow";
import VideoRow from "../components/VideoRow/VideoRow";

import "./Search.css";

function Search() {
  return (
    <div className="app-page">
      <Sidebar />
      <div className="search-page">
        <div className="search-page-filter">
          <TuneOutlined />
          <h2>FILTER</h2>
        </div>
        <hr />

        <ChannelRow
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"
          channel="Bella Huang"
          verified
          subs="100K"
          numVideos={10}
          description="This is a cool channel"
        />
        <hr />
        <VideoRow 
            views="1.4M"
            subs="100K"
            description="This is a test block"
            channel="Bella Huang"
            timestamp="4 days ago"
            title="Snake Game"
            image="https://cdn.pixabay.com/photo/2021/12/26/17/31/pokemon-6895600_1280.png"
        />
      </div>
    </div>
  );
}

export default Search;
