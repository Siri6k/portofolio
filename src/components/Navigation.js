import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navigation = ({ theme }) => {
  return (
    <Navbar expand="lg" variant={theme === 'dark' ? 'dark' : 'light'} style={{ backgroundColor: 'var(--color-surface)', padding: 'var(--space-2) 0', borderBottom: '1px solid var(--color-border)' }} sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', color: 'var(--color-text)' }}>
          Niplan. <span style={{ color: 'var(--color-secondary)' }}>Pro</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center" style={{ gap: 'var(--space-2)' }}>
            <Nav.Link as={NavLink} to="/" style={{ color: 'var(--color-text)' }}>Accueil</Nav.Link>
            <Nav.Link as={NavLink} to="/services" style={{ color: 'var(--color-text)' }}>Services</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" style={{ color: 'var(--color-text)' }}>Réalisations</Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={{ color: 'var(--color-text)' }}>À Propos</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="btn-premium ms-lg-2">Devis & Projet</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
