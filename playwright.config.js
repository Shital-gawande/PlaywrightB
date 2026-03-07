// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration for all available options
 */
module.exports = defineConfig({
  testDir: './', // Directory containing your tests
  timeout: 30000, // Maximum time one test can run (ms)
  expect: {
    timeout: 5000, // Maximum time expect() should wait for condition (ms)
  },
  fullyParallel: true, // Run tests in parallel
  retries: 1, // Number of retries on failure
  reporter: [['list'], ['html', { outputFolder: 'test-results' }]], // Reporters
  use: {
    actionTimeout: 0, // Maximum time for each action (ms)
    baseURL: 'https://playwright.dev', // Base URL for tests
    trace: 'on-first-retry', // Collect trace on first retry
    screenshot: 'only-on-failure', // Take screenshots only on failure
    video: 'retain-on-failure', // Record video only on failure
    headless: true, // Run browsers in headless mode
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  outputDir: 'test-results/', // Output directory for test artifacts
});
