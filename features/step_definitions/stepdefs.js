const assert = require("assert");
const { Given, When, Then, AfterAll } = require("cucumber");
require("selenium-webdriver");
const { expect } = require("chai");

function isInputCats(text) {
  if (text === "cats") {
    return "cats";
  } else {
    return "Nope";
  }
}

Given("I go to google.com", function(text) {
  this.icon = text;
});

When("I search for {string}", function(text) {
  this.actualAnswer = isInputCats(this.icon);
});

Then("I should see 10 results", function(expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});

// Given("I got to google.com", givenDay => {
//   console.log("cat");
// });

// When("I search for {string}", text => {});

// Then("I should see 10 results", () => {});
