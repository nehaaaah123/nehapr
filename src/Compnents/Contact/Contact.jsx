import React from "react";
import './Contact.css'; // Import the CSS file

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-box">
                    <div className="contact-details">
                        <h1 className="contact-heading">
                            Get in touch:
                        </h1>
                        <p className="contact-subheading">
                            Feel free to get in touch with me at any time. I will be anticipating your response.
                        </p>

                        <div className="contact-info">
                            <svg className="contact-icon" /* SVG content */></svg>
                            <div className="contact-text">
                                neelamgupta4521@gmail.com
                            </div>
                        </div>

                        <div className="contact-info">
                            <svg className="contact-icon" /* SVG content */></svg>
                            <div className="contact-text">
                                +91 9899157569
                            </div>
                        </div>

                        <div className="contact-info">
                            <svg className="contact-icon" /* SVG content */></svg>
                            <div className="contact-text">
                                LinkedIn Profile: 
                                <a href="https://www.linkedin.com/in/neha-a9333124b/" className="contact-email"> Tap here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thank-you-box">
                <p className="thank-you-text">
                    Thank you for visiting! <br />
                    Made by Neha
                </p>
            </div>
        </div>
    );
}
