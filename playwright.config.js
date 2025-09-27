//// @ts-check
import { defineConfig, devices } from '@playwright/test';

// Environment URLs
const environmentsBaseURL = {
  qa: 'https://automationexercise.com',
};

// Pick environment from ENV variable, default to 'qa'
const ENV = process.env.ENV || 'qa';
const BASE_URL = environmentsBaseURL[ENV];

// Headless or headed mode from HEADLESS variable, default true
const HEADLESS = process.env.HEADLESS !== 'false';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    baseURL: BASE_URL,       // environment-specific baseURL
    trace: 'on-first-retry',
    headless: HEADLESS,      // controlled by env variable
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});



// to run execute this code
// npx cross-env ENV=qa HEADLESS=true npx playwright test

