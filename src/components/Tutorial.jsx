import React from 'react';
import './Tutorial.css';

const Tutorial = ({ onNavigate }) => {
  const tutorials = [
    {
      id: 1,
      title: "First Look at CrowmanCloud",
      description: "Get your first introduction to CrowmanCloud and see how our tool streamlines your pre-deployment workflow.",
      videoUrl: "https://www.youtube.com/embed/ErtvlAxKvDs?si=cjvuxpoTeoyIJt5e&rel=0",
      duration: "5 min",
      category: "Getting Started",
      featured: true
    },
    {
      id: 2,
      title: "Installing CrowmanCloud",
      description: "Step-by-step guide to download and install CrowmanCloud on Windows, Linux, and macOS.",
      duration: "3 min",
      category: "Getting Started",
      comingSoon: true
    },
    {
      id: 3,
      title: "Your First Project Analysis",
      description: "Learn how to analyze your first project using drag-and-drop or Git repository URL.",
      duration: "7 min",
      category: "Basic Usage",
      comingSoon: true
    },
    {
      id: 4,
      title: "Understanding Readiness Reports",
      description: "Deep dive into CrowmanCloud's comprehensive readiness reports and how to interpret the results.",
      duration: "10 min",
      category: "Analysis",
      comingSoon: true
    },
    {
      id: 5,
      title: "Infrastructure File Generation",
      description: "Learn how CrowmanCloud automatically generates Dockerfiles, Kubernetes manifests, and other infrastructure files.",
      duration: "8 min",
      category: "Infrastructure",
      comingSoon: true
    },
    {
      id: 6,
      title: "Multi-Cloud Recommendations",
      description: "Understand how CrowmanCloud provides intelligent recommendations for AWS, GCP, and Azure.",
      duration: "12 min",
      category: "Cloud Services",
      comingSoon: true
    },
    {
      id: 7,
      title: "Cost Estimation Dashboard",
      description: "Master the interactive cost estimation features and learn how to optimize your cloud spending.",
      duration: "9 min",
      category: "Cost Planning",
      comingSoon: true
    },
    {
      id: 8,
      title: "Security Vulnerability Detection",
      description: "Learn how CrowmanCloud identifies security issues and hardcoded secrets in your codebase.",
      duration: "11 min",
      category: "Security",
      comingSoon: true
    },
    {
      id: 9,
      title: "CLI Integration & Automation",
      description: "Integrate CrowmanCloud into your CI/CD pipelines using our command-line interface.",
      duration: "15 min",
      category: "Advanced",
      comingSoon: true
    }
  ];

  const categories = [
    "All",
    "Getting Started",
    "Basic Usage",
    "Analysis",
    "Infrastructure",
    "Cloud Services",
    "Cost Planning",
    "Security",
    "Advanced"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredTutorials = selectedCategory === "All" 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <div className="tutorial-header">
          <h1>CrowmanCloud Tutorials</h1>
          <p>Learn how to master CrowmanCloud with our comprehensive video tutorials and guides</p>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="tutorials-content">
          {filteredTutorials.map(tutorial => (
            <div key={tutorial.id} className={`tutorial-card ${tutorial.featured ? 'featured' : ''}`}>
              {tutorial.featured && <div className="featured-badge">Featured</div>}
              
              {tutorial.videoUrl ? (
                <div className="tutorial-video">
                  <iframe
                    src={tutorial.videoUrl}
                    title={tutorial.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="tutorial-placeholder">
                  <div className="placeholder-icon">🎥</div>
                  {tutorial.comingSoon && <div className="coming-soon-badge">Coming Soon</div>}
                </div>
              )}

              <div className="tutorial-info">
                <div className="tutorial-meta">
                  <span className="tutorial-category">{tutorial.category}</span>
                  <span className="tutorial-duration">{tutorial.duration}</span>
                </div>
                <h3 className="tutorial-title">{tutorial.title}</h3>
                <p className="tutorial-description">{tutorial.description}</p>
                
                {tutorial.videoUrl ? (
                  <div className="tutorial-actions">
                    <a 
                      href={tutorial.videoUrl.replace('/embed/', '/watch?v=')} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                ) : (
                  <div className="tutorial-actions">
                    <button className="btn btn-disabled" disabled>
                      {tutorial.comingSoon ? 'Coming Soon' : 'Watch Tutorial'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="tutorial-cta">
          <div className="cta-content">
            <h2>Ready to get started with CrowmanCloud?</h2>
            <p>Download the application and start analyzing your projects with our comprehensive cloud readiness platform.</p>
            <div className="cta-buttons">
              <button 
                onClick={() => onNavigate('download')} 
                className="btn btn-primary"
              >
                Download CrowmanCloud
              </button>
              <button 
                onClick={() => onNavigate('documentation')} 
                className="btn btn-outline"
              >
                Read Documentation
              </button>
            </div>
          </div>
        </div>

        <div className="tutorial-help">
          <div className="help-content">
            <h3>Need More Help?</h3>
            <p>Can't find what you're looking for? Check out our other resources:</p>
            <div className="help-links">
              <button onClick={() => onNavigate('documentation')} className="help-link">
                📚 Documentation
              </button>
              <button onClick={() => onNavigate('help')} className="help-link">
                💬 Help Center
              </button>
              <button onClick={() => onNavigate('contact')} className="help-link">
                📧 Contact Support
              </button>
              <button onClick={() => onNavigate('blog')} className="help-link">
                📝 Blog & Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;