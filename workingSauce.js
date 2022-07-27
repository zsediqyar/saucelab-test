const {Builder, By, Key, until} = require('selenium-webdriver')
const SauceLabs = require('saucelabs').default;
const assert = require('assert');
const utils = require('./utils')

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;
const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.saucelabs.com:443/wd/hub`;
// NOTE: Use the URL below if using our EU datacenter (e.g. logged in to app.eu-central-1.saucelabs.com)
// const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub`;

/**
* Task I: Update the test code so when it runs, the test clicks the "I am a link" link.
*
* Task II - Comment out the code from Task I. Update the test code so when it runs, 
* the test is able to write "Sauce" in the text box that currently says "I has no focus".
*
* Task III - Update the test code so when it runs, it adds an email to the email field, 
* adds text to the comments field, and clicks the "Send" button.
* Note that email will not actually be sent!
*
* Task IV - Add a capability that adds a tag to each test that is run.
* See this page for instructions: https://docs.saucelabs.com/dev/test-configuration-options/
* 
* Bonus: Set the status of the test so it shows as "passed" instead of "complete".
* We've included the node-saucelabs package already. For more info see:
* https://github.com/saucelabs/node-saucelabs
*/

describe('Working Sauce', function () {
    it('should go to Google and click Sauce', async function () {
        let driver = await new Builder().withCapabilities(utils.workingCapabilities)
                    .usingServer(ONDEMAND_URL).build();


    /**
     * Goes to Sauce Lab's guinea-pig page and verifies the title
     */

    await driver.get("https://saucelabs.com/test/guinea-pig");
    await assert.strictEqual("I am a page title - Sauce Labs", await driver.getTitle());

    // Task I
    // let clickLink = await driver.findElement(By.partialLinkText("link"));
    // await clickLink.click(); 

    // Task II
        // let textB = await driver.findElement(By.id("i_am_a_textbox"));
        // await textB.sendKeys("Sauce")

        /* Vanilla JS */
        // let textb = document.getElementById("i_am_a_textbox");
        // textb.value = "Sauce";

    // Task III
        // let email = await driver.findElement(By.id("fbemail"));
        // let comments = await driver.findElement(By.id("comments"));
        // let send = await driver.findElement(By.id("submit"));
        // await email.sendKeys("abc@example.com");
        // await comments.sendKeys("hello from the outside");
        // await send.click();

        /* Vanilla JS */
        // let email = document.getElementById("fbemail");
        // let comments = document.getElementById("comments");
        // let send = document.getElementById("submit");

        // function doTheJob() {
        //     email.value = "abc@example.com";
        //     comments.value = "hello world";
        //     send.click();
        // }
        //  doTheJob();

    // TASK IV
    /* added the tags object in the utils.js file */
    
    await driver.quit();
    });
});
