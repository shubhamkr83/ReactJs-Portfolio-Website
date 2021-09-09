import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from '@material-ui/core';

const Contact = () => {

    const customId = "custom-id-yes";

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const getUserData = (event) => {
        const { value, name } = event.target;

        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, message } = user;

        if (name && email && phone && message) {
            const res = await fetch("https://react-personal-portfolio-web-default-rtdb.firebaseio.com/personalportfoliofrom.json",
                {
                    method: 'POST',
                    header: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        message,
                    }),
                }
            );
            if (res) {
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                // alert("Data Stored Successfully to Firebase 😉")
                toast.success("Data Stored Successfully ", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "colored",
                    pauseOnHover: false,
                    toastId: customId,
                    draggable: false,
                })
            }
        } else {
            // alert("Please fill all the data 😠");
            toast.warn("Please fill all the data", {
                position: "top-center",
                autoClose: 3000,
                pauseOnHover: false,
                toastId: customId,
                draggable: false,
            })
        }
    };

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <>
            <form className="contact_section" id="contact" method="POST">
                <h2 data-aos='zoom-in'>Contact Us</h2>
                <div className="center_contact">
                    <div data-aos='fade-up' className="input_section">
                        <label>FullName</label>
                        <input type="text"
                            name="name"
                            placeholder="Enter your fullname"
                            value={user.name}
                            onChange={getUserData}
                        />
                    </div>
                    <div data-aos='fade-up' className="input_section">
                        <label>Email Id</label>
                        <input type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={user.email}
                            onChange={getUserData}
                        />
                    </div>
                    <div data-aos='fade-up' className="input_section">
                        <label>Phone No.</label>
                        <input type="number"
                            name="phone"
                            placeholder="Enter your phone"
                            value={user.phone}
                            onChange={getUserData}
                        />
                    </div>
                    <div data-aos='fade-up' className="input_text">
                        <label>Message</label>
                        <textarea name=""
                            name="message"
                            placeholder="Message"
                            value={user.message}
                            onChange={getUserData}
                        >
                        </textarea>
                    </div>

                    <button data-aos='fade-up' onClick={postData}>
                        Submit
                    </button>
                </div>
            </form>
            <ToastContainer />
        </>
    )
};


export default Contact;