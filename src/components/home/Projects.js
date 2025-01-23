import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { myProjects } from "../common/Constants";

const ProjectList = () => (
  <div id="projects" className="d-flex flex-wrap justify-content-around">
    {myProjects.map((item) => (
      <Card key={item.key} style={{ width: "18rem", marginBottom: "1rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body className="text-center">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.content.length > 50
              ? `${item.content.slice(0, 50)}...`
              : item.content}
          </Card.Text>
          <Button className="mr-2 btn btn-info" size="sm">
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Learn more..
            </a>
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>
);

export default ProjectList;
