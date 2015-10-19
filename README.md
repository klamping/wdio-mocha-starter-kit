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

## Travis Set Up

The repo comes with [a `.travis.yml` file](/blob/master/.travis.yml) so you can easily run these tests via [Travis CI](https://travis-ci.org). To do so:

1. Fork the repo
1. [Authorize TravisCI with GitHub](https://travis-ci.org/auth)
1. Go to [your profile page](https://travis-ci.org/profile) and enable Travis CI for the repository

## Test Script

The test script will start a local Selenium server, load amazon.com, search for `red fedora`, then assert the page title is correct and take a screenshot of the results.
