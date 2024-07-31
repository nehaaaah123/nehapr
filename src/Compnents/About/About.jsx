import React from 'react';
import './About.css'; // Import the CSS file
import algo from "../algo.png";
import html from "../html.png";
import css from "../css.png";
import js from "../js.png";
import reactImg from "../react.png";
import tail from "../tail.png";
import cpp from "../cpp.png";
import data from "../data.png";
import canva from "../canva.jpeg";
import bash from "../bash.png";
import oop from "../images.png";
import git from "../git.png";
import post from "../postman.png";
import sql from "../mysql.png";
import express from "../exp.png";

export default function About() {
    return (
        <div className='main2'>
            <div className='content'>
                <h2 className='heading'>About
                    <span className='heading2'> Me</span>
                </h2>
                <div className='grid-container'>
                    <div className='text-area'>
                        <p className='para'>
                            I am Neha, an undergraduate student pursuing B.Tech at GGSIPU (Bhagwan Parshuram Institute of Technology). I have a strong command of data structures and am deeply committed to expanding my knowledge and skills. Throughout my academic journey, I have actively engaged in problem-solving on various platforms and have taken part in numerous contests. Moreover, I delved into development during my second year, successfully completing several projects as part of my learning process.
                        </p>
                    </div>
                    <div className='info-boxes'>
                        <div className='box leet'>
                            <h2 className='textc'>400+</h2><br />
                            <span className='s2'>Leetcode</span>
                        </div>
                        <div className='box pr'>
                            <h2 className='textc'>4+</h2><br />
                            <span className='s2'>Projects</span>
                        </div>
                        <div className='box'>
                            <h2 className='textc'>50+</h2><br />
                            <span className='s2'>GFG</span>
                        </div>
                        <div className='box'>
                            <h2 className='textc'>8+</h2><br />
                            <span className='s2'>CGPA</span>
                        </div>
                    </div>
                </div>
                <div className='main2'>
    <div className='content'>
        <h2 className='heading3'>Skills</h2>
        <div className='info-boxes2'>
        <div className='box2'>
                <img src={html} alt="HTML" />
                <div className='alt-text'>HTML</div>
            </div>
            <div className='box2'>
                <img src={css} alt="CSS" />
                <div className='alt-text'>CSS</div>
            </div>
            <div className='box2'>
                <img src={js} alt="JavaScript" />
                <div className='alt-text'>JavaScript</div>
            </div>
            <div className='box2'>
                <img src={tail} alt="Tailwind CSS" />
                <div className='alt-text'>Tailwind </div>
            </div>
            <div className='box2'>
                <img src={reactImg} alt="React" />
                <div className='alt-text'>React</div>
            </div>
            <div className='box2'>
                <img src={sql} alt="SQL" />
                <div className='alt-text'>SQL</div>
            </div>
            <div className='box2'>
                <img src={cpp} alt="C++" />
                <div className='alt-text'>C++</div>
            </div>
            <div className='box2'>
                <img src={data} alt="Data Structures" />
                <div className='alt-text'>Data Structures</div>
            </div>
            <div className='box2'>
                <img src={algo} alt="Algorithms" />
                <div className='alt-text'>Algorithm</div>
            </div>
            <div className='box2'>
                <img src={git} alt="Git" />
                <div className='alt-text'>GitHub</div>
            </div>
            <div className='box2'>
                <img src={post} alt="Postman" />
                <div className='alt-text'>Postman</div>
            </div>
            <div className='box2'>
                <img src={canva} alt="Canva" />
                <div className='alt-text'>Canva</div>
            </div>
            <div className='box2'>
                <img src={express} alt="Express" />
                <div className='alt-text'>Express</div>
            </div>
            <div className='box2'>
                <img src={bash} alt="Bash" />
                <div className='alt-text'>Bash</div>
            </div>
            <div className='box2'>
                <img src={oop} alt="OOP" />
                <div className='alt-text'>OOP</div>
     </div>
     </div>
     </div>
     </div>
    
                    <div className='content2'>
                        <h2 className='heading4'>Education & Experience</h2>
                        <div className='grid-container2'>
                            <div className='ed'>
                                <h2 className='head'>Bhagwan Parshuram Institute of Technology
                                <span className='exp'> Student</span>
                                    </h2>
                                    <p className='parag'>I am a student enrolled at GGSIPU (BPIT) pursuing a B.Tech in Computer Science and Engineering under the 2022-2026 batch. My core subjects include OOPS, MySQL, and Data Structures, and I am currently maintaining a GPA of 9.1.</p>
                                    <div className='ed'> 
                               </div>  
                               <h2 className='head'>Technical Society Anveshan  
                                    <span className='exp'> President</span></h2>
                                    <p className='parag'>Our college has a vibrant technical society dedicated to organizing a variety of events and fostering the personal and professional growth of our members. </p>
                                    <div className='ed'>
                            </div>
                            </div>
                            <div className='ed'>
                                <h2 className='head'> Culture Committee 
                                <span className='exp'>Member</span>
                                </h2>
                                <p className='parag'>The committee used to coordinate the annual tech fest, which attracted over 10k participants and featured more than 100 events over the span of a month.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
