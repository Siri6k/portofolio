import React from "react";
import NavigationBar from "./components/Navbar";
import ProjectCarousel from "./components/Projects";
import ContactForm from "./components/ContactForm";
import ContactLinks from "./components/ContactLinks";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div id="home">
        <ProjectCarousel />
      </div>
      <div id="projects">
        <h2 className="text-center my-4">Mes Projets</h2>
        {/* Ajoutez ici vos projets */}
      </div>
      <ContactForm />
      <ContactLinks />
    </div>
  );
}

export default App;
