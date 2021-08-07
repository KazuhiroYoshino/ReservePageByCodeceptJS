exports.config = {
  tests: 'reservePage_test/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://example.selenium.jp/reserveApp_Renewal/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'ReservePageNew',
  translation: 'ja-JP',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
    ,
    allure: {
        enabled: true
      }
  }
}