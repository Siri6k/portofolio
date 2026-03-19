import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import npMarketImage from '../assets/np-market.png';
import codLandingImage from '../assets/cod-landing.png';
import ethScanImage from '../assets/eth-scan.png';

const Portfolio = () => {
  return (
    <div style={{ padding: 'var(--space-6) 0' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: 'var(--color-primary)' }}>Nos <span style={{ color: 'var(--color-secondary)' }}>Réalisations</span></h1>
          <p className="lead" style={{ color: 'var(--color-text-muted)' }}>Découvrez comment nous transformons les idées en plateformes digitales performantes.</p>
        </div>

        <Row className="g-5">
          {/* Etude de cas 1 - E-Commerce */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 p-0 rounded-4 glass-panel overflow-hidden">
              <div 
                style={{ height: '240px', overflow: 'hidden' }}
                className="d-flex align-items-center justify-content-center bg-light"
              >
                <img src={npMarketImage} alt="Projet Niplan Market" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-3" style={{ color: 'var(--color-primary)' }}>Plateforme E-commerce : Niplan Market</h4>
                <div className="mb-3">
                  <span className="badge me-2" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>E-Commerce</span>
                  <span className="badge" style={{ backgroundColor: 'var(--color-accent)', color: '#0F172A' }}>Niplan Ecosystem</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text)' }}>Challenge :</strong> Créer une expérience d'achat fluide et moderne pour le marché local.</p>
                <p style={{ color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text)' }}>Solution :</strong> Interface ultra-rapide optimisée pour les connexions mobiles et intégration de systèmes de paiement locaux.</p>
                <p className="fw-bold" style={{ color: 'var(--color-accent)' }}>➡ Impact : Une infrastructure prête pour la croissance numérique au Congo.</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Etude de cas 2 - Landing Page Business */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 p-0 rounded-4 glass-panel overflow-hidden">
              <div 
                style={{ height: '240px', overflow: 'hidden' }}
                className="d-flex align-items-center justify-content-center bg-light"
              >
                <img src={codLandingImage} alt="Projet COD Landing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-3" style={{ color: 'var(--color-primary)' }}>Refonte Digitale : Services Professionnels</h4>
                <div className="mb-3">
                  <span className="badge me-2" style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-text)' }}>Landing Page</span>
                  <span className="badge" style={{ backgroundColor: 'var(--color-accent)', color: '#0F172A' }}>Branding</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text)' }}>Challenge :</strong> Convertir les prospects en clients via une page d'atterrissage haute conversion.</p>
                <p style={{ color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text)' }}>Solution :</strong> Copywriting stratégique et design épuré mettant en avant la confiance et l'expertise.</p>
                <p className="fw-bold" style={{ color: 'var(--color-accent)' }}>➡ Impact : Forte augmentation du taux de contact via le formulaire direct.</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Etude de cas 3 - Fintech / Web3 Exploration */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 p-0 rounded-4 glass-panel overflow-hidden">
              <div 
                style={{ height: '240px', overflow: 'hidden' }}
                className="d-flex align-items-center justify-content-center bg-light"
              >
                <img src={ethScanImage} alt="Projet Blockchain Explorer" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              </div>
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-3" style={{ color: 'var(--color-primary)' }}>Exploration : Fintech & Web3 Dashboard</h4>
                <div className="mb-3">
                  <span className="badge me-2" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>Advanced UI</span>
                  <span className="badge" style={{ backgroundColor: 'var(--color-accent)', color: '#0F172A' }}>Data Visualization</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text)' }}>Focus :</strong> Gestion de données complexes et visualisation en temps réel pour le secteur financier.</p>
                <p style={{ color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text)' }}>Résultat :</strong> Une interface intuitive permettant de naviguer dans des flux de données techniques sans friction.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
