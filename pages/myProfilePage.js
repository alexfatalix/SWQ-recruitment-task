const { expect } = require('@playwright/test');

exports.MyProfilePage = class MyProfilePage {

  constructor(page, request) {
    this.page = page
    this.request = request
    this.menuButton = page.locator('span').filter({ hasText: 'Меню' }).getByRole('img')
    this.myProfileButton = page.getByRole('link', { name: 'Мій профіль' })
    this.personalDataDropdown = page.locator('[id="Profile\\.Personal"] div').filter({ hasText: 'Персональні дані' }).first()
    this.nickNameInput = page.getByPlaceholder('Придумай нік')
    this.phoneInput = page.getByLabel('Номер телефону * +')
    this.emailInput = page.locator("//input[contains(@inputmode, 'email')]")
    this.saveButton = page.getByRole('button', { name: 'Зберегти' })
    this.confirmEmailButton = page.locator('[id="ProfilePersonalContacts\\.btnEmailSave"]')
    this.confirmPhoneButton = page.locator('[id="ProfilePersonalContacts\\.btnPhoneSave"]')
    this.infoScript = ({searchedInfo}) => page.locator(`//script[contains(text(), "${searchedInfo}")]`)
    // this.verificationDropdown =
    // this.passwordDropdown =
    // this.mailingSettings =
    // this.socialNetworkDropdown =
    this.logoutButton = page.getByRole('button', { name: 'Вийти з акаунту' })
  }

  async goto(){
    await this.page.goto(process.env.BASE_URL)
  }

  async gotoMyProfilePage(){
    await this.page.goto(process.env.BASE_URL + '/profile/')
  }

  async openMyProfilePage(){
    await this.menuButton.click()
    await this.myProfileButton.click()
    // await this.personalDataDropdown.click()
  }

  async setNickname(nickname){
    await this.nickNameInput.fill(nickname)
    await this.saveButton.click()
  }

  async setEmail(email){
    await this.emailInput.fill(email)
    await this.confirmEmailButton.click()
  }

  async setPhone(phone){
    await this.phoneInput.fill(phone)
    await this.confirmPhoneButton.click()
  }

  async exitAccount(){
    await this.logoutButton.click()
  }

  async expectInfo(info){
    await this.page.reload()
    await expect(await this.page.locator(`//script[contains(text(), '${info}')]`).first()).toBeAttached()
  }
}