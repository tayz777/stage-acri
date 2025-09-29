import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const Actualite = () => {
  return (
    <div className="article">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/articles">← Retour aux articles</Link>
        </nav>
        
        <article className="article-content">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">Veille</span>
              <span className="article-date">5 mai 2024</span>
              <span className="read-time">⏱️ 4 min</span>
            </div>
            <h1>Actualité technique et veille</h1>
            <p className="article-subtitle">
              Ma veille technologique et les nouvelles tendances découvertes
            </p>
          </header>

          <div className="article-body">
            <section>
              <h2>Veille technologique</h2>
              <p>Description de la veille technologique effectuée...</p>
            </section>
          </div>

          <footer className="article-footer">
            <div className="article-navigation">
              <Link to="/articles/competences" className="btn btn-secondary">
                ← Article précédent : Compétences
              </Link>
              <Link to="/articles/bilan-stage" className="btn btn-primary">
                Article suivant : Bilan du stage →
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Actualite; 