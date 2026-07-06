// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';

const config = defineConfig({

  testDir: './tests',

  timeout: 40 * 1000,

  expect: {
    timeout: 10 * 1000,
  },

    reporter: [
    ['list'],
    ['allure-playwright'],
    ['html']
  ],

  use: {

    headless: false,

    screenshot: 'on',
    retries : 1,

    trace: 'retain-on-failure',

    launchOptions: {
      args: ['--start-maximized'],
    },

    viewport: null,
  },

  projects: [

    {
      name: 'Chromium',

      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
      },
    },

    {
      name: 'Firefox',

      use: {
        ...devices['Desktop Firefox'],
        browserName: 'firefox',
      },
    },

    {
      name: 'WebKit',

      use: {
        ...devices['Desktop Safari'],
        browserName: 'webkit',
      },
    },

  ],

});

module.exports = config;