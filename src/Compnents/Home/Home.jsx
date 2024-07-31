import React from 'react';
import logo from '../Snapchat.png';
import gith from '../git.png'; // Import your new logo
import x from '../x.png'; // Import additional logos
import insta from '../insta.png';
import gfg from '../g4g.jpg';
import leet from '../leet.png';
import link from '../linkdin.png';
import './Home.css';

export default function Home() {
  return (
    <div className='main'>
      <div className="text-section">
        <span className='highlight'>Web Developer</span>
        <h1 className="main-title">Hello I'm
          <h2 className="sub-title">NEHA</h2>
          <div className='intro-container'>
            <div className='intro'>
              As a web developer, I have a comprehensive understanding and proficiency in HTML, CSS, Tailwind, JavaScript, and the React JS framework. Additionally, I possess a thorough understanding of data structures and a wide range of other technologies.
            </div>
            <div className='footer-links'>
              <a href="https://github.com/nehaaaah123" className="footer-link">
                <img src={gith} alt="GitHub logo" className="footer-logo" />
              </a>
              <a href="https://x.com/nehaa0667?s=09" className="footer-link">
                <img src={x} alt="Link 1 logo" className="footer-logo" />
              </a>
              <a href="https://leetcode.com/u/xtenontenredhairbaddie/" className="footer-link">
                <img src={leet} alt="Link 2 logo" className="footer-logo" />
              </a>
              <a href="https://www.geeksforgeeks.org/user/nehaaa067/" className="footer-link">
                <img src={gfg} alt="Link 3 logo" className="footer-logo" />
              </a>
              <a href="https://www.linkedin.com/in/neha-a9333124b/" className="footer-link">
                <img src={link} alt="Link 1 logo" className="footer-logo" />
              </a>
              <a href="https://www.instagram.com/_alsoneha?igsh=aWN4a2p0NnV0N2xy" className="footer-link">
                <img src={insta} alt="Link 2 logo" className="footer-logo" />
              </a>
              
            </div>
          </div>
        </h1>
      </div>
      <div className="image-section">
        <img src={logo} alt="neha" />
      </div>
    </div>
  );
}
