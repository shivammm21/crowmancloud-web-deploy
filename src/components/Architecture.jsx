import React from 'react';
import './Architecture.css';
import architectureDiagram from '../assets/diagrams/lightMode.png';

const Architecture = ({ onNavigate }) => {
  return (
    <div className="architecture-page">
      <div className="architecture-container">
        <div className="architecture-header">
          <h1>CrowmanCloud Architecture</h1>
          <p>Discover how CrowmanCloud's secure, local-first architecture protects your data while providing comprehensive cloud analysis</p>
        </div>

        <div className="architecture-overview">
          <div className="overview-card">
            <div className="overview-icon">🔒</div>
            <h3>Local-First Processing</h3>
            <p>All analysis happens on your machine. Your code never leaves your local environment.</p>
          </div>
          <div className="overview-card">
            <div className="overview-icon">🛡️</div>
            <h3>Secure Credential Management</h3>
            <p>Leverages OS-level credential stores for maximum security and seamless integration.</p>
          </div>
          <div className="overview-card">
            <div className="overview-icon">⚡</div>
            <h3>Efficient Data Flow</h3>
            <p>Optimized architecture ensures fast processing with minimal resource usage.</p>
          </div>
        </div>

        <div className="architecture-diagram-section">
          <div className="diagram-header">
            <h2>System Architecture</h2>
            <p>CrowmanCloud's architecture combines OS-level credential management with secure JSON-based data handling</p>
          </div>
          
          <div className="diagram-container">
            <div className="diagram-wrapper">
              <img 
                src={architectureDiagram} 
                alt="CrowmanCloud Architecture Diagram - OS Credential Store + JSON" 
                className="architecture-diagram"
              />
            </div>
          </div>

          <div className="diagram-description">
            <div className="description-content">
              <h3>Architecture Components</h3>
              <div className="components-grid">
                <div className="component-item">
                  <h4>🔐 OS Credential Store</h4>
                  <p>Securely manages authentication credentials using your operating system's built-in credential management system.</p>
                </div>
                <div className="component-item">
                  <h4>📄 JSON Configuration</h4>
                  <p>Lightweight, human-readable configuration format for storing analysis settings and preferences.</p>
                </div>
                <div className="component-item">
                  <h4>🔄 Data Processing</h4>
                  <p>Efficient data flow between components ensures secure and fast analysis of your projects.</p>
                </div>
                <div className="component-item">
                  <h4>🛡️ Security Layer</h4>
                  <p>Multiple layers of security protect your data throughout the entire analysis process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="architecture-benefits">
          <h2>Why This Architecture Matters</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3>Maximum Security</h3>
              <p>By leveraging OS credential stores and local processing, your sensitive data remains completely under your control.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>High Performance</h3>
              <p>Local processing eliminates network latency and provides instant analysis results without external dependencies.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Enterprise Ready</h3>
              <p>Designed to meet enterprise security requirements with no external data transmission or cloud dependencies.</p>
            </div>
          </div>
        </div>

        <div className="architecture-cta">
          <div className="cta-content">
            <h2>Experience the Architecture</h2>
            <p>Download CrowmanCloud and see how our secure, local-first architecture protects your code while providing comprehensive analysis.</p>
            <div className="cta-buttons">
              <button 
                onClick={() => onNavigate('download')} 
                className="btn btn-primary"
              >
                Download CrowmanCloud
              </button>
              <button 
                onClick={() => onNavigate('security')} 
                className="btn btn-outline"
              >
                Learn About Security
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;