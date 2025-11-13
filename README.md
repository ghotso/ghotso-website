# ghotso.dev - Personal Portfolio Website

A modern, bilingual (English/German) personal portfolio website for ghotso, built with Next.js, TypeScript, Tailwind CSS, and next-intl.

## Features

- 🌍 **Internationalization**: Full support for English and German, with easy extensibility for more languages
- 🎨 **Custom Design**: Follows the ghotso brand style guide with neon cyberpunk aesthetics
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Static Generation**: Optimized for static site generation
- 🎯 **Accessible**: Built with accessibility best practices
- 🚀 **Modern Stack**: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Deployment**: Static export ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ghotso-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This will generate a static export in the `out` directory, ready for deployment.

**Note**: This project uses static export (`output: 'export'`), which means:
- Middleware is disabled (not compatible with static export)
- Locale routing is handled via the `[locale]` route structure
- The root redirect (`/`) will redirect to the default locale (`/en`) at build time
- For production deployment, you may need to configure your hosting provider to handle the root redirect if the build-time redirect doesn't work

## Deployment to Cloudflare Pages

This project is configured for deployment to Cloudflare Pages. Cloudflare Pages supports automatic deployments from Git repositories.

### Setup Instructions

#### Option 1: Git Integration (Recommended)

1. **Connect your repository to Cloudflare Pages:**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to **Pages** → **Create a project**
   - Select **Connect to Git**
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository

2. **Configure build settings:**
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave as default)
   - **Node.js version**: 20 (or latest LTS)

3. **Environment variables (if needed):**
   - Add `NODE_ENV=production` in the build environment variables
   - Cloudflare Pages will automatically set this, but you can add it explicitly

4. **Custom domain (ghotso.dev):**
   - After the first deployment, go to your project settings
   - Navigate to **Custom domains**
   - Click **Set up a custom domain**
   - Enter `ghotso.dev`
   - Follow the DNS configuration instructions
   - Enable **Always Use HTTPS**

5. **Automatic deployments:**
   - Every push to `main` will automatically trigger a build and deployment
   - Preview deployments are created for pull requests

#### Option 2: Wrangler CLI

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   wrangler pages deploy out --project-name=ghotso-website
   ```

#### Option 3: Direct Upload

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload via Cloudflare Dashboard:**
   - Go to **Pages** → **Create a project** → **Upload assets**
   - Drag and drop the contents of the `out` directory
   - Deploy

### Build Configuration

The project is already configured for Cloudflare Pages:
- Static export enabled for production builds
- Images are unoptimized (Cloudflare handles optimization)
- No base path required (works with custom domains)

### Notes

- Cloudflare Pages automatically handles HTTPS and CDN distribution
- Preview deployments are available for pull requests
- Build logs are available in the Cloudflare dashboard
- Custom domain DNS can be managed through Cloudflare if you use their nameservers

## Project Structure

```
ghotso-website/
├── app/                    # Next.js App Router pages
│   ├── [locale]/          # Localized routes
│   │   ├── about/         # About page
│   │   ├── projects/      # Projects page
│   │   ├── contact/       # Contact page
│   │   ├── legal/         # Legal page
│   │   ├── layout.tsx     # Locale layout
│   │   └── page.tsx       # Home page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── home/             # Home page components
│   ├── about/            # About page components
│   ├── projects/         # Projects page components
│   ├── contact/          # Contact page components
│   ├── legal/            # Legal page components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── LanguageSwitcher.tsx
│   └── ProjectCard.tsx
├── i18n/                 # Internationalization
│   ├── messages/         # Translation files
│   │   ├── en.json       # English translations
│   │   └── de.json       # German translations
│   ├── request.ts        # i18n request config
│   └── routing.ts        # i18n routing config
├── styleguide/           # Style guide documentation
└── public/               # Static assets
```

## Pages

- **Home** (`/`): Hero section, featured projects, and interests
- **About** (`/about`): Personal journey, interests, and fun facts
- **Projects** (`/projects`): Full project showcase with filtering
- **Contact** (`/contact`): Contact information and social links
- **Legal** (`/legal`): Imprint, disclosure, and privacy policy (Austrian law placeholders)

## Customization

### Adding a New Language

1. Add the locale to `i18n/routing.ts`:
```typescript
locales: ['en', 'de', 'fr'], // Add 'fr' for French
```

2. Create a new translation file `i18n/messages/fr.json` with the same structure as `en.json`

3. Update the language switcher if needed

### Updating Content

- **Translations**: Edit files in `i18n/messages/`
- **Projects**: Update the projects array in `components/projects/ProjectsContent.tsx`
- **Styling**: Modify `tailwind.config.ts` or component files

## Style Guide

The website follows the ghotso brand style guide:
- **Primary Color**: Neon yellow-green (#C8FF3D)
- **Accent Color**: Glowing blue (#3EDCFF)
- **Background**: Dark (#030712)
- **Typography**: Inter font family
- **Effects**: Subtle neon glows and animations

See `styleguide/STYLEGUIDE.md` for complete design specifications.

## Placeholders & Customization Checklist

Before deploying, make sure to replace all placeholders with your actual data:

### 🖼️ Images

1. **Logo** (`components/home/Hero.tsx`)
   - **Location**: Lines 13-25
   - **Current**: Placeholder "g" letter with gradient background
   - **Action**: 
     - Place your logo image in `public/logo.png` (or your preferred format)
     - Replace the placeholder div with:
     ```tsx
     <Image src="/logo.png" alt="ghotso" width={96} height={96} className="mb-8 mx-auto" />
     ```
     - Don't forget to import `Image` from `next/image` at the top of the file

### 📧 Contact Information

2. **Contact Page** (`components/contact/ContactContent.tsx`)
   - **Location**: Lines 8-29
   - **Placeholders to update**:
     - Email: `contact@ghotso.dev` → Replace with your actual email
     - GitHub: `https://github.com/ghotso` → Update with your GitHub username
     - LinkedIn: `https://linkedin.com/in/ghotso` → Update with your LinkedIn profile
     - Twitter: `https://twitter.com/ghotso` → Update with your Twitter/X handle
   - **Note**: Remove or add social links as needed

3. **Footer GitHub Link** (`components/Footer.tsx`)
   - **Location**: Line 24
   - **Action**: Update `https://github.com/ghotso` with your actual GitHub profile URL

4. **Hero Section GitHub Link** (`components/home/Hero.tsx`)
   - **Location**: Line 45
   - **Action**: Update `https://github.com/ghotso` with your actual GitHub profile URL

### 💼 Project Data

5. **Featured Projects** (`components/home/FeaturedProjects.tsx`)
   - **Location**: Lines 11-44
   - **Action**: Update the `featuredProjects` array with your actual projects:
     - Update project titles, descriptions, tags, and status
     - Replace GitHub URLs with your actual repository URLs
     - Add `projectUrl` if you have live demos

6. **All Projects** (`components/projects/ProjectsContent.tsx`)
   - **Location**: Lines 10-43
   - **Action**: Update the `allProjects` array with your complete project list:
     - Update project titles, descriptions, tags, and status
     - Replace GitHub URLs with your actual repository URLs
     - Add `projectUrl` for projects with live demos
     - Add or remove projects as needed

### ⚖️ Legal Information

7. **Imprint / Impressum** (`i18n/messages/en.json` and `i18n/messages/de.json`)
   - **Location**: `legal.imprint.content` in both language files
   - **Placeholders to replace**:
     - `[Your Address]` → Your actual address in Austria
     - `[your-email@example.com]` → Your actual contact email
   - **Action**: Update both English and German versions

8. **Offenlegung gemäß Mediengesetz** (`i18n/messages/en.json` and `i18n/messages/de.json`)
   - **Location**: `legal.disclosure.content` in both language files
   - **Placeholders to replace**:
     - `[Your Address]` → Your actual address
     - `[Your VAT number if applicable]` → Your UID-Nummer or remove if not applicable
     - `[Your company register number if applicable]` → Your Firmenbuchnummer or remove if not applicable
     - `[Your company register court if applicable]` → Your Firmenbuchgericht or remove if not applicable
   - **Action**: Update both English and German versions

9. **Privacy Policy** (`i18n/messages/en.json` and `i18n/messages/de.json`)
   - **Location**: `legal.privacy.sections.contact.content` in both language files
   - **Placeholder to replace**:
     - `[your-email@example.com]` → Your actual contact email for privacy inquiries
   - **Action**: Update both English and German versions
   - **Note**: Review all privacy policy sections and customize based on your actual data collection practices

### 📝 Content Customization

10. **Translation Files** (`i18n/messages/en.json` and `i18n/messages/de.json`)
    - **Action**: Review and customize all text content to match your personal brand and voice
    - Key sections to personalize:
      - `home.hero.paragraph` - Your personal introduction
      - `about.journey.content` - Your developer journey
      - `about.interests.content` - Your interests and passions
      - `about.funFacts.items` - Your fun facts

11. **About Page Fun Facts** (`i18n/messages/en.json` and `i18n/messages/de.json`)
    - **Location**: `about.funFacts.items` array
    - **Action**: Update with your actual fun facts and interests

### 🔗 Additional Links

12. **Domain Configuration**
    - Update any hardcoded references to `ghotso.dev` if using a different domain
    - Update email addresses that reference the domain

### ✅ Quick Checklist

- [ ] Replace logo placeholder with actual logo image
- [ ] Update all contact information (email, social media links)
- [ ] Update all project data (titles, descriptions, GitHub URLs)
- [ ] Fill in legal information (address, email, VAT number if applicable)
- [ ] Review and customize all translation content
- [ ] Update GitHub profile links in Footer and Hero
- [ ] Review privacy policy and customize based on actual data practices
- [ ] Test all external links
- [ ] Verify all placeholders are replaced before deployment

## Legal Notice

The legal pages (Imprint, Disclosure, Privacy Policy) contain placeholder templates for Austrian law compliance. **These are not legal advice** and should be reviewed by a legal professional before deployment.

## License

Private project - All rights reserved.

## Contact

For questions or suggestions, reach out via the contact page or GitHub.

