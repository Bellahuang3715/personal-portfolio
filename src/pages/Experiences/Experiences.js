import React, { useState, useEffect } from "react";
// import { TuneOutlined } from "@mui/icons-material";
import { db } from "../../api/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

import "./Experiences.css";


function Experiences() {

  const [experiences, setExperiences] = useState([]);
  const [techExp, setTechExp] = useState([]);
  const [otherExp, setOtherExp] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const expCollectionRef = collection(db, "Experiences");

  useEffect(() => {
    const getExperiences = async () => {
      try {
        const data = await getDocs(expCollectionRef);
        const experienceData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setExperiences(experienceData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getExperiences();
  }, []);

  useEffect(() => {
    const techExp = [];
    const nonTechExp = [];
    for (const exp of experiences) {
      if (exp.tags) {
        techExp.push(exp);
      } else {
        nonTechExp.push(exp);
      }
    }
    setTechExp(techExp);
    setOtherExp(nonTechExp);
  }, [experiences])

  techExp.sort((a, b) => a.index - b.index);
  otherExp.sort((a, b) => a.index - b.index);

  return (
    <div className="app-page">
      <div className="search-page">
        {/* <div className="search-page-filter">
          <TuneOutlined />
          <h2>FILTER</h2>
        </div> */}
        <h2>Experiences in Tech</h2>
        <hr />
        {techExp.map((exp) => {
          return (
            <div>
              <ExperienceCard
                image={exp.logo}
                company={exp.company}
                title={exp.title}
                duration={exp.duration}
                current={exp.current}
                tags={exp.tags}
                description={exp.description}
              />
              <hr />
            </div>
          );
        })}
        <br></br>
        <h2>Other Experiences</h2>
        <hr />
        {otherExp.map((exp) => {
          return (
            <div>
              <ExperienceCard
                image={exp.logo}
                company={exp.company}
                title={exp.title}
                duration={exp.duration}
                current={exp.current}
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
