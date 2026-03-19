import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maître Ilunga",
      role: "Avocat à la Gombe (Kinshasa)",
      text: "Le site créé par Niplan a radicalement changé ma visibilité. Mes clients apprécient le côté professionnel et épuré. C'est le standard international.",
      rating: 5
    },
    {
      name: "Mme Sarah",
      role: "Gérante Boutique (Lubumbashi)",
      text: "Vendre en ligne était un casse-tête avant Niplan. Pro. L'intégration du Mobile Money a doublé mes ventes en province. Un investissement rentable !",
      rating: 5
    },
    {
      name: "Kevin B.",
      role: "CEO Startup (Goma)",
      text: "Une équipe qui comprend les défis tech en RDC. Rapidité, performance et design au rendez-vous. Je recommande Niplan pour tout projet sérieux.",
      rating: 5
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section style={{ padding: 'var(--space-6) 0', backgroundColor: 'var(--color-bg)' }}>
      <Container>
        <div className="text-center mb-5">
          <motion.h2 {...fadeInUp} className="fw-bold" style={{ color: 'var(--color-primary)' }}>
            Ce que disent nos <span style={{ color: 'var(--color-secondary)' }}>Partenaires</span>
          </motion.h2>
          <motion.p {...fadeInUp} className="lead" style={{ color: 'var(--color-text-muted)' }}>
            La satisfaction de nos clients est notre meilleure publicité à travers le Congo.
          </motion.p>
        </div>

        <Row className="g-4">
          {testimonials.map((t, index) => (
            <Col key={index} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-100 border-0 shadow-sm glass-panel p-4">
                  <Card.Body>
                    <div className="mb-3" style={{ color: 'var(--color-secondary)' }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <FaQuoteLeft className="mb-3" style={{ color: 'rgba(var(--color-secondary-rgb), 0.2)', fontSize: '2rem' }} />
                    <p className="mb-4" style={{ fontStyle: 'italic', color: 'var(--color-text)' }}>
                      "{t.text}"
                    </p>
                    <hr style={{ borderColor: 'var(--color-border)' }} />
                    <div className="d-flex align-items-center mt-3">
                      <div 
                        style={{ 
                          width: '50px', 
                          height: '50px', 
                          borderRadius: '50%', 
                          backgroundColor: 'var(--color-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          marginRight: '15px'
                        }}
                      >
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h6 className="mb-0 fw-bold" style={{ color: 'var(--color-primary)' }}>{t.name}</h6>
                        <small style={{ color: 'var(--color-text-muted)' }}>{t.role}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
