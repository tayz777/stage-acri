import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const Missions = () => {
  return (
    <div className="article">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/articles">← Retour aux articles</Link>
        </nav>
        
        <article className="article-content">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">Projets</span>
              <span className="article-date">10 mars 2024</span>
              <span className="read-time">⏱️ 8 min</span>
            </div>
            <h1>Missions techniques réalisées</h1>
            <p className="article-subtitle">
              Détail des projets et tâches techniques sur lesquels j'ai travaillé
            </p>
          </header>

          <div className="article-body">
            <section>
              <h2>Projets principaux</h2>
              <p>Description des missions techniques réalisées pendant le stage...</p>
            </section>
          </div>

          <footer className="article-footer">
            <div className="article-navigation">
              <Link to="/articles/difficultes" className="btn btn-secondary">
                ← Article précédent : Difficultés
              </Link>
              <Link to="/articles/competences" className="btn btn-primary">
                Article suivant : Compétences →
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Missions; 