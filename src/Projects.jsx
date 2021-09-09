import React from 'react';
import web1 from '../src/images/img6.jpg';
import web2 from '../src/images/img2.jpg';
import web3 from '../src/images/img3.jpg';
import web4 from '../src/images/img8.jpg';
import web5 from '../src/images/img5.jpg';
import web6 from '../src/images/img7.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Projects = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <>
            <div className="project_section">
                <h2 data-aos='zoom-in' className="project_title">Projects Preview</h2>
                <div className="project_nav">
                    <h2 data-aos='fade-left'>All</h2>
                    <h2 data-aos='fade-left'>Web Project</h2>
                    <h2 data-aos='fade-left'>Android Project</h2>
                </div>
                <div className="project_center">

                    <div data-aos='fade-left' className="project">
                        <a href="">
                            <img src={web1} alt="img" />
                            <h2>Wether App</h2>
                        </a>
                    </div>

                    <div data-aos='fade-left' className="project">
                        <a href="">
                            <img src={web2} alt="img" />
                            <h2>Wether App</h2>
                        </a>
                    </div>

                    <div data-aos='fade-left' className="project">
                        <a href="">
                            <img src={web3} alt="img" />
                            <h2>Wether App</h2>
                        </a>
                    </div>

                    <div data-aos='fade-left' className="project">
                        <a href="">
                            <img src={web4} alt="img" />
                            <h2>Wether App</h2>
                        </a>
                    </div>

                    <div data-aos='fade-left' className="project">
                        <a href="">
                            <img src={web5} alt="img" />
                            <h2>Wether App</h2>
                        </a>
                    </div>

                    <div data-aos='fade-left' className="project">
                        <a href="">
                            <img src={web6} alt="img" />
                            <h2>Wether App</h2>
                        </a>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Projects;