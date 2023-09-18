import React, { useState, useEffect } from "react";
import { db } from "../../api/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import './Projects.css';

function Projects() {

  const [projects, setProjects] = useState([]);
  const projectCollectionRef = collection(db, "Projects");

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectCollectionRef);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProjects();
  }, []);

  projects.sort((a, b) => a.index - b.index);

  return (
    <div className="app-page">
      <div className="projects-page">
        {projects.map((proj) => {
          return (
            <div>
              <ProjectCard
                name={proj.name}
                duration={proj.duration}
                current={proj.current}
                tags={proj.tags}
                description={proj.description}
                image={
                  "https://definicion.de/wp-content/uploads/2009/03/ingenieria-de-software.png"
                }
              />
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
