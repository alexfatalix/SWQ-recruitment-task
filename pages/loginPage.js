const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  constructor(page, request) {
    this.page = page
    this.request = request
  }

  async goto(){
    await this.page.goto('')
  }
}