# Component Development Guidelines

This document provides comprehensive guidelines for building high-quality, maintainable components in the VibeCode Starter Kit.

## Component Architecture

### Directory Structure

```
src/components/
├── ui/                 # shadcn/ui components (CLI-managed)
│   ├── button.tsx
│   ├── card.tsx
│   ├── form.tsx
│   └── __tests__/      # Unit tests for UI components
├── forms/              # Form-specific components
│   ├── contact-form.tsx
│   ├── registration-form.tsx
│   └── __tests__/      # Form component tests
├── layout/             # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   └── sidebar.tsx
├── features/           # Feature-specific components
│   ├── auth/
│   ├── dashboard/
│   └── settings/
└── shared/             # Shared utility components
    ├── loading.tsx
    ├── error-boundary.tsx
    └── modal.tsx
```

### Component Organization Principles

1. **Separation by Purpose**: Group components by their primary function
2. **Feature-Based Structure**: Organize complex features in dedicated directories
3. **Reusability**: Place reusable components in `shared/` or `ui/`
4. **Co-location**: Keep related components, tests, and utilities together

## Component Types

### 1. UI Components (`src/components/ui/`)

**Managed by shadcn/ui CLI** - Never manually create files here.

```bash
# Add new UI components using the CLI
bunx --bun shadcn@latest add button
bunx --bun shadcn@latest add card
bunx --bun shadcn@latest add dialog
```

These components are:
- **Primitive**: Basic building blocks (buttons, inputs, cards)
- **Accessible**: Built with Radix UI primitives
- **Customizable**: Styled with Tailwind CSS and CVA
- **Composable**: Designed for composition patterns

### 2. Form Components (`src/components/forms/`)

Specialized components for form handling:

```typescript
// src/components/forms/contact-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactFormSchema, type ContactForm } from "@/lib/schemas";

export function ContactForm() {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactForm) {
    // Handle form submission
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
```

### 3. Layout Components (`src/components/layout/`)

Structural components that define page layout:

```typescript
// src/components/layout/header.tsx
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">VibeCode</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link to="/demo" className="transition-colors hover:text-foreground/80">
              Demo
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
```

### 4. Feature Components (`src/components/features/`)

Complex, feature-specific components:

```typescript
// src/components/features/auth/login-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginFormSchema, type LoginForm } from "@/lib/schemas";

export function LoginForm() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(values: LoginForm) {
    // Handle authentication
    console.log(values);
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Form fields */}
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
```

### 5. Shared Components (`src/components/shared/`)

Reusable utility components:

```typescript
// src/components/shared/loading.tsx
import { cn } from "@/lib/utils";

interface LoadingProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Loading({ className, size = "md" }: LoadingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-primary border-t-transparent",
          sizeClasses[size]
        )}
      />
    </div>
  );
}
```

## Component Best Practices

### 1. TypeScript Integration

Always use proper TypeScript types:

```typescript
// Define props interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

// Use React.forwardRef for ref forwarding
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
```

### 2. Styling with Tailwind CSS

Use utility classes and avoid custom CSS:

```typescript
// Good: Use Tailwind utilities
<div className="flex items-center justify-between p-4 border rounded-lg bg-card">
  <h3 className="text-lg font-semibold">Title</h3>
  <Button variant="outline" size="sm">Action</Button>
</div>

// Avoid: Custom CSS classes
<div className="custom-card">
  <h3 className="custom-title">Title</h3>
  <Button>Action</Button>
</div>
```

### 3. Component Composition

Use composition over inheritance:

```typescript
// Good: Composition pattern
<Card>
  <CardHeader>
    <CardTitle>Settings</CardTitle>
    <CardDescription>Manage your account settings</CardDescription>
  </CardHeader>
  <CardContent>
    <SettingsForm />
  </CardContent>
</Card>

// Avoid: Monolithic components
<SettingsCard title="Settings" description="Manage your account settings" />
```

### 4. Props and State Management

Keep components focused and stateless when possible:

```typescript
// Good: Props-based configuration
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (row: T) => void;
  loading?: boolean;
}

export function DataTable<T>({ data, columns, onRowClick, loading }: DataTableProps<T>) {
  if (loading) {
    return <Loading />;
  }
  
  return (
    <Table>
      {/* Table implementation */}
    </Table>
  );
}

// Avoid: Internal state for external concerns
export function DataTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Component manages its own data fetching
  useEffect(() => {
    fetchData();
  }, []);
  
  return <Table>{/* ... */}</Table>;
}
```

### 5. Error Handling

Implement proper error boundaries and fallbacks:

```typescript
// src/components/shared/error-boundary.tsx
import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
            <p className="text-muted-foreground mb-4">
              We're sorry, but something unexpected happened.
            </p>
            <Button onClick={() => this.setState({ hasError: false })}>
              Try again
            </Button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
```

## Testing Components

### Unit Testing Strategy

Test components using React Testing Library:

```typescript
// src/components/ui/__tests__/button.test.tsx
import { render, screen, fireEvent } from "@/test/utils";
import { Button } from "../button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies variant classes correctly", () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-destructive", "text-white");
  });
});
```

### Integration Testing

Test component interactions:

```typescript
// src/components/forms/__tests__/contact-form.test.tsx
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@/test/utils";
import { ContactForm } from "../contact-form";

describe("ContactForm", () => {
  it("submits form with valid data", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Name"), "John Doe");
    await user.type(screen.getByLabelText("Email"), "john@example.com");
    await user.type(screen.getByLabelText("Message"), "Hello, this is a test message!");

    const submitButton = screen.getByRole("button", { name: "Send Message" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Sending...")).toBeInTheDocument();
    });
  });
});
```

## Performance Optimization

### 1. React.memo for Expensive Components

```typescript
import { memo } from "react";

interface ExpensiveComponentProps {
  data: ComplexData[];
  onUpdate: (id: string) => void;
}

export const ExpensiveComponent = memo<ExpensiveComponentProps>(({ data, onUpdate }) => {
  // Expensive rendering logic
  return <div>{/* Complex UI */}</div>;
});
```

### 2. useCallback for Event Handlers

```typescript
import { useCallback } from "react";

export function ParentComponent() {
  const handleItemClick = useCallback((id: string) => {
    // Handle click
  }, []);

  return (
    <div>
      {items.map(item => (
        <ExpensiveChild key={item.id} item={item} onClick={handleItemClick} />
      ))}
    </div>
  );
}
```

### 3. Lazy Loading for Large Components

```typescript
import { lazy, Suspense } from "react";
import { Loading } from "@/components/shared/loading";

const HeavyComponent = lazy(() => import("./heavy-component"));

export function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

## Accessibility Guidelines

### 1. Semantic HTML

Use proper HTML elements:

```typescript
// Good: Semantic elements
<main>
  <section>
    <h1>Page Title</h1>
    <article>
      <h2>Article Title</h2>
      <p>Content...</p>
    </article>
  </section>
</main>

// Avoid: Generic divs
<div>
  <div>
    <div>Page Title</div>
    <div>
      <div>Article Title</div>
      <div>Content...</div>
    </div>
  </div>
</div>
```

### 2. ARIA Labels

Provide proper labels for interactive elements:

```typescript
<Button
  aria-label="Close dialog"
  onClick={onClose}
  className="absolute right-2 top-2"
>
  <X className="h-4 w-4" />
</Button>
```

### 3. Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

```typescript
<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
  onClick={handleClick}
>
  Custom Button
</div>
```

## Common Patterns

### 1. Compound Components

```typescript
// Card compound component
const Card = ({ children, className, ...props }) => (
  <div className={cn("rounded-lg border bg-card", className)} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className, ...props }) => (
  <h3 className={cn("font-semibold leading-none tracking-tight", className)} {...props}>
    {children}
  </h3>
);

// Usage
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
</Card>
```

### 2. Render Props Pattern

```typescript
interface DataFetcherProps<T> {
  url: string;
  children: (data: T | null, loading: boolean, error: Error | null) => React.ReactNode;
}

export function DataFetcher<T>({ url, children }: DataFetcherProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return children(data, loading, error);
}

// Usage
<DataFetcher url="/api/users">
  {(data, loading, error) => {
    if (loading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;
    return <UserList users={data} />;
  }}
</DataFetcher>
```

### 3. Custom Hooks for Logic

```typescript
// src/hooks/use-local-storage.ts
import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
```

## Component Documentation

### 1. Props Documentation

Use JSDoc comments for props:

```typescript
interface ButtonProps {
  /** Button variant style */
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  /** Button size */
  size?: "default" | "sm" | "lg" | "icon";
  /** Render as child element */
  asChild?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Button content */
  children: React.ReactNode;
}
```

### 2. Usage Examples

Include usage examples in component files:

```typescript
/**
 * Button component with multiple variants and sizes
 * 
 * @example
 * ```tsx
 * <Button variant="default" size="md">
 *   Click me
 * </Button>
 * 
 * <Button variant="outline" size="sm" asChild>
 *   <Link to="/home">Home</Link>
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", asChild = false, className, ...props }, ref) => {
    // Implementation
  }
);
```

## Migration and Maintenance

### 1. Component Updates

When updating components:
1. Maintain backward compatibility when possible
2. Add deprecation warnings for breaking changes
3. Update tests and documentation
4. Consider impact on existing usage

### 2. shadcn/ui Updates

Keep UI components updated:

```bash
# Update specific component
bunx --bun shadcn@latest add button

# Update all components
bunx --bun shadcn@latest update
```

### 3. Performance Monitoring

Monitor component performance:
- Use React DevTools Profiler
- Add performance metrics for complex components
- Optimize re-renders with proper memoization

## Summary

Building great components requires:
1. **Clear Structure**: Organized directories and logical grouping
2. **Type Safety**: Proper TypeScript integration
3. **Accessibility**: Semantic HTML and ARIA labels
4. **Testing**: Comprehensive unit and integration tests
5. **Performance**: Optimized rendering and memoization
6. **Documentation**: Clear props and usage examples
7. **Consistency**: Following established patterns and conventions

By following these guidelines, you'll create components that are maintainable, testable, and provide an excellent developer experience.