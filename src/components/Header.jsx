import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = ({ onNavigate, currentPage = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => setMobileMenuOpen((open) => !open);
  const handleMenuClose = () => setMobileMenuOpen(false);

  const navigateToPage = (page) => {
    onNavigate(page);
    handleMenuClose();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`landing-header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.6)',
        borderRadius: isScrolled ? '50px' : '0px',
        margin: isScrolled ? '1rem 2rem 0 2rem' : '0',
        maxWidth: isScrolled ? 'calc(100% - 4rem)' : '100%',
        top: isScrolled ? '1rem' : '0',
        boxShadow: isScrolled ? '0 10px 40px rgba(0, 0, 0, 0.15)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
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
              
            </div>
          </div>
          <div className="nav-group">
            <span className="nav-title">Company</span>
            <div className="nav-dropdown">
              <a href="#" onClick={() => navigateToPage('about')}>About</a>
              <a href="#" onClick={() => navigateToPage('career')}>Careers</a>
              <a href="#" onClick={() => navigateToPage('blog')}>Blog</a>
              <a href="#" onClick={() => navigateToPage('contact')}>Contact</a>
            </div>
          </div>
          <div className="nav-group">
            <span className="nav-title">Resources</span>
            <div className="nav-dropdown">
              <a href="#" onClick={() => navigateToPage('help')}>Help Center</a>
              
              <a href="#" onClick={() => navigateToPage('tutorial')}>Tutorials</a>
            </div>
          </div>
          <div className="nav-group">
            <span className="nav-title">Legal</span>
            <div className="nav-dropdown">
              <a href="#" onClick={() => navigateToPage('privacy')}>Privacy Policy</a>
              <a href="#" onClick={() => navigateToPage('terms')}>Terms of Service</a>
              <a href="#" onClick={() => navigateToPage('security')}>Security</a>
            </div>
          </div>
        </nav>
        <div className="header-actions">
          <button className="mobile-menu-toggle" onClick={handleMenuToggle} aria-label="Open mobile menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

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
              <a href="#" onClick={() => navigateToPage('career')}>Careers</a>
              <a href="#" onClick={() => navigateToPage('blog')}>Blog</a>
              <a href="#" onClick={() => navigateToPage('contact')}>Contact</a>
              <a href="#" onClick={() => navigateToPage('help')}>Help Center</a>
              
              <a href="#" onClick={() => navigateToPage('tutorial')}>Tutorials</a>
              <a href="#" onClick={() => navigateToPage('privacy')}>Privacy Policy</a>
              <a href="#" onClick={() => navigateToPage('terms')}>Terms of Service</a>
              <a href="#" onClick={() => navigateToPage('security')}>Security</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;