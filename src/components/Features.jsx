import React from 'react';
import './Features.css';

const Features = ({ onNavigate }) => {
  return (
    <div className="features-page">
      <section className="features-hero">
        <h1>What is CrowmanCloud?</h1>
        <p>
          CrowmanCloud is a local-first pre-deployment toolkit that analyzes your codebase,
          automates infrastructure scaffolding, recommends the right cloud services, and
          estimates ongoing costs — all without your source code ever leaving your machine.
        </p>
        <div className="features-cta">
          <button className="btn btn-primary" onClick={() => onNavigate?.('download')}>Download for Free</button>
          <button className="btn btn-outline" onClick={() => onNavigate?.('documentation')}>Read Documentation</button>
        </div>
      </section>

      <section className="features-grid">
        <div className="feature-card">
          <h3>Deep Readiness Analysis</h3>
          <p>
            Detect cloud-specific issues, misconfigurations, secret leaks, dependency risks,
            Docker readiness, and more with a fast static analysis pass tailored for deployment.
          </p>
        </div>
        <div className="feature-card">
          <h3>Infra Automation</h3>
          <p>
            Generate missing production files like Dockerfiles, CI templates, and baseline
            IaC snippets following best practices for your stack.
          </p>
        </div>
        <div className="feature-card">
          <h3>Cloud Intelligence</h3>
          <p>
            Get vendor-agnostic recommendations across AWS, GCP, and Azure based on your
            framework, runtime, and performance profile.
          </p>
        </div>
        <div className="feature-card">
          <h3>Cost Estimation</h3>
          <p>
            Explore interactive cost estimates before deploying. Tweak instance sizes and
            services and see projected spending instantly.
          </p>
        </div>
        <div className="feature-card">
          <h3>Local-First Security</h3>
          <p>
            Your code never leaves your machine. Enjoy enterprise-grade analysis with the
            privacy of an offline workflow.
          </p>
        </div>
        <div className="feature-card">
          <h3>Team Ready</h3>
          <p>
            Share readiness reports, track fixes, and align developers, DevOps, and managers
            around a single source of truth prior to deployment.
          </p>
        </div>
      </section>

      <section className="features-flow">
        <h2>How it works</h2>
        <ol>
          <li>Open CrowmanCloud and select your project folder or Git URL.</li>
          <li>Run Readiness Analysis to get instant findings and recommendations.</li>
          <li>Generate missing infra files and iterate with guided fixes.</li>
          <li>Review cloud options and projected costs, then export a plan.</li>
        </ol>
      </section>
    </div>
  );
};

export default Features;
