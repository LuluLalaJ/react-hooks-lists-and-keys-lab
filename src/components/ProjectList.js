import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const renderProjectItems = projects.map( project => 
      <ProjectItem 
        key={ project.id }
        {... project}
    />)

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        { renderProjectItems }
      </div>
    </div>
  );
}

export default ProjectList;
  