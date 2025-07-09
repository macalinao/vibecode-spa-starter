# VibeCode Starter Kit

A modern, type-safe starter template for building high-quality web applications with React, TypeScript, and Cloudflare Pages. This kit provides a complete foundation for rapid development while maintaining code quality, type safety, and best practices.

## Purpose

VibeCode Starter Kit is designed to accelerate web application development by providing:

- **Rapid Prototyping**: Get from idea to working prototype in minutes
- **Production Ready**: Built-in testing, linting, and deployment workflows
- **Type Safety**: End-to-end type safety with TypeScript and Zod validation
- **Modern Stack**: Latest React 19, Vite, and Tailwind CSS v4
- **AI-Optimized**: Structured for seamless development with Claude Code and AI tools
- **Scalable Architecture**: Clean patterns that grow with your project

### Who This Is For

- **Developers** building modern web applications
- **Teams** needing a consistent, scalable foundation
- **Startups** requiring rapid development cycles
- **AI-Assisted Development** with Claude Code integration
- **Learning** modern React and TypeScript patterns

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
- 🧪 **Vitest + Playwright** - Comprehensive testing setup
- 🤖 **Claude Code Ready** - Optimized for AI-assisted development
- ☁️ **Cloudflare Pages** - Edge deployment platform

## Quick Start

Get up and running in under 2 minutes:

```bash
# Clone the repository
git clone https://github.com/yourusername/vibecode-starter-kit.git
cd vibecode-starter-kit

# Install dependencies
bun install

# Start development server
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app running!

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

# Testing
bun test             # Run unit tests
bun test:watch       # Run tests in watch mode
bun test:ui          # Run tests with UI
bun test:coverage    # Run tests with coverage
bun test:e2e         # Run end-to-end tests
bun test:e2e:ui      # Run E2E tests with UI
bun test:all         # Run all tests

# Deployment
bun deploy           # Deploy to Cloudflare Pages
bun cf-dev           # Run with Cloudflare Pages locally
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components (CLI-managed)
│   │   └── __tests__/  # Unit tests for UI components
│   └── forms/       # Form components
│       └── __tests__/  # Unit tests for forms
├── routes/          # TanStack Router pages
├── lib/             # Utilities and schemas
├── hooks/           # Custom React hooks
├── test/            # Test utilities and setup
└── styles/          # Global styles
tests/
└── e2e/             # End-to-end tests
```

## Testing

This starter kit includes comprehensive testing setup for building robust applications:

### Unit Testing with Vitest

- **Framework**: Vitest (fast, Vite-native)
- **Library**: React Testing Library
- **Location**: `src/**/__tests__/*.test.{ts,tsx}`

```bash
bun test              # Run all unit tests
bun test:watch        # Watch mode for development
bun test:ui           # Visual test interface
bun test:coverage     # Generate coverage reports
```

### End-to-End Testing with Playwright

- **Framework**: Playwright (cross-browser testing)
- **Location**: `tests/e2e/*.spec.ts`
- **Browsers**: Chrome, Firefox, Safari, Mobile

```bash
bun test:e2e          # Run E2E tests
bun test:e2e:ui       # Run with Playwright UI
bun test:e2e:debug    # Debug mode
```

### Writing Tests

#### Component Tests
```typescript
// src/components/ui/__tests__/button.test.tsx
import { render, screen } from "@/test/utils";
import { Button } from "../button";

test("renders button correctly", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
```

#### E2E Tests
```typescript
// tests/e2e/app.spec.ts
import { test, expect } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading")).toBeVisible();
});
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

## Claude Code Integration

This starter kit is optimized for [Claude Code](https://claude.ai/code), Anthropic's official CLI for Claude.

### Recommended MCP Servers

Extend Claude Code with Model Context Protocol (MCP) servers:

```bash
# Playwright for E2E testing
claude mcp add playwright npx @playwright/test

# GitHub integration
claude mcp add github <github-mcp-server>

# Database tools (if needed)
claude mcp add postgres <postgres-mcp-server>
```

### Useful Claude Code Commands

```bash
# Quick development tasks
claude "Add a new component with tests"
claude "Run all tests and fix failures"
claude "Review code quality and suggest improvements"
claude "Deploy to Cloudflare Pages"

# Project management
claude --resume              # Resume previous conversation
claude /help                 # Show available commands
claude /mcp                  # Manage MCP servers
```

### Project Configuration

Create `.claude/settings.local.json` for project-specific Claude Code settings:

```json
{
  "permissions": {
    "allowRead": ["**/*"],
    "allowWrite": ["src/**/*", "tests/**/*", "docs/**/*"],
    "allowExecute": ["bun", "npm", "git", "playwright"]
  },
  "tools": {
    "bash": {
      "enabled": true,
      "timeout": 30000
    },
    "edit": {
      "enabled": true
    }
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development with Claude Code

- Use specific, actionable prompts when requesting changes
- Always test new functionality thoroughly
- Update documentation when adding new patterns
- Follow the established code conventions

## License

This project is open source and available under the [MIT License](LICENSE).