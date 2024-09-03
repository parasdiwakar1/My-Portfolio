import React from 'react';
import './projects.css';

const projectsData = [
  {
    name: "Food-Website",
    description: "A dynamic website showcasing various food recipes and cooking tips, designed for culinary enthusiasts.",
    image: "https://i.ibb.co/whSW9W4/Screenshot-2024-09-02-230530.png",
    link: "https://66a60ddbc81f7a0084946b86--papaya-cajeta-90adac.netlify.app/",
    tags: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "E-Commerce-Website",
    description: "An online platform for buying and selling products with a user-friendly interface and secure payment options.",
    image: "https://i.ibb.co/pw8ZbHq/Screenshot-2024-09-02-225905.png",
    link: "https://shopping-website-wheat-theta.vercel.app/",
    tags: ["React js", "CSS", "API"]
  },
  {
    name: "Trello Tracker",
    description: "A project management tool inspired by Trello, designed for tracking and managing tasks and team collaboration.",
    image: "https://i.ibb.co/zFfbrXH/Screenshot-2024-09-02-225650.png",
    link: "https://trellotracker.netlify.app/",
    tags: ["React js", "Tailwind CSS", ]
  },
  {
    name: "Food-Menu-Website",
    description: "A menu display website for restaurants, showcasing various dishes with beautiful images and descriptions.",
    image: "https://i.ibb.co/Hhhrpbt/Screenshot-2024-09-02-225741.png",
    link: "https://food-menu-website-pi.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Photo Snap",
    description: "A photo-sharing website where users can upload, share, and comment on photos, with advanced editing tools.",
    image: "https://i.ibb.co/0DMS7NT/Screenshot-2024-09-02-225834.png",
    link: "https://photo-snap-group6.vercel.app/",
    tags: ["React JS", "Firebase", "CSS"]
  },
  {
    name: "StopWatch",
    description: "A simple stopwatch application with start, stop, and reset functionalities for tracking time accurately.",
    image: "https://i.ibb.co/K6gWVz2/Screenshot-2024-09-02-230152.png",
    
    link: "https://663da9da143d03ac8d976b6a--frolicking-selkie-6a4f8c.netlify.app/",
    tags: ["React", "JavaScript"]
  },
  {
    name: "Tic Tac Toe Game",
    description: "A classic Tic Tac Toe game built with React, featuring interactive gameplay and a clean design.",
    image: "https://i.ibb.co/6tmrXWw/Screenshot-2024-09-02-230429.png",
    link: "https://master--stunning-syrniki-2d8219.netlify.app/",
    tags: ["React JS", "CSS"]
  }
];

const List = () => {
  return (
    <div>
      <h1 className="list-title">Our Projects</h1>
      <br />
      <hr />
      <h3>🌟 Explore my projects to see how I've enhanced my skills.🌟</h3>
      <br />
      <br />
      <div className="list-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-content">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              {/* <span className={`project-status ${project.status.replace(" ", "-").toLowerCase()}`}>{project.status}</span> */}
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
