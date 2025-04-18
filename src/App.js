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
      <div className="App container-fluid d-flex flex-column min-vh-100">
        <div
          className="container-fluid d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <NavigationBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div
                    id="home"
                    className="container text-center mt-5"
                    style={{ alignContent: "center" }}
                  >
                    <Bio />
                  </div>
                  <div
                    id="projects"
                    className="container"
                    style={{ maxWidth: "1200px" }}
                  >
                    <h2 className="text-center my-4">Mes Projets</h2>
                    <ProjectList />
                  </div>
                  <div className="container" style={{ maxWidth: "350px" }}>
                    <ContactLinks />
                  </div>
                  <div className="container-fluid next-footer mt-5">
                    <p className="next-footer"></p>
                  </div>
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
