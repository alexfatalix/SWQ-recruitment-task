const { test, expect } = require('../utils/fixtures');

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  })

test('Get started link', async ({ page }) => {
    await expect(page).toHaveURL("https://cosmolot.ua");
  })