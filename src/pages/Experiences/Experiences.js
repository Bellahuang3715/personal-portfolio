import React, { useState, useEffect } from "react";
// import { TuneOutlined } from "@mui/icons-material";
import { db } from "../../api/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

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

  experiences.sort((a, b) => a.index - b.index);

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
              <ExperienceCard
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
      </div>
    </div>
  );
}

export default Experiences;
