const { config } = require('./wdio.conf')

const sauceOptions = {
  'sauce:options': {
    seleniumVersion: '3.141.59',
    build: `Build ${Date.now()}`.slice(0, -3)
  }
}

const chromeOptions = {
  'goog:chromeOptions': {
    'w3c': true
  }
}

exports.config = Object.assign(config, {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

  capabilities: [{
    browserName: 'chrome',
    platformName: 'Windows 10',
    browserVersion: 'latest',
    ...sauceOptions,
    ...chromeOptions
  }, {
    browserName: 'firefox',
    platformName: 'Windows 10',
    browserVersion: 'latest',
    ...sauceOptions
  }, {
    browserName: 'safari',
    platformName: 'macOS 10.13',
    browserVersion: 'latest',
    ...sauceOptions
  }],

  services: ['sauce', 'applitools'],

  applitoolsKey: 'd8n4101DTLKs107jFm0TLBigOih105dIvQPE97Fxdz102I37fAxk110'
})
