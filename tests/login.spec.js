const { test, expect } = require('../utils/fixtures');

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto('')
  })

test('Get started link', async ({ page }) => {
    await expect(page).toHaveURL("https://slotoking.ua");
  })