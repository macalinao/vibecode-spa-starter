import { configs } from "@macalinao/eslint-config-react";

export default [
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/.wrangler/**",
      "**/coverage/**",
      "**/*.config.ts.timestamp-*.mjs",
    ],
  },
  ...configs.reactFast,
];
