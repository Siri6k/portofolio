import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const stagger = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <motion.section 
        {...fadeInUp}
        style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', padding: 'var(--space-6) 0' }} className="text-center"
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Transformez vos visiteurs en véritables <span style={{ color: 'var(--color-secondary)' }}>Clients</span>
              </h1>
              <p className="lead mb-5" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                Nous accompagnons les entreprises et leaders au Congo dans leur digitalisation : Sites web hauts de gamme, boutiques en ligne e-commerce, et stratégies de visibilité.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/contact" className="btn btn-premium btn-lg">Démarrer un Projet 🚀</Link>
                <Link to="/portfolio" className="btn btn-primary-custom btn-lg">Voir nos résultats</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* 2. Preuve Sociale */}
      <section style={{ backgroundColor: 'var(--color-bg)', padding: 'var(--space-5) 0' }} className="text-center">
        <Container>
          <motion.p 
            {...fadeInUp}
            className="text-uppercase fw-bold mb-4 tracking-wide" style={{ letterSpacing: '2px', color: 'var(--color-text-muted)' }}
          >
            Des solutions adaptées aux réalités locales
          </motion.p>
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row justify-content-center g-4"
          >
            <Col xs={12} md={4}>
              <motion.div variants={fadeInUp} className="glass-panel text-dark h-100 border-0">
                <h4 className="fw-bold mb-2" style={{ color: 'var(--color-accent)' }}>Paiement Mobile</h4>
                <p className="small mb-0" style={{ color: 'var(--color-text-muted)' }}>Intégration fluide de M-Pesa, Orange Money et Airtel Money pour vos clients.</p>
              </motion.div>
            </Col>
            <Col xs={12} md={4}>
              <motion.div variants={fadeInUp} className="glass-panel text-dark h-100 border-0">
                <h4 className="fw-bold mb-2" style={{ color: 'var(--color-accent)' }}>Haute Performance</h4>
                <p className="small mb-0" style={{ color: 'var(--color-text-muted)' }}>Des sites codés sur-mesure pour s'afficher rapidement, même avec les connexions mobiles du pays.</p>
              </motion.div>
            </Col>
            <Col xs={12} md={4}>
              <motion.div variants={fadeInUp} className="glass-panel text-dark h-100 border-0">
                <h4 className="fw-bold mb-2" style={{ color: 'var(--color-accent)' }}>Visibilité (SEO)</h4>
                <p className="small mb-0" style={{ color: 'var(--color-text-muted)' }}>Devancez vos concurrents sur Google à Kinshasa, Lubumbashi ou en Afrique.</p>
              </motion.div>
            </Col>
          </motion.div>
        </Container>
      </section>

      {/* 3. Aperçu des Services */}
      <section style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: 'var(--space-6) 0' }}>
        <Container>
          <motion.h2 {...fadeInUp} className="text-center mb-5">Nos Formules <span style={{ color: 'var(--color-secondary)' }}>Sur-Mesure</span></motion.h2>
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row g-4 align-items-stretch"
          >
            {/* Card 1 */}
            <Col md={4} className="d-flex">
              <motion.div variants={fadeInUp} className="w-100">
                <Card className="w-100 border-0 shadow-sm rounded-4 glass-panel p-0 h-100">
                  <Card.Body className="p-4 d-flex flex-column text-center">
                    <div className="mb-3" style={{ fontSize: '2.5rem' }}>🖥️</div>
                    <h4 className="fw-bold mb-3" style={{ color: 'var(--color-primary)' }}>Pack "Vitrine Pro"</h4>
                    <p className="flex-grow-1" style={{ color: 'var(--color-text-muted)' }}>Site de 5 à 10 pages pour affirmer l'autorité de votre entreprise. Parfait pour les prestataires de services.</p>
                    <Link to="/services" className="btn btn-primary-custom w-100 mt-auto">Découvrir cette offre</Link>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            {/* Card 2 (Mise en avant) */}
            <Col md={4} className="d-flex">
              <motion.div variants={fadeInUp} className="w-100">
                <Card className="w-100 border-0 rounded-4 p-0 shadow-md h-100" style={{ backgroundColor: 'var(--color-secondary)', color: 'white', transform: 'scale(1.05)', zIndex: 10 }}>
                  <Card.Body className="p-4 d-flex flex-column text-center">
                    <div className="mb-3" style={{ fontSize: '2.5rem' }}>🛒</div>
                    <h4 className="fw-bold mb-3 text-white">Pack "Vente E-commerce"</h4>
                    <p className="flex-grow-1" style={{ color: 'rgba(255,255,255,0.9)' }}>Créez votre boutique en ligne complète. Catalogue de produits, panier d'achat et encaissement en Mobile Money/Carte.</p>
                    <Link to="/contact" className="btn btn-premium w-100 mt-auto" style={{ backgroundColor: 'var(--color-accent)', color: '#0F172A' }}>Demander ce Devis</Link>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            {/* Card 3 */}
            <Col md={4} className="d-flex">
              <motion.div variants={fadeInUp} className="w-100">
                <Card className="w-100 border-0 shadow-sm rounded-4 glass-panel p-0 h-100">
                  <Card.Body className="p-4 d-flex flex-column text-center">
                    <div className="mb-3" style={{ fontSize: '2.5rem' }}>📈</div>
                    <h4 className="fw-bold mb-3" style={{ color: 'var(--color-primary)' }}>Croissance & SEO</h4>
                    <p className="flex-grow-1" style={{ color: 'var(--color-text-muted)' }}>Refonte de site existant et Optimisation pour les moteurs de recherche pour acquérir des clients en automatique.</p>
                    <Link to="/services" className="btn btn-primary-custom w-100 mt-auto">En voir plus</Link>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </motion.div>
        </Container>
      </section>

      {/* Témoignages */}
      <Testimonials />
    </div>
  );
};

export default Home;
