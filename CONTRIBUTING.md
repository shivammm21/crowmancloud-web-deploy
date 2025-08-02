# Contributing to CrowmanCloud Landing Page

Thank you for your interest in contributing to the CrowmanCloud landing page! We welcome contributions from developers of all skill levels. This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **🐛 Bug Reports** - Help us identify and fix issues
- **✨ Feature Requests** - Suggest new features or improvements
- **📝 Documentation** - Improve or add to our documentation
- **🎨 Design Improvements** - Enhance UI/UX and visual design
- **🔧 Code Contributions** - Fix bugs, add features, or optimize performance
- **🌐 Translations** - Help make CrowmanCloud accessible globally
- **📱 Accessibility** - Improve accessibility and usability

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- A **GitHub account**
- Basic knowledge of **React** and **JavaScript**

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/landing-page-crowmancloud.git
   cd landing-page-crowmancloud
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/landing-page-crowmancloud.git
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Verify setup**
   - Open `http://localhost:5173` in your browser
   - Ensure the landing page loads correctly
   - Test navigation between different pages

## 📋 Contribution Workflow

### 1. Create an Issue (Optional but Recommended)

Before starting work, consider creating an issue to:
- Discuss your proposed changes
- Get feedback from maintainers
- Avoid duplicate work
- Ensure alignment with project goals

### 2. Create a Feature Branch

```bash
# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main

# Create a new branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 3. Make Your Changes

Follow our coding standards and guidelines (see below).

### 4. Test Your Changes

```bash
# Run linting
npm run lint

# Build the project
npm run build

# Test the build
npm run preview
```

### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature description"
```

### 6. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 📝 Coding Standards

### JavaScript/React Guidelines

- **Use functional components** with hooks instead of class components
- **Follow React best practices** for state management and lifecycle
- **Use meaningful variable and function names**
- **Keep components small and focused** on a single responsibility
- **Use PropTypes or TypeScript** for type checking (when applicable)

### Code Style

- **Indentation**: 2 spaces (no tabs)
- **Quotes**: Single quotes for strings
- **Semicolons**: Use semicolons consistently
- **Line length**: Maximum 100 characters
- **Trailing commas**: Use trailing commas in objects and arrays

### Example Code Style

```javascript
// Good
const Header = ({ onNavigate, currentPage = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="landing-header">
      {/* Component content */}
    </header>
  );
};

// Avoid
const Header = function(props) {
  var mobileMenuOpen = false
  // Less clear implementation
}
```

### CSS Guidelines

- **Use CSS custom properties** for consistent theming
- **Follow BEM methodology** for class naming when appropriate
- **Mobile-first responsive design**
- **Avoid inline styles** - use CSS classes
- **Group related styles** logically

### File Organization

- **Component files**: `ComponentName.jsx`
- **Style files**: `ComponentName.css`
- **Keep components in** `src/components/`
- **Keep assets in** `src/assets/`
- **One component per file**

## 🎨 Design Guidelines

### Visual Consistency

- **Follow the existing design system** and color palette
- **Maintain consistent spacing** and typography
- **Ensure responsive design** works across all screen sizes
- **Test on multiple browsers** and devices

### Accessibility

- **Use semantic HTML** elements
- **Provide alt text** for images
- **Ensure keyboard navigation** works properly
- **Maintain proper color contrast** ratios
- **Test with screen readers** when possible

## 🧪 Testing Guidelines

### Manual Testing

Before submitting a PR, please test:

- **All navigation links** work correctly
- **Responsive design** on different screen sizes
- **Form submissions** (contact form, etc.)
- **Mobile menu** functionality
- **Cross-browser compatibility** (Chrome, Firefox, Safari, Edge)

### Automated Testing

- **Run ESLint**: `npm run lint`
- **Build successfully**: `npm run build`
- **No console errors** in development or production

## 📖 Documentation

### Code Documentation

- **Add comments** for complex logic
- **Document component props** and their types
- **Update README.md** if you add new features
- **Include JSDoc comments** for functions when helpful

### Commit Messages

Follow conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(contact): add FAQ accordion functionality
fix(header): resolve mobile menu overlay issue
docs(readme): update installation instructions
style(pricing): improve responsive layout
```

## 🔍 Pull Request Guidelines

### Before Submitting

- [ ] Code follows the style guidelines
- [ ] Self-review of the code completed
- [ ] Comments added for hard-to-understand areas
- [ ] Documentation updated if needed
- [ ] No new warnings or errors introduced
- [ ] Tested on multiple screen sizes
- [ ] Tested on different browsers

### PR Description Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] No console errors

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Additional Notes
Any additional information or context.
```

## 🐛 Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Clear description** of the issue
- **Steps to reproduce** the problem
- **Expected behavior** vs actual behavior
- **Screenshots or videos** if helpful
- **Browser and OS information**
- **Console errors** if any

### Feature Requests

For feature requests, please include:

- **Clear description** of the proposed feature
- **Use case** and why it would be valuable
- **Possible implementation** ideas (optional)
- **Mockups or examples** if applicable

## 🌟 Recognition

Contributors will be recognized in several ways:

- **Contributors list** in the README
- **Mention in release notes** for significant contributions
- **GitHub contributor badge** on your profile
- **Community recognition** in project discussions

## 📞 Getting Help

If you need help or have questions:

- **Create an issue** for technical questions
- **Join discussions** in existing issues
- **Contact the team** at crowmancloud0@gmail.com
- **Check documentation** in the `/docs` folder

## 📋 Code of Conduct

### Our Pledge

We are committed to making participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Expected Behavior

- **Be respectful** and inclusive
- **Use welcoming language**
- **Be collaborative**
- **Focus on what is best** for the community
- **Show empathy** towards other community members

### Unacceptable Behavior

- **Harassment** of any kind
- **Discriminatory language** or actions
- **Personal attacks**
- **Trolling or insulting comments**
- **Publishing private information** without permission

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to CrowmanCloud! Your efforts help make cloud deployment more accessible and secure for developers worldwide. 🚀

**Questions?** Feel free to reach out to the maintainers or create an issue for clarification.