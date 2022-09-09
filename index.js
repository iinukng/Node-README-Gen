// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Provide a project description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Project Installation',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Installation steps');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project Usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('The use of the project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Contributing guidelines',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('Project contributions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Project Testing',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('How to test this project');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Project License',
        choices: ['None', 'MIT', 'Apache 2', 'GPL v3'],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Pick one of the options')
                return false;
                }
        }
    },
    {
        type: 'input',
        name: 'question',
        message: 'Github username for questions',
        validate: questionInput => {
            if (questionInput) {
                return true;
            } else {
                console.log('Enter Github username to answer questions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Email for contact',
        validate: contactInput => {
            if (contactInput) {
                return true;
            } else {
                console.log('Provide your email');
                return false;
            }
        }
    }
];


// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}

// Function call to initialize app
init();
