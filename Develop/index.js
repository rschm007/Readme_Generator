// external packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// internal modules
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  // object that stores Github username of user
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
    default: "rschm007",
    // validate that the user inputs a valid Github username
    validate: (answer) => {
      if (answer.length < 1) {
        return console.log("A valid GitHub username is required.");
      }
      return true;
    },
  },
  // object that stores Github repo name
  {
    type: "input",
    message: "What is the name of your GitHub repo?",
    name: "repo",
    default: "readme_generator",
    // validate that the user inputs a valid Github username
    validate: (answer) => {
      if (answer.length < 1) {
        return console.log("A valid GitHub repo is required.");
      }
      return true;
    },
  },

  // object that stores the title of the project
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
    default: "Project Title",
    // validate that the user inputs a valid Github username
    validate: (answer) => {
      if (answer.length < 1) {
        return console.log("A valid project title is required.");
      }
      return true;
    },
  },
  // object that stores the project description
  {
    type: "input",
    message: "Please write a description for your project",
    name: "description",
    default: "Project Description",
    // validate that the user inputs a valid Github username
    validate: (answer) => {
      if (answer.length < 1) {
        return console.log("A valid description is required.");
      }
      return true;
    },
  },
  // object that stores the project installation steps
  {
    type: "input",
    message:
      "Installation: Please describe the steps required to install your project.",
    name: "installation"
  },
  // object that stores the project usage instructions
  {
    type: "input",
    message:
      "Usage: Please give instructions and examples of how to use your project.",
    name: "usage"
  },
//   objects that stores info on how users can contribute
  {
    type: "input",
    message:
      "Usage: Please give instructions on how other devs can contribute to your project.",
    name: "contribute"
  },
  // object that stores the project tests
  {
    type: "input",
    message:
      "Tests: Please provide any tests for your application and instructions on how to run the tests.",
    name: "tests"
  },
  // object that stores the project license
  {
    type: "input",
    message:
      "Please choose a license for your project. A complete list of projects can be found at https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository",
    name: "license"
  },
  //   objects that stores credit info for contributors
  {
    type: "input",
    message:
      "If others contributed to your project, please credit them here.",
    name: "credits"
  },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your README.md file has been generated.");
    });
}

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
    try {
        // prompt inquirer questions
        const userResp = await inquirer.prompt(questions);
        console.log(`You responded with: ${userResp}`);
        console.log('Responses entered succesfully! Getting GitHub data, please wait...');
        // Call GitHub API to retrieve user information
        const userInfo = await api.getUser(userResp);
        console.log(`Your GitHub info: ${userInfo}`);

        // pass inquirer and github api info to generateMarkdown.js
        console.log("README is being written!")
        const markdown = generateMarkdown(userResp, userInfo);
        console.log(markdown);

        // write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);
    } catch (error) {
        console.log(error);
    }

};

// function call to initialize program
init();
