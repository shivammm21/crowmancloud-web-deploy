import React, { useState } from 'react';
import './Download.css';
import demoImage from '../assets/demo/1.png';
import winLogo from '../assets/win.png';
import linuxLogo from '../assets/linux.png';

const Download = ({ onNavigate }) => {
    const [selectedOS, setSelectedOS] = useState('windows');

    const downloadLinks = {
        windows: {
            name: 'Windows',
            version: '1.0.0',
            size: '45.2 MB',
            url: '#',
            icon: winLogo,
            isImage: true
        },
        mac: {
            name: 'macOS',
            version: '1.0.0',
            size: '42.8 MB',
            url: '#',
            icon: '🍎',
            isImage: false
        },
        linux: {
            name: 'Linux',
            version: '1.0.0',
            size: '38.5 MB',
            url: '#',
            icon: linuxLogo,
            isImage: true
        }
    };

    const handleDownload = (os) => {
        // In a real app, this would trigger the actual download
        console.log(`Downloading CrowmanCloud for ${downloadLinks[os].name}`);
        // You can add actual download logic here
    };

    return (
        <div className="download-page">
            <div className="download-container">
                <div className="download-content">
                    <div className="download-header">
                        <h1>Get Started with CrowmanCloud</h1>
                        <p>Download the free desktop app and get a complete cloud readiness report in minutes. Analyze your projects securely on your local machine—no code is ever uploaded.</p>
                    </div>
                    <div className="hero-image-section">
                        <div className="laptop-hero">
                            <img src={demoImage} alt="CrowmanCloud Application Interface" />
                        </div>
                    </div>



                    <div className="download-main">
                        <div className="download-left">
                            <div className="tool-section">
                                <div className="version-header">
                                    <h3>Stable – 1.0.0 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('release-notes'); }} className="release-notes-link">(see release notes)</a></h3>
                                </div>

                                <div className="download-options">
                                    <div className="download-option">
                                        <div className="os-info">
                                            {downloadLinks.windows.isImage ? (
                                                <img src={downloadLinks.windows.icon} alt="Windows" className="os-icon-large" />
                                            ) : (
                                                <span className="os-icon-large">{downloadLinks.windows.icon}</span>
                                            )}
                                            <h4>Windows 10/11 (64bit)</h4>
                                        </div>
                                        <button onClick={() => navigateToPage('download')} className="btn btn-primary btn-small">Download</button>
                                        <p className="os-description">Home, Pro (recommended), Enterprise</p>

                                    </div>

                                    <div className="download-option">
                                        <div className="os-info">
                                            {downloadLinks.linux.isImage ? (
                                                <img src={downloadLinks.linux.icon} alt="Linux" className="os-icon-large" />
                                            ) : (
                                                <span className="os-icon-large">{downloadLinks.linux.icon}</span>
                                            )}
                                            <h4>Linux (64bit)</h4>
                                        </div>
                                        <button onClick={() => navigateToPage('download')} className="btn btn-primary btn-small">Download</button>
                                        <p className="os-description">Ubuntu, Debian, Fedora</p>


                                    </div>
                                </div>

                                <div className="download-info">
                                    <p>By downloading and using CrowmanCloud, I agree to the <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }}>Privacy Policy</a> and <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('terms'); }}>Terms</a>.</p>
                                    <p><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('release-notes'); }} className="release-notes">Release Notes →</a></p>

                                </div>
                            </div>

                            <div className="version-section">
                                <h3>Version & Release Info Section</h3>
                                <div className="version-info">
                                    <div className="version-item">
                                        <strong>Version:</strong> {downloadLinks[selectedOS].version}
                                    </div>
                                    <div className="version-item">
                                        <strong>Release Date:</strong> July 29, 2025
                                    </div>
                                    <div className="version-item">
                                        <strong>File Size:</strong> {downloadLinks[selectedOS].size}
                                    </div>
                                </div>
                                <p>See what's new in the latest version. Check out the <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('release-notes'); }} className="release-link">[Release Notes]</a>.</p>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="features-section">
                    <h2>What you'll get with CrowmanCloud</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🔍</div>
                            <h4>Complete Code Analysis</h4>
                            <p>Comprehensive scanning of your codebase for cloud readiness, security vulnerabilities, and best practices.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">☁️</div>
                            <h4>Multi-Cloud Recommendations</h4>
                            <p>Get intelligent suggestions for AWS, Google Cloud, and Azure based on your project's specific needs.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">💰</div>
                            <h4>Cost Estimation</h4>
                            <p>Detailed cost projections for your cloud deployment with interactive pricing breakdowns.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🔒</div>
                            <h4>Local-First Security</h4>
                            <p>Your code never leaves your machine. All analysis happens locally for maximum security and privacy.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">⚡</div>
                            <h4>Infrastructure Automation</h4>
                            <p>Auto-generate Dockerfiles, deployment configs, and other infrastructure files tailored to your stack.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">📊</div>
                            <h4>Detailed Reports</h4>
                            <p>Export comprehensive PDF reports with actionable insights and recommendations for your team.</p>
                        </div>
                    </div>
                </div>

                <div className="system-requirements">
                    <h2>System Requirements</h2>
                    <div className="requirements-grid">
                        <div className="requirement-item">

                            {downloadLinks.windows.isImage ? (
                                <img src={downloadLinks.windows.icon} alt="Windows" className="requirement-os-icon" />
                            ) : (
                                <div className="requirement-os-icon" style={{ fontSize: '2.5rem', lineHeight: '40px' }}>{downloadLinks.windows.icon}</div>
                            )}
                            <h4>Windows</h4>
                            <ul>
                                <li>Windows 10 or later (64-bit)</li>
                                <li>4 GB RAM minimum, 8 GB recommended</li>
                                <li>500 MB free disk space</li>
                                <li>Internet connection for updates</li>
                            </ul>
                        </div>
                        <div className="requirement-item">

                            {downloadLinks.linux.isImage ? (
                                <img src={downloadLinks.linux.icon} alt="Linux" className="requirement-os-icon" />
                            ) : (
                                <div className="requirement-os-icon" style={{ fontSize: '2.5rem', lineHeight: '40px' }}>{downloadLinks.linux.icon}</div>
                            )}
                            <h4>Linux</h4>
                            <ul>
                                <li>Ubuntu 18.04+ / CentOS 7+ / Fedora 30+</li>
                                <li>4 GB RAM minimum, 8 GB recommended</li>
                                <li>500 MB free disk space</li>
                                <li>Internet connection for updates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;