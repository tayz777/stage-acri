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
              <span className="article-date">28 juin 2025</span>
              <span className="read-time">6 min</span>
            </div>
            <h1>Compétences acquises</h1>
            <p className="article-subtitle">
              Travail en équipe, bonnes pratiques et finalisation du projet EarthView chez ACRI-ST
            </p>
          </header>

          <div className="article-body">
            <section>
              <h2>Semaine 8 : Travail en équipe et bonnes pratiques</h2>
              <p>
                La huitième semaine chez ACRI-ST a été consacrée à l'apprentissage des 
                méthodologies de travail collaboratif et à l'intégration dans les processus 
                de développement de l'équipe. Cette étape était cruciale pour finaliser 
                le projet EarthView dans de bonnes conditions.
              </p>
              
              <h3>Workflow Git en équipe</h3>
              <p>
                J'ai découvert les pratiques Git avancées utilisées chez ACRI-ST : création 
                de branches par fonctionnalité, pull requests avec revue de code, et gestion 
                des conflits de merge. Cette approche collaborative était essentielle pour 
                maintenir la qualité du code sur le projet EarthView.
              </p>
              
              <h3>Revue de code et pair programming</h3>
              <p>
                Participer aux sessions de revue de code m'a permis d'apprendre les bonnes 
                pratiques de développement et d'améliorer la qualité de mon code. Le pair 
                programming avec les développeurs seniors d'ACRI-ST a accéléré mon apprentissage 
                et m'a fait découvrir de nouvelles approches techniques.
              </p>
              
              <h3>Intégration continue (CI)</h3>
              <p>
                J'ai été initié aux concepts de CI avec la mise en place de tests automatisés 
                et de linting pour le projet EarthView. Cette approche garantissait la stabilité 
                du système de gestion des commandes de traitement de données satellites.
              </p>
            </section>

            <section>
              <h2>Semaine 9 : Finalisation du projet EarthView</h2>
              <p>
                La neuvième semaine a été dédiée à la finalisation du projet EarthView, 
                avec un focus sur la correction des bugs, l'optimisation UX/UI, et la 
                préparation de la documentation technique.
              </p>
              
              <h3>Correction de bugs et optimisations</h3>
              <p>
                J'ai identifié et corrigé plusieurs bugs dans l'application, notamment 
                dans la gestion des paramètres variables des commandes et la validation 
                des données. L'optimisation des performances de l'API était également 
                prioritaire pour gérer efficacement les volumes de données satellites.
              </p>
              
              <h3>Amélioration UX/UI</h3>
              <p>
                L'interface utilisateur d'EarthView a été peaufinée pour offrir une 
                expérience optimale : responsive design, accessibilité, et ergonomie 
                adaptée aux besoins des utilisateurs gérant des commandes de traitement 
                de données spatiales.
              </p>
              
              <h3>Déploiement du prototype</h3>
              <p>
                J'ai participé au déploiement d'un prototype fonctionnel d'EarthView, 
                permettant à l'équipe ACRI-ST de tester l'application dans un environnement 
                proche de la production. Cette étape validait l'architecture et les 
                fonctionnalités développées.
              </p>
            </section>

            <section>
              <h2>Compétences techniques acquises</h2>
              <h3>Développement Full-Stack</h3>
              <p>
                Maîtrise complète de la stack JavaScript moderne : React pour le frontend, 
                Node.js/Express pour le backend, PostgreSQL pour la base de données. 
                Cette polyvalence me permet de développer des applications web complètes.
              </p>
              
              <h3>Gestion de projet</h3>
              <p>
                Compréhension des méthodologies agiles, utilisation d'outils de gestion 
                de projet, et capacité à estimer et planifier le développement de 
                fonctionnalités complexes comme celles d'EarthView.
              </p>
              
              <h3>Sécurité et bonnes pratiques</h3>
              <p>
                Maîtrise des concepts de sécurité web (authentification JWT, validation 
                des données, protection contre les attaques courantes) et application 
                des bonnes pratiques de développement.
              </p>
            </section>

            <section>
              <h2>Compétences transversales développées</h2>
              <h3>Collaboration et communication</h3>
              <p>
                Capacité à travailler efficacement en équipe, communiquer sur des sujets 
                techniques complexes, et s'intégrer dans les processus existants d'une 
                entreprise spécialisée dans le spatial.
              </p>
              
              <h3>Adaptabilité et apprentissage</h3>
              <p>
                Développement d'une méthodologie d'apprentissage efficace pour maîtriser 
                rapidement de nouvelles technologies et s'adapter aux spécificités du 
                domaine spatial et du traitement de données satellites.
              </p>
              
              <h3>Résolution de problèmes</h3>
              <p>
                Capacité à analyser des problèmes complexes, identifier les causes racines, 
                et proposer des solutions techniques adaptées aux contraintes du projet 
                EarthView et aux besoins d'ACRI-ST.
              </p>
            </section>

            <section>
              <h2>Documentation technique réalisée</h2>
              <p>
                J'ai rédigé une documentation complète pour le projet EarthView :
              </p>
              <ul>
                <li><strong>Documentation API</strong> - Endpoints, paramètres, exemples d'utilisation</li>
                <li><strong>Guide d'installation</strong> - Procédures de déploiement et configuration</li>
                <li><strong>Architecture technique</strong> - Schémas de base de données, diagrammes</li>
                <li><strong>Guide utilisateur</strong> - Interfaces d'administration et de test</li>
                <li><strong>Spécifications fonctionnelles</strong> - Gestion des commandes et métadonnées</li>
              </ul>
            </section>

            <section>
              <h2>Bilan des compétences acquises</h2>
              <p>
                Ces deux semaines intensives m'ont permis de consolider mes acquis techniques 
                et de développer des compétences professionnelles essentielles. Le projet 
                EarthView, avec sa complexité et ses enjeux réels, a été un excellent terrain 
                d'apprentissage.
              </p>
              
              <h3>Niveau technique atteint</h3>
              <p>
                Je maîtrise désormais le développement full-stack moderne et peux contribuer 
                efficacement à des projets d'envergure dans le domaine spatial. La spécificité 
                du traitement de données satellites m'a ouvert de nouvelles perspectives 
                professionnelles.
              </p>
              
              <h3>Préparation à l'insertion professionnelle</h3>
              <p>
                Cette expérience chez ACRI-ST m'a donné les clés pour réussir mon insertion 
                dans le monde professionnel du développement web, avec une spécialisation 
                dans les applications de traitement de données scientifiques.
              </p>
            </section>

            <section>
              <h2>Conclusion</h2>
              <p>
                Ces semaines de finalisation ont marqué l'aboutissement de mon parcours 
                d'apprentissage chez ACRI-ST. Le projet EarthView, désormais fonctionnel 
                et documenté, témoigne des compétences acquises et de ma capacité à mener 
                un projet technique complexe de bout en bout.
              </p>
              <p>
                L'expérience du travail en équipe et l'application des bonnes pratiques 
                de développement m'ont préparé aux défis du monde professionnel dans le 
                secteur technologique et spatial.
              </p>
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