import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <div style={{ padding: 'var(--space-6) 0' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: 'var(--color-primary)' }}>Nos <span style={{ color: 'var(--color-secondary)' }}>Réalisations</span></h1>
          <p className="lead" style={{ color: 'var(--color-text-muted)' }}>Ce que nous créons, ce sont des résultats mesurables pour nos clients.</p>
        </div>

        <Row className="g-5">
          {/* Etude de cas 1 */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 p-3 rounded-4 glass-panel">
              <div 
                style={{ height: '200px', backgroundColor: 'var(--color-secondary)', borderRadius: '12px' }}
                className="d-flex align-items-center justify-content-center text-white mb-4"
              >
                [Image: Refonte Site Clinique]
              </div>
              <Card.Body>
                <h4 className="fw-bold mb-3" style={{ color: 'var(--color-primary)' }}>Refonte Digitale : Clinique privée (Kinshasa)</h4>
                <div className="mb-3">
                  <span className="badge me-2" style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-text)' }}>Vitrine Pro</span>
                  <span className="badge" style={{ backgroundColor: 'var(--color-accent)', color: '#0F172A' }}>SEO</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text)' }}>Le Défi :</strong> Une clinique moderne perdait des patients car son site mettait 15 secondes à charger.</p>
                <p style={{ color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text)' }}>Notre Solution :</strong> Refonte totale sous React avec optimisation stricte. Ajout de prise de RDV.</p>
                <p className="fw-bold" style={{ color: 'var(--color-accent)' }}>➡ Résultat : +45% de prises de rendez-vous en ligne en 3 mois.</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Etude de cas 2 */}
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 p-3 rounded-4 glass-panel">
              <div 
                style={{ height: '200px', backgroundColor: 'var(--color-accent)', borderRadius: '12px' }}
                className="d-flex align-items-center justify-content-center text-dark fw-bold mb-4"
              >
                [Image: Boutique E-commerce]
              </div>
              <Card.Body>
                <h4 className="fw-bold mb-3" style={{ color: 'var(--color-primary)' }}>Lancement : Boutique E-commerce Retail</h4>
                <div className="mb-3">
                  <span className="badge me-2" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>E-Commerce</span>
                  <span className="badge" style={{ backgroundColor: 'var(--color-accent)', color: '#0F172A' }}>Paiement Mobile</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text)' }}>Le Défi :</strong> Un magasin cherchait à vendre ses articles 24/7 partout au pays.</p>
                <p style={{ color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text)' }}>Notre Solution :</strong> Création d'une plateforme avec l'intégration des APIs M-Pesa et Orange Money.</p>
                <p className="fw-bold" style={{ color: 'var(--color-accent)' }}>➡ Résultat : Conversion des appels informatifs en ventes automatisées.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
