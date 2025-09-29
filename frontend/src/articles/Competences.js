import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const Competences = () => {
  return (
    <div className="article">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/articles">← Retour aux articles</Link>
        </nav>
        
        <article className="article-content">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">Formation</span>
              <span className="article-date">25 avril 2024</span>
              <span className="read-time">⏱️ 6 min</span>
            </div>
            <h1>Compétences acquises</h1>
            <p className="article-subtitle">
              Les nouvelles compétences techniques et soft skills développées
            </p>
          </header>

          <div className="article-body">
            <section>
              <h2>Compétences techniques</h2>
              <p>Description des compétences techniques acquises...</p>
            </section>
          </div>

          <footer className="article-footer">
            <div className="article-navigation">
              <Link to="/articles/missions" className="btn btn-secondary">
                ← Article précédent : Missions
              </Link>
              <Link to="/articles/actualite" className="btn btn-primary">
                Article suivant : Actualité →
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Competences; 