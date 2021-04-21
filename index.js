//require inquirer package to gather command line information
const inquirer = require('inquirer');
//require file system to write read me file
const fs = require('fs');

//append data to readme file
function appendDataToReadMe(data)
{
    fs.appendFileSync("ReadMe.md",data);
}

//append gnu badge to readme
function appendLicenseBadgeToReadMe(license)
{
    let badgeObj = 
    {
        "MIT":"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n",
        "GNU GPLv3":"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n"
    }
    appendDataToReadMe(badgeObj[license]);
}

//append title to readme
function appendTitleToReadMe(title)
{
    appendDataToReadMe(`# ${title}\n\n`);
}

//create table of conents that reference rest of user's choices
function appendTableOfContents()
{
    appendDataToReadMe("## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n\n")
}

//append description to readme
function appendDescriptionToReadMe(descriptionTitle, descriptionContents)
{
    appendDataToReadMe(`## ${descriptionTitle}\n\n${descriptionContents}\n\n`);
}

//append line item to read me
function appendLineItemToReadMe(lineItem)
{
    appendDataToReadMe(`- ${lineItem}`)
}

//append link to read me
function appendGithubProfileToDescription(profile)
{
    appendDescriptionToReadMe("Questions",`[Github Profile](https://github.com/${profile})\n\n`)
}

//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

inquirer
  .prompt([
    //declaring my list of questions here
      {
        name:"title",
        type:"input",
        message:"Enter a title for your project",
      },
      {
        name: "description",
        type: "input",
        message: "Enter your project description"
      },
      {
        name: "installation",
        type: "input",
        message: "Enter project installation instructions"
      },
      {
        name: "usage",
        type: "input",
        message: "Enter your project's usage information"
      },
      {
        name: "contributionGuidelines",
        type: "input",
        message: "Enter your contribution guidelines"
      },
      {
        name: "testInstructions",
        type: "input",
        message: "Enter your project's test instructions"
      },
      {
          name:"license",
          type:"list",
          message: "Select what type of license you're project",
          choices:["GNU GPLv3", "MIT"]
      },
      {
        name: "github",
        type: "input",
        message: "Enter your github username"
      },
      {
        name: "email",
        type: "input",
        message: "Enter your email you wish to be reached with regarding questions on this project"
      },
  ])
  .then(answers => {
    //deal with each user input in turn
    appendLicenseBadgeToReadMe(answers.license);
    appendTitleToReadMe(answers.title);
    appendDescriptionToReadMe("Description",answers.description);
    appendTableOfContents();
    appendDescriptionToReadMe("Installation",answers.installation);
    appendDescriptionToReadMe("Usage",answers.usage);
    appendDescriptionToReadMe("Contribution Guidelines",answers.contributionGuidelines);
    appendDescriptionToReadMe("Tests",answers.testInstructions);
    appendGithubProfileToDescription(answers.github);
    appendDataToReadMe("Reach out to me with any questions surrounding this project at: " + answers.email);
  })
  .catch(error => {
      //boiler plate error handling from inquire
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });