import React from "react";
import VideoCard from "../../components/VideoCard/VideoCard";

import "./Home.css";

function Home() {
  return (
    <div className="app-page">
      <div className="content">
        <h2>Recommended</h2>
        <div className="content-videos">
          <VideoCard
            to="/profile"
            title="Profile"
            views="2.2k"
            timestamp="3 days ago"
            profile="https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png"
            channel="Bella Huang"
            image="https://img.redbull.com/images/c_fill,g_auto,w_830,h_553/q_auto:low,f_auto/redbullcom/2016/09/20/1331818966444_2/pok%C3%A9mon-super-mystery-dungeon"
          />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
