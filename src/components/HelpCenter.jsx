import React, { useState } from 'react';
import './HelpCenter.css';

const HelpCenter = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📚' },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'installation', name: 'Installation', icon: '💻' },
    { id: 'analysis', name: 'Code Analysis', icon: '🔍' },
    { id: 'security', name: 'Security & Privacy', icon: '🔒' },
    { id: 'cloud-platforms', name: 'Cloud Platforms', icon: '☁️' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: '🛠️' },
    { id: 'integrations', name: 'Integrations', icon: '🔗' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Getting Started with CrowmanCloud',
      category: 'getting-started',
      description: 'Learn how to download, install, and run your first analysis with CrowmanCloud.',
      readTime: '5 min read',
      popular: true
    },
    {
      id: 2,
      title: 'System Requirements and Installation Guide',
      category: 'installation',
      description: 'Complete installation instructions for Windows, macOS, and Linux systems.',
      readTime: '3 min read',
      popular: true
    },
    {
      id: 3,
      title: 'Understanding Your Analysis Report',
      category: 'analysis',
      description: 'Learn how to interpret CrowmanCloud\'s analysis results and recommendations.',
      readTime: '8 min read',
      popular: true
    },
    {
      id: 4,
      title: 'Local-First Security: How Your Code Stays Private',
      category: 'security',
      description: 'Detailed explanation of CrowmanCloud\'s local-first architecture and security measures.',
      readTime: '6 min read',
      popular: false
    },
    {
      id: 5,
      title: 'AWS Deployment Recommendations',
      category: 'cloud-platforms',
      description: 'How CrowmanCloud analyzes and recommends AWS services for your project.',
      readTime: '7 min read',
      popular: false
    },
    {
      id: 6,
      title: 'Google Cloud Platform Integration',
      category: 'cloud-platforms',
      description: 'Understanding GCP recommendations and cost estimations.',
      readTime: '6 min read',
      popular: false
    },
    {
      id: 7,
      title: 'Azure Cloud Services Analysis',
      category: 'cloud-platforms',
      description: 'How CrowmanCloud evaluates and suggests Azure services.',
      readTime: '6 min read',
      popular: false
    },
    {
      id: 8,
      title: 'Troubleshooting Common Issues',
      category: 'troubleshooting',
      description: 'Solutions to frequently encountered problems and error messages.',
      readTime: '10 min read',
      popular: true
    },
    {
      id: 9,
      title: 'CI/CD Pipeline Integration',
      category: 'integrations',
      description: 'How to integrate CrowmanCloud into your continuous integration workflows.',
      readTime: '12 min read',
      popular: false
    },
    {
      id: 10,
      title: 'Docker and Container Analysis',
      category: 'analysis',
      description: 'Understanding how CrowmanCloud analyzes containerized applications.',
      readTime: '9 min read',
      popular: false
    },
    {
      id: 11,
      title: 'Cost Estimation Accuracy and Factors',
      category: 'analysis',
      description: 'Learn about the factors that influence cost estimates and their accuracy.',
      readTime: '5 min read',
      popular: false
    },
    {
      id: 12,
      title: 'Supported Programming Languages and Frameworks',
      category: 'getting-started',
      description: 'Complete list of supported technologies and their analysis capabilities.',
      readTime: '4 min read',
      popular: true
    }
  ];

  const quickLinks = [
    { title: 'Download CrowmanCloud', action: () => onNavigate('download'), icon: '⬇️' },
    { title: 'Contact Support', action: () => onNavigate('contact'), icon: '💬' },
    { title: 'Report a Bug', action: () => window.open('#', '_blank'), icon: '🐛' },
    { title: 'Feature Request', action: () => window.open('#', '_blank'), icon: '💡' }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularArticles = articles.filter(article => article.popular);

  return (
    <div className="help-center-page">
      {/* Hero Section */}
      <section className="help-hero">
        <div className="help-container">
          <div className="hero-content">
            <h1>Help Center</h1>
            <p>Find answers, get support, and learn how to make the most of CrowmanCloud</p>

            <div className="search-section">
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links-section">
        <div className="help-container">
          <h2>Quick Actions</h2>
          <div className="quick-links-grid">
            {quickLinks.map((link, index) => (
              <button key={index} className="quick-link-card" onClick={link.action}>
                <span className="quick-link-icon">{link.icon}</span>
                <span className="quick-link-title">{link.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>





      {/* Contact Support */}
      <section className="support-section">
        <div className="help-container">
          <div className="support-card">
            <h2>Still need help?</h2>
            <p>Can't find what you're looking for? Our support team is here to help you get the most out of CrowmanCloud.</p>
            <div className="support-actions">
              <button className="btn-primary" onClick={() => onNavigate('contact')}>
                Contact Support
              </button>
              <button className="btn-secondary" onClick={() => window.open('#', '_blank')}>
                Community Forum
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;