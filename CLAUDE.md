# CLAUDE.md - VibeCode Starter Kit

This document contains instructions and best practices for AI assistants working on this codebase.

## Project Overview

This is a modern web application starter kit built with:
- **Runtime**: Bun (fast JavaScript runtime and package manager)
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: TanStack Router (type-safe, file-based routing)
- **Styling**: Tailwind CSS v4 (next-generation utility-first CSS)
- **UI Components**: shadcn/ui (accessible, customizable components)
- **Forms**: React Hook Form + Zod (performant forms with schema validation)
- **Code Quality**: Biome v2 (fast formatter and linter)
- **Deployment**: Cloudflare Pages

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
- Test with screen readers
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

## Contributing

When contributing to this project:
1. Follow the established patterns and conventions
2. Write clear, self-documenting code
3. Add appropriate TypeScript types
4. Update this document if introducing new patterns
5. Test your changes thoroughly before committing