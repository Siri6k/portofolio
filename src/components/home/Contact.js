import React from "react";
import { Button } from "react-bootstrap";
import {
  FaGithub,
  FaFreeCodeCamp,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container-fluid text-center">
      <div className="container d-flex flex-column align-items-center justify-content-center bg-light">
        <h2>Say Hello 👋</h2>
        <p>Let's Work Together.</p>
        <p>
          I’m always open to new opportunities and collaborations. <br />
          Contact me via email, phone, or social media. <br />I look forward to
          hearing from you soon. 😊
        </p>
        <div className="d-flex justify-content-center mt-4">
          <a
            href="https://wa.me/+243899530506"
            className="btn btn-success mx-2"
            target="blank"
          >
            WhatsApp
          </a>
          <a href="tel:+243899530506" className="btn btn-primary mx-2">
            Call Me
          </a>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <a
          href="https://github.com/Siri6k"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <FaGithub size={15} color="black" />
        </a>
        <a
          href="https://www.freecodecamp.org/sirisk"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <FaFreeCodeCamp size={15} color="black" />
        </a>
        <a
          href="https://twitter.com/adamchriskay"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <FaTwitter size={15} color="black" />
        </a>
        <a
          href="https://www.linkedin.com/in/adam-chris-kayungura-0502a398/"
          target="_blank"
          rel="noreferrer"
          className="mx-2"
        >
          <FaLinkedin size={15} color="black" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
