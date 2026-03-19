import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: 'var(--color-primary)', padding: 'var(--space-2) 0' }} sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>
          ADC. <span style={{ color: 'var(--color-secondary)' }}>Pro</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ gap: 'var(--space-2)' }}>
            <Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio">Réalisations</Nav.Link>
            <Nav.Link as={NavLink} to="/about">À Propos</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="btn-gold" style={{ color: '#0B132B' }}>Devis & Rendez-vous</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
