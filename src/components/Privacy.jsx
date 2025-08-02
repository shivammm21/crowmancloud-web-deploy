import React from 'react';
import './Privacy.css';

const Privacy = () => {
  const lastUpdated = "January 30, 2025";

  const sections = [
    {
      id: "overview",
      title: "Privacy Overview",
      content: `At CrowmanCloud, your privacy is our top priority. We've built our platform with a fundamental principle: your code never leaves your machine. This Privacy Policy explains how we collect, use, and protect your information when you use CrowmanCloud.`
    },
    {
      id: "local-first",
      title: "Local-First Architecture",
      content: `CrowmanCloud operates entirely on your local machine. When you analyze your code:
      
• Your source code is never uploaded to our servers
• All analysis happens locally on your device
• No code snippets, file contents, or project structures are transmitted
• Your intellectual property remains completely private and secure
• We cannot access, view, or store your code in any form

This local-first approach ensures that your most valuable asset—your source code—stays under your complete control.`
    },
    {
      id: "information-collected",
      title: "Information We Collect",
      content: `We collect minimal information to provide and improve our service:

**Information We DO Collect:**
• Basic usage analytics (anonymized)
• Error reports and crash logs (no code included)
• Feature usage statistics
• System information (OS, version, hardware specs)
• Update check requests

**Information We DO NOT Collect:**
• Your source code or any part of it
• File names, directory structures, or project details
• Personal data from your code repositories
• API keys, passwords, or sensitive configuration data
• Any information that could identify your projects or codebase`
    },
    {
      id: "data-usage",
      title: "How We Use Your Information",
      content: `We use the limited information we collect for these purposes:

• **Product Improvement**: Understanding how features are used to enhance CrowmanCloud
• **Bug Fixes**: Identifying and resolving technical issues
• **Security**: Detecting and preventing potential security threats
• **Updates**: Notifying you of important updates and new features
• **Support**: Providing technical assistance when requested

We never use your information for advertising, marketing to third parties, or any commercial purposes beyond improving CrowmanCloud.`
    },
    {
      id: "data-sharing",
      title: "Information Sharing and Disclosure",
      content: `We do not sell, trade, or otherwise transfer your information to third parties. We may share limited, anonymized data only in these circumstances:

• **Service Providers**: With trusted partners who help us operate CrowmanCloud (all bound by strict confidentiality agreements)
• **Legal Requirements**: When required by law, court order, or government request
• **Security**: To protect against fraud, abuse, or security threats
• **Business Transfer**: In the event of a merger or acquisition (users will be notified)

Any shared data is anonymized and cannot be traced back to individual users or their projects.`
    },
    {
      id: "data-security",
      title: "Data Security",
      content: `We implement industry-standard security measures to protect your information:

• **Encryption**: All data transmission uses TLS/SSL encryption
• **Local Storage**: Your analysis results are stored locally on your device
• **Access Controls**: Strict access controls for our systems and data
• **Regular Audits**: Regular security audits and vulnerability assessments
• **Incident Response**: Comprehensive incident response procedures

Since your code never leaves your machine, it's protected by your own security measures and is not subject to potential data breaches of our systems.`
    },
    {
      id: "user-rights",
      title: "Your Rights and Choices",
      content: `You have complete control over your data and privacy:

• **Data Access**: Request information about data we have collected
• **Data Deletion**: Request deletion of your data from our systems
• **Opt-Out**: Disable analytics and telemetry in CrowmanCloud settings
• **Updates**: Choose when and how to receive product updates
• **Support**: Contact us with any privacy-related questions or concerns

Since most of your data stays on your local machine, you have direct control over it at all times.`
    },
    {
      id: "cookies",
      title: "Cookies and Tracking",
      content: `CrowmanCloud is a desktop application and does not use cookies or web tracking technologies. However, our website may use:

• **Essential Cookies**: Required for basic website functionality
• **Analytics Cookies**: To understand website usage (can be disabled)
• **No Advertising Cookies**: We do not use cookies for advertising purposes

You can control cookie preferences through your browser settings.`
    },
    {
      id: "children",
      title: "Children's Privacy",
      content: `CrowmanCloud is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.`
    },
    {
      id: "international",
      title: "International Data Transfers",
      content: `CrowmanCloud operates globally, and minimal data may be transferred internationally for service operation. All transfers comply with applicable data protection laws, including GDPR and other regional privacy regulations.

Since your code remains local, it is not subject to international data transfer regulations.`
    },
    {
      id: "updates",
      title: "Policy Updates",
      content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will:

• Notify users of significant changes through the application
• Post updates on our website with the revision date
• Provide at least 30 days notice for material changes
• Never reduce your privacy protections without explicit consent

Continued use of CrowmanCloud after policy updates constitutes acceptance of the revised terms.`
    },
    {
      id: "contact",
      title: "Contact Information",
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:

Support: crowmancloud0@gmail.com


We are committed to addressing your privacy concerns promptly and transparently.`
    }
  ];

  return (
    <div className="privacy-page">
      <div className="privacy-container">
        {/* Header */}
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: {lastUpdated}</p>
          <div className="privacy-summary">
            <div className="summary-card">
              <div className="summary-icon">🔒</div>
              <div className="summary-content">
                <h3>Your Code Stays Local</h3>
                <p>CrowmanCloud analyzes your code entirely on your machine. We never see, store, or transmit your source code.</p>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">📊</div>
              <div className="summary-content">
                <h3>Minimal Data Collection</h3>
                <p>We collect only anonymized usage statistics to improve the product. No personal or project data is collected.</p>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🛡️</div>
              <div className="summary-content">
                <h3>Industry-Standard Security</h3>
                <p>All data transmission is encrypted, and we follow best practices for data protection and security.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="table-of-contents">
          <h2>Table of Contents</h2>
          <div className="toc-grid">
            {sections.map((section, index) => (
              <a key={section.id} href={`#${section.id}`} className="toc-item">
                <span className="toc-number">{index + 1}</span>
                <span className="toc-title">{section.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="privacy-content">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="privacy-section">
              <div className="section-header">
                <span className="section-number">{index + 1}</span>
                <h2>{section.title}</h2>
              </div>
              <div className="section-content">
                {section.content.split('\n').map((paragraph, pIndex) => {
                  if (paragraph.trim().startsWith('•')) {
                    return (
                      <ul key={pIndex} className="privacy-list">
                        <li>{paragraph.trim().substring(1).trim()}</li>
                      </ul>
                    );
                  } else if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                    return (
                      <h4 key={pIndex} className="subsection-title">
                        {paragraph.trim().replace(/\*\*/g, '')}
                      </h4>
                    );
                  } else if (paragraph.trim()) {
                    return (
                      <p key={pIndex}>{paragraph.trim()}</p>
                    );
                  }
                  return null;
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <div className="privacy-contact">
          <div className="contact-card">
            <h2>Questions About Privacy?</h2>
            <p>We're committed to transparency and protecting your privacy. If you have any questions about this policy or how we handle your data, we're here to help.</p>
            <div className="contact-actions">
              <a href="mailto:privacy@crowmancloud.com" className="btn-primary">
                Email Privacy Team
              </a>
              <a href="mailto:crowmancloud0@gmail.com" className="btn-secondary">
                General Support
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="privacy-footer">
          <p>
            This Privacy Policy is part of our commitment to protecting your privacy and maintaining the trust you place in CrowmanCloud.
            By using our service, you acknowledge that you have read and understood this policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;