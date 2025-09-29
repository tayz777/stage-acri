import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const Difficultes = () => {
  return (
    <div className="article">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/articles">← Retour aux articles</Link>
        </nav>
        
        <article className="article-content">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">Technique</span>
              <span className="article-date">20 février 2024</span>
              <span className="read-time">⏱️ 7 min</span>
            </div>
            <h1>Difficultés rencontrées et solutions</h1>
            <p className="article-subtitle">
              Les défis techniques et organisationnels que j'ai dû surmonter pendant mon stage
            </p>
          </header>

          <div className="article-body">
            <section>
              <h2>Introduction</h2>
              <p>
                Tout au long de mon stage, j'ai été confronté à diverses difficultés qui m'ont 
                permis de grandir professionnellement. Cet article présente les principaux 
                défis rencontrés et les solutions que j'ai mises en place pour les surmonter.
              </p>
            </section>

            <section>
              <h2>Difficultés techniques</h2>
              <h3>1. Maîtrise de nouvelles technologies</h3>
              <p>
                L'entreprise utilisait des technologies que je ne maîtrisais pas encore 
                parfaitement. J'ai dû apprendre rapidement tout en contribuant aux projets.
              </p>
              
              <h3>2. Gestion de la complexité du code</h3>
              <p>
                Le codebase était complexe avec de nombreuses dépendances. Comprendre 
                l'architecture a été un défi majeur.
              </p>
            </section>

            <section>
              <h2>Solutions mises en place</h2>
              <ul>
                <li>Formation continue et veille technologique</li>
                <li>Documentation détaillée de mes apprentissages</li>
                <li>Collaboration étroite avec l'équipe</li>
                <li>Tests et validation rigoureux</li>
              </ul>
            </section>

            <section>
              <h2>Conclusion</h2>
              <p>
                Ces difficultés m'ont permis de développer ma résilience et ma capacité 
                d'adaptation. Chaque défi surmonté a renforcé mes compétences techniques 
                et ma confiance en mes capacités.
              </p>
            </section>
          </div>

          <footer className="article-footer">
            <div className="article-navigation">
              <Link to="/articles/integration" className="btn btn-secondary">
                ← Article précédent : Intégration
              </Link>
              <Link to="/articles/missions" className="btn btn-primary">
                Article suivant : Missions techniques →
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Difficultes; 