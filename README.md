# Msoco Rockers Production Platform

A premium, dual-persona digital platform for **Msoco Rockers**, South Africa's premier events and production house. This platform seamlessly bridges two distinct divisions: **Heritage Legacy (Weddings)** and **Midnight Copper (Corporate)**.

## 🏗️ Architecture

The platform is built with a modern, high-performance stack:

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [WordPress](https://wordpress.org/) (via WPGraphQL)
- **Analytics**: [PostHog](https://posthog.com/) for behavioral tracking and session recording
- **Quality Assurance**: 
  - **Husky**: Git hooks for automated checks
  - **Commitlint**: Enforcing conventional commit messages

## 🎨 Design System

The platform implements a unique **Dual-Theme Engine** controlled by a `data-theme` attribute on the global layout.

### Heritage Legacy (Wedding Division)
- **Primary Palette**: Charcoal, Gold, and Deep Maroon.
- **Typography**: Playfair Display (Serif) for headlines, Inter (Sans) for body.
- **Vibe**: Timeless, elegant, and heritage-focused.

### Midnight Copper (Corporate Division)
- **Primary Palette**: Copper, Midnight Blue, and Slate.
- **Typography**: Inter (Sans) for a modern, technical feel.
- **Vibe**: Professional, high-tech, and infrastructure-driven.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wp-site.com/graphql
   NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
   NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=your_token
   ```

### Development
```bash
npm run dev
```

## 🛠️ Development Workflow

We enforce **Conventional Commits** to maintain a clean and searchable history.

### Commit Format
`<type>(<scope>): <subject>`

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Formatting, missing semi colons, etc; no code change
- `refactor`: Refactoring production code
- `test`: Adding missing tests, refactoring tests; no production code change
- `chore`: Updating build tasks, package manager configs, etc; no production code change

### Git Hooks
- **commit-msg**: Validates the commit message against conventional standards.

## 📈 Analytics

This project uses PostHog to understand user journeys between the Wedding and Corporate personas. To view data, access the PostHog dashboard associated with the project token.

---

© 2026 Msoco Rockers Production. All rights reserved.
