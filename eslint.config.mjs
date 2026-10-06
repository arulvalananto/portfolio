import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import perfectionist from "eslint-plugin-perfectionist";
import tailwindcss from "eslint-plugin-tailwindcss";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      perfectionist,
      tailwindcss,
    },
    settings: {
      tailwindcss: {
        cssConfigPath: "./app/globals.css",
      },
    },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "line-length",
          order: "asc",
          groups: ["builtin", "external", "internal"],
          newlinesBetween: 1,
          internalPattern: ["^@/", "^\\."],
        },
      ],
      "tailwindcss/no-contradicting-classname": "error",
    },
  },
  prettier,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
    "node_modules/**",
    "next-env.d.ts",
  ]),
]);
