import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const Integration = () => {
  return (
    <div className="article">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/articles">← Retour aux articles</Link>
        </nav>
        
        <article className="article-content">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">Expérience</span>
              <span className="article-date">02 juin 2025</span>
              <span className="read-time">⏱️ 5 min</span>
            </div>
            <h1>Intégration en entreprise</h1>
            <p className="article-subtitle">
              Mes premiers jours dans mon nouvel environnement de travail et les défis de l'intégration
            </p>
          </header>

          <div className="article-body">
            <section>
              <h2>Premier jour chez ACRI-ST</h2>
              <p>
                Mon arrivée chez ACRI-ST le 2 juin 2025 a été marquée par une découverte fascinante : 
                une entreprise spécialisée dans l'observation de la Terre par satellite, fondée en 1989. 
                L'excitation de rejoindre une équipe travaillant sur des technologies spatiales et 
                d'intelligence artificielle était palpable.
              </p>
              <p>
                Dès le premier jour, j'ai été accueilli par l'équipe dans leurs locaux. L'ambiance 
                était professionnelle mais détendue, avec des chercheurs et ingénieurs passionnés 
                par leur domaine. J'ai immédiatement ressenti que j'allais apprendre énormément 
                dans cet environnement scientifique et technique.
              </p>
            </section>

            <section>
              <h2>Découverte du domaine spatial</h2>
              <p>
                ACRI-ST m'a ouvert les portes d'un univers que je ne connaissais pas : l'océanographie 
                spatiale et l'analyse de données satellites. L'entreprise développe des solutions 
                logicielles pour traiter les images satellites et analyser les phénomènes terrestres.
              </p>
              <p>
                J'ai découvert les technologies et outils utilisés par l'équipe :
              </p>
              <ul>
                <li><strong>Python</strong> pour le traitement de données satellites</li>
                <li><strong>Machine Learning</strong> pour l'analyse d'images</li>
                <li><strong>Big Data</strong> pour gérer les volumes massifs de données spatiales</li>
                <li><strong>Technologies web</strong> pour les interfaces de visualisation</li>
              </ul>
            </section>

            <section>
              <h2>Première semaine : immersion technique</h2>
              <p>
                Ma première semaine chez ACRI-ST a été intense et variée, me permettant de 
                découvrir plusieurs technologies utilisées dans l'entreprise. Cette diversité 
                m'a donné un aperçu complet de l'écosystème technique.
              </p>
              
              <h3>Développement web : HTML, CSS, JavaScript</h3>
              <p>
                J'ai commencé par créer des pages HTML avec du CSS pour le styling et du 
                JavaScript pour les animations. Cette approche front-end m'a permis de 
                comprendre comment ACRI-ST présente ses données et résultats de recherche 
                de manière interactive et visuelle.
              </p>
              
              <h3>Découverte de Python</h3>
              <p>
                Python étant le langage principal pour le traitement de données satellites 
                chez ACRI-ST, j'ai pu m'initier à son utilisation dans un contexte 
                professionnel. Cette expérience m'a ouvert les portes du traitement de 
                données scientifiques et de l'analyse d'images satellites.
              </p>
              
              <h3>Introduction à RabbitMQ</h3>
              <p>
                La découverte de RabbitMQ a été particulièrement enrichissante. Ce système 
                de messagerie est crucial pour gérer les flux de données massifs provenant 
                des satellites. J'ai appris les bases de la communication asynchrone et 
                de la gestion des queues de messages.
              </p>
              
              <h3>Polyvalence technique</h3>
              <p>
                Cette première semaine m'a montré la richesse technique d'ACRI-ST : du 
                développement web pour les interfaces utilisateur au traitement de données 
                avec Python, en passant par la gestion de flux avec RabbitMQ. Cette 
                diversité correspond parfaitement à ma volonté de devenir développeur full-stack.
              </p>
            </section>

            <section>
              <h2>Apprentissage du domaine spatial</h2>
              <p>
                L'intégration chez ACRI-ST ne se limitait pas aux aspects techniques, 
                mais impliquait aussi une compréhension du domaine spatial :
              </p>
              
              <h3>Observation de la Terre par satellite</h3>
              <p>
                J'ai découvert comment les satellites collectent des données sur les océans, 
                l'atmosphère et les surfaces terrestres. Cette approche scientifique m'a 
                ouvert de nouveaux horizons sur l'utilisation de la technologie au service 
                de la recherche environnementale.
              </p>
              
              <h3>Intelligence artificielle appliquée</h3>
              <p>
                ACRI-ST utilise des algorithmes d'IA pour analyser les images satellites. 
                J'ai pu observer comment le machine learning peut être appliqué à des 
                problématiques concrètes de recherche scientifique.
              </p>
              
              <h3>Enjeux environnementaux</h3>
              <p>
                Travailler chez ACRI-ST m'a sensibilisé aux enjeux environnementaux actuels 
                et au rôle crucial que joue l'observation spatiale dans la compréhension 
                des changements climatiques.
              </p>
            </section>

            <section>
              <h2>Premiers acquis</h2>
              <p>
                Après ces premières semaines d'intégration, j'ai pu constater plusieurs acquis :
              </p>
              <ul>
                <li>Maîtrise des bases du développement web (HTML, CSS, JavaScript)</li>
                <li>Initiation à Python dans un contexte professionnel</li>
                <li>Découverte de RabbitMQ et des systèmes de messagerie</li>
                <li>Compréhension des enjeux du secteur spatial</li>
                <li>Intégration réussie dans une équipe pluridisciplinaire</li>
                <li>Vision globale de l'écosystème technique d'ACRI-ST</li>
              </ul>
            </section>

            <section>
              <h2>Réflexions sur cette intégration</h2>
              <p>
                Cette période d'intégration chez ACRI-ST m'a apporté plusieurs enseignements :
              </p>
              <ul>
                <li><strong>L'ouverture d'esprit</strong> : Découvrir un domaine inconnu enrichit 
                considérablement la perspective professionnelle</li>
                <li><strong>L'importance du contexte</strong> : Comprendre les enjeux métier 
                donne du sens aux tâches techniques</li>
                <li><strong>La curiosité scientifique</strong> : L'environnement de recherche 
                stimule l'apprentissage et l'innovation</li>
                <li><strong>La polyvalence</strong> : Savoir s'adapter à différents domaines 
                est un atout majeur</li>
              </ul>
            </section>

            <section>
              <h2>Conclusion</h2>
              <p>
                Mon intégration chez ACRI-ST a été une découverte fascinante du secteur spatial 
                et de l'observation de la Terre. Cette expérience m'a permis de comprendre 
                comment la technologie peut servir la recherche scientifique et les enjeux 
                environnementaux actuels.
              </p>
              <p>
                La création de ma première page HTML, bien qu'apparemment simple, a marqué 
                le début d'une aventure professionnelle dans un domaine que je ne connaissais 
                pas. Cette intégration réussie a posé les bases solides pour la suite de mon 
                stage chez ACRI-ST.
              </p>
            </section>
          </div>

          <footer className="article-footer">
            <div className="article-navigation">
              <Link to="/articles" className="btn btn-secondary">
                ← Retour aux articles
              </Link>
              <Link to="/articles/difficultes" className="btn btn-primary">
                Article suivant : Difficultés rencontrées →
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Integration; 