import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ppImage from '../assets/pp.png'; // Import de la photo de l'utilisateur

const About = () => {
  return (
    <div style={{ padding: 'var(--space-6) 0' }}>
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <h1 className="fw-bold mb-4">L'Intelligence Digitale au service des <span style={{ color: 'var(--color-secondary)' }}>PME Congolaises</span></h1>
            <p className="lead mb-4" style={{ color: 'var(--color-text-muted)' }}>
              Je suis Adam Chris Kayungura, fondateur de l'Agence Digitale Congo (ADC). 
              Ma mission est de démocratiser l'accès à des technologies web premium pour les entreprises de la RDC.
            </p>
            <p style={{ color: 'var(--color-text)' }}>
              Trop d'entreprises locales dépendent exclusivement des réseaux sociaux. Une page Facebook n'est pas votre propriété, un site web, si.
              Nous construisons les "boutiques" de demain : rapides, fiables, et avec des paiements locaux intégrés.
            </p>
            <div className="mt-5">
              <h4 className="fw-bold mb-3" style={{ color: 'var(--color-accent)' }}>Notre Méthode en 4 Étapes</h4>
              <ul className="list-unstyled">
                <li className="mb-2"><strong>1. Stratégie :</strong> On écoute vos objectifs commerciaux.</li>
                <li className="mb-2"><strong>2. Design :</strong> Création d'une maquette haute qualité (UI/UX).</li>
                <li className="mb-2"><strong>3. Développement :</strong> Code propre, rapide, optimisé mobile.</li>
                <li className="mb-2"><strong>4. Lancement :</strong> Tests, Hébergement et Formation.</li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="glass-panel p-5 text-center shadow-lg mx-auto" style={{ maxWidth: '400px' }}>
              <div style={{ width: '180px', height: '180px', borderRadius: '50%', margin: '0 auto 20px', overflow: 'hidden', border: '4px solid var(--color-secondary)', boxShadow: 'var(--shadow-md)' }}>
                <img src={ppImage} alt="Adam Chris Kayungura" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="fw-bold" style={{ color: 'var(--color-primary)' }}>Adam Chris</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: '600' }}>Expert React & Stratège Digital</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
