import { EmailJSResponseStatus } from 'emailjs-com';
import React from 'react';
import emailjs from 'emailjs-com';
import Footer from './Footer';

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z7x7t5r', 'template_3c6fuec', e.target, 'user_edB0yp4J6oB3DhbVnw1d4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="form-div p-5 " id="contact">
            <div className="container form-bg">
                <h2 data-aos="fade-left " className="name-color fw-bold text-center mb-5">Contact With Me</h2>
                <form data-aos="fade-left" onSubmit={sendEmail}>
                    <div className="row d-flex flex-column">
                        <div className="col-12 col-md-6 form-group pt-2 ">
                            <input type="text" name="name" className="form-control" placeholder="name" />
                        </div> <br />
                        <div className="col-12 col-md-6  form-group pt-2 ">
                            <input type="text" name="name" className="form-control" placeholder="email" />
                        </div>
                        <div className="col-12 col-md-6  form-group pt-2 ">
                            <input type="text" name="name" className="form-control" placeholder="subject" />
                        </div>
                        <div className="col-12 col-md-6 form-group pt-2 ">
                            <textarea name="message" id="" cols="36" rows="8" placeholder="Your message"></textarea><br />
                            <input type="submit" value="Send Message" className="btn btn-info" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
       
    );
};

export default ContactForm;