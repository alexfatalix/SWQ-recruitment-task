const base = require('@playwright/test');
const  {LoginPage}  = require('../pages/loginPage');

exports.test = base.test.extend({
    loginPage: async ({ page, request }, use) => {
      const loginPage = new LoginPage(page, request);
      await use(loginPage);
    }
})

exports.expect = base.expect;