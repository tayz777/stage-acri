import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const Articles = () => {
  const articles = [
    {
      id: 'integration',
      title: 'Intégration en entreprise',
      excerpt: 'Découvrez comment j\'ai pris mes marques dans mon nouvel environnement de travail et les premiers défis rencontrés.',
      date: '15 janvier 2024',
      category: 'Expérience',
      readTime: '5 min'
    },
    {
      id: 'difficultes',
      title: 'Difficultés rencontrées et solutions',
      excerpt: 'Un aperçu des problèmes techniques et organisationnels que j\'ai dû résoudre pendant mon stage.',
      date: '20 février 2024',
      category: 'Technique',
      readTime: '7 min'
    },
    {
      id: 'missions',
      title: 'Missions techniques réalisées',
      excerpt: 'Détail des projets et tâches techniques sur lesquels j\'ai travaillé pendant mon stage.',
      date: '10 mars 2024',
      category: 'Projets',
      readTime: '8 min'
    },
    {
      id: 'competences',
      title: 'Compétences acquises',
      excerpt: 'Les nouvelles compétences techniques et soft skills que j\'ai développées pendant cette expérience.',
      date: '25 avril 2024',
      category: 'Formation',
      readTime: '6 min'
    },
    {
      id: 'actualite',
      title: 'Actualité technique et veille',
      excerpt: 'Ma veille technologique et les nouvelles tendances que j\'ai découvertes pendant mon stage.',
      date: '5 mai 2024',
      category: 'Veille',
      readTime: '4 min'
    },
    {
      id: 'bilan-stage',
      title: 'Bilan du stage',
      excerpt: 'Mon analyse réflexive de cette expérience professionnelle enrichissante et les leçons apprises.',
      date: '15 juin 2024',
      category: 'Bilan',
      readTime: '10 min'
    }
  ];

  return (
    <div className="articles">
      <div className="container">
        <h1>Mes Articles</h1>
        <p className="articles-intro">
          Découvrez mes réflexions et expériences acquises pendant mon stage. 
          Chaque article présente un aspect différent de mon parcours professionnel.
        </p>
        
        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-header">
                <span className="article-category">{article.category}</span>
                <span className="article-date">{article.date}</span>
              </div>
              
              <h2 className="article-title">{article.title}</h2>
              
              <p className="article-excerpt">{article.excerpt}</p>
              
              <div className="article-footer">
                <span className="read-time">⏱️ {article.readTime}</span>
                <Link to={`/articles/${article.id}`} className="read-more">
                  Lire l'article →
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="articles-summary">
          <h2>Résumé des articles</h2>
          <p>
            Ces articles couvrent l'ensemble de mon expérience de stage, de l'intégration 
            jusqu'au bilan final. Ils respectent les critères d'évaluation demandés et 
            présentent une analyse réflexive de mon parcours professionnel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles; 