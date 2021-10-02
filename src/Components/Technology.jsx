import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import TechData from './TechData';

const Technology = () => {

    const [items, setItems] = useState(TechData);

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
                    {
                        items.map((elem) => {
                            const { id, image, name } = elem;

                            return (
                                <div data-aos='fade-right' className="tech" key={id}>
                                    <img src={image} alt={name} />
                                    <h2>{name}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Technology;