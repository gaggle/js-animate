module.exports = function (config) {
  var customLaunchers = {
    sl_chrome: {
      base: "SauceLabs",
      browserName: "chrome",
      platform: "Linux",
      version: "latest"
    },
    sl_ff: {
      base: "SauceLabs",
      browserName: "firefox",
      platform: "Linux",
      version: "latest"
    },
    sl_ie: {
      base: "SauceLabs",
      browserName: "internet explorer",
      platform: "Windows 10",
      version: "latest"
    },
    sl_msedge: {
      base: "SauceLabs",
      browserName: "MicrosoftEdge",
      platform: "Windows 10",
      version: "latest"
    },
    sl_safari: {
      base: "SauceLabs",
      browserName: "safari",
      platform: "OS X 10.11",
      version: "latest"
    }
  }

  config.set({
    basePath: "",
    frameworks: ["mocha", "chai", "sinon", "browserify"],

    // list of files / patterns to load in the browser
    files: [
      "./test/*.js"
    ],

    preprocessors: {
      "./test/*.js": ["browserify"]
    },

    reporters: ["dots", "saucelabs"],

    browserify: {
      debug: true // generate source maps for easier debugging
    },

    urlRoot: "/__karma__/",
    port: 8080,
    runnerPort: 9100,
    colors: true,
    logLevel: config.LOG_INFO,

    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),

    autoWatch: false,
    singleRun: true,

    captureTimeout: 120000,
    browserNoActivityTimeout: 90000,

    sauceLabs: {
      testName: "js-animate",
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      startConnect: false
    }
  })
}
