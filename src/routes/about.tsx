import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container mx-auto py-10">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h1>About Vibecode Vite Starter</h1>
        <p className="lead text-muted-foreground">
          Created by Ian Macalinao
        </p>

        <p className="lead">
          This starter kit by Ian Macalinao provides a modern foundation for building web
          applications with the latest tools and best practices.
        </p>

        <h2>Tech Stack</h2>

        <h3>Core Technologies</h3>
        <ul>
          <li>
            <strong>Bun</strong> - Fast all-in-one JavaScript runtime and
            package manager
          </li>
          <li>
            <strong>React 19</strong> - Latest version with improved performance
            and features
          </li>
          <li>
            <strong>TypeScript</strong> - Type-safe development with
            @macalinao/tsconfig
          </li>
          <li>
            <strong>Vite</strong> - Lightning-fast build tool with HMR support
          </li>
        </ul>

        <h3>Routing & Navigation</h3>
        <ul>
          <li>
            <strong>TanStack Router</strong> - Type-safe, file-based routing
            with full TypeScript support
          </li>
        </ul>

        <h3>Styling</h3>
        <ul>
          <li>
            <strong>Tailwind CSS v4</strong> - Next-generation utility-first CSS
            framework
          </li>
          <li>
            <strong>shadcn/ui</strong> - High-quality, customizable component
            library
          </li>
        </ul>

        <h3>Forms & Validation</h3>
        <ul>
          <li>
            <strong>React Hook Form</strong> - Performant forms with minimal
            re-renders
          </li>
          <li>
            <strong>Zod</strong> - TypeScript-first schema validation
          </li>
        </ul>

        <h3>Code Quality</h3>
        <ul>
          <li>
            <strong>Biome v2</strong> - Fast formatter and linter for
            JavaScript/TypeScript
          </li>
        </ul>

        <h3>Deployment</h3>
        <ul>
          <li>
            <strong>Cloudflare Pages</strong> - Global edge deployment with zero
            configuration
          </li>
        </ul>

        <h2>Project Structure</h2>
        <pre className="text-sm">
          {`src/
├── components/
│   ├── ui/          # shadcn/ui components
│   └── forms/       # Form components
├── routes/          # TanStack Router pages
├── lib/             # Utilities and helpers
├── hooks/           # Custom React hooks
└── styles/          # Global styles`}
        </pre>

        <h2>Getting Started</h2>
        <p>
          Check out the demo page to see examples of forms, components, and
          more!
        </p>

        <h2>About the Creator</h2>
        <p>
          <strong>Ian Macalinao</strong> is a software engineer passionate about building
          modern web applications with cutting-edge technologies. This starter kit
          represents years of experience in creating scalable, maintainable applications.
        </p>
        <p>
          Connect with Ian:
        </p>
        <ul>
          <li>
            <a href="https://github.com/macalinao" target="_blank" rel="noopener noreferrer">
              GitHub: @macalinao
            </a>
          </li>
          <li>
            <a href="mailto:ian@macalinao.com">
              Email: ian@macalinao.com
            </a>
          </li>
          <li>
            <a href="https://ianmacalinao.com" target="_blank" rel="noopener noreferrer">
              Website: ianmacalinao.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
