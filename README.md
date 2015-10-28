# Sample Visual Functional Regression Test Suite

This is an example repo of a setup using the following technology:

- [Webdriver.io](webdriver.io)
- [WebdriverCSS](https://github.com/webdriverio/webdrivercss)
- [Mocha](mochajs.org)
- [Chai](chaijs.com)
- [Selenium Standalone](https://github.com/vvo/selenium-standalone)

## Installation

1. Download/clone this repo
1. [Install GraphicsMagick](https://github.com/webdriverio/webdrivercss#install)
1. Run `npm install`

## Usage 

1. Run `npm test`

Validate all tests pass.

## Test Script

The test script will start a local Selenium server (if Browserstack isn't set up), load [webdriver.io](http://webdriver.io) API page, search for `red fedora`, then assert the page title is correct and take a screenshot of the results.

## Browserstack Setup

You can use browserstack for Selenium in one of two ways:

1. Create a `test/functional/browserstack.json` file, with the following contents:
```
{
    "user": "myusername",
    "key": "apikey"
}
```
2. Pass in the user/key combo via the command line: `user=myusername key=apikey npm test`

You can access your username/key by visiting [the Automate profile page](https://www.browserstack.com/accounts/automate) (you must be logged in of course).

After you set your Browserstack account up, you can still test locally by passing in `local=true` as an environmental variable: `local=true npm test`

## TravisCI Set Up

The repo comes with [a `.travis.yml` file](https://github.com/klamping/wdio-mocha-starter-kit/blob/master/.travis.yml) so you can easily run these tests via [Travis CI](https://travis-ci.org). To do so:

1. Fork the repo
1. [Authorize TravisCI with GitHub](https://travis-ci.org/auth)
1. Go to [your profile page](https://travis-ci.org/profile) and enable Travis CI for the repository

## Storing Baseline Images

Images are stored in the Git repo like any other file. This makes is simple to share baseline images across the teams. It also allows for changes in the baseline to be tracked over time.

### Accepting/Rejecting changes

Whether or not updates to the baseline images are accepted depends on the goal of the changes. Here are a few scenarios:

#### No visual changes

If no visual changes occur (and none were expected), then nothing needs to be  checked in.

#### Unwanted visual changes

If visual changes occured (new images in the `diff` directory), but they weren't intended, that means there was a regression in the UI output. Review the diffs and fix the visual changes that occurred. No files should be checked in.

#### Wanted visual changes

If visual changes occur and are warranted, the following steps will need to be taken to update the baseline images:

1. Delete the contents of the baseline & diff image directories.
2. Run the test suite again.
3. Add/commit all updated images.
4. Submit a Pull Request to the GitHub repo with both the updated functionality and the new images.
5. Have another team member review the new images. [Github has useful image diff tools](https://github.com/blog/817-behold-image-view-modes) to help compare the changes. 
