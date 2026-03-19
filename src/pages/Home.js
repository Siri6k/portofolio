import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* 1. Hero Section - Design Premium B2B */}
      <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: 'var(--space-6) 0' }} className="text-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Transformez vos visiteurs en véritables <span style={{ color: 'var(--color-secondary)' }}>Clients</span>
              </h1>
              <p className="lead mb-5" style={{ color: 'var(--color-border)', fontFamily: 'var(--font-body)' }}>
                Nous accompagnons les entreprises et leaders au Congo dans leur digitalisation : Sites web hauts de gamme, boutiques en ligne e-commerce, et stratégies de visibilité.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/contact" className="btn btn-gold btn-lg shadow-md">Démarrer un Projet 🚀</Link>
                <Link to="/portfolio" className="btn btn-outline-light btn-lg border-2">Voir nos résultats</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. Preuve Sociale / Focus RDC - Style Glassmorphism */}
      <section className="bg-light py-5 text-center">
        <Container>
          <p className="text-uppercase fw-bold text-muted mb-4 tracking-wide" style={{ letterSpacing: '2px' }}>
            Des solutions adaptées aux réalités locales
          </p>
          <Row className="justify-content-center g-4">
            <Col xs={12} md={4}>
              <div className="glass-panel text-dark h-100 border-0" style={{ backgroundColor: '#fff', boxShadow: 'var(--shadow-md)' }}>
                <h4 className="fw-bold mb-2" style={{ color: 'var(--color-accent)' }}>Paiement Mobile</h4>
                <p className="small mb-0 text-muted">Intégration fluide de M-Pesa, Orange Money et Airtel Money pour vos clients.</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="glass-panel text-dark h-100 border-0" style={{ backgroundColor: '#fff', boxShadow: 'var(--shadow-md)' }}>
                <h4 className="fw-bold mb-2" style={{ color: 'var(--color-accent)' }}>Haute Performance</h4>
                <p className="small mb-0 text-muted">Des sites codés sur-mesure pour s'afficher rapidement, même avec les connexions mobiles du pays.</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="glass-panel text-dark h-100 border-0" style={{ backgroundColor: '#fff', boxShadow: 'var(--shadow-md)' }}>
                <h4 className="fw-bold mb-2" style={{ color: 'var(--color-accent)' }}>Visibilité (SEO)</h4>
                <p className="small mb-0 text-muted">Devancez vos concurrents sur Google à Kinshasa, Lubumbashi ou en Afrique.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. Aperçu des Services / Produits */}
      <section style={{ padding: 'var(--space-6) 0' }}>
        <Container>
          <h2 className="text-center mb-5">Nos Formules <span style={{ color: 'var(--color-secondary)' }}>Sur-Mesure</span></h2>
          <Row className="g-4 align-items-stretch">
            {/* Card 1 */}
            <Col md={4} className="d-flex">
              <Card className="w-100 border-0 shadow-sm rounded-4">
                <Card.Body className="p-4 d-flex flex-column text-center">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>🖥️</div>
                  <h4 className="fw-bold mb-3 text-primary">Pack "Vitrine Pro"</h4>
                  <p className="text-muted flex-grow-1">Site de 5 à 10 pages pour affirmer l'autorité de votre entreprise. Parfait pour les prestataires de services, cliniques et cabinets.</p>
                  <Link to="/services" className="btn btn-primary-custom w-100 mt-auto">Découvrir cette offre</Link>
                </Card.Body>
              </Card>
            </Col>
            {/* Card 2 (Mise en avant) */}
            <Col md={4} className="d-flex">
              <Card className="w-100 border-0 rounded-4" style={{ backgroundColor: 'var(--color-primary)', color: 'white', transform: 'scale(1.05)', boxShadow: 'var(--shadow-glass)', zIndex: 10 }}>
                <Card.Body className="p-4 d-flex flex-column text-center">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>🛒</div>
                  <h4 className="fw-bold mb-3" style={{ color: 'var(--color-secondary)' }}>Pack "Vente E-commerce"</h4>
                  <p className="flex-grow-1" style={{ color: 'var(--color-border)' }}>Créez votre boutique en ligne complète. Catalogue de produits, panier d'achat et encaissement en Mobile Money/Carte.</p>
                  <Link to="/contact" className="btn btn-gold w-100 mt-auto">Demander ce Devis</Link>
                </Card.Body>
              </Card>
            </Col>
            {/* Card 3 */}
            <Col md={4} className="d-flex">
              <Card className="w-100 border-0 shadow-sm rounded-4">
                <Card.Body className="p-4 d-flex flex-column text-center">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>📈</div>
                  <h4 className="fw-bold mb-3 text-primary">Croissance & SEO</h4>
                  <p className="text-muted flex-grow-1">Refonte de site existant et Optimisation pour les moteurs de recherche pour acquérir des clients en automatique.</p>
                  <Link to="/services" className="btn btn-primary-custom w-100 mt-auto">En voir plus</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
