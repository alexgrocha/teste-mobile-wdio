const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723, 
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.specs.js'
    ],
    framework: 'mocha',
    capabilities: [{
      "appium:platformName": "Android",
      "appium:platformVersion": "9.0",
      "appium:deviceName": "EBAC-QA",
      "appium:automationName": "UiAutomator2",
      "appium:appWaitActivity": ".MainActivity",
      "appium:appPackage": "com.wdiodemoapp",
      "appium:appActivity": ".SplashActivity"
    }]
}
