import React, { useState, useEffect } from "react";
import { db } from "../../api/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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
  console.log(projects);

  projects.sort((a, b) => a.index - b.index);
  console.log(projects);


  return (
    <div>
      {projects.map((proj) => {
        return (
          <div>
            <ProjectCard
              name={proj.name}
              duration={proj.duration}
              tags={proj.tags}
              description="This is a test block"
              title="Snake Game"
              image="https://definicion.de/wp-content/uploads/2009/03/ingenieria-de-software.png"
            />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
