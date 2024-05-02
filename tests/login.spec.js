const { test, expect } = require('../utils/fixtures');
import { fakerUK } from '@faker-js/faker'

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto()
  })

  test('Successful login', async ({ page, loginPage }) => {
    await loginPage.login(process.env.REGULAR_USER1_EMAIL, process.env.REGULAR_USER1_PASSWORD)
    await page.waitForSelector(loginPage.notificationSelector)
  })

  test('Unsuccessful login with wrong password', async ({ loginPage }) => {
    await loginPage.login(process.env.REGULAR_USER1_EMAIL, fakerUK.internet.password())
    await expect(loginPage.passwordValidationMessage).toContainText("Невірний пароль")
  })

  test('Unsuccessful login with wrong email', async ({ loginPage }) => {
    await loginPage.login(fakerUK.internet.email(), fakerUK.internet.password())
    await expect(loginPage.passwordValidationMessage).toContainText("Обліковий запис не знайдений")
  })