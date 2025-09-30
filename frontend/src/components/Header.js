import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Déterminer la classe du header selon la page
  const getHeaderClass = () => {
    const path = location.pathname;
    if (path === '/contact') {
      return 'header black-bg'; // Contact a un fond noir
    } else if (path === '/entreprise' || path.startsWith('/articles')) {
      return 'header white-bg'; // Entreprise et Articles ont un fond blanc
    }
    return 'header'; // Page d'accueil (SpacePlanet) - style par défaut
  };

  return (
    <header className={getHeaderClass()}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Portfolio Stage</h1>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/entreprise" 
                  className={`nav-link ${isActive('/entreprise') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entreprise
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/articles" 
                  className={`nav-link ${isActive('/articles') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <button 
            className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 