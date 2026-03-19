import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', padding: 'var(--space-6) 0' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: 'var(--color-primary)' }}>Parlez-nous de <span style={{ color: 'var(--color-secondary)' }}>Votre Projet</span></h1>
          <p className="lead text-muted">Le premier pas vers la digitalisation réussie de votre entreprise commence ici.</p>
        </div>

        <Row className="g-5">
          {/* Formulaire */}
          <Col md={6}>
            <div className="glass-panel border-0 shadow-sm p-5 bg-white h-100">
              <h3 className="fw-bold mb-4">Demande de Devis Gratuite</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nom de l'entreprise ou Société *</Form.Label>
                  <Form.Control type="text" placeholder="Ex: Boutique MaLova" required />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Votre nom *</Form.Label>
                  <Form.Control type="text" placeholder="Jean Dupont" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>WhatsApp / Téléphone *</Form.Label>
                  <Form.Control type="tel" placeholder="+243..." required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Type de Projet *</Form.Label>
                  <Form.Select required>
                    <option>Sélectionnez une offre</option>
                    <option>Pack Vitrine Pro</option>
                    <option>Pack E-Commerce</option>
                    <option>Croissance SEO</option>
                    <option>Autre développement sur-mesure</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Budget estimé</Form.Label>
                  <Form.Select>
                    <option>Moins de 500$</option>
                    <option>500$ - 1500$</option>
                    <option>Plus de 1500$</option>
                  </Form.Select>
                </Form.Group>

                <Button className="btn-gold w-100 py-3 fw-bold" type="submit">
                  Envoyer ma demande
                </Button>
              </Form>
            </div>
          </Col>

          {/* Calendly / Infos Supplémentaires */}
          <Col md={6}>
            <div className="glass-panel text-white p-5 h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: 'var(--color-primary)' }}>
              <h3 className="fw-bold mb-4" style={{ color: 'var(--color-secondary)' }}>Plus rapide de vive voix ?</h3>
              <p className="mb-4" style={{ fontSize: '1.2rem', color: 'var(--color-border)' }}>
                Si vous avez une idée précise en tête et que vous souhaitez en discuter rapidement, réservez directement un appel découverte (gratuit de 15 min).
              </p>
              
              <div className="bg-white p-4 rounded-3 text-center mb-4">
                <p className="text-dark fw-bold mb-3">📍 Choisissez votre créneau via Calendly</p>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary fw-bold w-100 mb-2">
                  Ouvrir l'agenda Calendly
                </a>
              </div>

              <div>
                <p className="mb-2">📱 <strong>WhatsApp:</strong> +243 81 00 00 000</p>
                <p className="mb-0">📧 <strong>Email:</strong> contact@adc-pro.cd</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
