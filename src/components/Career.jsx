import React from 'react';
import './Career.css';

const Career = ({ onNavigate }) => {
  const contributionAreas = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Help us build beautiful, intuitive user interfaces using React and modern web technologies.",
      skills: ["React", "JavaScript", "CSS", "UI/UX Design"],
      icon: "🎨"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Contribute to our analysis engine, API development, and cloud integration services.",
      skills: ["Java", "Spring Boot", "API Design", "Cloud Services"],
      icon: "⚙️"
    },
    {
      id: 3,
      title: "Security & Analysis",
      description: "Enhance our security scanning capabilities and vulnerability detection algorithms.",
      skills: ["Security Analysis", "Static Analysis", "DevSecOps", "Vulnerability Assessment"],
      icon: "🔒"
    },
    {
      id: 4,
      title: "DevOps & Infrastructure",
      description: "Improve our deployment processes, CI/CD pipelines, and infrastructure automation.",
      skills: ["Docker", "Kubernetes", "CI/CD", "Infrastructure as Code"],
      icon: "🚀"
    },
    {
      id: 5,
      title: "Documentation",
      description: "Help us create comprehensive guides, tutorials, and API documentation for developers.",
      skills: ["Technical Writing", "Documentation", "Tutorials", "Community Support"],
      icon: "📚"
    },
    {
      id: 6,
      title: "Testing & QA",
      description: "Ensure code quality through automated testing, manual testing, and quality assurance.",
      skills: ["Test Automation", "Quality Assurance", "Bug Testing", "Performance Testing"],
      icon: "🧪"
    }
  ];

  const benefits = [
    {
      title: "Open Source Impact",
      description: "Your contributions will be used by developers worldwide",
      icon: "🌍"
    },
    {
      title: "Learn & Grow",
      description: "Work with cutting-edge technologies and expand your skills",
      icon: "📈"
    },
    {
      title: "Community Recognition",
      description: "Get recognized for your contributions in our community",
      icon: "⭐"
    },
    {
      title: "Flexible Contribution",
      description: "Contribute at your own pace, from anywhere in the world",
      icon: "🏠"
    }
  ];

  return (
    <div className="career-page">
      <div className="career-hero">
        <div className="career-hero-content">
          <h1>Join the CrowmanCloud Open Source Community</h1>
          <p>
            CrowmanCloud is completely open source! We believe in the power of community-driven development. 
            Whether you're a seasoned developer or just starting out, there's a place for you in our project.
          </p>
          <div className="hero-badges">
            <span className="badge">100% Open Source</span>
            <span className="badge">Community Driven</span>
            <span className="badge">Global Contributors</span>
          </div>
        </div>
      </div>

      <div className="career-content">
        <section className="contribution-areas">
          <div className="section-header">
            <h2>Ways to Contribute</h2>
            <p>Find your area of expertise and start making an impact</p>
          </div>
          
          <div className="areas-grid">
            {contributionAreas.map(area => (
              <div key={area.id} className="area-card">
                <div className="area-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="skills-list">
                  {area.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="why-contribute">
          <div className="section-header">
            <h2>Why Contribute to CrowmanCloud?</h2>
            <p>Join a community that values innovation, security, and developer experience</p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="getting-started">
          <div className="getting-started-content">
            <div className="getting-started-text">
              <h2>Ready to Get Started?</h2>
              <p>
                Contributing to CrowmanCloud is easy! Our codebase is well-documented, 
                and our community is welcoming to contributors of all skill levels.
              </p>
              <ul className="contribution-steps">
                <li>🍴 Fork our repository on GitHub</li>
                <li>🔍 Browse open issues and find something interesting</li>
                <li>💻 Make your changes and submit a pull request</li>
                <li>🎉 Get your code reviewed and merged!</li>
              </ul>
            </div>
            <div className="getting-started-actions">
              <a 
                href="https://github.com/crowmancloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              <a 
                href="https://github.com/crowmancloud/crowmancloud/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-large"
              >
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Browse Issues
              </a>
            </div>
          </div>
        </section>


      </div>

      <div className="career-cta">
        <div className="cta-content">
          <h2>Start Contributing Today</h2>
          <p>
            Every contribution matters, no matter how small. Join us in building the future of 
            secure, local-first cloud deployment tools.
          </p>
          <div className="cta-buttons">
            <a 
              href="https://github.com/crowmancloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Contribute on GitHub
            </a>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn btn-outline"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;