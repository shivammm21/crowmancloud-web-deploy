import React, { useState } from 'react';
import './Documentation.css';

const Documentation = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const sidebarItems = [
    {
      id: 'introduction',
      title: 'Introduction',
      items: [
        { id: 'overview', title: 'Overview', active: true },
        { id: 'getting-started', title: 'Getting Started' },
        { id: 'installation', title: 'Installation' },
        { id: 'first-analysis', title: 'First Analysis' }
      ]
    }
  ];

  return (
    <div className="documentation-page">
      <div className="docs-container">
        {/* Sidebar */}
        <aside className="docs-sidebar">
          <div className="sidebar-header">
            <h2>CrowmanCloud Docs</h2>
          </div>
          <nav className="sidebar-nav">
            {sidebarItems.map((section) => (
              <div key={section.id} className="nav-section">
                <h3 className="nav-section-title">{section.title}</h3>
                <ul className="nav-items">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => setActiveSection(item.id)}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="docs-content">
          {activeSection === 'overview' && (
            <div className="content-section">
              <header className="content-header">
                <h1>CrowmanCloud Overview</h1>
                <p className="content-subtitle">
                  Learn about CrowmanCloud's local-first cloud deployment analysis platform
                </p>
              </header>

              <div className="content-body">
                <section className="intro-section">
                  <h2>What is CrowmanCloud?</h2>
                  <p>
                    CrowmanCloud is a powerful desktop application that helps developers analyze their code for cloud deployment readiness. 
                    Unlike cloud-based tools, CrowmanCloud runs entirely on your local machine, ensuring your source code never leaves your computer.
                  </p>
                  
                  <div className="feature-highlight">
                    <div className="highlight-icon">🔒</div>
                    <div className="highlight-content">
                      <strong>Local-First Security:</strong> Your code stays private and secure on your machine while getting enterprise-grade analysis.
                    </div>
                  </div>
                </section>

                <section className="key-features">
                  <h2>Key Features</h2>
                  <div className="features-grid">
                    <div className="feature-item">
                      <div className="feature-icon">🔍</div>
                      <h3>Code Analysis</h3>
                      <p>Comprehensive scanning for cloud readiness, security vulnerabilities, and best practices.</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">☁️</div>
                      <h3>Multi-Cloud Support</h3>
                      <p>Get recommendations for AWS, Google Cloud, and Microsoft Azure based on your project.</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">💰</div>
                      <h3>Cost Estimation</h3>
                      <p>Detailed cost projections for your recommended cloud services and configurations.</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">⚡</div>
                      <h3>Infrastructure Generation</h3>
                      <p>Auto-generate Dockerfiles, deployment configs, and other infrastructure files.</p>
                    </div>
                  </div>
                </section>

                <section className="how-it-works">
                  <h2>How CrowmanCloud Works</h2>
                  <div className="workflow-steps">
                    <div className="step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>Install & Launch</h4>
                        <p>Download CrowmanCloud for your operating system and launch the application.</p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Select Project</h4>
                        <p>Choose your project folder or drag and drop it into CrowmanCloud.</p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Run Analysis</h4>
                        <p>CrowmanCloud analyzes your code locally, detecting frameworks, dependencies, and potential issues.</p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">4</div>
                      <div className="step-content">
                        <h4>Review Results</h4>
                        <p>Get detailed recommendations, cost estimates, and generated infrastructure files.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="next-steps">
                  <h2>Next Steps</h2>
                  <div className="next-steps-grid">
                    <div className="next-step-card">
                      <h4>🚀 Getting Started</h4>
                      <p>Learn how to install and set up CrowmanCloud on your system.</p>
                      <button 
                        className="step-button"
                        onClick={() => setActiveSection('getting-started')}
                      >
                        Get Started →
                      </button>
                    </div>
                    <div className="next-step-card">
                      <h4>💻 Installation Guide</h4>
                      <p>Step-by-step installation instructions for Windows, macOS, and Linux.</p>
                      <button 
                        className="step-button"
                        onClick={() => setActiveSection('installation')}
                      >
                        Install Now →
                      </button>
                    </div>
                    <div className="next-step-card">
                      <h4>🔍 First Analysis</h4>
                      <p>Run your first code analysis and understand the results.</p>
                      <button 
                        className="step-button"
                        onClick={() => setActiveSection('first-analysis')}
                      >
                        Start Analyzing →
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}

          {activeSection === 'getting-started' && (
            <div className="content-section">
              <header className="content-header">
                <h1>Getting Started</h1>
                <p className="content-subtitle">
                  Quick start guide to begin using CrowmanCloud
                </p>
              </header>
              <div className="content-body">
                <p>Getting started content will be available soon...</p>
              </div>
            </div>
          )}

          {activeSection === 'installation' && (
            <div className="content-section">
              <header className="content-header">
                <h1>Installation</h1>
                <p className="content-subtitle">
                  Install CrowmanCloud on your system
                </p>
              </header>
              <div className="content-body">
                <p>Installation guide content will be available soon...</p>
              </div>
            </div>
          )}

          {activeSection === 'first-analysis' && (
            <div className="content-section">
              <header className="content-header">
                <h1>First Analysis</h1>
                <p className="content-subtitle">
                  Run your first code analysis with CrowmanCloud
                </p>
              </header>
              <div className="content-body">
                <p>First analysis tutorial content will be available soon...</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Documentation;