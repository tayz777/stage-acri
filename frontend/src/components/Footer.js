import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio Stage</h3>
            <p>Présentation de mes compétences et expériences professionnelles acquises lors de mon stage.</p>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">À propos</Link></li>
              <li><Link to="/entreprise">Entreprise</Link></li>
              <li><Link to="/articles">Articles</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer">
                   Email
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
                   LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer">
                   GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Portfolio Stage. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 