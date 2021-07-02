import React from 'react';
import "../css/Home.css";
import github from "../css/images/githubIcon.png"
import messageLogo from "../css/images/message.png"
import linkedin from "../css/images/linkedin1.png"

export default function Home() {
    return (
        <div className="main">

            <header>

                <div className="backgroundTop">

                    <div className="containerH1">
                        <h1>Gaël Blanchard</h1>
                        <div className="liens">

                            <a href="#message">
                                <img className="messageLogo" src={messageLogo} alt=""/>
                            </a>
                            <a href="https://github.com/GaelB777?tab=repositories">
                                <img className="github" src={github} alt=""/>
                            </a>
                            <a href="https://fr.linkedin.com/">
                                <img className="linkedin" src={linkedin} alt=""/>
                            </a>

                        </div>

                    </div>

                </div>
            </header>

            <div id="encrage">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet assumenda culpa dolor esse eum
                fuga hic labore, laboriosam nemo nihil, quia, quod voluptatum! Aliquam animi cum eligendi id suscipit.
                <h1>GAËL BLANCHARD</h1>
            </div>

            <div id="message">

            </div>


        </div>
    );
}