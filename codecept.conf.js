exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://hipay.com/en/',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    fraudManagementPage: './pages/FraudManagement.js',
    cookiesHandlingPage: "./pages/cookiesHandling.js",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    htmlReporter: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {},
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
      outputDir: 'output/allure-results'
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'test frontend JS'
}