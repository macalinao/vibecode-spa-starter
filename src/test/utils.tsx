import {
  type RenderOptions,
  render as rtlRender,
} from "@testing-library/react";
import type { ReactElement } from "react";

// Simple render function for component testing
function render(ui: ReactElement, options?: RenderOptions) {
  return rtlRender(ui, options);
}

export * from "@testing-library/react";
export { render };
