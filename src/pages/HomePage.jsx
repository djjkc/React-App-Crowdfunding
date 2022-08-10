import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard";

function HomePage() {
    const [projectList, updateProjectData] = useState([]);

  // When we load our HomePage, we render all projects in the
  // projectData array. This is by default empty. However, we
  // have projects in our Heroku Database that we deployed and
  // made accessible last subject with python. We can now get
  // those projects by making a get request and storing the 
  // result in our projectData state.
useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then(res => res.json())
      .then(data => updateProjectData(data))
}, [])

    return (
        <div id="project-list">
        {projectList.map((projectData, key) => {
        return <ProjectCard 
            key={key} 
            projectData={projectData}/>;
        })}
        </div>
    );
}

export default HomePage;