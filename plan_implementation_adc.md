# Plan d'Implémentation pour Refonte Portfolio Agence Digitale Congo (ADC)

**Objectif :** Transformer le portfolio actuel en une plateforme de services hauts de gamme (Agence) ciblée sur les TPE/PME congolaises.

**Architecture :** 
Nous allons mettre en place un système de routage robuste avec `react-router-dom` comprenant 5 pages principales (Accueil, Services, Réalisations, À Propos, Contact). Un système de design global basé sur le *Glassmorphism* (Bleu Nuit, Or, Vert) sera implémenté via un fichier `theme.css`. Un composant global `FloatingWhatsApp` assurera le contact continu.

**Écosystème Technique :** React 18, React-Router-DOM v6/v7, React-Bootstrap, CSS natif pour le thème.

---

### Tâche 1 : Mise en place du Design System (Thème et Couleurs)

**Fichiers :**
- Créer : `src/styles/theme.css`
- Modifier : `src/index.js` (pour importer le thème global)

- [ ] **Étape 1 : Créer les variables CSS du thème**
```css
/* src/styles/theme.css */
:root {
  --color-primary: #0B132B; /* Bleu Nuit */
  --color-secondary: #D4AF37; /* Or métallique */
  --color-accent: #10B981; /* Vert WhatsApp/Local */
  --color-bg: #F8FAFC;
  --color-text: #1E293B;
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
}
body {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-text);
  margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--color-primary);
}
.btn-gold {
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: bold;
}
```
- [ ] **Étape 2 : Importer le thème et les polices**
Modifier `src/index.js` ou `public/index.html` pour importer les polices Google (`Outfit`, `Inter`). Ajouter `import './styles/theme.css';` dans `index.js`.
- [ ] **Étape 3 : Valider avec Git**
```bash
git add src/styles/theme.css src/index.js public/index.html
git commit -m "feat(design): implement ADC theme tokens and fonts"
```

### Tâche 2 : Création de la Navigation Principale

**Fichiers :**
- Créer : `src/components/Navigation.js`
- Modifier : `src/App.js`

- [ ] **Étape 1 : Créer le composant NavBar**
Utiliser `react-bootstrap` `Navbar` et les composants de `react-router-dom` (`Link`, `NavLink`) pour créer les liens : Accueil, Services, Réalisations, À Propos, Devis.
- [ ] **Étape 2 : Intégrer le composant dans App.js**
Nettoyer le `App.js` actuel et englober l'application avec `BrowserRouter` (si ce n'est pas déjà fait) et ajouter `<Navigation />`.
- [ ] **Étape 3 : Valider l'affichage visuel**
Exécuter `npm start` et vérifier que la barre de navigation est là avec les bonnes couleurs (`bg="dark"` ou personnalisé avec le Bleu Nuit).
- [ ] **Étape 4 : Faire le commit**

### Tâche 3 : Composant Contact WhatsApp Flottant

**Fichiers :**
- Créer : `src/components/FloatingWhatsApp.js`
- Créer : `src/components/FloatingWhatsApp.css`

- [ ] **Étape 1 : Créer le style (fixé en bas à droite)**
```css
/* src/components/FloatingWhatsApp.css */
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--color-accent);
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  z-index: 1000;
  transition: transform 0.3s;
}
.whatsapp-float:hover {
  transform: scale(1.1);
}
```
- [ ] **Étape 2 : Implémenter le composant React**
Un lien `<a href="https://wa.me/xxx" target="_blank" ...>` enveloppant une icône React-Icons `FaWhatsapp`.
- [ ] **Étape 3 : Importer dans App.js**
Placer `<FloatingWhatsApp />` hors du système de routes pour qu'il soit sur toutes les pages.
- [ ] **Étape 4 : Faire le commit**

### Tâche 4 : Conception des Pages du Portfolio (Structure vide)

**Fichiers :**
- Créer : `src/pages/Home.js`
- Créer : `src/pages/Services.js`
- Créer : `src/pages/Portfolio.js`
- Créer : `src/pages/Contact.js`
- Modifier : `src/App.js`

- [ ] **Étape 1 : Créer chaque fichier**
Chaque fichier `Home.js`, `Services.js`, etc. exportera un Simple `function Component() { return <div>Page Name</div> }`.
- [ ] **Étape 2 : Configurer les routes**
Dans `src/App.js`, ajouter le `<Routes>` et associer chaque URL `/`, `/services`, `/portfolio`, `/contact` à son composant.
- [ ] **Étape 3 : Vérifier le routage**
Cliquer sur la barre de navigation pour s'assurer que l'affichage change bien pour chaque route.
- [ ] **Étape 4 : Faire le commit**

### Tâche 5 : La Page d'Accueil "Haute Conversion"

**Fichiers :**
- Modifier : `src/pages/Home.js`

- [ ] **Étape 1 : Créer la section "Hero"**
Titres principaux avec "Partenaire de la Croissance Digitale au Congo". Bouton `Prévoir un appel`.
- [ ] **Étape 2 : Créer la section "Preuve Sociale"**
Texte justifiant l'expertise (Intégration M-Pesa/Mobile Money, Vitesse, SEO Local).
- [ ] **Étape 3 : Créer une pré-visualisation des Services (Cards)**
3 cartes rapides invitant à consulter la page `/services`.
- [ ] **Étape 4 : Faire le commit**

*(Note : Des tâches similaires devront être répétées pour créer le contenu des pages `Services`, `Portfolio`, et `Contact` avec l'intégration Calendly.)*
