import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div style={{ padding: 'var(--space-6) 0' }}>
      <Container>
        <motion.div {...fadeInUp} className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: 'var(--color-primary)' }}>Nos <span style={{ color: 'var(--color-secondary)' }}>Offres Pro</span></h1>
          <p className="lead" style={{ color: 'var(--color-text-muted)' }}>Des solutions digitales robustes, spécialement conçues pour le marché congolais.</p>
        </motion.div>

        <Row className="g-5">
          {/* Service 1 */}
          <Col lg={4}>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-100 border-0 shadow-sm glass-panel text-center p-4">
                <h3 className="mb-3" style={{ color: 'var(--color-primary)' }}>💼 Vitrine Pro</h3>
                <p className="flex-grow-1" style={{ color: 'var(--color-text-muted)' }}>
                  La fondation de votre crédibilité. Un site de présentation de bout en bout pour vous démarquer.
                </p>
                <ul className="text-start mb-4" style={{ listStyleType: 'none', padding: 0, color: 'var(--color-text-muted)' }}>
                  <li>✅ Design Premium & Responsive</li>
                  <li>✅ Jusqu'à 10 Pages</li>
                  <li>✅ Hébergement localisé rapide</li>
                  <li>✅ Intégration WhatsApp directe</li>
                </ul>
                <button className="btn btn-primary-custom w-100 fw-bold">Demander un Devis</button>
              </Card>
            </motion.div>
          </Col>

          {/* Service 2 - E-commerce */}
          <Col lg={4}>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-100 border-0 shadow text-center p-4" style={{ backgroundColor: 'var(--color-secondary)', color: 'white', transform: 'scale(1.05)', zIndex: 1 }}>
                <h3 className="mb-3 text-white">🛒 E-Commerce</h3>
                <p className="flex-grow-1" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Lancez votre boutique en ligne automatisée et recevez des paiements à toute heure.
                </p>
                <ul className="text-start mb-4" style={{ listStyleType: 'none', padding: 0, color: 'rgba(255,255,255,0.9)' }}>
                  <li>✅ Catalogue Complet</li>
                  <li>✅ M-Pesa, Airtel & Orange Money</li>
                  <li>✅ Gestion simplifiée</li>
                  <li>✅ Optimisé Mobile-First</li>
                </ul>
                <button className="btn btn-premium w-100 fw-bold" style={{ backgroundColor: 'var(--color-accent)', color: '#0F172A' }}>Réserver cette offre</button>
              </Card>
            </motion.div>
          </Col>

          {/* Service 3 */}
          <Col lg={4}>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="h-100 border-0 shadow-sm glass-panel text-center p-4">
                <h3 className="mb-3" style={{ color: 'var(--color-primary)' }}>🚀 Croissance + SEO</h3>
                <p className="flex-grow-1" style={{ color: 'var(--color-text-muted)' }}>
                  Optimisation avancée pour hisser votre entreprise au sommet de Google dans votre ville.
                </p>
                <ul className="text-start mb-4" style={{ listStyleType: 'none', padding: 0, color: 'var(--color-text-muted)' }}>
                  <li>✅ Audit de Vitesse</li>
                  <li>✅ Mots-clés Locaux</li>
                  <li>✅ Optimisation Images</li>
                  <li>✅ Google My Business</li>
                </ul>
                <button className="btn btn-primary-custom w-100 fw-bold">Analyser mon Site</button>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
