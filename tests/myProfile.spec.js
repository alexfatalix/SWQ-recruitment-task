const { test, expect } = require('../utils/fixtures');
import { fakerUK } from '@faker-js/faker'
import { ADDRGETNETWORKPARAMS } from 'dns';

test.beforeEach(async ({ page, loginPage, registrationPage, myProfilePage }) => {
    await loginPage.goto()
    await registrationPage.registration(fakerUK.internet.email(), fakerUK.internet.password())
    await page.waitForSelector(loginPage.notificationSelector)
    })

test('Set nickname', async ({ myProfilePage, loginPage }) => {
    let nickname = fakerUK.internet.userName()
    await loginPage.goto()
    await myProfilePage.openMyProfilePage()
    await myProfilePage.setNickname(nickname)
    await myProfilePage.expectInfo(nickname)
  })

test('Set phone', async ({ myProfilePage, loginPage, page }) => {
    let phoneNumber = fakerUK.phone.number('99#######')
    await loginPage.goto()
    await myProfilePage.openMyProfilePage()
    await myProfilePage.setPhone(phoneNumber)
    await myProfilePage.expectInfo(phoneNumber)
  })

test('Set email', async ({ myProfilePage, loginPage }) => {
    let email = fakerUK.internet.email()
    await loginPage.goto()
    await myProfilePage.openMyProfilePage()
    await myProfilePage.setEmail(email)
    await myProfilePage.expectInfo(email)
  })

test('Exit from account', async ({ page, myProfilePage, loginPage }) => {
    await loginPage.goto()
    await myProfilePage.openMyProfilePage()
    await myProfilePage.exitAccount()
    await page.waitForSelector(loginPage.loginButtonSelector)
  })