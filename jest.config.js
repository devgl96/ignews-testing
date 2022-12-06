module.exports = {
  transformIgnorePatterns: [
    "/node_modules/",
    "./next/",
    "<rootDir>/node_modules/",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.(js|jsx|tsx)$": "<rootDir>/node_modules/ts-jest",
  },
  testEnvironment: "jsdom",
};
