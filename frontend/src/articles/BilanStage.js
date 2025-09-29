import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const BilanStage = () => {
  return (
    <div className="article">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/articles">← Retour aux articles</Link>
        </nav>
        
        <article className="article-content">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">Bilan</span>
              <span className="article-date">15 juin 2024</span>
              <span className="read-time">⏱️ 10 min</span>
            </div>
            <h1>Bilan du stage</h1>
            <p className="article-subtitle">
              Mon analyse réflexive de cette expérience professionnelle enrichissante
            </p>
          </header>

          <div className="article-body">
            <section>
              <h2>Analyse globale</h2>
              <p>Bilan complet de l'expérience de stage...</p>
            </section>
          </div>

          <footer className="article-footer">
            <div className="article-navigation">
              <Link to="/articles/actualite" className="btn btn-secondary">
                ← Article précédent : Actualité
              </Link>
              <Link to="/articles" className="btn btn-primary">
                Retour aux articles →
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BilanStage; 