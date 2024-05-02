const { FullConfig } = require("@playwright/test");
const dotenv = require('dotenv');

async function globalSetup(config) {
  if(process.env.test_env){
    dotenv.config({
      path: `resources/dotenv/.env.${process.env.test_env}`,
      override: true
    });
  }
  else{
    process.env.test_env = "prod"
    dotenv.config({
      path: `resources/dotenv/.env.${process.env.test_env}`,
      override: true
    });
  }
}
  
  module.exports = globalSetup;