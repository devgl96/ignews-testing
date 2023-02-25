module.exports = {
  transformIgnorePatterns: [
    "/node_modules/",
    "./next/",
    "<rootDir>/node_modules/",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.spec.tsx",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coverageReporters: ["json", "lcov"],
};
