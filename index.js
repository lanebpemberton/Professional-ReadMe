//require inquirer package to gather command line information
const inquirer = require('inquirer');
//require file system to write read me file
const fs = require('fs');

//append data to readme file
function appendDataToReadMe(data)
{
    fs.appendFileSync("ReadMe.md",data);
}

//append title to readme
function appendTitleToReadMe(title)
{
    appendDataToReadMe(title);
}

//append link to read me
function appendLinkToReadMe(link)
{
    
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
      }
      /*{
          name:"projectType",
          type:"list",
          message: "Select what type of project you're describing",
          choices:["Node Project", "C# Project", "React Project"]
      }*/
  ])
  .then(answers => {
    //deal with each user input in turn
    console.log(answers.projectTitle);
    console.log(answers.projectType);
  })
  .catch(error => {
      //boiler plate error handling from inquire
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });