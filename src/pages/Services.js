import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', padding: 'var(--space-6) 0' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: 'var(--color-primary)' }}>Nos <span style={{ color: 'var(--color-secondary)' }}>Offres Pro</span></h1>
          <p className="lead text-muted">Des solutions digitales robustes, spécialement conçues pour le marché congolais.</p>
        </div>

        <Row className="g-5">
          {/* Service 1 */}
          <Col lg={4}>
            <Card className="h-100 border-0 shadow-sm glass-panel text-center p-4">
              <h3 className="mb-3 text-primary">💼 Vitrine Pro</h3>
              <p className="text-muted flex-grow-1">
                La fondation de votre crédibilité. Un site de présentation de bout en bout pour vous démarquer.
              </p>
              <ul className="text-start text-muted mb-4" style={{ listStyleType: 'none', padding: 0 }}>
                <li>✅ Design Premium et Responsive</li>
                <li>✅ Jusqu'à 10 Pages (Services, Contact, etc.)</li>
                <li>✅ Hébergement rapide localisé</li>
                <li>✅ Intégration WhatsApp directe</li>
              </ul>
              <button className="btn btn-outline-primary w-100 fw-bold">Demander un Devis</button>
            </Card>
          </Col>

          {/* Service 2 - E-commerce */}
          <Col lg={4}>
            <Card className="h-100 border-0 shadow text-center p-4" style={{ backgroundColor: 'var(--color-primary)', color: 'white', transform: 'scale(1.05)', zIndex: 1 }}>
              <h3 className="mb-3" style={{ color: 'var(--color-secondary)' }}>🛒 E-Commerce</h3>
              <p className="flex-grow-1" style={{ color: 'var(--color-border)' }}>
                Lancez votre boutique en ligne automatisée et recevez des paiements à toute heure.
              </p>
              <ul className="text-start mb-4" style={{ listStyleType: 'none', padding: 0, color: 'var(--color-border)' }}>
                <li>✅ Catalogue Complet (illimité)</li>
                <li>✅ M-Pesa, Airtel & Orange Money</li>
                <li>✅ Gestion simplifiée des commandes</li>
                <li>✅ Optimisé Mobile-First</li>
              </ul>
              <button className="btn btn-gold w-100 fw-bold">Réserver cette offre</button>
            </Card>
          </Col>

          {/* Service 3 */}
          <Col lg={4}>
            <Card className="h-100 border-0 shadow-sm glass-panel text-center p-4">
              <h3 className="mb-3 text-primary">🚀 Croissance + SEO</h3>
              <p className="text-muted flex-grow-1">
                Optimisation avancée pour hisser votre entreprise au sommet de Google dans votre ville.
              </p>
              <ul className="text-start text-muted mb-4" style={{ listStyleType: 'none', padding: 0 }}>
                <li>✅ Audit de vitesse et SEO Actuel</li>
                <li>✅ Optimisation Mots-clés Congolais</li>
                <li>✅ Vitesse de chargement 3G/4G</li>
                <li>✅ Fiche Google My Business</li>
              </ul>
              <button className="btn btn-outline-primary w-100 fw-bold">Analyser mon Site</button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
