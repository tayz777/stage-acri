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
              <span className="article-date">10 juin 2025</span>
              <span className="read-time">7 min</span>
            </div>
            <h1>Difficultés rencontrées et solutions</h1>
            <p className="article-subtitle">
              Les défis techniques rencontrés lors du passage à React et l'intégration d'APIs chez ACRI-ST
            </p>
          </header>

          <div className="article-body">
            <section>
              <h2>Semaine 3 : Le défi React</h2>
              <p>
                Après avoir maîtrisé les bases HTML/CSS/JavaScript, la troisième semaine chez 
                ACRI-ST a marqué un tournant avec l'introduction de React. Ce framework moderne 
                représentait un défi technique majeur mais essentiel pour le développement 
                d'applications web modernes.
              </p>
            </section>

            <section>
              <h2>Difficultés avec les concepts React</h2>
              <h3>Composants et Props</h3>
              <p>
                La transition vers une approche par composants a été déroutante au début. 
                Comprendre comment structurer une application en composants réutilisables 
                et gérer le passage de données via les props nécessitait un changement 
                de paradigme complet par rapport au JavaScript vanilla.
              </p>
              
              <h3>Gestion de l'état (State)</h3>
              <p>
                La gestion de l'état des composants avec useState et useEffect a représenté 
                un défi particulier. Comprendre quand et comment utiliser ces hooks, 
                ainsi que gérer les re-rendus, demandait une approche méthodique et 
                beaucoup de pratique.
              </p>
              
              <h3>Démarrage du projet EarthView</h3>
              <p>
                Le projet fil rouge EarthView a commencé cette semaine avec la création 
                de l'interface utilisateur. Concevoir une application de gestion de 
                commandes de traitement de données avec React représentait un défi 
                d'envergure pour un débutant.
              </p>
            </section>

            <section>
              <h2>Semaine 4 : Intégration d'APIs et gestion de données</h2>
              <p>
                La quatrième semaine a introduit un nouveau défi : l'intégration d'APIs REST 
                et la gestion de données externes. Cette étape était cruciale pour le projet 
                EarthView qui devait gérer des commandes de traitement de données satellites.
              </p>
              
              <h3>Compréhension des APIs REST</h3>
              <p>
                Passer de données statiques à des données dynamiques via des APIs a nécessité 
                une compréhension approfondie des concepts REST, des codes de statut HTTP, 
                et des formats de données JSON. La logique asynchrone avec fetch() était 
                particulièrement déroutante au début.
              </p>
              
              <h3>Gestion des erreurs et états de chargement</h3>
              <p>
                Implémenter une gestion robuste des erreurs et des états de chargement 
                dans React s'est révélé plus complexe que prévu. Gérer les cas où l'API 
                ne répond pas, les erreurs réseau, ou les données malformées demandait 
                une approche structurée.
              </p>
            </section>

            <section>
              <h2>Solutions développées</h2>
              <h3>Approche méthodique d'apprentissage</h3>
              <p>
                J'ai mis en place une approche structurée : comprendre la théorie, 
                pratiquer sur des exemples simples, puis appliquer au projet EarthView. 
                Cette méthode m'a permis de progresser efficacement.
              </p>
              
              <h3>Documentation et tests</h3>
              <p>
                J'ai pris l'habitude de documenter chaque API utilisée et de tester 
                systématiquement les appels avec des outils comme Postman avant 
                l'intégration dans React.
              </p>
              
              <h3>Collaboration avec l'équipe ACRI-ST</h3>
              <p>
                Les développeurs seniors d'ACRI-ST ont été d'une aide précieuse pour 
                comprendre les bonnes pratiques et déboguer les problèmes complexes. 
                Cette collaboration a accéléré mon apprentissage.
              </p>
            </section>

            <section>
              <h2>Conclusion</h2>
              <p>
                Ces semaines 3 et 4 ont représenté un tournant dans mon stage chez ACRI-ST. 
                Le passage à React et l'intégration d'APIs m'ont permis de comprendre les 
                enjeux du développement web moderne et de contribuer efficacement au projet 
                EarthView.
              </p>
              <p>
                Les difficultés rencontrées ont renforcé ma capacité d'adaptation et ma 
                méthodologie d'apprentissage, compétences essentielles dans le domaine 
                technologique en constante évolution.
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