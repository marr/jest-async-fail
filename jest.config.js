export default {
  testEnvironment: "@happy-dom/jest-environment",
  testMatch: [ "**/?(*.)+(spec|test).(m)?js" ],
  transform: {
    "^.+\\.m?js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue2-jest",
  },
};
