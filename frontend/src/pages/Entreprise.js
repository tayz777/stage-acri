import React from 'react';
import './Entreprise.css';

const Entreprise = () => {
  return (
    <div className="entreprise">
      {/* Hero Section avec image */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-image">
            <img src="https://cdn.grassemat.info/staticfiles/content/img/295531f1d66e4e7b9e0fd78fb835afdb.jpeg" alt="Earth from Space" />
          </div>
          <div className="hero-text">
            <div className="hero-intro">
              <span className="year">EST. 1989</span>
              <h1>ACRI-ST</h1>
              <h2>OBSERVATION DE LA TERRE PAR SATELLITE</h2>
              <div className="separator"></div>
              <p>Expertise en océanographie spatiale, Big Data et intelligence artificielle pour l'innovation technologique du secteur spatial.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">34</div>
            <div className="stat-label">ANNÉES D'EXPERTISE</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">90</div>
            <div className="stat-label">EMPLOYÉS</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">PROJETS SPATIAUX</div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section - Style Zara */}
      <div className="gallery-section">
        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src="https://media.licdn.com/dms/image/v2/D4E22AQF5emTdV1CuNA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728047428316?e=1761782400&v=beta&t=_xAeEcioiwqOeKlUmG2kR16TlWmJEhAqRuy_MK_LW4o" alt="Satellite Technology" />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>OBSERVATION DE LA TERRE</h3>
                <p>Solutions innovantes pour l'océanographie spatiale</p>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://media.licdn.com/dms/image/v2/D4E22AQFLHN7zq2wGvA/feedshare-shrink_2048_1536/B4EZZr9k_rHYAo-/0/1745568029555?e=1761782400&v=beta&t=Uf2Vj0cpTg8gUs_fbAQluVrA9ularcFo_1QwlwKX1E8" alt="Data Analysis" />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>BIG DATA</h3>
                <p>Analyse intelligente des données satellites</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Text Section - Style Zara */}
      <div className="scrolling-section">
        <div className="scrolling-text">
          <span>OBSERVATION DE LA TERRE • OCÉANOGRAPHIE SPATIALE • ANALYSE DE DONNÉES SATELLITES • RECHERCHE ENVIRONNEMENTALE • SOLUTIONS LOGICIELLES • INNOVATION SCIENTIFIQUE</span>
        </div>
      </div>

      {/* Split Content Section */}
      <div className="split-content-section">
        <div className="split-left">
          <img src="https://media.licdn.com/dms/image/v2/D4E22AQFTBzMo8iQfdA/feedshare-shrink_800/B4EZRMCPSSHAAk-/0/1736442445275?e=1761782400&v=beta&t=GaCQeB9laUw7dr-AxKG5wF9GdHAuPwyM16v8j39KHFs" alt="Earth Technology" />
        </div>
        <div className="split-right">
          <div className="content-wrapper">
            <h2>EXPERTISE</h2>
            <div className="expertise-list">
              <div className="expertise-item">
                <h3>01</h3>
                <div className="expertise-content">
                  <h4>OBSERVATION DE LA TERRE</h4>
                  <p>Développement de solutions innovantes pour l'observation de la Terre et l'océanographie spatiale. Notre expertise couvre l'analyse de données satellites et l'intelligence artificielle.</p>
                </div>
              </div>
              <div className="expertise-item">
                <h3>02</h3>
                <div className="expertise-content">
                  <h4>INNOVATION TECHNOLOGIQUE</h4>
                  <p>Pionnier depuis 1989, nous restons à la pointe de l'innovation avec des technologies de Big Data, d'IA et de sciences participatives.</p>
                </div>
              </div>
              <div className="expertise-item">
                <h3>03</h3>
                <div className="expertise-content">
                  <h4>COLLABORATION INTERNATIONALE</h4>
                  <p>Notre approche collaborative unit ingénieurs, chercheurs et partenaires internationaux pour repousser les limites du possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="location-section">
        <div className="container">
          <div className="location-content">
            <div className="location-text">
              <h2>SOPHIA ANTIPOLIS</h2>
              <p>Basée au cœur du technopôle de Sophia Antipolis, ACRI-ST bénéficie d'un écosystème d'innovation unique en Europe, favorisant les collaborations avec les leaders technologiques et scientifiques.</p>
              <div className="location-details">
                <span>Sophia Antipolis, France</span>
                <span>•</span>
                <span>Côte d'Azur</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Section */}
      <div className="tech-section">
        <div className="container">
          <div className="section-header">
            <h2>TECHNOLOGIES</h2>
          </div>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>FRONTEND</h3>
              <div className="tech-items">
                <span>React.js</span>
                <span>TypeScript</span>
                <span>Three.js</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>BACKEND</h3>
              <div className="tech-items">
                <span>Python</span>
                <span>FastAPI</span>
                <span>PostgreSQL</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>DEVOPS</h3>
              <div className="tech-items">
                <span>Docker</span>
                <span>Git</span>
                <span>Tilt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Section */}
      <div className="internship-section">
        <div className="container">
          <div className="internship-content">
            <div className="internship-header">
              <h2>STAGE DE DÉVELOPPEMENT</h2>
              <div className="duration">10 SEMAINES • JUIN - SEPTEMBRE 2025</div>
            </div>
            <div className="internship-details">
              <div className="detail-item">
                <h3>MISSIONS</h3>
                <p>Développement d'applications web modernes, maintenance et amélioration des solutions existantes, collaboration étroite avec les équipes de développement.</p>
              </div>
              <div className="detail-item">
                <h3>ENCADREMENT</h3>
                <p>Supervision par Olivier Daumas et Jean-Michel Riveret, développeurs web expérimentés, garantissant un apprentissage optimal des bonnes pratiques professionnelles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entreprise; 