import React from 'react';
import './ReleaseNotes.css';

const ReleaseNotes = ({ onNavigate }) => {
  const releases = [
    {
      version: '1.0.0',
      date: 'July 29, 2025',
      type: 'Major Release',
      description: 'Initial release of CrowmanCloud - The essential pre-deployment platform for developers',
      features: [
        {
          category: 'Core Analysis Engine',
          items: [
            'Complete source code analysis for cloud readiness assessment',
            'Security vulnerability detection and reporting',
            'Hardcoded secrets scanning and identification',
            'Architecture soundness validation for cloud deployment',
            'Static code analysis with cloud-specific issue detection'
          ]
        },
        {
          category: 'Infrastructure Automation',
          items: [
            'Automatic Dockerfile generation for containerization',
            'Docker Compose file creation for multi-service applications',
            'Kubernetes deployment manifests generation',
            'Best-practice infrastructure file templates',
            'Technology stack-specific configuration files'
          ]
        },
        {
          category: 'Multi-Cloud Intelligence',
          items: [
            'AWS service recommendations based on project analysis',
            'Google Cloud Platform service suggestions',
            'Microsoft Azure service recommendations',
            'Comparative analysis of cloud provider options',
            'Service compatibility and optimization insights'
          ]
        },
        {
          category: 'Cost Estimation & Planning',
          items: [
            'Detailed cost projections for recommended cloud services',
            'Interactive pricing breakdowns and comparisons',
            'Real-time cost adjustments with instance size changes',
            'Budget planning tools and cost optimization suggestions',
            'Multi-cloud cost comparison dashboard'
          ]
        },
        {
          category: 'Security & Privacy',
          items: [
            'Local-first architecture - code never leaves your machine',
            'Offline analysis capabilities for maximum security',
            'Enterprise-grade privacy protection',
            'No data transmission to external servers',
            'Secure local storage of analysis results'
          ]
        },
        {
          category: 'Reporting & Documentation',
          items: [
            'Comprehensive readiness reports in multiple formats',
            'PDF export functionality for team sharing',
            'Actionable insights and recommendations',
            'Detailed vulnerability assessments',
            'Infrastructure deployment guides'
          ]
        },
        {
          category: 'User Experience',
          items: [
            'Intuitive drag-and-drop project analysis',
            'Git repository URL analysis support',
            'Real-time progress tracking during analysis',
            'Clean, modern desktop application interface',
            'Cross-platform compatibility (Windows, Linux, macOS)'
          ]
        },
        {
          category: 'Developer Tools',
          items: [
            'Command-line interface (CLI) for automation',
            'CI/CD pipeline integration capabilities',
            'Batch processing for multiple projects',
            'API endpoints for custom integrations',
            'Extensible plugin architecture'
          ]
        }
      ],
      improvements: [
        'Optimized analysis engine for faster processing',
        'Enhanced user interface with improved accessibility',
        'Better error handling and user feedback',
        'Comprehensive documentation and help system'
      ],
      bugFixes: [
        'Initial stable release - no previous bugs to fix',
        'Extensive testing across multiple project types',
        'Performance optimization for large codebases',
        'Memory usage optimization for resource efficiency'
      ],
      systemRequirements: {
        windows: {
          os: 'Windows 10 or later (64-bit)',
          ram: '4 GB minimum, 8 GB recommended',
          storage: '500 MB free disk space',
          network: 'Internet connection for updates'
        },
        linux: {
          os: 'Ubuntu 18.04+ / CentOS 7+ / Fedora 30+',
          ram: '4 GB minimum, 8 GB recommended',
          storage: '500 MB free disk space',
          network: 'Internet connection for updates'
        },
        macos: {
          os: 'macOS 10.15 (Catalina) or later',
          ram: '4 GB minimum, 8 GB recommended',
          storage: '500 MB free disk space',
          network: 'Internet connection for updates'
        }
      }
    }
  ];

  return (
    <div className="release-notes-page">
      <div className="release-notes-container">
        <div className="release-notes-header">
          <h1>Release Notes</h1>
          <p>Stay updated with the latest features, improvements, and fixes in CrowmanCloud</p>
        </div>

        <div className="releases-content">
          {releases.map((release, index) => (
            <div key={index} className="release-item">
              <div className="release-header">
                <div className="release-version">
                  <h2>Version {release.version}</h2>
                  <span className="release-type">{release.type}</span>
                </div>
                <div className="release-date">{release.date}</div>
              </div>

              <div className="release-description">
                <p>{release.description}</p>
              </div>

              <div className="release-sections">
                <div className="features-section">
                  <h3>🚀 New Features</h3>
                  {release.features.map((category, catIndex) => (
                    <div key={catIndex} className="feature-category">
                      <h4>{category.category}</h4>
                      <ul>
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="improvements-section">
                  <h3>⚡ Improvements</h3>
                  <ul>
                    {release.improvements.map((improvement, impIndex) => (
                      <li key={impIndex}>{improvement}</li>
                    ))}
                  </ul>
                </div>

                <div className="bug-fixes-section">
                  <h3>🐛 Bug Fixes</h3>
                  <ul>
                    {release.bugFixes.map((fix, fixIndex) => (
                      <li key={fixIndex}>{fix}</li>
                    ))}
                  </ul>
                </div>

                <div className="system-requirements-section">
                  <h3>💻 System Requirements</h3>
                  <div className="requirements-grid">
                    <div className="requirement-card">
                      <h4>Windows</h4>
                      <ul>
                        <li><strong>OS:</strong> {release.systemRequirements.windows.os}</li>
                        <li><strong>RAM:</strong> {release.systemRequirements.windows.ram}</li>
                        <li><strong>Storage:</strong> {release.systemRequirements.windows.storage}</li>
                        <li><strong>Network:</strong> {release.systemRequirements.windows.network}</li>
                      </ul>
                    </div>
                    <div className="requirement-card">
                      <h4>Linux</h4>
                      <ul>
                        <li><strong>OS:</strong> {release.systemRequirements.linux.os}</li>
                        <li><strong>RAM:</strong> {release.systemRequirements.linux.ram}</li>
                        <li><strong>Storage:</strong> {release.systemRequirements.linux.storage}</li>
                        <li><strong>Network:</strong> {release.systemRequirements.linux.network}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="release-notes-cta">
          <div className="cta-content">
            <h2>Ready to try CrowmanCloud v1.0.0?</h2>
            <p>Download the latest version and start analyzing your projects with our comprehensive cloud readiness platform.</p>
            <button 
              onClick={() => onNavigate('download')} 
              className="btn btn-primary"
            >
              Download Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseNotes;