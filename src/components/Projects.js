import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProjectCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://via.placeholder.com/800x400"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Projet 1</h3>
        <p>Description du projet 1.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://via.placeholder.com/800x400"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Projet 2</h3>
        <p>Description du projet 2.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default ProjectCarousel;