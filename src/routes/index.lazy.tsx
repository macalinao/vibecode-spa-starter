import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Vibecode Vite Starter
          </h1>
          <p className="text-lg text-muted-foreground">by Ian Macalinao</p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern, type-safe starter template by Ian Macalinao with React 19,
            TypeScript, Vite, TanStack Router, Tailwind CSS v4, and Cloudflare
            Pages deployment.
          </p>
        </div>

        <div className="flex gap-4">
          <Button asChild>
            <Link to="/demo">View Demo</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
          <div className="border rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-lg">🚀 Fast Development</h3>
            <p className="text-sm text-muted-foreground">
              Lightning-fast HMR with Vite and Bun for an exceptional developer
              experience.
            </p>
          </div>
          <div className="border rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-lg">🎨 Modern UI</h3>
            <p className="text-sm text-muted-foreground">
              Beautiful, accessible components with shadcn/ui and Tailwind CSS
              v4.
            </p>
          </div>
          <div className="border rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-lg">🔧 Type-Safe</h3>
            <p className="text-sm text-muted-foreground">
              End-to-end type safety with TypeScript, Zod, and TanStack Router.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>
            Created by{" "}
            <a
              href="https://github.com/macalinao"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
            >
              Ian Macalinao
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/macalinao/vibecode-vite-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
            >
              GitHub
            </a>{" "}
            •{" "}
            <a
              href="mailto:ian@macalinao.com"
              className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
