import { createRootRoute, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const TanStackRouterDevtools = lazy(() =>
  import("@tanstack/router-devtools").then((m) => ({
    default: m.TanStackRouterDevtools,
  })),
);

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Outlet />
      </div>
      <Suspense>{import.meta.env.DEV && <TanStackRouterDevtools />}</Suspense>
    </>
  ),
});
