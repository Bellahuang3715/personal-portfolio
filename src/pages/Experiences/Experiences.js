import React, { useState, useEffect } from "react";
import { TuneOutlined } from "@mui/icons-material";
import { db } from "../../api/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import ChannelRow from "../../components/ChannelRow/ChannelRow";
import VideoRow from "../../components/VideoRow/VideoRow";

import "./Experiences.css";

function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const expCollectionRef = collection(db, "Experiences");
  useEffect(() => {
    const getExperiences = async () => {
      const data = await getDocs(expCollectionRef);
      setExperiences(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getExperiences();
  }, []);
  console.log(experiences);

  return (
    <div className="app-page">
      <div className="search-page">
        {/* <div className="search-page-filter">
          <TuneOutlined />
          <h2>FILTER</h2>
        </div> */}
        <hr />
        {experiences.map((exp) => {
          return (
            <div>
              <ChannelRow
                image={exp.logo}
                company={exp.company}
                title={exp.title}
                duration={exp.duration}
                tags={exp.tags}
                description={exp.description}
              />
              <hr />
            </div>
          );
        })}

        {/* <VideoRow
          views="1.4M"
          subs="100K"
          description="This is a test block"
          channel="Bella Huang"
          timestamp="4 days ago"
          title="Snake Game"
          image="https://definicion.de/wp-content/uploads/2009/03/ingenieria-de-software.png"
        /> */}
      </div>
    </div>
  );
}

export default Experiences;
