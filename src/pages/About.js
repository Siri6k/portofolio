import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', padding: 'var(--space-6) 0' }}>
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <h1 className="fw-bold mb-4">L'Intelligence Digitale au service des <span style={{ color: 'var(--color-secondary)' }}>PME Congolaises</span></h1>
            <p className="lead text-muted mb-4">
              Je suis Adam Chris Kayungura, fondateur de l'Agence Digitale Congo (ADC). 
              Ma mission est de démocratiser l'accès à des technologies web premium pour les entreprises de la RDC.
            </p>
            <p className="text-muted">
              Trop d'entreprises locales dépendent exclusivement des réseaux sociaux. Une page Facebook n'est pas votre propriété, un site web, si.
              Nous construisons les "boutiques" de demain : rapides, fiables, et avec des paiements locaux intégrés.
            </p>
            <div className="mt-5">
              <h4 className="fw-bold mb-3 text-primary">Notre Méthode en 4 Étapes</h4>
              <ul className="list-unstyled">
                <li className="mb-2"><strong>1. Stratégie :</strong> On écoute vos objectifs commerciaux.</li>
                <li className="mb-2"><strong>2. Design :</strong> Création d'une maquette haute qualité (UI/UX).</li>
                <li className="mb-2"><strong>3. Développement :</strong> Code propre, rapide, optimisé mobile.</li>
                <li className="mb-2"><strong>4. Lancement :</strong> Tests, Hébergement et Formation.</li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="glass-panel p-5 text-center shadow-lg" style={{ backgroundColor: 'var(--color-primary)' }}>
              <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: 'var(--color-border)', margin: '0 auto 20px' }}>
                {/* Image Placeholder */}
              </div>
              <h3 className="text-white fw-bold">Adam Chris</h3>
              <p style={{ color: 'var(--color-secondary)' }}>Expert React & Stratège Digital</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
