import React from "react";
import './Projects.css';
import ProjectCard from './ProjectCard';
import p1 from "../p1.png";
import p2 from "../p2.png";
import p3 from "../p3.png";
import p4 from "../p4.png";
import p5 from "../p5.png";
import p6 from "../p6.png";
import p7 from "../p7.png";
import p8 from "../p8.png";


const projects = [
    {
        image: p1,
        title: "Rock-Paper",
       githubLink: "https://github.com/nehaaaah123/Rock-paper.git"
    },
    {
        image: p2,
        title: "Tic-Tac-Toe",
        githubLink: "https://github.com/nehaaaah123/tic-tac-toe.git"
    },
    {
        image: p3,
        title: "Bg-Changer",
        link: "https://bgchng.vercel.app/",
        githubLink: "https://github.com/nehaaaah123/bgchng.git"
    },
    {
        image: p4,
        title: "Currency-Convert",
        link: "https://currencyconv-zeta.vercel.app/",
        githubLink: "https://github.com/nehaaaah123/currencyconv.git"
    },
    {
        image: p5,
        title: "Pass-generator",
        link: "https://passgen-nine-eta.vercel.app/",
        githubLink: "https://github.com/nehaaaah123/passgen.git"
    },{
        image: p6,
        title: "Todo-List",
        link: "https://todo-self-rho-29.vercel.app/",
        githubLink: "https://github.com/nehaaaah123/todo.git"
    },
    {
        image: p7,
        title: "Apple-Clone",
        githubLink: "https://github.com/nehaaaah123/App"
    },
    {
        image: p8,
        title: "Flipkart-Clone",
        githubLink: "https://github.com/nehaaaah123/flipkart"
    }
];

export default function Project() {
    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    link={project.link}
                    githubLink={project.githubLink}
                />
            )
        )
    }
        </div>
    );
}
