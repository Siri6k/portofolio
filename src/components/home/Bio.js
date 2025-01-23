import React from "react";
import { Button } from "react-bootstrap";
import {
  FaGithub,
  FaFreeCodeCamp,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import pp from "../../assets/pp.png";
import { Link } from "react-router-dom";

const Bio = () => {
  return (
    <div className="container-fluid text-center py-5 justify-content-center">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img
            src={pp}
            alt="Adam Chris Kayungura"
            className="img-fluid rounded-circle bio-image mb-3"
          />
        </div>
        <div className="col-md-8">
          <h2 className="font-weight-bold">
            Software Developer <br />
            && <br />
            Electromechanical Engineer
          </h2>
          <p>Bonjour, je m'appelle</p>
          <h3 className="font-weight-bold">Adam Chris Kayungura</h3>
          <p>
            J'aide les entreprises à obtenir 20 fois plus de prospects avec des
            sites web rapides, beaux et conçus de manière unique.
          </p>
          <div className="d-flex justify-content-around mt-4">
            <Button variant="primary" className="mr-2">
              <Link to="/contact" className="text-white text-decoration-none">
                Contactez-moi
              </Link>
            </Button>
            <Button variant="secondary">
              <a
                href="path/to/your-cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-white text-decoration-none"
              >
                Télécharger CV
              </a>
            </Button>
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
      </div>
    </div>
  );
};

export default Bio;
