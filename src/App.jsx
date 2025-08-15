import './App.css'
import React, { useState } from 'react';
import logo from './assets/logo.png'
import landingVideo from './assets/demo-video.mp4'
import macbookImage from './assets/demo/1.png'
import macbookImage2 from './assets/demo/2.png'
import macbookImage3 from './assets/demo/3.png'
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Header from './components/Header';
import Download from './components/Download';
import Contact from './components/Contact';
import About from './components/About';
import HelpCenter from './components/HelpCenter';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Security from './components/Security';
import Documentation from './components/Documentation';
import Blog from './components/Blog';
import Career from './components/Career';
import ReleaseNotes from './components/ReleaseNotes';
import Tutorial from './components/Tutorial';
import Architecture from './components/Architecture';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToPage = (page) => {
    console.log('Navigating to:', page);
    setCurrentPage(page);
  };

  // Render pricing page if selected
  if (currentPage === 'pricing') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <Pricing onNavigate={navigateToPage} />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render download page if selected
  if (currentPage === 'download') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <Download onNavigate={navigateToPage} />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render contact page if selected
  if (currentPage === 'contact') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <Contact />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render about page if selected
  if (currentPage === 'about') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <About onNavigate={navigateToPage} />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render help center page if selected
  if (currentPage === 'help') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <HelpCenter onNavigate={navigateToPage} />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render privacy policy page if selected
  if (currentPage === 'privacy') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <Privacy />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render terms of service page if selected
  if (currentPage === 'terms') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <Terms />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render security page if selected
  if (currentPage === 'security') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <Security onNavigate={navigateToPage} />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render documentation page if selected
  if (currentPage === 'documentation') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <Documentation onNavigate={navigateToPage} />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render blog page if selected
  if (currentPage === 'blog') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <Blog onNavigate={navigateToPage} />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render career page if selected
  if (currentPage === 'career') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <Career onNavigate={navigateToPage} />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render release notes page if selected
  if (currentPage === 'release-notes') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <ReleaseNotes onNavigate={navigateToPage} />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render tutorial page if selected
  if (currentPage === 'tutorial') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <Tutorial onNavigate={navigateToPage} />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render architecture page if selected
  if (currentPage === 'architecture') {
    return (
      <div className="landing-root">
        <Header onNavigate={navigateToPage} currentPage={currentPage} />
        <Architecture onNavigate={navigateToPage} />
        <Footer onNavigate={navigateToPage} />
      </div>
    );
  }



  return (
    <div className="landing-root">
      <Header onNavigate={navigateToPage} currentPage={currentPage} />
      <main className="landing-main">
        <section className="landing-content">
          <h1>Deploy to the Cloud with Confidence</h1>
          <p className="landing-description">
            CrowmanCloud is the essential pre-deployment platform for developers. Analyze your source code, automate infrastructure setup, get intelligent cloud recommendations, and estimate costs—all from a secure, local-first desktop application.
          </p>
          <div className="landing-buttons">
            <button onClick={() => navigateToPage('download')} className="btn btn-primary">Download for Free</button>
            <a href="#" className="btn btn-outline">Read the Docs</a>
          </div>
        </section>
        <section className="landing-image">
          <img src={logo} alt="CrowmanCloud Logo" />
        </section>
      </main>
      <div className="landing-gradient-section">
        <div className="gradient-content">
          <h2>A Complete Pre-Deployment Toolkit</h2>
          <p className="gradient-subtitle">
            CrowmanCloud gives you everything you need to bridge the gap between local development and a successful cloud deployment.
          </p>
          <div className="gradient-features">
            <div className="feature-col">
              <h3>Readiness Analysis</h3>
              <p>Go beyond simple linting. Our static analysis engine scans your codebase for cloud-specific issues, security vulnerabilities, and hardcoded secrets, ensuring your application is architecturally sound for the cloud.</p>
            </div>
            <div className="feature-col">
              <h3>Infrastructure Automation</h3>
              <p>Stop guessing your setup. CrowmanCloud automatically detects missing infrastructure like Dockerfiles and generates best-practice, production-ready files tailored to your project's specific technology stack.</p>
            </div>
            <div className="feature-col">
              <h3>Cloud Intelligence</h3>
              <p>Get the right fit for your app. Based on your project's framework and dependencies, our tool recommends the most suitable services from AWS, GCP, and Azure, explaining the pros and cons of each.</p>
            </div>
            <div className="feature-col">
              <h3>Cost Estimation</h3>
              <p>Plan your budget before you deploy. Get detailed, interactive cost estimates for your recommended cloud services. Adjust instance sizes and see how costs change in real-time to make informed financial decisions.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="tool-intro-section">
        <div className="tool-intro-content">
          <div className="tool-intro-video">
            <iframe
              width="720"
              height="405"
              src="https://www.youtube.com/embed/ErtvlAxKvDs?si=cjvuxpoTeoyIJt5e&controls=0&rel=0"
              title="CrowmanCloud Tool Introduction"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>
          <div className="tool-intro-info">
            <h2>See CrowmanCloud in Action</h2>
            <p>Watch our comprehensive tool introduction to see how CrowmanCloud streamlines your pre-deployment workflow.</p>
            <ul>
              <li>Complete project analysis in under 2 minutes</li>
              <li>Automated infrastructure file generation</li>
              <li>Real-time cloud service recommendations</li>
              <li>Interactive cost estimation dashboard</li>
              <li>Security vulnerability detection</li>
            </ul>
            <p>Discover how our local-first approach keeps your code secure while providing enterprise-grade analysis capabilities.</p>
          </div>
        </div>
      </section>

      <section className="local-first-section">
        <h2>Why Local-First Matters</h2>
        <h3>Your Code Stays Yours.</h3>
        <p>In today's world, your source code is your most valuable asset. Online analysis tools require you to upload your entire project, creating an unacceptable security risk for any professional organization.</p>
        <p>CrowmanCloud is built on a fundamental principle: <b>your code never leaves your machine.</b></p>
        <p>Our powerful analysis engine runs entirely on your localhost. This means you get all the benefits of a comprehensive pre-deployment check with the absolute peace of mind that your proprietary information remains private and secure. It's the enterprise-grade security you need, with the developer-friendly workflow you want.</p>

      </section>

      <section className="team-gradient-section">
        <div className="team-gradient-content">
          <h2>Built for Every Stage of Your Team</h2>
          <p>From individual developers to large DevOps teams, CrowmanCloud provides value across your entire engineering organization.</p>
          <div className="team-features-row">
            <div className="team-feature-col">
              <div className="team-feature-icon">&lt;/&gt;</div>
              <h3>For Developers</h3>
              <p>Get instant feedback on your cloud readiness without leaving your workflow. Generate Dockerfiles and other boilerplate configurations in seconds, so you can focus on building features, not on infrastructure setup.</p>
            </div>
            <div className="team-feature-col">
              <div className="team-feature-icon">🔗</div>
              <h3>For DevOps Engineers</h3>
              <p>Enforce cloud best practices and consistency across all projects. Integrate the CrowmanCloud CLI into your CI/CD pipelines to automatically validate every build before it gets deployed, preventing costly errors.</p>
            </div>
            <div className="team-feature-col">
              <div className="team-feature-icon">👥</div>
              <h3>For Team Leads &amp; Managers</h3>
              <p>Ensure your teams are building scalable, secure, and cost-effective applications. Use the dashboard to get a high-level overview of project readiness and proactively manage potential cloud spending.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="product-demo-section">
        <div className="demo-content">
          <h1>Built for Every Stage of Your Team</h1>
          <h2>Analyze, diagnose, and get intelligent recommendations for your applications in one place. Get early, actionable insights on cloud readiness by running a complete, secure analysis on your local machine without jumping between tools.</h2>
          <div className="demo-features">
            <div className="demo-text">
              <div className="demo-feature">
                <h3>Go from code to cloud-ready in minutes</h3>
                <p>Transform cloud migration from a complex solo task into a streamlined team effort. Get to that first successful deployment faster, improve developer onboarding, and increase architectural consistency across all your projects.</p>
              </div>
              <div className="demo-feature">
                <h3>Analyze, test, and interact with your project in seconds</h3>
                <p>Get started instantly. Just drag and drop your project folder or provide a Git repository link to initiate a comprehensive analysis of your entire codebase.</p>
              </div>
            </div>
            <div className="demo-image">
              <img src={macbookImage} alt="CrowmanCloud Application Interface" />
            </div>
          </div>
        </div>
      </section>
      <section className="readiness-report-section">
        <div className="readiness-content">
          <div className="demo-image">
            <img src={macbookImage2} alt="CrowmanCloud Readiness Report Interface" />
          </div>
          <div className="readiness-text">
            <h2>Reduce errors with a clear Readiness Report</h2>
            <p>Eliminate guesswork and manual checks. Organize your analysis into a clear, actionable checklist where potential issues can be seen in real-time by everyone, reducing the risk of deployment failures.</p>
          </div>
        </div>
      </section>
      <section className="deployment-quality-section">
        <div className="deployment-content">
          <div className="deployment-text">
            <h2>Fewer roadblocks means higher-quality deployments</h2>
            <p>Move fast to build quality applications without breaking things. By managing every phase of the pre-deployment workflow on a single platform, your team can make informed decisions together.</p>
          </div>
          <div className="demo-image">
            <img src={macbookImage3} alt="CrowmanCloud Deployment Quality Interface" />
          </div>
        </div>
      </section>
      <Footer onNavigate={navigateToPage} />
    </div>
  )
}

export default App
