// @ts-check
import { defineConfig, devices } from '@playwright/test';

// used to base URL for various environment like staging, QA, Prod
const environmentsBaseURL = {
  qa: 'https://automationexercise.com'
};

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    baseURL: environmentsBaseURL[process.env.ENV] || environmentsBaseURL.qa,   // used the process to set baseURL so can be used in goto method
    trace: 'on-first-retry',
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],

});

