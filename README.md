# SWQ-recruitment-task
To install all dependecies run in terminal `npm install`

To run all tests run in terminal `test_env=prod npx playwright test` where dev1 is env. All possible variants: prod

To view report run in terminal `npx playwright show-report`

For convinience you can install extension "Playwright Test for VSCode" and run test with UI.

To change default env go to globalSetup.js file and change 12 line to needed environment (e.g.    process.env.test_env = "prod")

