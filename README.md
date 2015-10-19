# Sample Visual Functional Regression Test Suite

This is an example repo of a setup using the following technology:

- [Webdriver.io](webdriver.io)
- [WebdriverCSS](https://github.com/webdriverio/webdrivercss)
- [Mocha](mochajs.org)
- [Chai](chaijs.com)
- [Selenium Standalone](https://github.com/vvo/selenium-standalone)

## Installation

1. Download/clone this repo
1. Run `npm install`

## Usage 

1. Run `npm test`

Validate all tests pass.

## Test Script

The test script will start a local Selenium server, load amazon.com, search for `red fedora`, then assert the page title is correct and take a screenshot of the results.
