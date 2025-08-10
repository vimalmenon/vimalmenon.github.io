# Vimal Menon's Personal Website

A modern, responsive personal website built with Next.js, React, and Material-UI. Features a dynamic admin panel, workflow management system, and a blog platform.

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fvimalmenon.com)](https://vimalmenon.com)
[![Version](https://img.shields.io/badge/version-0.0.38-blue.svg)](https://github.com/vimalmenon/vimalmenon.github.io)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 🌐 Live Website

Visit the live website at [vimalmenon.com](https://vimalmenon.com)

## ✨ Features

- **Responsive Design**: Mobile-first approach with Material-UI components
- **Admin Panel**: Dynamic content management with workflow execution
- **Blog System**: Dynamic blog posts with categorization
- **Theme Switching**: Light/dark mode toggle
- **Contact System**: Contact form integration
- **Workflow Management**: Custom workflow builder with React Flow
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Performance**: Optimized with Next.js static generation

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [Material-UI (MUI) v6](https://mui.com/)
- **Styling**: [Emotion](https://emotion.sh/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Workflow Builder**: [React Flow](https://reactflow.dev/)
- **Analytics**: Google Tag Manager
- **Testing**: Jest with React Testing Library
- **Code Quality**: ESLint, Prettier, TypeScript
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vimalmenon/vimalmenon.github.io.git
cd vimalmenon.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linter
- `npm run eslint` - Run ESLint with warnings limit
- `npm run eslint:fix` - Fix ESLint issues automatically
- `npm run test` - Run Jest tests
- `npm run test:update` - Update Jest snapshots
- `npm run tsc` - Run TypeScript compiler
- `npm run update` - Update dependencies

## 📁 Project Structure

```
src/
├── app/           # Next.js App Router pages
├── common/        # Shared components (Header, Footer, etc.)
├── component/     # Reusable UI components
├── context/       # React contexts
├── data/          # Static data and configurations
├── page/          # Page-specific components
├── style/         # Component-specific styles
├── utility/       # Helper functions
└── test/          # Test files
```

## 🔄 Development Roadmap

### ✅ Completed
- [x] Consistent Link group naming (LinkGroup vs GroupLink)
- [x] Cookie acceptance functionality
- [x] Theme switching UI
- [x] Contact page implementation
- [x] Favicon integration

### 🚧 In Progress
- [ ] Workflow and Execute workflow separation
- [ ] Enhanced Home and About pages
- [ ] Improved Workflow UI/UX
- [ ] Error handling and user feedback
- [ ] Mobile navigation improvements
- [ ] Select with search for items

### 📋 Planned Features
- [ ] Automated release management
- [ ] Command documentation blog
- [ ] Admin panel enhancements
- [ ] React state management refactoring
- [ ] Node validation system
- [ ] Enhanced multiselect component
- [ ] Framer Motion animations
- [ ] Blog sub-navigation
- [ ] Production API integration
- [ ] Sitemap.xml generation

## 💡 Feature Ideas

- Team members showcase
- Enhanced workflow visualization
- Real-time collaboration features

## � Todo

- [ ] NodeForm component improvements (`src/page/AdminWorkflowId/Common/NodeForm/NodeForm.component.tsx`)
- [ ] Add items here as needed
- [ ] General development tasks
- [ ] Bug fixes and improvements

## �🛠️ Development Commands

### Git Operations

Clean up remote branches:
```bash
git remote update origin --prune
```

Remove local branches (except current):
```bash
git branch | grep -v "$(git branch --show-current)" | xargs git branch -D
```

### Code Quality

ESLint with Copilot debugging:
```bash
copilot-debug npm run eslint:fix
```

### K3S Development (Windows)

Start K3S cluster:
```bash
wsl -d myk3s
openrc default
kubectl get nodes
```

Quick start:
```bash
wsl -d myk3s openrc default
```

## 🔗 Useful Resources

- [ReactFlow Documentation](https://reactflow.dev/components/templates/workflow-editor) - Workflow editor implementation
- [K3S Windows Setup](https://mrtn.me/autocloud/main/howtos/k3s-windows-install/) - Kubernetes development environment
- [SonarCloud Analysis](https://sonarcloud.io/project/overview?id=vimalmenon_vimalmenon.github.io) - Code quality metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Vimal Menon**
- Website: [vimalmenon.com](https://vimalmenon.com)
- GitHub: [@vimalmenon](https://github.com/vimalmenon)

---

<p align="center">
  Built with ❤️ using Next.js and TypeScript
</p>
