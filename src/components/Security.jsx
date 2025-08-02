import React from 'react';
import './Security.css';

const Security = ({ onNavigate }) => {
  const securityFeatures = [
    {
      icon: '🔒',
      title: 'Local-First Architecture',
      description: 'Your code never leaves your machine. All analysis happens locally, ensuring complete privacy and security.',
      highlight: true
    },
    {
      icon: '🛡️',
      title: 'Zero Data Transmission',
      description: 'No source code, file names, or project structures are ever transmitted to our servers or third parties.',
      highlight: true
    },
    {
      icon: '🔐',
      title: 'Encrypted Communications',
      description: 'All network communications use industry-standard TLS/SSL encryption for maximum security.',
      highlight: false
    },
    {
      icon: '💾',
      title: 'Local Data Storage',
      description: 'Analysis results and configurations are stored locally on your device under your complete control.',
      highlight: false
    },
    {
      icon: '🔍',
      title: 'Security Vulnerability Detection',
      description: 'Built-in scanning for common security vulnerabilities and hardcoded secrets in your code.',
      highlight: false
    },
    {
      icon: '🚫',
      title: 'No Cloud Dependencies',
      description: 'Core analysis features work completely offline, eliminating cloud-based security risks.',
      highlight: false
    }
  ];

  const complianceStandards = [
    {
      name: 'Enterprise Security',
      description: 'Meets enterprise-grade security requirements for sensitive codebases'
    },
    {
      name: 'GDPR Compliant',
      description: 'Complies with European data protection regulations'
    },
    {
      name: 'SOC 2 Principles',
      description: 'Follows security, availability, and confidentiality principles'
    },
    {
      name: 'Industry Best Practices',
      description: 'Implements security best practices for software development tools'
    }
  ];

  return (
    <div className="security-page">
      <div className="security-container">
        {/* Hero Section */}
        <section className="security-hero">
          <div className="hero-content">
            <h1>Security First</h1>
            <p className="hero-subtitle">
              CrowmanCloud is built with security at its core. Your code stays private, your data stays secure, and your intellectual property remains under your complete control.
            </p>
            <div className="hero-highlight">
              <div className="highlight-icon">🔐</div>
              <div className="highlight-text">
                <strong>Zero Trust Architecture:</strong> We can't access your code because it never leaves your machine.
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="security-features">
          <div className="features-header">
            <h2>How We Keep Your Code Secure</h2>
            <p>CrowmanCloud's security model is simple: what we can't access, we can't compromise.</p>
          </div>
          
          <div className="features-grid">
            {securityFeatures.map((feature, index) => (
              <div key={index} className={`feature-card ${feature.highlight ? 'highlight' : ''}`}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                {feature.highlight && <div className="highlight-badge">Core Security</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Security Comparison */}
        <section className="security-comparison">
          <h2>CrowmanCloud vs. Cloud-Based Tools</h2>
          <div className="comparison-grid">
            <div className="comparison-column crowmancloud">
              <h3>
                <span className="logo-icon">🔒</span>
                CrowmanCloud
              </h3>
              <ul className="comparison-list">
                <li className="positive">
                  <span className="check">✓</span>
                  Code stays on your machine
                </li>
                <li className="positive">
                  <span className="check">✓</span>
                  No data transmission required
                </li>
                <li className="positive">
                  <span className="check">✓</span>
                  Works completely offline
                </li>
                <li className="positive">
                  <span className="check">✓</span>
                  Zero cloud security risks
                </li>
                <li className="positive">
                  <span className="check">✓</span>
                  Complete data ownership
                </li>
              </ul>
            </div>
            
            <div className="comparison-column cloud-tools">
              <h3>
                <span className="logo-icon">☁️</span>
                Cloud-Based Tools
              </h3>
              <ul className="comparison-list">
                <li className="negative">
                  <span className="cross">✗</span>
                  Code uploaded to servers
                </li>
                <li className="negative">
                  <span className="cross">✗</span>
                  Data transmission required
                </li>
                <li className="negative">
                  <span className="cross">✗</span>
                  Internet dependency
                </li>
                <li className="negative">
                  <span className="cross">✗</span>
                  Potential data breaches
                </li>
                <li className="negative">
                  <span className="cross">✗</span>
                  Third-party data access
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="security-compliance">
          <h2>Security Standards & Compliance</h2>
          <div className="compliance-grid">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="compliance-card">
                <h4>{standard.name}</h4>
                <p>{standard.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security Promise */}
        <section className="security-promise">
          <div className="promise-card">
            <h2>Our Security Promise</h2>
            <div className="promise-content">
              <div className="promise-text">
                <p>
                  We've designed CrowmanCloud with a fundamental principle: <strong>your code is yours alone</strong>. 
                  By keeping all analysis local, we eliminate the primary attack vector that affects cloud-based development tools.
                </p>
                <p>
                  This isn't just a feature—it's our core architecture. We literally cannot access your code, 
                  which means you never have to worry about data breaches, unauthorized access, or compliance issues.
                </p>
              </div>
              <div className="promise-actions">
                <button className="btn-primary" onClick={() => onNavigate('download')}>
                  Download Secure Version
                </button>
                <button className="btn-secondary" onClick={() => onNavigate('privacy')}>
                  Read Privacy Policy
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Security FAQ */}
        <section className="security-faq">
          <h2>Security Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How secure is my code?</h4>
              <p>Your code never leaves your machine. All analysis happens locally, making it impossible for us or anyone else to access your source code.</p>
            </div>
            <div className="faq-item">
              <h4>What data do you collect?</h4>
              <p>We collect only anonymous usage statistics and error reports. No code, file names, or project details are ever collected.</p>
            </div>
            <div className="faq-item">
              <h4>Can CrowmanCloud work offline?</h4>
              <p>Yes! Core analysis features work completely offline. Internet is only needed for updates and optional cloud pricing data.</p>
            </div>
            <div className="faq-item">
              <h4>Is it safe for enterprise use?</h4>
              <p>Absolutely. Many enterprises choose CrowmanCloud specifically because it eliminates the security risks of cloud-based analysis tools.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Security;