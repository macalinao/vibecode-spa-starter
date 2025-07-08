import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Welcome to VibeCode Starter Kit
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern, type-safe starter template with React, TypeScript, Vite,
            TanStack Router, Tailwind CSS v4, and Cloudflare Pages deployment.
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
      </div>
    </div>
  );
}
