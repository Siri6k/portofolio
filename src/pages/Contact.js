import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div style={{ padding: 'var(--space-6) 0' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: 'var(--color-primary)' }}>Parlez-nous de <span style={{ color: 'var(--color-secondary)' }}>Votre Projet</span></h1>
          <p className="lead" style={{ color: 'var(--color-text-muted)' }}>Le premier pas vers la digitalisation réussie de votre entreprise commence ici.</p>
        </div>

        <Row className="g-5">
          {/* Formulaire */}
          <Col md={6}>
            <div className="glass-panel border-0 shadow-sm p-4 h-100">
              <h3 className="fw-bold mb-4" style={{ color: 'var(--color-primary)' }}>Demande de Devis Gratuite</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'var(--color-text)' }}>Nom de l'entreprise ou Société *</Form.Label>
                  <Form.Control type="text" placeholder="Ex: Boutique MaLova" required />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'var(--color-text)' }}>Votre nom *</Form.Label>
                  <Form.Control type="text" placeholder="Jean Dupont" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'var(--color-text)' }}>WhatsApp / Téléphone *</Form.Label>
                  <Form.Control type="tel" placeholder="+243..." required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: 'var(--color-text)' }}>Type de Projet *</Form.Label>
                  <Form.Select required>
                    <option>Sélectionnez une offre</option>
                    <option>Pack Vitrine Pro</option>
                    <option>Pack E-Commerce</option>
                    <option>Croissance SEO</option>
                    <option>Autre développement sur-mesure</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={{ color: 'var(--color-text)' }}>Budget estimé</Form.Label>
                  <Form.Select>
                    <option>Moins de 500$</option>
                    <option>500$ - 1500$</option>
                    <option>Plus de 1500$</option>
                  </Form.Select>
                </Form.Group>

                <Button className="btn-premium w-100 py-3 fw-bold" type="submit">
                  Envoyer ma demande
                </Button>
              </Form>
            </div>
          </Col>

          {/* WhatsApp Direct / Infos Supplémentaires */}
          <Col md={6}>
            <div className="h-100 d-flex flex-column justify-content-center p-5 rounded-4 shadow-md" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <h3 className="fw-bold mb-4" style={{ color: 'var(--color-secondary)' }}>Réponse Ultra Rapide ⚡</h3>
              <p className="mb-4" style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                Pour une réponse immédiate, contactez-moi directement sur WhatsApp. Idéal pour poser vos questions ou envoyer un mémo vocal sur votre projet.
              </p>
              
              <div className="p-4 rounded-3 text-center mb-4 border" style={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                <p className="fw-bold mb-3" style={{ color: 'var(--color-text)' }}>🚀 Démarrer la discussion</p>
                <a href="https://wa.me/243899530506" target="_blank" rel="noopener noreferrer" className="btn btn-premium fw-bold w-100 mb-2">
                  Ouvrir WhatsApp
                </a>
              </div>

              <div>
                <p className="mb-2" style={{ color: 'var(--color-text)' }}>📱 <strong>WhatsApp:</strong> +243 89 95 30 506</p>
                <p className="mb-0" style={{ color: 'var(--color-text)' }}>📧 <strong>Email:</strong> adamchrisk@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
