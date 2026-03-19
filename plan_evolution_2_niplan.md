# Plan d'Implémentation : Niplan. Pro Evolution 2.0

**Objectif :** Rendre le site interactif (Motion UI), crédible (Testimonials) et optimisé pour le partage (SEO/OG Tags).

**Architecture :**
Nous allons utiliser `framer-motion` pour les animations de scroll et de survol. Les témoignages seront factorisés dans un nouveau composant `Testimonials.js` pour une réutilisation sur plusieurs pages. Le SEO sera injecté directement dans le `public/index.html` pour assurer la lecture par les scrapers WhatsApp et Facebook.

**Écosystème Technique :** React 18, Framer-Motion, React-Icons, Meta Tags.

---

### Tâche 1 : Installation et Animations Globales (Motion UI)

**Fichiers :**
- Modifier : `package.json` (Ajout de framer-motion)
- Modifier : `src/pages/Home.js` (Intégration animations)

- [ ] **Étape 1 : Installer framer-motion**
```bash
npm install framer-motion
```
- [ ] **Étape 2 : Créer un wrapper d'animation réutilisable**
Ajouter une petite configuration d'animation (`initial`, `whileInView`, `viewport`) dans les sections de la page `Home.js`.
- [ ] **Étape 3 : Faire le commit**

### Tâche 2 : Création du Composant de Témoignages (Social Proof)

**Fichiers :**
- Créer : `src/components/Testimonials.js`

- [ ] **Étape 1 : Créer la structure Grid**
Générer 3 cartes avec les profils spécifiés (Maître Ilunga, Mme Sarah, Kevin de Goma).
- [ ] **Étape 2 : Design des cartes (Glassmorphism)**
Appliquer le style `glass-panel` et inclure 5 étoiles or (via `FaStar` de `react-icons`).
- [ ] **Étape 3 : Faire le commit**

### Tâche 3 : Intégration des Témoignages

**Fichiers :**
- Modifier : `src/pages/Home.js`
- Modifier : `src/pages/About.js`

- [ ] **Étape 1 : Ajouter la section Témoignages sur la Home**
Placer le composant après les réalisations pour confirmer la confiance.
- [ ] **Étape 2 : Ajouter la section sur la page À Propos**
- [ ] **Étape 3 : Vérifier le rendu visuel**
- [ ] **Étape 4 : Faire le commit**

### Tâche 4 : SEO Technique (Open Graph Tags)

**Fichiers :**
- Modifier : `public/index.html`

- [ ] **Étape 1 : Ajouter les Meta Tags Open Graph**
```html
<meta property="og:title" content="Niplan. Pro | Expertise Digitale pour PME au Congo" />
<meta property="og:description" content="Boostez votre croissance à Kinshasa, Lubumbashi ou Goma avec nos solutions web premium." />
<meta property="og:image" content="%PUBLIC_URL%/og-preview.png" />
<meta property="og:url" content="https://niplan.pro" />
<meta property="og:type" content="website" />
```
- [ ] **Étape 2 : Optimiser les Keywords**
Modifier les balises existantes pour inclure stratégiquement les villes congolaises clés.
- [ ] **Étape 3 : Faire le commit**

---
*(Toutes ces étapes doivent être validées tâche après tâche par l'agent ou l'utilisateur.)*
