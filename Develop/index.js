// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: 'Title',
    message: `What is the Title of your application?`
},
{
    type: "input",
    name: 'Description',
    message: `What is the Description of your app?`
},
{
    type: "input",
    name: "Installation",
    message: `How do you install your app?`
},
{
    type: "input",
    name: "Usage",
    message: `What is the app used for?`
},
{
    type: "list",
    name: "License",
    message: `What license did you use for your app?`,
    choices: ["MIT", 'Hippocratic License 3.0', 'GNU General Public License (GPL) v3', 'BSD 3-Clause License', 'Mozilla Public LIcense 2.0', 'No License'],
},
{
    type: "input",
    name: "Contributing",
    message: `How do others contribute to the app?`
},
{
    type: "input",
    name: "Tests",
    message: `What are some tests for your app?`
},
{
    type: "input",
    name: "gitHubUsername",
    message: `What is your GitHub Username?`
},
{
    type: "input",
    name: "email",
    message: `What is your email?`
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log("there was an err")
        }
        else {
            console.log("README Successfully Written")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        ).then(function (answers) {
            const markdown = generateMarkdown(answers)
            writeToFile("README.md", markdown)
        })
    // fs.appendFile(README.txt,)
}

// Function call to initialize app
init();
