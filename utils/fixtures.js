const base = require('@playwright/test');
const  {LoginPage}  = require('../pages/loginPage');
const  {RegistrationPage}  = require('../pages/registrationPage');
const  {MyProfilePage}  = require('../pages/myProfilePage');

exports.test = base.test.extend({
    loginPage: async ({ page, request }, use) => {
      const loginPage = new LoginPage(page, request);
      await use(loginPage);
    },
    registrationPage: async ({ page, request }, use) => {
      const registrationPage = new RegistrationPage(page, request);
      await use(registrationPage);
    },
    myProfilePage: async ({ page, request}, use) => {
      const myProfilePage = new MyProfilePage(page, request);
      await use(myProfilePage);
    }
})

exports.expect = base.expect;