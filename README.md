# Eric Wnorowski - Portfolio Website

[![Deployment Status](https://github.com/wnorowskie/wnorowskie.github.io/actions/workflows/pages.yml/badge.svg)](https://github.com/wnorowskie/wnorowskie.github.io/actions/workflows/pages.yml)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

> **Live Site**: [https://wnorowskie.github.io/](https://wnorowskie.github.io/)

A modern, responsive portfolio website showcasing my experience as a Software Engineer with 5+ years in building high-performance data pipelines, APIs, and user-centric web applications.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=github)

---

## Features

- **Modern Design** - Clean, professional interface with dark/light theme support
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices  
- **Static Site Generation** - Fast loading with Next.js static export
- **SEO Optimized** - Meta tags, Open Graph, and Twitter Card support
- **Accessible** - Built with accessibility best practices
- **Type-Safe** - Full TypeScript implementation
- **Theme Toggle** - Dark/light mode with system preference detection

---

## Tech Stack

### **Frontend Framework**
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://reactjs.org/)** - Component-based UI library

### **Styling & UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Class Variance Authority](https://cva.style/)** - Component variants

### **Deployment**
- **[GitHub Pages](https://pages.github.com/)** - Static site hosting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline

---

## Quick Start

### **Prerequisites**
- Node.js ≥ 20.0.0
- npm or yarn package manager

### **Local Development**

1. **Clone the repository**
   ```bash
   git clone https://github.com/wnorowskie/wnorowskie.github.io.git
   cd wnorowskie.github.io
   ```

2. **Navigate to the Next.js project directory**
   ```bash
   cd eric-portfolio
   ```

3. **Install dependencies**
   ```bash
   npm run install:legacy
   # or manually: npm install --legacy-peer-deps
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

> **Important**: All npm commands must be run from the `eric-portfolio` directory, not the root directory.

### **Available Scripts**

> **Important**: Run all commands from the `eric-portfolio` directory:
> ```bash
> cd eric-portfolio  # Navigate to project directory first
> ```

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production version |
| `npm run deploy:pages` | Build static export for GitHub Pages |
| `npm run preview` | Preview the static build locally |
| `npm run lint` | Run ESLint code analysis |
| `npm run install:legacy` | Install dependencies with legacy peer deps |

---

## Project Structure

```
wnorowskie.github.io/
├── .github/
│   └── workflows/
│       └── pages.yml              # GitHub Actions deployment
├── eric-portfolio/                # Next.js application
│   ├── app/
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout with metadata
│   │   ├── page.tsx              # Homepage component
│   │   └── not-found.tsx         # Custom 404 page
│   ├── components/
│   │   ├── ui/                   # Reusable UI components
│   │   └── theme-provider.tsx    # Dark/light theme provider
│   ├── hooks/                    # Custom React hooks
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   ├── public/                   # Static assets
│   ├── styles/                   # Additional styles
│   ├── next.config.mjs           # Next.js configuration
│   ├── tailwind.config.ts        # Tailwind CSS config
│   └── package.json              # Dependencies and scripts
└── .nojekyll                     # Disable Jekyll processing
```

---

## Configuration

### **Next.js Config**
The site is configured for static export with GitHub Pages optimization:

```javascript
// next.config.mjs
const nextConfig = {
  output: 'export',              // Enable static export
  images: { unoptimized: true }, // Disable image optimization
  trailingSlash: true,           // Add trailing slashes for GitHub Pages
  // basePath: '/portfolio',     // Uncomment for subdirectory deployment
}
```

### **GitHub Pages Deployment**
Automated deployment via GitHub Actions:
- **Trigger**: Push to `main` branch with changes in `eric-portfolio/`
- **Build**: Node.js 20, npm with legacy peer deps
- **Deploy**: Static files to GitHub Pages environment
- **URL**: https://wnorowskie.github.io/

---

## Customization

### **Theme Colors**
Modify theme colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: "hsl(var(--primary))",
      // Add custom colors here
    }
  }
}
```

### **Content Updates**
- **Personal Info**: Update metadata in `app/layout.tsx`
- **Homepage**: Edit content in `app/page.tsx`
- **Assets**: Add images to `public/` directory

### **Components**
All UI components are in `components/ui/` and built with:
- Radix UI primitives for accessibility
- Tailwind CSS for styling
- TypeScript for type safety

---

## Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Uses Tailwind's responsive utilities (`sm:`, `md:`, `lg:`, `xl:`) for adaptive layouts.

---

## Accessibility

Built with accessibility in mind:
- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Color contrast compliance
- ✅ Focus management

---

## SEO Features

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter previews
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated (via Next.js)
- **Robots.txt**: Search engine directives

---

## Deployment

### **Automatic Deployment**
Every push to `main` branch automatically:
1. Builds the Next.js application
2. Exports static files
3. Deploys to GitHub Pages
4. Updates live site at https://wnorowskie.github.io/

### **Manual Deployment**
Trigger manual deployment via GitHub Actions:
1. Go to **Actions** tab in repository
2. Select **Deploy Next.js to GitHub Pages**
3. Click **Run workflow**

### **Local Preview**
Test production build locally:
```bash
npm run deploy:pages
npm run preview
```

---

## Troubleshooting

### **Common Issues**

**Dependency Conflicts**
```bash
# Solution: Use legacy peer deps
npm install --legacy-peer-deps
```

**Build Failures**
- Check Node.js version (requires ≥ 20)
- Verify all dependencies are installed
- Review GitHub Actions logs

**404 Errors**
- Ensure GitHub Pages source is set to "GitHub Actions"
- Check that workflow completed successfully
- Wait 5-10 minutes for propagation

**Styling Issues**
- Verify Tailwind classes are valid
- Check theme provider is wrapping components
- Ensure CSS is properly imported

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## Contact

**Eric Wnorowski**  
Email: [ericwnorowski@gmail.com](mailto:ericwnorowski@gmail.com)  
LinkedIn: [linkedin.com/in/ericwnorowski](https://linkedin.com/in/eric-wnorowski)  
GitHub: [@wnorowskie](https://github.com/wnorowskie)  
Portfolio: [wnorowskie.github.io](https://wnorowskie.github.io/)

---

<div align="center">

**If you found this helpful, please give it a star!**

Made with ❤️ using Next.js, TypeScript, and Tailwind CSS

</div>
