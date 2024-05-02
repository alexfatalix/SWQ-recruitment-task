const { test, expect } = require('../utils/fixtures')
import { fakerUK } from '@faker-js/faker'

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto()
  })

test('Successful registration', async ({ page, loginPage, registrationPage }) => {
    await registrationPage.registration(fakerUK.internet.email(), fakerUK.internet.password())
    await page.waitForSelector(loginPage.notificationSelector)
  })

test('Unsuccessful registration with invalid email', async ({ loginPage, registrationPage }) => {
  await registrationPage.registration(fakerUK.internet.domainName(), fakerUK.internet.password())
  await expect(loginPage.passwordValidationMessage).toContainText("Перевір правильність введення")
  })

test('Unsuccessful registration without password', async ({ loginPage, registrationPage }) => {
  await registrationPage.registration(fakerUK.internet.email(), "")
  await expect(loginPage.passwordValidationMessage).toContainText("Обов'язкове поле")
  })
  
test('Unsuccessful registration with invalid password', async ({ loginPage, registrationPage }) => {
    await registrationPage.registration(fakerUK.internet.email(), "123")
    await expect(loginPage.passwordValidationMessage).toContainText("Мінімум 6 символів")
  })