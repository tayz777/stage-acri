import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ContactSatellite from './pages/ContactSatellite';
import Entreprise from './pages/Entreprise';
import Articles from './pages/Articles';
import Integration from './articles/Integration';
import Difficultes from './articles/Difficultes';
import Missions from './articles/Missions';
import Competences from './articles/Competences';
import Actualite from './articles/Actualite';
import BilanStage from './articles/BilanStage';
import SpacePlanet from './components/SpacePlanet';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SpacePlanet />} />
          <Route path="/contact" element={<ContactSatellite />} />
          <Route path="/entreprise" element={<><Header /><main className="main-content"><Entreprise /></main><Footer /></>} />
          <Route path="/articles" element={<><Header /><main className="main-content"><Articles /></main><Footer /></>} />
          <Route path="/articles/integration" element={<><Header /><main className="main-content"><Integration /></main><Footer /></>} />
          <Route path="/articles/difficultes" element={<><Header /><main className="main-content"><Difficultes /></main><Footer /></>} />
          <Route path="/articles/missions" element={<><Header /><main className="main-content"><Missions /></main><Footer /></>} />
          <Route path="/articles/competences" element={<><Header /><main className="main-content"><Competences /></main><Footer /></>} />
          <Route path="/articles/actualite" element={<><Header /><main className="main-content"><Actualite /></main><Footer /></>} />
          <Route path="/articles/bilan-stage" element={<><Header /><main className="main-content"><BilanStage /></main><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 