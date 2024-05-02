const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  constructor(page, request) {
    this.page = page
    this.request = request
    this.loginPageButton = page.getByRole('button', { name: 'Увійти' })
    this.emailTab = page.locator('//div[@data-tid="auth_form-tab-email"]')
    this.phoneTab = page.locator('//div[@data-tid="auth_form-tab-phone"]')
    this.phoneInput = page.getByLabel('Номер телефону * +')
    this.emailInput = page.getByPlaceholder('Email')
    this.passwordInput = page.getByPlaceholder('Пароль')
    this.loginButton = page.getByRole('button', { name: 'Вхід' })
    this.forgotPasswordButton = page.getByText('Забув пароль?')
    this.notificationButton = page.locator('//div[contains(@class, "notification-center-bell__content")]')
    this.notificationSelector = '//div[contains(@class, "notification-center-bell__content")]'
    this.loginButtonSelector = '//button[contains(@data-tid, "header-login-btn")]'
    this.passwordValidationMessage = page.locator('//div[contains(@class, "app-field-message app-field-message--type--error")]//span')
  }

  async goto(){
    await this.page.goto(process.env.BASE_URL)
  }

  async login(email, password){
    await this.loginPageButton.click()
    await this.page.waitForLoadState('networkidle')
    await this.page.waitForSelector("//span[contains(text(), 'Вхід')]")
    await this.emailTab.click()
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }

  async resetPassword(email, password){
    await this.loginPageButton.click()
    await this.emailTab.click()
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
  }

}