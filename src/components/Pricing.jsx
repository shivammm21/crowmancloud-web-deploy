import React, { useState } from 'react';
import './Pricing.css';

const Pricing = ({ onNavigate }) => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = {
    free: {
      name: 'Free',
      description: 'Perfect for developers getting started with cloud deployment analysis',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        'Complete code analysis',
        'Infrastructure recommendations',
        'Multi-cloud recommendations (AWS, GCP, Azure)',
        'Cost estimation',
        'Security vulnerability scanning',
        'Local-first security',
        'Export reports (PDF)',
        'Regular updates',
        'Cross-platform support (Windows, Mac, Linux)'
      ],
      limitations: [],
      cta: 'Download for Free',
      popular: true
    }
  };

  const formatPrice = (price) => {
    if (price === 'Custom') return 'Custom';
    if (price === 0) return 'Free';
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const getMonthlyEquivalent = (yearlyPrice) => {
    if (yearlyPrice === 'Custom' || yearlyPrice === 0) return '';
    return `₹${Math.round(yearlyPrice / 12).toLocaleString('en-IN')}/month`;
  };

  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>Crowman<span style={{ color: 'gray' }}>Cloud</span> is completely free</h1>
        <p>Get all the powerful features you need for cloud deployment analysis at no cost. Built with local-first security to keep your code private.</p>
      </div>

      <div className="pricing-grid">
        {Object.entries(plans).map(([key, plan]) => (
          <div key={key} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}

            <div className="plan-header">
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>

              <div className="price-section">
                <div className="price">
                  {billingCycle === 'monthly'
                    ? formatPrice(plan.monthlyPrice)
                    : formatPrice(plan.yearlyPrice)
                  }
                </div>
                {billingCycle === 'monthly' && plan.monthlyPrice !== 0 && plan.monthlyPrice !== 'Custom' && (
                  <div className="price-period">/month</div>
                )}
                {billingCycle === 'yearly' && plan.yearlyPrice !== 0 && plan.yearlyPrice !== 'Custom' && (
                  <div className="price-details">
                    <div className="price-period">/year</div>
                    <div className="monthly-equivalent">{getMonthlyEquivalent(plan.yearlyPrice)}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="plan-features">
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index} className="feature-included">
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
                {plan.limitations.map((limitation, index) => (
                  <li key={index} className="feature-limitation">
                    <span className="limitation-mark">!</span>
                    {limitation}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              className={`cta-button ${plan.popular ? 'primary' : 'secondary'}`}
              onClick={() => onNavigate('download')}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Is CrowmanCloud really completely free?</h4>
            <p>Yes! CrowmanCloud is completely free with no hidden costs, usage limits, or premium features. We believe every developer should have access to powerful cloud deployment tools.</p>
          </div>
          <div className="faq-item">
            <h4>Is my code secure?</h4>
            <p>Absolutely. CrowmanCloud runs entirely on your local machine. Your code never leaves your computer, ensuring complete privacy and security.</p>
          </div>
          <div className="faq-item">
            <h4>What platforms are supported?</h4>
            <p>CrowmanCloud works on Windows, macOS, and Linux. Download the version that matches your operating system and get started immediately.</p>
          </div>
          <div className="faq-item">
            <h4>How do I get support?</h4>
            <p>We provide community support through our GitHub repository, documentation, and community forums. You can also reach out to us directly for any questions.</p>
          </div>
        </div>
      </div>

      <div className="pricing-cta">
        <h2>Ready to get started?</h2>
        <p>Join thousands of developers who trust CrowmanCloud for their deployment needs.</p>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={() => onNavigate('download')}>Download Now</button>
          <button className="btn-secondary">View Documentation</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;