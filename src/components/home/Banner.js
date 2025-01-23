import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { myProjects } from "../common/Constants";

function Banner() {
  return (
    <div id="banner" className="block banner-section">
      <Carousel>
        {myProjects.map((item) => (
          <Carousel.Item key={item.key}>
            <div className="fluid-container">
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.title}
              />
              <Carousel.Caption>
                <div className="content">
                  <h3>{item.title}</h3>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
