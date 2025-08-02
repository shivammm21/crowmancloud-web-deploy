import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = ({ onNavigate, currentPage = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => setMobileMenuOpen((open) => !open);
  const handleMenuClose = () => setMobileMenuOpen(false);

  const navigateToPage = (page) => {
    onNavigate(page);
    handleMenuClose();
  };

  return (
    <header className="landing-header">
      <div className="header-content">
        <div className="header-logo" onClick={() => navigateToPage('home')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="CrowmanCloud Logo" />
          <span className="logo-text"><b>Crowman</b><span className="inspector-light">Cloud</span></span>
        </div>
        <nav className="header-nav">
          <div className="nav-group">
            <span className="nav-title">Product</span>
            <div className="nav-dropdown">
              <a href="#" onClick={() => navigateToPage('home')}>Features</a>
              <a href="#" onClick={() => navigateToPage('pricing')}>Pricing</a>
              <a href="#" onClick={() => navigateToPage('documentation')}>Documentation</a>
              <a href="#">API Reference</a>
            </div>
          </div>
          <div className="nav-group">
            <span className="nav-title">Company</span>
            <div className="nav-dropdown">
              <a href="#" onClick={() => navigateToPage('about')}>About</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#" onClick={() => navigateToPage('contact')}>Contact</a>
            </div>
          </div>
          <div className="nav-group">
            <span className="nav-title">Resources</span>
            <div className="nav-dropdown">
              <a href="#" onClick={() => navigateToPage('help')}>Help Center</a>
              <a href="#">Community</a>
              <a href="#">Tutorials</a>
              <a href="#">Status</a>
            </div>
          </div>
          <div className="nav-group">
            <span className="nav-title">Legal</span>
            <div className="nav-dropdown">
              <a href="#" onClick={() => navigateToPage('privacy')}>Privacy Policy</a>
              <a href="#" onClick={() => navigateToPage('terms')}>Terms of Service</a>
              <a href="#" onClick={() => navigateToPage('security')}>Security</a>
              <a href="#">Compliance</a>
            </div>
          </div>
        </nav>
        <div className="header-actions">
          <button className="mobile-menu-toggle" onClick={handleMenuToggle} aria-label="Open mobile menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="#" className="btn btn-outline btn-small">Sign In</a>
          <button onClick={() => navigateToPage('download')} className="btn btn-primary btn-small">Download</button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={handleMenuClose}>
          <div className="mobile-menu" onClick={e => e.stopPropagation()}>
            <button className="mobile-menu-close" onClick={handleMenuClose} aria-label="Close mobile menu">&times;</button>
            <nav className="mobile-nav-links">
              <a href="#" onClick={() => navigateToPage('home')}>Features</a>
              <a href="#" onClick={() => navigateToPage('pricing')}>Pricing</a>
              <a href="#" onClick={() => navigateToPage('documentation')}>Documentation</a>
              <a href="#" onClick={handleMenuClose}>API Reference</a>
              <a href="#" onClick={() => navigateToPage('about')}>About</a>
              <a href="#" onClick={handleMenuClose}>Careers</a>
              <a href="#" onClick={handleMenuClose}>Blog</a>
              <a href="#" onClick={() => navigateToPage('contact')}>Contact</a>
              <a href="#" onClick={() => navigateToPage('help')}>Help Center</a>
              <a href="#" onClick={handleMenuClose}>Community</a>
              <a href="#" onClick={handleMenuClose}>Tutorials</a>
              <a href="#" onClick={handleMenuClose}>Status</a>
              <a href="#" onClick={() => navigateToPage('privacy')}>Privacy Policy</a>
              <a href="#" onClick={() => navigateToPage('terms')}>Terms of Service</a>
              <a href="#" onClick={() => navigateToPage('security')}>Security</a>
              <a href="#" onClick={handleMenuClose}>Compliance</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;