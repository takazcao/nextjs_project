import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals", // Includes: next, react, react-hooks rules + Core Web Vitals
      "next/typescript", // TypeScript specific rules
      "prettier", // Must be last to override formatting rules
    ],
    rules: {
      // Custom rules nếu cần
      "@next/next/no-img-element": "off", // Nếu muốn dùng <img> thay vì next/image
      // 'react/no-unescaped-entities': 'off', // Nếu không muốn escape quotes
    },
  }),
];

export default eslintConfig;
