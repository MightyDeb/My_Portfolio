import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";

import { FaRegSmileWink } from "react-icons/fa";
import { Delete } from "@mui/icons-material";

const ProjectCard= ({url,projectImage,projectTitle,description,technologies,isAdmin=false})=>{
  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography variant="h6">{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>
      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7" }}>
          <Delete />
        </Button>
      )}
    </>
  )
}

const Projects = ({ projects }) => {
  projects=[1,2,3]
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            url="https://www.w3schools.com/cssref//css_pr_translate.php"
            projectImage="https://i.ytimg.com/vi/M0buZEY9ag0/maxresdefault.jpg"
            projectTitle="Sample Project"
            description= "The translate property defines x- and y-coordinates of an element in 2D. You can also define the z-coordinate to change position in 3D."
            technologies="Mern stack, CSS, Nodejs"
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;