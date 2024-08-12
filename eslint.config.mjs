import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.browser, // Combine globals with sourceType
    },
    rules: {
      // Add your custom rules here
      "semi": ["error", "always"], // Enforce semicolons
      "quotes": ["error", "single"], // Enforce single quotes
      "indent": ["error", 4], // Enforce 2-space indentation
      "line-break-style": ["error", "unix"], // Enforce Unix line endings
    },
  },
  pluginJs.configs.recommended, // Include recommended configs
];
