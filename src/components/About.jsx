import React from 'react';
import './About.css';
import foundersImage from '../assets/founders.jpg';

const About = ({ onNavigate }) => {
  const stats = [
    { number: '50K+', label: 'Developers Trust Us' },
    { number: '100K+', label: 'Projects Analyzed' },
    { number: '3', label: 'Cloud Platforms Supported' },
    { number: '100%', label: 'Local & Secure' }
  ];



  const values = [
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your code is your most valuable asset. We built CrowmanCloud with local-first architecture to ensure your intellectual property never leaves your machine.'
    },
    {
      icon: '🚀',
      title: 'Developer Experience',
      description: 'We obsess over making complex cloud deployment simple. Every feature is designed to reduce friction and help developers ship with confidence.'
    },
    {
      icon: '🌍',
      title: 'Accessibility',
      description: 'Powerful development tools should be available to everyone. That\'s why CrowmanCloud is completely free, with no hidden costs or usage limits.'
    },
    {
      icon: '🔧',
      title: 'Practical Solutions',
      description: 'We focus on solving real problems developers face every day. Our recommendations are actionable, our analysis is thorough, and our tools just work.'
    }
  ];



  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="hero-content">
            <h1>We're building the bridge between development and deployment</h1>
            <p className="hero-subtitle">
              CrowmanCloud was created to solve a problem every developer faces: the uncertainty and complexity of moving from local development to cloud production. We believe deployment should be predictable, secure, and accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="about-founders">
        <div className="about-container">
          <div className="founders-content">
            <div className="founders-image">
              <img src={foundersImage} alt="CrowmanCloud Founders" />
              <p className="founders-caption">
                <em>(Photo caption from left to right, Shivam Thorat, Varun Thakare, and Pranit Dhumal).</em>
              </p>
            </div>
            <div className="founders-text">
              <h2>The founders</h2>
              <p>
              CrowmanCloud began as a small side project. Shivam Thorat, co-founder, wanted to make cloud deployment easier for developers. As more people started using the tool, he brought on two former colleagues Varun Thakare and Pranit Dhumal to help build something bigger. Together, they founded CrowmanCloud.
              </p>
              <p>
              Today, CrowmanCloud has grown into a leading platform for cloud deployment analysis, and the same three founders still guide the company forward.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-container">
          <div className="story-content">
            <h2>Our Story</h2>
            <div className="story-text">
              <p>
                Every developer has faced this: your app runs fine on your computer, but once you try to deploy it to the cloud, everything starts to break. Configuration problems, security risks, high costs, and compatibility issues make things frustrating.
              </p>
              <p>
                That’s why we built Crowmancloud. We’ve been through these same struggles ourselves. As developers and cloud engineers, we saw many teams dealing with the same cloud deployment headaches. Most tools out there were either too complicated or required uploading private code to external servers.
              </p>
              <p>
                CrowmanCloud is different. It runs completely on your own machine, so your code stays private. It gives you powerful code analysis just like big enterprise tools but in a simple, developer-friendly way. We’re not a typical cloud service. we’re a local-first tool that helps you get cloud-ready without compromising your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Values Section */}
      <section className="about-values">
        <div className="about-container">
          <h2>What Drives Us</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <div className="mission-text">
              <p>
                To democratize cloud deployment by making enterprise-grade analysis tools accessible to every developer, while never compromising on privacy or security.
              </p>
              <p>
                We envision a world where deploying to the cloud is as simple and predictable as running code locally where developers can ship with confidence, knowing their applications are secure, optimized, and cost-effective.
              </p>
            </div>
            <div className="mission-cta">
              <h3>Join thousands of developers who deploy with confidence</h3>
              <div className="cta-buttons">
                <button className="btn-primary" onClick={() => onNavigate('download')}>Download CrowmanCloud</button>
                <button className="btn-secondary">View Documentation</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;