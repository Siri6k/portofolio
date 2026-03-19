import React from 'react';

const Home = () => {
  return (
    <main style={{ padding: 'var(--space-6) 0' }} className="container text-center">
      <h1>Partenaire de la Croissance Digitale au <span style={{ color: 'var(--color-secondary)' }}>Congo</span></h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto var(--space-4)' }}>
        Transformez vos visiteurs en clients. Des sites web sur mesure pour les entreprises locales exigeantes.
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'center' }}>
        <button className="btn-gold">Réserver un appel gratuit</button>
        <button className="btn-primary-custom" style={{ color: "black", backgroundColor: "white" }}>Voir nos offres</button>
      </div>
    </main>
  );
};

export default Home;
