import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const Missions = () => {
  return (
    <div className="article">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/articles">← Retour aux articles</Link>
        </nav>
        
        <article className="article-content">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">Projets</span>
              <span className="article-date">20 juin 2025</span>
              <span className="read-time">8 min</span>
            </div>
            <h1>Missions techniques réalisées</h1>
            <p className="article-subtitle">
              Développement backend avec Node.js, Express et PostgreSQL pour le projet EarthView chez ACRI-ST
            </p>
          </header>

          <div className="article-body">
            <section>
              <h2>Semaine 5 : Découverte du développement backend</h2>
              <p>
                La cinquième semaine chez ACRI-ST a marqué une transition majeure vers le 
                développement backend. Après avoir maîtrisé React côté frontend, il était 
                temps de construire l'API qui alimenterait le projet EarthView.
              </p>
              
              <h3>Node.js et Express : premiers pas</h3>
              <p>
                La découverte de Node.js a été fascinante : utiliser JavaScript côté serveur 
                ouvrait de nouvelles perspectives. Express, avec sa simplicité et sa flexibilité, 
                s'est révélé parfait pour créer rapidement des routes d'API REST pour gérer 
                les commandes de traitement de données satellites.
              </p>
              
              <h3>Architecture du serveur EarthView</h3>
              <p>
                J'ai appris à structurer un projet backend professionnel : séparation des 
                routes, middlewares, contrôleurs. Cette architecture était essentielle pour 
                gérer la complexité du système de commandes avec ses multiples paramètres 
                (mission, capteur, bande, etc.).
              </p>
            </section>

            <section>
              <h2>Semaine 6 : Base de données et opérations CRUD</h2>
              <p>
                L'intégration de PostgreSQL a représenté un défi technique majeur. Concevoir 
                une base de données pour stocker les commandes de traitement avec leurs 
                métadonnées complexes demandait une approche méthodique.
              </p>
              
              <h3>Modélisation des données EarthView</h3>
              <p>
                J'ai conçu le schéma de base de données pour gérer les commandes avec leurs 
                propriétés : identifiant, propriétaire, type, groupe, métadonnées, paramètres 
                variables, application d'origine, statut, priorité, et moyens de téléchargement.
              </p>
              
              <h3>Implémentation des routes CRUD</h3>
              <p>
                Développement des endpoints essentiels :
              </p>
              <ul>
                <li><strong>POST /commands</strong> - Créer une nouvelle commande</li>
                <li><strong>GET /commands</strong> - Lister les commandes utilisateur</li>
                <li><strong>GET /admin/commands</strong> - Vue administrateur</li>
                <li><strong>PUT /commands/:id</strong> - Mettre à jour une commande</li>
                <li><strong>DELETE /commands/:id</strong> - Supprimer une commande</li>
              </ul>
            </section>

            <section>
              <h2>Semaine 7 : Authentification et sécurité</h2>
              <p>
                La sécurisation de l'API EarthView était cruciale, notamment pour distinguer 
                les utilisateurs normaux des administrateurs et protéger les données sensibles 
                de traitement satellite.
              </p>
              
              <h3>Système d'authentification JWT</h3>
              <p>
                J'ai implémenté un système d'authentification basé sur JWT (JSON Web Tokens) 
                permettant aux utilisateurs de se connecter et d'accéder à leurs commandes. 
                La gestion des rôles (utilisateur/administrateur) était essentielle pour 
                l'interface d'administration.
              </p>
              
              <h3>Sécurisation des routes</h3>
              <p>
                Mise en place de middlewares de sécurité pour protéger les endpoints sensibles, 
                validation des données d'entrée, et hashage des mots de passe avec bcrypt. 
                La sécurité était particulièrement importante pour un système gérant des 
                données de traitement satellite.
              </p>
              
              <h3>Gestion des sessions utilisateur</h3>
              <p>
                Implémentation de la gestion des sessions pour maintenir l'état de connexion 
                des utilisateurs entre les différentes parties de l'application EarthView 
                (interface utilisateur et interface d'administration).
              </p>
            </section>

            <section>
              <h2>Défis techniques rencontrés</h2>
              <h3>Complexité du modèle de données</h3>
              <p>
                La gestion des paramètres variables selon le type de commande et l'application 
                d'origine a nécessité une approche flexible dans la conception de la base de 
                données. J'ai opté pour un système de métadonnées JSON pour s'adapter aux 
                différents cas d'usage.
              </p>
              
              <h3>Validation des paramètres</h3>
              <p>
                Implémenter la validation des paramètres de commande (types numériques, listes, 
                contraintes min/max) selon les spécifications de chaque application était 
                particulièrement complexe et demandait une logique métier robuste.
              </p>
            </section>

            <section>
              <h2>Résultats obtenus</h2>
              <p>
                À l'issue de ces trois semaines intensives, j'ai livré une API backend 
                complète pour EarthView :
              </p>
              <ul>
                <li>API REST fonctionnelle avec toutes les routes CRUD</li>
                <li>Base de données PostgreSQL optimisée</li>
                <li>Système d'authentification sécurisé</li>
                <li>Gestion des rôles utilisateur/administrateur</li>
                <li>Validation robuste des données</li>
                <li>Documentation technique complète</li>
              </ul>
            </section>

            <section>
              <h2>Conclusion</h2>
              <p>
                Ces semaines de développement backend chez ACRI-ST ont été formatrices. 
                Passer du frontend au backend m'a donné une vision complète du développement 
                web full-stack et m'a permis de comprendre les enjeux de sécurité et de 
                performance dans un contexte professionnel.
              </p>
              <p>
                Le projet EarthView prenait forme avec une architecture solide, prêt à 
                gérer les commandes de traitement de données satellites de manière sécurisée 
                et efficace.
              </p>
            </section>
          </div>

          <footer className="article-footer">
            <div className="article-navigation">
              <Link to="/articles/difficultes" className="btn btn-secondary">
                ← Article précédent : Difficultés
              </Link>
              <Link to="/articles/competences" className="btn btn-primary">
                Article suivant : Compétences →
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Missions;