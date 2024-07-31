import React from "react";
import './Projects.css';

function ProjectCard({ image, title, link, githubLink }) {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <h3 className="project-title">{title}</h3>
            <div className="links-container">
                {link && (
                    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                        Visit Project
                    </a>
                )}
                <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
