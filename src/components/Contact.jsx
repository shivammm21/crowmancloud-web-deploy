import React, { useState } from 'react';
import './Contact.css';

const FAQAccordion = () => {
    const [openItems, setOpenItems] = useState({});

    const faqData = [
        {
            id: 1,
            question: "How do I get started?",
            answer: "Getting started with CrowmanCloud is simple! Just download the desktop application for your operating system (Windows, macOS, or Linux), install it, and drag your project folder into the app. CrowmanCloud will automatically analyze your code and provide comprehensive cloud readiness insights."
        },
        {
            id: 2,
            question: "What is included with the Free plan?",
            answer: "The free version includes many features you know and love, including unlimited project analysis, security vulnerability scanning, multi-cloud recommendations (AWS, GCP, Azure), cost estimation, infrastructure automation, and detailed PDF reports. CrowmanCloud is completely free with no hidden costs or usage limits."
        },
        {
            id: 3,
            question: "How secure is my code with CrowmanCloud?",
            answer: "Your code security is our top priority. CrowmanCloud runs entirely on your local machine - your code never leaves your computer. All analysis happens locally, ensuring complete privacy and security. This local-first approach means your proprietary information remains private and secure."
        },
        {
            id: 4,
            question: "What platforms and technologies are supported?",
            answer: "CrowmanCloud works on Windows 10+, macOS 10.15+, and Linux (Ubuntu 18.04+/CentOS 7+/Fedora 30+). It supports a wide range of programming languages and frameworks including Node.js, Python, Java, .NET, React, Angular, Vue.js, and many more."
        },
        {
            id: 5,
            question: "Can I use CrowmanCloud for commercial projects?",
            answer: "Yes! CrowmanCloud is completely free for both personal and commercial use. There are no restrictions on the type of projects you can analyze, whether they're open source, proprietary, or commercial applications."
        },
        {
            id: 6,
            question: "How accurate are the cost estimations?",
            answer: "Our cost estimations are based on current cloud provider pricing and industry best practices. While estimates provide a good baseline for budgeting, actual costs may vary based on your specific usage patterns, data transfer, and additional services you choose to implement."
        }
    ];

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="faq-accordion">
            {faqData.map((item) => (
                <div key={item.id} className="faq-accordion-item">
                    <button
                        className={`faq-question ${openItems[item.id] ? 'active' : ''}`}
                        onClick={() => toggleItem(item.id)}
                    >
                        <span>{item.question}</span>
                        <span className={`faq-arrow ${openItems[item.id] ? 'open' : ''}`}>
                            ▼
                        </span>
                    </button>
                    <div className={`faq-answer ${openItems[item.id] ? 'open' : ''}`}>
                        <div className="faq-answer-content">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create email content
        const subject = `CrowmanCloud Contact Form - ${formData.name}`;
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Role: ${formData.role || 'Not specified'}

Message:
${formData.message}

---
This message was sent via the CrowmanCloud contact form.
    `.trim();

        // Create Gmail compose URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=crowmancloud0@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open Gmail in a new tab
        window.open(gmailUrl, '_blank');

        // Show success message and reset form
        setSubmitStatus('success');
        setFormData({ name: '', email: '', role: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p>Have questions about CrowmanCloud? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>

                <div className="contact-content">
                    <div className="contact-form-section">
                        <div className="form-container">
                            <h2>Get in Touch</h2>
                            <p>Fill out the form below and our team will get back to you within 24 hours.</p>

                            {submitStatus === 'success' && (
                                <div className="success-message">
                                    <div className="success-icon">✓</div>
                                    <h3>Message Sent Successfully!</h3>
                                    <p>Thank you for contacting us. We'll get back to you soon.</p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="error-message">
                                    <div className="error-icon">✕</div>
                                    <h3>Something went wrong</h3>
                                    <p>Please try again or contact us directly at support@crowmancloud.com</p>
                                </div>
                            )}

                            {submitStatus !== 'success' && (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="role">Role/Title</label>
                                        <select
                                            id="role"
                                            name="role"
                                            value={formData.role}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select your role</option>
                                            <option value="developer">Developer</option>
                                            <option value="devops">DevOps Engineer</option>
                                            <option value="architect">Software Architect</option>
                                            <option value="manager">Engineering Manager</option>
                                            <option value="cto">CTO</option>
                                            <option value="student">Student</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows="6"
                                            placeholder="Tell us about your question, feedback, or how we can help you..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="submit-btn"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    <div className="contact-info-section">
                        <div className="contact-info">
                            <h3>Other Ways to Reach Us</h3>

                            <div className="contact-method">
                                <div className="contact-icon">📧</div>
                                <div className="contact-details">
                                    <h4>Email Support</h4>
                                    <p>crowmancloud0@gmail.com</p>
                                    <span>We typically respond within 24 hours</span>
                                </div>
                            </div>


                            <div className="contact-method">
                                <div className="contact-icon">📚</div>
                                <div className="contact-details">
                                    <h4>Documentation</h4>
                                    <p>Comprehensive guides and tutorials</p>
                                    <span>Find answers to common questions</span>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="contact-icon">🐛</div>
                                <div className="contact-details">
                                    <h4>Bug Reports & Issues</h4>
                                    <p><a href="https://github.com/crowmancloud" target="_blank" rel="noopener noreferrer">Report issues on GitHub</a></p>
                                    <span>Help us improve CrowmanCloud</span>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="contact-icon">🤝</div>
                                <div className="contact-details">
                                    <h4>Contribute</h4>
                                    <p><a href="https://github.com/crowmancloud" target="_blank" rel="noopener noreferrer">Visit our GitHub</a></p>
                                    <span>Join our open-source community</span>
                                </div>
                            </div>
                        </div>

                        <div className="faq-section">
                            <h3>Frequently Asked Questions</h3>
                            <FAQAccordion />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;