const { test: base, expect } = require('@playwright/test');
const { POManager } = require('../Pages/POManager');

const test = base.extend({
    poManager: async ({ page }, use) => {
        await use(new POManager(page));
    }
});

module.exports = { test, expect };
