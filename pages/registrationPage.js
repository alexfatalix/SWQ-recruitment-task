const { expect } = require('@playwright/test');

exports.RegistrationPage = class RegistrationPage {

  constructor(page, request) {
    this.page = page
    this.request = request
    this.registrationPageButton = page.getByRole('button', { name: 'Реєстрація' })
    this.emailTab = page.locator('//div[@data-tid="auth_form-tab-email"]')
    this.phoneTab = page.locator('//div[@data-tid="auth_form-tab-phone"]')
    this.phoneInput = page.getByLabel('Номер телефону * +')
    this.emailInput = page.getByPlaceholder('Email')
    this.passwordInput = page.getByPlaceholder('Пароль')
    this.registerButton = page.locator('//span[contains(text(), "Зареєструватися")]')
    this.notificationButton = page.locator('//div[contains(@class, "notification-center-bell__content")]')
    this.passwordValidationMessage = page.locator('//div[contains(@class, "app-field-message app-field-message--type--error")]//span')
  }

  async goto(){
    await this.page.goto(process.env.BASE_URL)
  }

  async registration(email, password, promocode = ""){
    await this.registrationPageButton.click()
    await this.page.waitForLoadState('networkidle');
    await this.emailTab.click()
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.registerButton.click({force: true})
  }

}