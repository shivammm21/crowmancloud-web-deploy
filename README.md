# CrowmanCloud Landing Page

A modern, responsive landing page for CrowmanCloud - a local-first cloud deployment analysis platform for developers. Built with React and Vite for optimal performance and developer experience.

## 🚀 About CrowmanCloud

CrowmanCloud is a desktop application that helps developers analyze their code for cloud deployment readiness. Unlike cloud-based tools, CrowmanCloud runs entirely on your local machine, ensuring your source code never leaves your computer while providing enterprise-grade analysis.

### Key Features
- **🔍 Complete Code Analysis** - Comprehensive scanning for cloud readiness and security vulnerabilities
- **☁️ Multi-Cloud Support** - Recommendations for AWS, Google Cloud, and Microsoft Azure
- **💰 Cost Estimation** - Detailed cost projections for cloud services
- **🔒 Local-First Security** - Your code never leaves your machine
- **⚡ Infrastructure Automation** - Auto-generate Dockerfiles and deployment configs
- **📊 Detailed Reports** - Export comprehensive PDF reports

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: CSS3 with custom properties
- **Linting**: ESLint with React plugins
- **Package Manager**: npm

## 📁 Project Structure

```
landing-page-crowmancloud/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                 # Images and static assets
│   │   ├── logo.png           # CrowmanCloud logo
│   │   ├── MacBook Air - *.png # Product screenshots
│   │   ├── founders.jpg       # Team photo
│   │   └── ...               # OS icons and backgrounds
│   ├── components/            # React components
│   │   ├── About.jsx         # About page component
│   │   ├── Contact.jsx       # Contact form and FAQ
│   │   ├── Documentation.jsx # Documentation portal
│   │   ├── Download.jsx      # Download page with OS selection
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Header.jsx        # Navigation header
│   │   ├── HelpCenter.jsx    # Help and support
│   │   ├── Pricing.jsx       # Pricing information (free)
│   │   ├── Privacy.jsx       # Privacy policy
│   │   ├── Security.jsx      # Security information
│   │   └── Terms.jsx         # Terms of service
│   ├── App.jsx               # Main application component
│   ├── App.css              # Global styles
│   ├── index.css            # Base styles
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── eslint.config.js        # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/crowmancloud/crowmancloud-web.git
   cd landing-page-crowmancloud
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Features & Pages

### Main Landing Page
- Hero section with product overview
- Feature highlights and benefits
- Product demonstration with screenshots
- Team information and company story

### Navigation Pages
- **About** - Company story, founders, mission, and values
- **Pricing** - Free tier information and FAQ
- **Download** - Multi-platform download options with system requirements
- **Contact** - Contact form with FAQ accordion
- **Documentation** - Getting started guides and API reference
- **Help Center** - Support resources and tutorials

### Legal Pages
- **Privacy Policy** - Data protection and privacy practices
- **Terms of Service** - Usage terms and conditions
- **Security** - Security practices and compliance information

## 🎯 Key Components

### Header Component
- Responsive navigation with dropdown menus
- Mobile-friendly hamburger menu
- Dynamic page routing
- Call-to-action buttons

### Footer Component
- Organized link sections
- Social media integration
- Copyright and legal links
- Consistent branding

### Download Component
- Multi-platform support (Windows, macOS, Linux)
- System requirements display
- Feature highlights
- Version information

### Contact Component
- Interactive contact form
- FAQ accordion functionality
- Multiple contact methods
- Form validation and submission

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React plugin for fast development and optimized builds:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### ESLint Configuration
Configured with React-specific rules for code quality:
- React hooks rules
- React refresh plugin
- Modern JavaScript standards

## 🎨 Styling Approach

- **CSS Custom Properties** - For consistent theming
- **Responsive Design** - Mobile-first approach
- **Component-Scoped Styles** - Each component has its own CSS file
- **Modern CSS Features** - Grid, Flexbox, and CSS animations

## 📱 Responsive Design

The landing page is fully responsive with breakpoints for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Vercel** - Zero-config deployment
- **Netlify** - Drag and drop deployment
- **GitHub Pages** - Free hosting for open source
- **AWS S3** - Scalable cloud hosting

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Whether you want to fix bugs, add features, improve documentation, or enhance the design, your contributions are valued.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Detailed Guidelines

For comprehensive contribution guidelines, coding standards, development setup, and community guidelines, please read our **[Contributing Guide](CONTRIBUTING.md)**.

The contributing guide covers:
- 🚀 Development setup and prerequisites
- 📝 Coding standards and best practices
- 🎨 Design guidelines and accessibility requirements
- 🧪 Testing procedures
- 📋 Pull request process and templates
- 🐛 How to report issues and request features
- 📞 Getting help and community support

### Types of Contributions Welcome

- **🐛 Bug Reports** - Help us identify and fix issues
- **✨ Feature Requests** - Suggest new features or improvements
- **📝 Documentation** - Improve or add to our documentation
- **🎨 Design Improvements** - Enhance UI/UX and visual design
- **🔧 Code Contributions** - Fix bugs, add features, or optimize performance
- **🌐 Translations** - Help make CrowmanCloud accessible globally
- **📱 Accessibility** - Improve accessibility and usability

**New to open source?** Check out our [Contributing Guide](CONTRIBUTING.md) for a beginner-friendly introduction to contributing to this project.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: crowmancloud0@gmail.com
- **Website**: [CrowmanCloud Landing Page](https://your-domain.com)
- **GitHub**: [Project Repository](https://github.com/your-username/landing-page-crowmancloud)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- The open-source community for inspiration and resources

---

**Built with ❤️ by the CrowmanCloud team**
