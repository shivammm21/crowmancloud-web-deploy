import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = ({ onNavigate, currentPage = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const quotes = [
    'Stop guessing. Start deploying with confidence.',
    'Your pre-flight check for the cloud.',
    'From code to cloud-ready, with confidence.',
    'Powerful analysis. 100% local. Your code stays yours.',
    'The secure way to prepare for the cloud.',
    'Analyze your code without ever uploading it.',
    'Go from analysis to deployment-ready in minutes.',
    'Automate your pre-deployment checklist.',
    'Spend less time configuring and more time coding.',
    'Your intelligent guide for the cloud.'
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

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

  // Rotate quotes on mobile
  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % quotes.length);
    }, 3200);
    return () => clearInterval(id);
  }, [quotes.length]);

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
        <div className="header-logo" onClick={() => navigateToPage('/')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="CrowmanCloud Logo" />
          <span className="logo-text"><b>Crowman</b><span className="inspector-light">Cloud</span></span>
        </div>
        {/* Mobile-only rotating quote under brand */}
        <div className="mobile-quote-rotator">
          <span key={quoteIndex} className="quote-text">{quotes[quoteIndex]}</span>
        </div>
        {/* Mobile hamburger placed next to the logo */}
        <button className="mobile-menu-toggle" onClick={handleMenuToggle} aria-label="Open mobile menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="header-nav">
          <div className="nav-group">
            <span className="nav-title">Product</span>
            <div className="nav-dropdown">
              <a href="/pricing" onClick={(e) => { e.preventDefault(); navigateToPage('/pricing'); }}>Pricing</a>
              {/*<a href="/architecture" onClick={(e) => { e.preventDefault(); navigateToPage('/architecture'); }}>Architecture</a> */}
              <a href="/documentation" onClick={(e) => { e.preventDefault(); navigateToPage('/documentation'); }}>Documentation</a>
            </div>
          </div>
          <div className="nav-group">
            <span className="nav-title">Company</span>
            <div className="nav-dropdown">
              <a href="/about" onClick={(e) => { e.preventDefault(); navigateToPage('/about'); }}>About</a>
              <a href="/career" onClick={(e) => { e.preventDefault(); navigateToPage('/career'); }}>Careers</a>
              <a href="/blog" onClick={(e) => { e.preventDefault(); navigateToPage('/blog'); }}>Blog</a>
              <a href="/contact" onClick={(e) => { e.preventDefault(); navigateToPage('/contact'); }}>Contact</a>
            </div>
          </div>
          <div className="nav-group">
            <span className="nav-title">Learn</span>
            <div className="nav-dropdown">
              <a href="/help" onClick={(e) => { e.preventDefault(); navigateToPage('/help'); }}>Help Center</a>
              <a href="/tutorial" onClick={(e) => { e.preventDefault(); navigateToPage('/tutorial'); }}>Tutorials</a>
            </div>
          </div>
          <div className="nav-group">
            <span className="nav-title">Legal</span>
            <div className="nav-dropdown">
              <a href="/privacy" onClick={(e) => { e.preventDefault(); navigateToPage('/privacy'); }}>Privacy Policy</a>
              <a href="/terms" onClick={(e) => { e.preventDefault(); navigateToPage('/terms'); }}>Terms of Service</a>
              <a href="/security" onClick={(e) => { e.preventDefault(); navigateToPage('/security'); }}>Security</a>
            </div>
          </div>
        </nav>
        <div className="header-actions">
          <button onClick={() => navigateToPage('/download')} className="btn btn-primary btn-small nav-download">Download</button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={handleMenuClose}>
          <div className="mobile-menu" onClick={e => e.stopPropagation()}>
            <button className="mobile-menu-close" onClick={handleMenuClose} aria-label="Close mobile menu">&times;</button>
            {/* Download button inside the mobile menu */}
           
            <div className="download-wrap" style={{  }}>
              <button onClick={() => { navigateToPage('/download'); handleMenuClose(); }} className="btn btn-primary btn-small">
                Download
              </button>
            </div>
            <nav className="mobile-nav-links">
              <a href="/pricing" onClick={(e) => { e.preventDefault(); navigateToPage('/pricing'); handleMenuClose(); }}>Pricing</a>
              <a href="/architecture" onClick={(e) => { e.preventDefault(); navigateToPage('/architecture'); handleMenuClose(); }}>Architecture</a>
              <a href="/documentation" onClick={(e) => { e.preventDefault(); navigateToPage('/documentation'); handleMenuClose(); }}>Documentation</a>
              <a href="/about" onClick={(e) => { e.preventDefault(); navigateToPage('/about'); handleMenuClose(); }}>About</a>
              <a href="/career" onClick={(e) => { e.preventDefault(); navigateToPage('/career'); handleMenuClose(); }}>Careers</a>
              <a href="/blog" onClick={(e) => { e.preventDefault(); navigateToPage('/blog'); handleMenuClose(); }}>Blog</a>
              <a href="/contact" onClick={(e) => { e.preventDefault(); navigateToPage('/contact'); handleMenuClose(); }}>Contact</a>
              <a href="/help" onClick={(e) => { e.preventDefault(); navigateToPage('/help'); handleMenuClose(); }}>Help Center</a>

              <a href="/tutorial" onClick={(e) => { e.preventDefault(); navigateToPage('/tutorial'); handleMenuClose(); }}>Tutorials</a>
              <a href="/privacy" onClick={(e) => { e.preventDefault(); navigateToPage('/privacy'); handleMenuClose(); }}>Privacy Policy</a>
              <a href="/terms" onClick={(e) => { e.preventDefault(); navigateToPage('/terms'); handleMenuClose(); }}>Terms of Service</a>
              <a href="/security" onClick={(e) => { e.preventDefault(); navigateToPage('/security'); handleMenuClose(); }}>Security</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;