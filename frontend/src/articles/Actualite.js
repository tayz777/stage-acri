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
              <span className="article-date">05 juillet 2025</span>
              <span className="read-time">4 min</span>
            </div>
            <h1>Actualité technique et veille</h1>
            <p className="article-subtitle">
              Découverte des technologies et outils utilisés chez ACRI-ST et veille technologique du secteur spatial
            </p>
          </header>

          <div className="article-body">
            <section>
              <h2>Technologies découvertes chez ACRI-ST</h2>
              <p>
                Mon stage chez ACRI-ST m'a permis de découvrir un écosystème technologique 
                riche et spécialisé, adapté aux besoins du traitement de données satellites 
                et de l'observation de la Terre. Cette immersion technique a considérablement 
                élargi mes horizons professionnels.
              </p>
            </section>

            <section>
              <h2>Outils de développement et collaboration</h2>
              <h3>Git et versionning avancé</h3>
              <p>
                Au-delà des bases de Git que je connaissais, j'ai découvert les workflows 
                professionnels : GitFlow, branches de fonctionnalités, pull requests avec 
                revue de code. Cette approche collaborative est essentielle pour maintenir 
                la qualité du code dans des projets complexes comme EarthView.
              </p>
              
              <h3>RabbitMQ et systèmes de messagerie</h3>
              <p>
                La découverte de RabbitMQ a été particulièrement enrichissante. Ce système 
                de messagerie asynchrone est crucial chez ACRI-ST pour gérer les flux massifs 
                de données satellites. J'ai appris les concepts de queues, d'échanges, et 
                de routage des messages.
              </p>
              
              <h3>Outils de monitoring et débogage</h3>
              <p>
                J'ai été initié aux outils de monitoring des applications (logs, métriques, 
                alertes) et aux techniques de débogage avancées, essentiels pour maintenir 
                des systèmes traitant des données critiques d'observation terrestre.
              </p>
            </section>

            <section>
              <h2>Technologies du secteur spatial</h2>
              <h3>Traitement d'images satellites</h3>
              <p>
                Découverte des bibliothèques Python spécialisées dans le traitement d'images 
                satellites : GDAL, Rasterio, et les outils de géospatial. Ces technologies 
                permettent d'analyser les données collectées par les satellites d'observation 
                de la Terre.
              </p>
              
              <h3>Formats de données géospatiales</h3>
              <p>
                Apprentissage des formats standards du domaine spatial : GeoTIFF, NetCDF, 
                HDF5. Ces formats sont optimisés pour stocker et traiter efficacement les 
                volumes massifs de données collectées par les satellites.
              </p>
              
              <h3>APIs et services géospatiaux</h3>
              <p>
                Exploration des APIs de services géospatiaux comme Copernicus, Sentinel Hub, 
                et les standards OGC (Open Geospatial Consortium). Ces services permettent 
                d'accéder aux données satellites de manière standardisée.
              </p>
            </section>

            <section>
              <h2>Intelligence artificielle et machine learning</h2>
              <h3>IA appliquée à l'observation terrestre</h3>
              <p>
                J'ai découvert comment l'intelligence artificielle est utilisée chez ACRI-ST 
                pour analyser les images satellites : détection d'objets, classification 
                d'usage des sols, suivi des changements environnementaux. Cette application 
                concrète de l'IA m'a passionné.
              </p>
              
              <h3>Frameworks et bibliothèques</h3>
              <p>
                Initiation aux outils de machine learning utilisés dans le spatial : 
                TensorFlow, PyTorch, scikit-learn, et les bibliothèques spécialisées 
                pour l'analyse d'images géospatiales comme EO-learn.
              </p>
            </section>

            <section>
              <h2>Veille technologique réalisée</h2>
              <h3>Évolutions du secteur spatial</h3>
              <p>
                J'ai suivi l'actualité du secteur spatial européen, notamment les missions 
                Copernicus, les évolutions des satellites Sentinel, et les nouveaux services 
                d'observation de la Terre. Cette veille était essentielle pour comprendre 
                les enjeux d'ACRI-ST.
              </p>
              
              <h3>Tendances technologiques</h3>
              <p>
                Suivi des évolutions des technologies web modernes : nouvelles versions 
                de React, Node.js, et des bases de données. Cette veille technique m'a 
                permis de proposer des améliorations pour le projet EarthView.
              </p>
              
              <h3>Sécurité et bonnes pratiques</h3>
              <p>
                Veille sur les meilleures pratiques de sécurité web, particulièrement 
                importantes pour des applications gérant des données sensibles d'observation 
                terrestre. J'ai étudié les dernières recommandations OWASP et les techniques 
                de sécurisation d'APIs.
              </p>
            </section>

            <section>
              <h2>Outils et méthodologies découverts</h2>
              <h3>Conteneurisation avec Docker</h3>
              <p>
                Initiation à Docker pour la conteneurisation des applications. Cette 
                technologie facilite le déploiement et la scalabilité des applications 
                de traitement de données satellites dans différents environnements.
              </p>
              
              <h3>Orchestration et déploiement</h3>
              <p>
                Découverte des concepts d'orchestration (Kubernetes) et des pipelines 
                de déploiement automatisé. Ces outils sont essentiels pour gérer des 
                applications complexes comme celles développées chez ACRI-ST.
              </p>
              
              <h3>Tests et qualité logicielle</h3>
              <p>
                Apprentissage des méthodologies de test : tests unitaires, tests d'intégration, 
                et tests end-to-end. La qualité logicielle est cruciale pour des applications 
                traitant des données scientifiques critiques.
              </p>
            </section>

            <section>
              <h2>Impact sur mon développement professionnel</h2>
              <h3>Élargissement des perspectives</h3>
              <p>
                Cette découverte de l'écosystème technologique spatial a considérablement 
                élargi mes perspectives professionnelles. Je comprends maintenant comment 
                la technologie peut servir la recherche scientifique et les enjeux 
                environnementaux.
              </p>
              
              <h3>Spécialisation technique</h3>
              <p>
                L'expérience chez ACRI-ST m'a donné une spécialisation unique dans le 
                développement d'applications de traitement de données géospatiales, 
                un secteur en forte croissance avec de nombreuses opportunités.
              </p>
              
              <h3>Méthodologie de veille</h3>
              <p>
                J'ai développé une méthodologie efficace de veille technologique, 
                essentielle dans un domaine en constante évolution. Cette compétence 
                me permettra de rester à jour tout au long de ma carrière.
              </p>
            </section>

            <section>
              <h2>Conclusion</h2>
              <p>
                Cette immersion dans l'écosystème technologique d'ACRI-ST a été 
                extrêmement enrichissante. La découverte des technologies spécialisées 
                du secteur spatial, combinée à l'apprentissage des outils modernes de 
                développement, m'a donné une base solide pour ma carrière professionnelle.
              </p>
              <p>
                La veille technologique réalisée pendant ce stage continuera à m'accompagner, 
                me permettant de rester informé des évolutions du secteur spatial et des 
                technologies de développement web. Cette expérience unique chez ACRI-ST 
                a façonné ma vision du développement logiciel au service de la science.
              </p>
            </section>
          </div>

          <footer className="article-footer">
            <div className="article-navigation">
              <Link to="/articles/competences" className="btn btn-secondary">
                ← Article précédent : Compétences
              </Link>
              <Link to="/articles/bilan-stage" className="btn btn-primary">
                Article suivant : Bilan →
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Actualite;