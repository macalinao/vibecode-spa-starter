# VibeCode Starter Kit

A modern, type-safe starter template for building web applications with React, TypeScript, and Cloudflare Pages.

## Features

- ⚡️ **Bun** - Fast all-in-one JavaScript runtime
- ⚛️ **React 19** - Latest React with improved performance
- 🔷 **TypeScript** - Type-safe development with @macalinao/tsconfig
- 🚀 **Vite** - Lightning-fast HMR and build tool
- 🧭 **TanStack Router** - Type-safe, file-based routing
- 🎨 **Tailwind CSS v4** - Next-generation utility-first CSS
- 🎯 **shadcn/ui** - High-quality, accessible UI components
- 📝 **React Hook Form + Zod** - Performant forms with schema validation
- 🧹 **Biome** - Fast formatter and linter
- ☁️ **Cloudflare Pages** - Edge deployment platform

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your machine

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/vibecode-starter-kit.git
cd vibecode-starter-kit
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

```bash
# Development
bun dev              # Start development server
bun build            # Build for production
bun preview          # Preview production build

# Code Quality
bun typecheck        # Run TypeScript type checking
bun lint             # Lint and fix issues
bun lint:check       # Check for lint issues
bun format           # Format code
bun format:check     # Check code formatting

# Deployment
bun deploy           # Deploy to Cloudflare Pages
bun cf-dev           # Run with Cloudflare Pages locally
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components (CLI-managed)
│   └── forms/       # Form components
├── routes/          # TanStack Router pages
├── lib/             # Utilities and schemas
├── hooks/           # Custom React hooks
└── styles/          # Global styles
```

## Adding Components

Use the shadcn CLI to add new UI components:

```bash
bunx --bun shadcn@latest add button
bunx --bun shadcn@latest add card
bunx --bun shadcn@latest add form
```

## Creating Routes

Create a new file in `src/routes/` to add a new page:

```typescript
// src/routes/example.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/example")({
  component: ExamplePage,
});

function ExamplePage() {
  return <div>Example Page</div>;
}
```

## Form Validation

Define schemas in `src/lib/schemas.ts`:

```typescript
import { z } from "zod";

export const myFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
});
```

## Deployment

### Cloudflare Pages

1. Build the project:
```bash
bun run build
```

2. Deploy to Cloudflare Pages:
```bash
bun run deploy
```

Or connect your GitHub repository to Cloudflare Pages for automatic deployments.

## Environment Variables

Create a `.env.local` file for local development:

```env
MY_API_KEY=your-api-key-here
```

For production, set environment variables in the Cloudflare Pages dashboard.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).