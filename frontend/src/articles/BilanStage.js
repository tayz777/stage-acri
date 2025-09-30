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
              <span className="article-date">12 juillet 2025</span>
              <span className="read-time">10 min</span>
            </div>
            <h1>Bilan du stage</h1>
            <p className="article-subtitle">
              Soutenance, retour d'expérience et analyse réflexive de mon stage chez ACRI-ST
            </p>
          </header>

          <div className="article-body">
            <section>
              <h2>Semaine 10 : Soutenance et clôture</h2>
              <p>
                La dixième et dernière semaine de mon stage chez ACRI-ST a été consacrée 
                à la présentation du projet EarthView à l'équipe, à l'évaluation de mes 
                compétences acquises, et à un retour d'expérience constructif sur ces 
                10 semaines d'immersion dans le secteur spatial.
              </p>
            </section>

            <section>
              <h2>Présentation du projet EarthView</h2>
              <h3>Démonstration technique</h3>
              <p>
                J'ai présenté l'application EarthView dans son intégralité : interface 
                d'administration pour visualiser toutes les commandes et afficher des 
                statistiques, interface de test permettant aux utilisateurs de créer 
                des commandes et de télécharger les résultats de manière sécurisée.
              </p>
              
              <h3>Architecture et choix techniques</h3>
              <p>
                La présentation a détaillé l'architecture full-stack développée : 
                React pour les interfaces utilisateur, Node.js/Express pour l'API backend, 
                PostgreSQL pour la gestion des données, et l'authentification JWT pour 
                la sécurité. Ces choix techniques ont été validés par l'équipe ACRI-ST.
              </p>
              
              <h3>Fonctionnalités implémentées</h3>
              <p>
                Démonstration des fonctionnalités clés d'EarthView :
              </p>
              <ul>
                <li><strong>Gestion des commandes</strong> - Création, modification, suppression</li>
                <li><strong>Système de rôles</strong> - Utilisateur standard et administrateur</li>
                <li><strong>Validation des paramètres</strong> - Types, contraintes, valeurs possibles</li>
                <li><strong>Métadonnées complexes</strong> - Mission, capteur, bande, priorité</li>
                <li><strong>Téléchargement sécurisé</strong> - Différents moyens (FTP, HTTP, etc.)</li>
                <li><strong>Statistiques</strong> - Commandes par jour, par application</li>
              </ul>
            </section>

            <section>
              <h2>Évaluation des compétences acquises</h2>
              <h3>Compétences techniques</h3>
              <p>
                L'évaluation a confirmé ma maîtrise du développement full-stack moderne :
              </p>
              <ul>
                <li><strong>Frontend</strong> - React, HTML5, CSS3, JavaScript ES6+</li>
                <li><strong>Backend</strong> - Node.js, Express, API REST</li>
                <li><strong>Base de données</strong> - PostgreSQL, modélisation, requêtes</li>
                <li><strong>Sécurité</strong> - JWT, bcrypt, validation des données</li>
                <li><strong>Outils</strong> - Git, RabbitMQ, Docker (initiation)</li>
                <li><strong>Méthodologies</strong> - Agile, tests, documentation</li>
              </ul>
              
              <h3>Compétences sectorielles</h3>
              <p>
                Acquisition d'une expertise unique dans le domaine spatial :
              </p>
              <ul>
                <li>Compréhension des enjeux de l'observation de la Terre</li>
                <li>Connaissance des formats de données géospatiales</li>
                <li>Maîtrise des spécificités du traitement de données satellites</li>
                <li>Sensibilisation aux applications de l'IA dans le spatial</li>
              </ul>
            </section>

            <section>
              <h2>Retour d'expérience : points forts</h2>
              <h3>Progression technique rapide</h3>
              <p>
                Ma capacité d'adaptation et d'apprentissage a été soulignée par l'équipe. 
                En 10 semaines, je suis passé de connaissances théoriques à la réalisation 
                d'un projet complexe et fonctionnel dans un domaine que je ne connaissais pas.
              </p>
              
              <h3>Autonomie et initiative</h3>
              <p>
                J'ai développé une grande autonomie dans la résolution de problèmes techniques 
                et pris des initiatives pour améliorer le projet EarthView. Cette proactivité 
                a été particulièrement appréciée par mes encadrants chez ACRI-ST.
              </p>
              
              <h3>Qualité du travail livré</h3>
              <p>
                Le projet EarthView répond aux spécifications demandées et présente une 
                qualité de code professionnelle. La documentation technique réalisée 
                facilitera la maintenance et les évolutions futures de l'application.
              </p>
              
              <h3>Intégration dans l'équipe</h3>
              <p>
                Mon intégration dans l'équipe ACRI-ST a été réussie. J'ai su m'adapter 
                à la culture d'entreprise, participer activement aux réunions, et 
                collaborer efficacement avec les différents membres de l'équipe.
              </p>
            </section>

            <section>
              <h2>Axes d'amélioration identifiés</h2>
              <h3>Approfondissement des connaissances métier</h3>
              <p>
                Bien que j'aie acquis une bonne compréhension du domaine spatial, 
                un approfondissement des aspects scientifiques et techniques de 
                l'observation de la Terre enrichirait encore ma contribution aux projets.
              </p>
              
              <h3>Optimisation et performance</h3>
              <p>
                Les aspects d'optimisation des performances et de scalabilité des 
                applications pourraient être davantage développés, particulièrement 
                important pour des systèmes traitant de gros volumes de données satellites.
              </p>
              
              <h3>Tests automatisés</h3>
              <p>
                L'implémentation de tests automatisés plus complets (unitaires, intégration, 
                end-to-end) est un axe d'amélioration pour garantir la robustesse des 
                applications développées.
              </p>
            </section>

            <section>
              <h2>Impact sur mon projet professionnel</h2>
              <h3>Confirmation de mon orientation</h3>
              <p>
                Ce stage a confirmé mon intérêt pour le développement full-stack et 
                m'a ouvert de nouvelles perspectives dans le secteur spatial et 
                scientifique. Cette expérience unique chez ACRI-ST a enrichi mon 
                profil professionnel.
              </p>
              
              <h3>Réseau professionnel</h3>
              <p>
                Les relations établies avec l'équipe ACRI-ST constituent un réseau 
                professionnel précieux dans le secteur spatial. Ces contacts pourront 
                m'accompagner dans ma future carrière.
              </p>
              
              <h3>Spécialisation technique</h3>
              <p>
                L'expertise acquise dans le développement d'applications de traitement 
                de données géospatiales me différencie sur le marché de l'emploi et 
                ouvre des opportunités dans un secteur en croissance.
              </p>
            </section>

            <section>
              <h2>Valorisation du travail réalisé</h2>
              <h3>Portfolio technique</h3>
              <p>
                Le projet EarthView constitue une pièce maîtresse de mon portfolio, 
                démontrant ma capacité à mener un projet full-stack complexe de bout 
                en bout. Le code source, hébergé sur GitHub, témoigne de la qualité 
                de mon travail.
              </p>
              
              <h3>Documentation et présentation</h3>
              <p>
                La documentation technique réalisée et cette série d'articles de blog 
                constituent un retour d'expérience détaillé, valorisant les compétences 
                acquises et la réflexion menée pendant ce stage.
              </p>
              
              <h3>Recommandations</h3>
              <p>
                Les retours positifs de l'équipe ACRI-ST et les recommandations obtenues 
                renforcent la crédibilité de mon profil professionnel et faciliteront 
                ma recherche d'emploi ou la poursuite de mes études.
              </p>
            </section>

            <section>
              <h2>Perspectives d'avenir</h2>
              <h3>Poursuite dans le secteur spatial</h3>
              <p>
                Cette expérience chez ACRI-ST m'a donné l'envie de poursuivre dans 
                le secteur spatial, que ce soit dans la recherche, l'industrie, ou 
                les services. Les enjeux environnementaux et scientifiques de ce 
                domaine correspondent à mes valeurs.
              </p>
              
              <h3>Développement full-stack</h3>
              <p>
                Je souhaite continuer à développer mes compétences full-stack, en 
                approfondissant les aspects DevOps, cloud, et intelligence artificielle. 
                Cette polyvalence est un atout majeur dans le monde professionnel actuel.
              </p>
              
              <h3>Formation continue</h3>
              <p>
                Ce stage m'a montré l'importance de la formation continue dans un 
                secteur technologique en constante évolution. Je compte maintenir 
                une veille active et continuer à apprendre de nouvelles technologies.
              </p>
            </section>

            <section>
              <h2>Remerciements</h2>
              <p>
                Je tiens à remercier chaleureusement toute l'équipe ACRI-ST pour son 
                accueil, sa bienveillance, et la qualité de l'encadrement dont j'ai 
                bénéficié. Cette expérience restera marquante dans mon parcours 
                professionnel.
              </p>
              <p>
                Un remerciement particulier à mon tuteur et aux développeurs seniors 
                qui ont pris le temps de partager leurs connaissances et de m'accompagner 
                dans cette découverte du monde professionnel du développement logiciel.
              </p>
            </section>

            <section>
              <h2>Conclusion</h2>
              <p>
                Ce stage de 10 semaines chez ACRI-ST a été une expérience exceptionnelle 
                qui a dépassé mes attentes. La découverte du secteur spatial, l'acquisition 
                de compétences techniques solides, et l'immersion dans une équipe 
                professionnelle ont façonné ma vision du développement logiciel.
              </p>
              <p>
                Le projet EarthView, aboutissement de ce parcours, témoigne du chemin 
                parcouru et des compétences acquises. Cette expérience unique m'a 
                préparé aux défis du monde professionnel et a confirmé ma passion 
                pour le développement full-stack au service de projets à impact.
              </p>
              <p>
                Fort de cette expérience, je suis prêt à relever de nouveaux défis 
                et à contribuer efficacement à des projets innovants dans le secteur 
                technologique et spatial.
              </p>
            </section>
          </div>

          <footer className="article-footer">
            <div className="article-navigation">
              <Link to="/articles/actualite" className="btn btn-secondary">
                ← Article précédent : Actualité
              </Link>
              <Link to="/articles" className="btn btn-primary">
                Retour aux articles
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BilanStage;