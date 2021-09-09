import React from 'react';
import html from '../src/images/html.png';
import css from '../src/images/css.png';
import sass from '../src/images/sass.svg';
import js from '../src/images/js.png';
import boot5 from '../src/images/boot5.png';
import tailwind from '../src/images/tailwind.svg';
import react from '../src/images/react.png';
import github from '../src/images/git.png';
import java from '../src/images/java.png';
import mongo from '../src/images/mongodb.svg';
import firebase from '../src/images/firebase.svg';
import php from '../src/images/php.svg';
import mysql from '../src/images/mysql.svg';
import vscode from '../src/images/vscode.svg';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Technology = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <>
            <div className="tech_section">
                <h2 data-aos='zoom-in' className="tech_title">Tools & Technologies Used</h2>
                <div className="tech_center">
                    <div data-aos='fade-right' className="tech">
                        <img src={html} alt="img" />
                        <h2>HTML5</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={css} alt="img" />
                        <h2>CSS3</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={sass} alt="img" />
                        <h2>SASS</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={js} alt="img" />
                        <h2>JavaScript</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={java} alt="img" />
                        <h2>JAVA</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={boot5} alt="img" />
                        <h2>Bootstrap 5</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={tailwind} alt="img" />
                        <h2>Tailwind CSS</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={react} alt="img" />
                        <h2>ReactJs</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={github} alt="img" />
                        <h2>Git & GitHub</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={mongo} alt="img" />
                        <h2>MongoDB</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={firebase} alt="img" />
                        <h2>Firebase</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={php} alt="img" />
                        <h2>PHP</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={mysql} alt="img" />
                        <h2>MySQL</h2>
                    </div>
                    <div data-aos='fade-right' className="tech">
                        <img src={vscode} alt="img" />
                        <h2>VS Code</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Technology;