import React from 'react';
import { Link } from 'react-router-dom';
import SpacePlanet from '../components/SpacePlanet';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Section Hero avec planète spatiale */}
      <section className="hero-section">
        <SpacePlanet />
      </section>

      {/* Section À propos */}
      <section className="about-section">
        <div className="container">
          <div className="card space-card">
            <h2>À propos de moi</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Je suis un étudiant en développement web passionné par les nouvelles technologies. 
                  Ce portfolio présente mon parcours professionnel et les compétences que j'ai développées 
                  lors de mes expériences de stage.
                </p>
                <p>
                  Mon objectif est de devenir un développeur full-stack polyvalent, capable de créer 
                  des applications web modernes et performantes. J'aime particulièrement travailler 
                  avec React, Node.js et les bases de données.
                </p>
              </div>
              <div className="about-image">
                <div className="profile-placeholder">
                <span>Sacha MOREAU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="skills-section">
        <div className="container">
          <h2>Mes Compétences</h2>
          <div className="skills-grid">
            <div className="skill-card space-skill-card">
              <h3>Frontend</h3>
              <ul>
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-card space-skill-card">
              <h3>Backend</h3>
              <ul>
                <li>Python</li>
                <li>FastAPI</li>
                <li>SQLAlchemy</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="skill-card space-skill-card">
              <h3>Outils & Méthodes</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>Méthodes Agiles</li>
                <li>API REST</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expériences */}
      <section className="experience-section">
        <div className="container">
          <h2>Mon Parcours</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content space-timeline">
                <h3>Stage Développeur Web</h3>
                <p className="timeline-date">2025 - 10 semaines</p>
                <p>
                  Développement d'applications web modernes avec React et FastAPI. 
                  Gestion de projets en équipe et mise en place de bonnes pratiques de développement.
                </p>
                <Link to="/entreprise" className="btn btn-small space-btn">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content space-timeline">
                <h3>Formation Développement Web</h3>
                <p className="timeline-date">2025</p>
                <p>
                  Formation intensive en développement web full-stack, 
                  couvrant les technologies modernes et les méthodologies de développement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Articles récents */}
      <section className="recent-articles">
        <div className="container">
          <h2>Articles Récents</h2>
          <div className="articles-grid">
            <div className="article-card space-article-card">
              <h3>Intégration en entreprise</h3>
              <p>Découvrez comment j'ai pris mes marques dans mon nouvel environnement de travail...</p>
              <Link to="/articles/integration" className="read-more">
                Lire la suite →
              </Link>
            </div>
            <div className="article-card space-article-card">
              <h3>Missions techniques</h3>
              <p>Un aperçu des projets techniques sur lesquels j'ai travaillé pendant mon stage...</p>
              <Link to="/articles/missions" className="read-more">
                Lire la suite →
              </Link>
            </div>
            <div className="article-card space-article-card">
              <h3>Bilan du stage</h3>
              <p>Mon analyse réflexive de cette expérience professionnelle enrichissante...</p>
              <Link to="/articles/bilan-stage" className="read-more">
                Lire la suite →
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Link to="/articles" className="btn btn-primary space-btn">
              Voir tous les articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 