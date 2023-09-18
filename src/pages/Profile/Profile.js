import React, { useState, useEffect } from "react";
import { db } from "../../api/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Table } from "react-bootstrap";

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import FlagIcon from "@mui/icons-material/Flag";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

import banner from "../../images/banner.png";
import "./Profile.css";

function Profile() {
  const [achievements, setAchievements] = useState([]);
  const [profile, setProfile] = useState([]);

  const achivementsCollectionRef = collection(db, "Achievements");
  const profileCollectionRef = collection(db, "Profile");

  useEffect(() => {
    const getAchievements = async () => {
      try {
        const data = await getDocs(achivementsCollectionRef);
        setAchievements(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getProfile = async () => {
      try {
        const data = await getDocs(profileCollectionRef);
        setProfile(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAchievements();
    getProfile();
  }, [achivementsCollectionRef, profileCollectionRef]);

  achievements.sort((a, b) => a.index - b.index);

  return (
    <div className="app-page">
      <div className="profile">
        <img className="profile-banner" src={banner} />
        <div className="profile-content">
          <ProfileCard />
          <hr />
          <div className="profile-body">
            <div className="left-col">
              <h4>Description</h4>
              <p>
                Hi, my name is Bella and I am a Computer Engineering student at
                the University of Toronto. As of now, I am currently on my
                Professional Experience Year, interning as a Display Systems
                Software Engineering Intern at Qualcomm.
              </p>
              <hr />
              <h4>Details</h4>
              <p>Email: bella.huang@utoronto.ca</p>
              <p>Location: Toronto, Ontario, Canada</p>
              <hr />
              <h4>Links</h4>
              <p>
                LinkedIn:
                <a href="https://www.linkedin.com/in/bella-huang3715/">
                  https://www.linkedin.com/in/bella-huang3715/
                </a>
              </p>
              <p>
                GitHub:
                <a href="https://github.com/Bellahuang3715">
                  https://github.com/Bellahuang3715
                </a>
              </p>
              <hr />
              <h4>Achievements</h4>
              <Table striped hover className="courses-table">
                <thead>
                  <tr>
                    <th style={{ width: "50%" }}>Item</th>
                    <th style={{ width: "30%" }}>Source</th>
                    <th style={{ width: "20%" }}>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {achievements.map((item, index) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.source}</td>
                      <td>{item.year}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="right-col">
              <div className="stats">
                <h4>Stats</h4>
                <hr />
                <p>Joined Sep 1, 2023</p>
                <p>100 views</p>
                <FlagIcon />
                <ReplyOutlinedIcon />
              </div>

              <div className="skills">
                <h4>Skills</h4>
                <hr />
                <h5>Spoken Languages</h5>
                {profile[0]?.spoken?.map((skill, index) => (
                  <button className="button skills-chip" key={index}>
                    {skill}
                  </button>
                ))}
                <h5>Coding Languages</h5>
                {profile[0]?.coding?.map((skill, index) => (
                  <button className="button skills-chip" key={index}>
                    {skill}
                  </button>
                ))}
                <h5>Tehnical Skills</h5>
                {profile[0]?.technical?.map((skill, index) => (
                  <button className="button skills-chip" key={index}>
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
