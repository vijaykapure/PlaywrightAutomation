// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries : 2,
  workers : 3,
  timeout: 60 * 1000,
  expect: {
    timeout: 4000,
  },
  reporter: [
    ['list'],
    ['allure-playwright'],
    ['html']
  ],

  use: {
    browserName: 'chromium',
    args: ['--start-maximized'],// maximize window
    // viewport : { width: 720, height: 720 }, // set viewport size to match the maximized window

    headless: false,
    //...devices['iPad (gen 11)'],
    // @ts-ignore
    ignoreHttpsErrors: true,
    Permissions: ['geolocation'],
    screenshot: 'retain-on-failure',
    trace: 'retain-on-failure',
    video:'retain-on-failure'
  }

});

module.exports = config;