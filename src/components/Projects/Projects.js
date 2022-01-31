import React, { useEffect, useState } from "react";
import { ProjectCard } from "../ProjectsCard/ProjectCard";
import "./Projects.css";

const projectsData = [
  {
    title: "Bikeville",
    image: require("./screenshots/bikeville.JPG"),
    description:
      "Full stack E-commerce MERN App. Admin user role that allows to perform full CRUD over products from the Dashboard.",
    stack: [
      "React",
      "Redux",
      "Router V6",
      "Stripe",
      "APIs",
      "Formik",
      "Yup",
      "JWT",
      "Mongoose",
    ],
    repository: "https://github.com/MartinLupa/mern-bikeville-public",
    deploy: "",
  },
  {
    title: "Contacts List CRUD",
    image: require("./screenshots/contact-list-crud.JPG"),
    description:
      "React CRUD, use of protected routes. Made as part of a technical test.",
    stack: ["React", "Router V6", "Vanilla CSS"],
    repository: "https://github.com/MartinLupa/react-contacts-list-crud",
    deploy: "https://contacts-list-react-crud.vercel.app/login",
  },
  {
    title: "Movies World",
    image: require("./screenshots/movies-world.JPG"),
    description:
      "Movie search responsive React SPA, with watchlist and search functionalities.",
    stack: ["React", "Router V6", "APIs"],
    repository: "https://github.com/MartinLupa/react-spa-movies-world",
    deploy: "https://react-spa-movies-world.vercel.app/",
  },
  {
    title: "Login and Dashboard",
    image: require("./screenshots/html-css.JPG"),
    description:
      "Login and Dashboard design as part of the full stack Bootcamp.",
    stack: ["HTML", "CSS"],
    repository: "https://github.com/MartinLupa/html-css-project",
    deploy: "https://martinlupa.github.io/html-css-project/dashboard.html",
  },
  {
    title: "Score Keeper",
    image: require("./screenshots/scorekeeper.JPG"),
    description:
      "JavaScript based score keeper app to practice DOM manipulation.",
    stack: ["JavaScript", "DOM", "Bootstrap"],
    repository: "https://github.com/MartinLupa/js-projects-scorekeeper",
    deploy: "https://martinlupa.github.io/js-projects-scorekeeper/",
  },
  {
    title: "DrumKit",
    image: require("./screenshots/drumkit.JPG"),
    description: "JavaScript based drumkit app to practice DOM manipulation.",
    stack: ["JavaScript", "DOM"],
    repository: "https://github.com/MartinLupa/DrumKit-App-Deploy",
    deploy: "https://martinlupa.github.io/DrumKit-App-Deploy/",
  },
];

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div>
      <div className="spacing-bar__long"></div>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.repository} {...project} />
        ))}
      </div>
    </div>
  );
};
