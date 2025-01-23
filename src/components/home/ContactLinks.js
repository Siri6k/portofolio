import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const ContactLinks = () => {
  return (
    <Container className="text-center my-4 mt-2">
      <h2>Contactez-moi</h2>
      <Row className="justify-content-center">
        <Col xs={2}>
          <Button
            variant="success"
            href="https://wa.me/1234567890"
            target="_blank"
            className="animated-button"
          >
            <FaWhatsapp size={20} className="custom-icon" />
          </Button>
        </Col>
        <Col xs={2}>
          <Button
            variant="primary"
            href="https://t.me/username"
            target="_blank"
            className="animated-button"
          >
            <FaTelegram size={20} className="custom-icon" />
          </Button>
        </Col>
        <Col xs={2}>
          <Button
            variant="danger"
            href="mailto:email@example.com"
            target="_blank"
            className="animated-button"
          >
            <FaEnvelope size={20} className="custom-icon" />
          </Button>
        </Col>
        <Col xs={2}>
          <Button
            variant="info"
            href="https://www.linkedin.com/in/username"
            target="_blank"
            className="animated-button"
          >
            <FaLinkedin size={20} className="custom-icon" />
          </Button>
        </Col>
        <Col xs={2}>
          <Button
            variant="dark"
            href="https://github.com/username"
            target="_blank"
            className="animated-button"
          >
            <FaGithub size={20} className="custom-icon" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactLinks;
