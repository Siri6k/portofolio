import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', padding: 'var(--space-6) 0' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: 'var(--color-primary)' }}>Nos <span style={{ color: 'var(--color-secondary)' }}>Réalisations</span></h1>
          <p className="lead text-muted">Ce que nous créons, ce sont des résultats mesurables pour nos clients.</p>
        </div>

        <Row className="g-5">
          {/* Etude de cas 1 */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 p-3 rounded-4">
              <div 
                style={{ height: '200px', backgroundColor: 'var(--color-primary)', borderRadius: '12px' }}
                className="d-flex align-items-center justify-content-center text-white mb-4"
              >
                [Image: Refonte Site Clinique]
              </div>
              <Card.Body>
                <h4 className="fw-bold mb-3">Refonte Digitale : Clinique privée (Kinshasa)</h4>
                <div className="mb-3">
                  <span className="badge bg-secondary me-2">Vitrine Pro</span>
                  <span className="badge bg-success">SEO</span>
                </div>
                <p><strong>Le Défi :</strong> Une clinique moderne perdait des patients car son site mettait 15 secondes à charger et n'était pas adapté au mobile.</p>
                <p><strong>Notre Solution :</strong> Refonte totale sous React avec optimisation stricte. Ajout de prise de RDV via WhatsApp direct.</p>
                <p className="text-success fw-bold">➡ Résultat : +45% de prises de rendez-vous en ligne en 3 mois.</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Etude de cas 2 */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 p-3 rounded-4">
              <div 
                style={{ height: '200px', backgroundColor: 'var(--color-primary)', borderRadius: '12px' }}
                className="d-flex align-items-center justify-content-center text-white mb-4"
              >
                [Image: Boutique E-commerce]
              </div>
              <Card.Body>
                <h4 className="fw-bold mb-3">Lancement : Boutique E-commerce Retail</h4>
                <div className="mb-3">
                  <span className="badge bg-warning text-dark me-2">E-Commerce</span>
                  <span className="badge bg-success">Paiement Mobile</span>
                </div>
                <p><strong>Le Défi :</strong> Un magasin de vêtements cherchait à vendre ses articles 24/7 partout au pays sans se limiter à WhatsApp.</p>
                <p><strong>Notre Solution :</strong> Création d'une plateforme e-commerce rapide incluant l'intégration des APIs M-Pesa et Orange Money.</p>
                <p className="text-success fw-bold">➡ Résultat : Conversion des appels informatifs en ventes concrètes automatisées.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
