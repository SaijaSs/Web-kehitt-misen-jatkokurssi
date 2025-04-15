// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({

testDir: '../Frontend/Tests_e2e', // määritellään testikansio


  use: {
    baseURL: 'http://localhost:5173',
    headless: false,
    browserName: 'chromium',
    video: 'on-first-retry',
  },

    // Ignoroi kaikki ei-JS tiedostot, kuten CSS ja kuvat
    testIgnore: ['**/*.css', '**/*.png', '**/*.jpg', '**/*.gif'],
});
