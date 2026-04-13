import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.node,
        ...globals.browser,
        I: "readonly",
        Feature: "readonly",
        Scenario: "readonly",
        Before: "readonly",
        After: "readonly",
        Given: "readonly",
        When: "readonly",
        Then: "readonly",
        inject: "readonly",
        actor: "readonly"}},
    rules: {
      "indent": ["error", 2],
      "no-multi-spaces": "error"
    }
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
]);
