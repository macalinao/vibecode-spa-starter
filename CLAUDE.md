# CLAUDE.md - Vibecode Vite Starter by Ian Macalinao

This document contains instructions and best practices for AI assistants working on this codebase created by Ian Macalinao.

## Project Overview

This is a modern web application starter kit created by Ian Macalinao, built with:
- **Runtime**: Bun (fast JavaScript runtime and package manager)
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: TanStack Router (type-safe, file-based routing)
- **Styling**: Tailwind CSS v4 (next-generation utility-first CSS)
- **UI Components**: shadcn/ui (accessible, customizable components)
- **Forms**: React Hook Form + Zod (performant forms with schema validation)
- **Code Quality**: Biome v2 (fast formatter and linter)
- **Deployment**: Cloudflare Pages

## Purpose

Vibecode Vite Starter by Ian Macalinao accelerates web application development by providing:
- **Rapid Prototyping**: Get from idea to working prototype quickly
- **Production Ready**: Built-in linting and deployment workflows
- **Type Safety**: End-to-end type safety with TypeScript and Zod validation
- **AI-Optimized**: Structured for seamless development with Claude Code and AI tools
- **Scalable Architecture**: Clean patterns that grow with your project
- **Created by Ian Macalinao**: Built with years of experience in modern web development

## Architecture Principles

### 1. Type Safety First
- Use TypeScript strictly throughout the codebase
- Leverage TanStack Router's type-safe routing
- Define Zod schemas for all forms and data validation
- Avoid `any` types - use proper type definitions

### 2. Component Structure
- Place all UI components in `src/components/ui/` (managed by shadcn CLI)
- Create feature-specific components in `src/components/`
- Use composition over inheritance
- Keep components small and focused on a single responsibility

### 3. Styling Guidelines
- Use Tailwind CSS utilities for all styling
- Avoid writing custom CSS unless absolutely necessary
- Use CSS variables for theming (defined in globals.css)
- Leverage shadcn/ui's component variants with CVA

### 4. Form Handling
- Always use React Hook Form for form state management
- Define Zod schemas in `src/lib/schemas.ts`
- Use shadcn/ui's Form components for consistent styling
- Implement proper error handling and user feedback

## Development Workflow

### Getting Started
```bash
# Install dependencies
bun install

# Start development server
bun dev

# Type checking
bun typecheck

# Linting and formatting
bun lint
bun format

```

### Adding Components
Always use the shadcn CLI to add UI components:
```bash
bunx --bun shadcn@latest add [component-name]
```

Never manually create files in `src/components/ui/` - let the CLI manage them.

### Creating Routes
1. Create a new file in `src/routes/` following the naming convention
2. Use `createFileRoute` from TanStack Router
3. Export a component as the default export
4. Routes are automatically discovered and type-safe

Example:
```typescript
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/example")({
  component: ExamplePage,
});

function ExamplePage() {
  return <div>Example Page</div>;
}
```

### State Management
- Use React's built-in hooks for local component state
- For forms, always use React Hook Form
- For global state, consider adding Zustand or TanStack Query as needed
- Keep state as close to where it's used as possible

## Best Practices

### 1. Import Organization
Follow this import order:
1. External dependencies
2. Internal dependencies using `@/` alias
3. Relative imports (avoid when possible)

### 2. File Naming
- Components: PascalCase (e.g., `ContactForm.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Routes: kebab-case matching the URL (e.g., `about.tsx` for `/about`)

### 3. Error Handling
- Always handle loading and error states in components
- Use try-catch blocks for async operations
- Provide meaningful error messages to users
- Log errors appropriately for debugging

### 4. Performance
- Use React.memo for expensive components
- Implement code splitting with lazy loading where appropriate
- Optimize images and assets
- Leverage Vite's build optimizations

### 5. Accessibility
- Always use semantic HTML elements
- Provide proper ARIA labels where needed
- Ensure keyboard navigation works throughout the app
- Ensure proper screen reader support
- Maintain proper color contrast ratios

## Deployment

### Cloudflare Pages
The project is configured for deployment to Cloudflare Pages:

```bash
# Build and deploy
bun run deploy
```

### Environment Variables
- Define environment variables in `.env.local` for local development
- For production, set them in the Cloudflare Pages dashboard
- Never commit sensitive information to the repository

## Code Quality

### Biome Configuration
The project uses Biome for linting and formatting with:
- 2-space indentation
- Double quotes for strings
- Trailing commas
- 80-character line width

Run before committing:
```bash
bun lint:check
bun format:check
```

### TypeScript Configuration
- Extends from `@macalinao/tsconfig` for consistent settings
- Uses `moduleResolution: "bundler"` for optimal Vite compatibility
- Path alias `@/*` maps to `src/*`

## Common Patterns

### Creating a New Form
1. Define the schema in `src/lib/schemas.ts`
2. Create a form component using the schema
3. Use shadcn/ui Form components for consistent styling
4. Handle submission with proper loading states

### Adding a New Page
1. Create a file in `src/routes/`
2. Use TanStack Router's `createFileRoute`
3. Add navigation links as needed
4. Consider adding meta tags for SEO

### Integrating APIs
1. Create API utility functions in `src/lib/api/`
2. Use proper TypeScript types for API responses
3. Handle errors gracefully
4. Consider adding request/response interceptors

## Troubleshooting

### Common Issues

1. **Path aliases not working**: Ensure `vite-tsconfig-paths` is the first plugin in `vite.config.ts`

2. **Tailwind styles not applying**: Make sure you're importing `"tailwindcss"` in `globals.css`

3. **TypeScript errors with shadcn components**: Run `bunx --bun shadcn@latest add` to properly install components

4. **Build failures**: Check that all dependencies are installed and no circular imports exist

## Resources

- [Bun Documentation](https://bun.sh/docs)
- [React Documentation](https://react.dev)
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [Biome](https://biomejs.dev)
- [Cloudflare Pages](https://pages.cloudflare.com)

## Claude Code Integration

Ian Macalinao's Vibecode Vite Starter is optimized for use with Claude Code, Anthropic's official CLI for Claude.

### Recommended MCP Servers

Model Context Protocol (MCP) servers extend Claude Code with additional capabilities:

#### Development Tools
```bash

# GitHub integration for issue tracking and PRs
claude mcp add github <github-mcp-server-command>

# Database inspection (if using)
claude mcp add postgres <postgres-mcp-server-command>
```

#### Productivity MCPs
```bash
# Documentation and knowledge bases
claude mcp add docs <docs-mcp-server-command>

# Project management tools
claude mcp add linear <linear-mcp-server-command>
```

### Claude Code Commands

Useful Claude Code commands for this project:

```bash
# Quick project setup
claude --resume               # Resume previous conversation
claude /help                  # Show available commands
claude /mcp                   # Manage MCP servers

# Development workflow
claude "Run linting and fix any errors"
claude "Add a new component"
claude "Deploy to Cloudflare Pages"
claude "Review and improve code quality"
```

### Project Configuration

Create `.claude/settings.local.json` for project-specific settings:

```json
{
  "permissions": {
    "allowRead": ["**/*"],
    "allowWrite": ["src/**/*"],
    "allowExecute": ["bun", "npm", "git"]
  },
  "notifications": {
    "channels": ["desktop"]
  }
}
```

### Best Practices for Claude Code

1. **Clear Instructions**: Provide specific, actionable requests
2. **Context**: Reference specific files and line numbers when needed
3. **Code Quality**: Ensure proper TypeScript types and linting
4. **Code Quality**: Ask Claude to run linting and type checking
5. **Documentation**: Update this file when adding new patterns

## Contributing

When contributing to Ian Macalinao's Vibecode Vite Starter:
1. Follow the established patterns and conventions
2. Write clear, self-documenting code
3. Add appropriate TypeScript types
4. Update this document if introducing new patterns
5. Verify your changes work correctly before committing
6. Use Claude Code for consistent development workflows

## About the Creator

This starter kit is created and maintained by **Ian Macalinao**, a software engineer passionate about building modern web applications. Connect with Ian:

- **GitHub**: [github.com/macalinao](https://github.com/macalinao)
- **Email**: me@ianm.com
- **Website**: [ianmacalinao.com](https://ianmacalinao.com)