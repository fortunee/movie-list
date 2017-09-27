const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config');

// Karma configuration
// Generated on Fri Sep 22 2017 10:11:58 GMT+0100 (WAT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './spec/specs.webpack.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './spec/specs.webpack.js': ['ng-html2js', 'webpack', 'sourcemap'],
      // './app/**/*.html' : ['ng-html2js']
    },

    // ng-html2js creates a "templates" module
    // and put the HTML into the $templateCache
    // because Angular security blocks execution of
    // $compile(...) as it considers the templateUrl path
    // as a cross domain request
    ngHtml2JsPreprocessor: {
      // stripPrefix: 'app/',
      moduleName: 'templates'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Webpack
    webpack: webpackConfig,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
