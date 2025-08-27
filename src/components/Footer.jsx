import React from 'react';
import logo from '../assets/logo.png';
import darkLogo from '../assets/logo-dark.png'

const Footer = ({ onNavigate }) => {
  return (
    <footer className="landing-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={darkLogo} alt="CrowmanCloud Logo" />
          <span className="footer-logo-text">
            <b>Crowman</b><span className="inspector-light">Cloud</span>
          </span>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><a href="#" onClick={() => onNavigate('home')}>Features</a></li>
              <li><a href="#" onClick={() => onNavigate('pricing')}>Pricing</a></li>
              {/*<li><a href="#" onClick={() => onNavigate('architecture')}>Architecture</a></li>*/}
              <li><a href="#" onClick={() => onNavigate('documentation')}>Documentation</a></li>
              
              
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#" onClick={() => onNavigate('about')}>About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#" onClick={() => onNavigate('contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#" onClick={() => onNavigate('help')}>Help Center</a></li>
              
              <li><a href="#" onClick={() => onNavigate('tutorial')}>Tutorials</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#" onClick={() => onNavigate('privacy')}>Privacy Policy</a></li>
              <li><a href="#" onClick={() => onNavigate('terms')}>Terms of Service</a></li>
              <li><a href="#" onClick={() => onNavigate('security')}>Security</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 CrowmanCloud. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://github.com/crowmancloud" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/crowmancloud/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0 1.837c-3.16 0-3.532.012-4.777.069-1.027.047-1.584.218-1.953.364-.492.191-.844.418-1.214.788-.37.37-.597.722-.788 1.214-.146.369-.317.926-.364 1.953-.057 1.245-.069 1.618-.069 4.777s.012 3.532.069 4.777c.047 1.027.218 1.584.364 1.953.191.492.418.844.788 1.214.37.37.722.597 1.214.788.369.146.926.317 1.953.364 1.245.057 1.618.069 4.777.069s3.532-.012 4.777-.069c1.027-.047 1.584-.218 1.953-.364.492-.191.844-.418 1.214-.788.37-.37.597-.722.788-1.214.146-.369.317-.926.364-1.953.057-1.245.069-1.618.069-4.777s-.012-3.532-.069-4.777c-.047-1.027-.218-1.584-.364-1.953-.191-.492-.418-.844-.788-1.214-.37-.37-.722-.597-1.214-.788-.369-.146-.926-.317-1.953-.364-1.245-.057-1.618-.069-4.777-.069zm0 3.568a4.432 4.432 0 1 1 0 8.864 4.432 4.432 0 0 1 0-8.864zm0 1.837a2.595 2.595 0 1 0 0 5.19 2.595 2.595 0 0 0 0-5.19zm4.91-2.757a1.036 1.036 0 1 1 0 2.072 1.036 1.036 0 0 1 0-2.072z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;