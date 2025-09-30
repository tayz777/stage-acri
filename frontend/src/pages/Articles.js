import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const Articles = () => {
  const articles = [
    {
      id: 'integration',
      title: 'Intégration en entreprise',
      excerpt: 'Retour sur mon immersion chez ACRI-ST et sur la façon dont j’ai pris mes marques au sein de l’équipe.',
      date: '02 juin 2025',
      category: 'Expérience',
      readTime: '5 min'
    },
    {
      id: 'difficultes',
      title: 'Difficultés rencontrées et solutions',
      excerpt: 'Les défis techniques rencontrés lors du passage à React et l\'intégration d\'APIs.',
      date: '10 juin 2025',
      category: 'Technique',
      readTime: '7 min'
    },
    {
      id: 'missions',
      title: 'Missions techniques réalisées',
      excerpt: 'Développement backend avec Node.js, Express et PostgreSQL pour le projet EarthView.',
      date: '20 juin 2025',
      category: 'Projets',
      readTime: '8 min'
    },
    {
      id: 'competences',
      title: 'Compétences acquises',
      excerpt: 'Travail en équipe, bonnes pratiques et finalisation du projet EarthView chez ACRI-ST.',
      date: '28 juin 2025',
      category: 'Formation',
      readTime: '6 min'
    },
    {
      id: 'actualite',
      title: 'Actualité technique et veille',
      excerpt: 'Découverte des technologies spatiales et veille technologique du secteur chez ACRI-ST.',
      date: '05 juillet 2025',
      category: 'Veille',
      readTime: '4 min'
    },
    {
      id: 'bilan-stage',
      title: 'Bilan du stage',
      excerpt: 'Soutenance, retour d\'expérience et analyse réflexive de mon stage chez ACRI-ST.',
      date: '12 juillet 2025',
      category: 'Bilan',
      readTime: '10 min'
    }
  ];

  return (
    <div className="articles">
      <div className="container">
        <h1>Mes Articles</h1>
        <p className="articles-intro">
          Découvrez mon parcours de 10 semaines chez ACRI-ST, de l'intégration jusqu'au projet EarthView. 
          Chaque article retrace une étape de cette expérience dans le secteur spatial.
        </p>
        
        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-card-content">
                <div className="article-header">
                  <span className="article-category">{article.category}</span>
                  <span className="article-date">{article.date}</span>
                </div>
                
                <h2 className="article-title">{article.title}</h2>
                
                <p className="article-excerpt">{article.excerpt}</p>
                
                <div className="article-footer">
                  <span className="read-time">{article.readTime}</span>
                  <Link to={`/articles/${article.id}`} className="read-more">
                    Lire l'article
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="articles-stats">
          <div className="stat-item">
            <div className="stat-number">6</div>
            <div className="stat-label">Articles</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">40</div>
            <div className="stat-label">Minutes de lecture</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10</div>
            <div className="stat-label">Semaines de stage</div>
          </div>
        </div>
        
        <div className="articles-summary">
          <h2>Mon parcours chez ACRI-ST</h2>
          <p>
            Ces articles retracent mon évolution technique et professionnelle pendant 
            10 semaines chez ACRI-ST, de la découverte du secteur spatial jusqu'à la 
            réalisation du projet EarthView, une application complète de gestion de 
            commandes de traitement de données satellites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles; 