import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/common/header/Navbar";
import ProjectList from "./components/home/Projects";
import ContactForm from "./components/home/ContactForm";
import ContactLinks from "./components/home/ContactLinks";
import Bio from "./components/home/Bio";
import Contact from "./components/home/Contact";
import Footer from "./components/common/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div
                  id="home"
                  className="container text-center mt-2"
                  style={{ width: "80vw", alignContent: "center" }}
                >
                  <Bio />
                </div>
                <div id="projects">
                  <h2 className="text-center my-4">Mes Projets</h2>
                  <ProjectList />
                </div>
                <ContactLinks />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
