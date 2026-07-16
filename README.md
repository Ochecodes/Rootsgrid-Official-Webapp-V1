# HNGlobal Site

HNGlobal, official website codebase for Heart for the Nation Initiative, now RootsGrid. The project is built with Next.js. In this codebase, presented through design, are the organization’s mission, programs, and impact through a polished public-facing experience that includes information about leadership, ethics, partnerships, volunteering, donations, careers, and resources. visit www.heartforthenation.org to explore the finished product.

## Overview

This site is built to help visitors quickly understand the initiative’s purpose and take action. The experience combines storytelling, structured content, and clear calls to action across multiple route-based pages.

## Key Features

- A responsive home experience with hero content, problem framing, solutions, resilience messaging, impact highlights, and FAQ content
- Dedicated pages for about, ethics, leadership, partnerships, volunteering, donation, careers, contact, and resources
- Reusable navigation and footer components for a consistent experience across the app
- A modern UI built with Chakra UI, motion effects, and custom theme styling

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Chakra UI
- Framer Motion
- Tailwind CSS
- ESLint

## Project Structure

```text
src/
  app/                  # Route-based pages for the public site
    about/
    careers/
    contact/
    donate/
    ethics/
    goodnexusai/
    leadership/
    model/
    partnerships/
    resources/
    volunteer/
  components/
    home/               # Landing-page sections
    navigation/         # Header, footer, and menu
    ui/                 # Shared UI components and providers
  lib/                  # Utility helpers and constants
  theme/                # Theme and color configuration
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Then open http://localhost:3000 in your browser.

### Build for production

```bash
pnpm build
```

### Lint the project

```bash
pnpm lint
```

## Notes

- The app uses the Next.js App Router.
- Styling and layout are centered around Chakra UI with custom theme tokens.
- Static assets are stored in the public directory.
