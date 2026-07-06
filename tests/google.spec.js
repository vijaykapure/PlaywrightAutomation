// @ts-check
import { test, expect } from '@playwright/test';
const { POManager } = require('../Pages/POManager');

test.describe('Google Homepage Tests', () => {

    test.beforeEach(async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        await googlePage.navigate();
    });

    test('TC_Google_01: Verify Google homepage title @smoke', async ({ page }) => {
        await expect(page).toHaveTitle(/Google/);
    });

    test('TC_Google_02: Verify Google logo is visible @smoke', async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        await expect(googlePage.googleLogo).toBeVisible();
    });

    test('TC_Google_03: Verify search box is visible and enabled @smoke', async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        await expect(googlePage.searchBox).toBeVisible();
        await expect(googlePage.searchBox).toBeEnabled();
    });

    test('TC_Google_04: Verify search returns results for a valid query', async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        await googlePage.search('Playwright automation');
        await expect(page).toHaveURL(/search/);
        await expect(googlePage.searchResults).toBeVisible();
    });

    test('TC_Google_05: Verify search result titles are present', async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        await googlePage.search('Playwright automation');
        const titles = await googlePage.getResultTitles();
        expect(titles.length).toBeGreaterThan(0);
    });

    test('TC_Google_06: Verify search box accepts and retains typed text', async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        await googlePage.searchBox.fill('Hello World');
        await expect(googlePage.searchBox).toHaveValue('Hello World');
    });

    test('TC_Google_07: Verify search box is cleared after clear', async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        await googlePage.searchBox.fill('Some text');
        await googlePage.searchBox.clear();
        await expect(googlePage.searchBox).toHaveValue('');
    });

    test('TC_Google_08: Verify URL contains search query after performing a search', async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        await googlePage.search('OpenAI');
        const currentUrl = page.url();
        expect(currentUrl).toContain('q=OpenAI');
    });

    test('TC_Google_09: Verify search suggestions appear while typing', async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        const suggestions = await googlePage.getSearchSuggestions('Playwright');
        expect(suggestions.length).toBeGreaterThan(0);
    });

    test('TC_Google_10: Verify Google Search button is visible on homepage', async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        await expect(googlePage.searchButton).toBeVisible();
    });

    test('TC_Google_11: Verify I\'m Feeling Lucky button is visible on homepage', async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        await expect(googlePage.luckyButton).toBeVisible();
    });

    test('TC_Google_12: Verify special characters in search query are handled', async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        await googlePage.search('@#$%^&*');
        await expect(page).toHaveURL(/search/);
    });

    test('TC_Google_13: Verify empty search does not navigate away from homepage', async ({ page }) => {
        const poManager = new POManager(page);
        const googlePage = poManager.getGooglePage();
        await googlePage.searchBox.press('Enter');
        await expect(page).toHaveURL(/google\.com/);
    });

});
