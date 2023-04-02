// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'Briefly describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What should the user do to install your application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Briefly state the instructions for use',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How can other developers contribute to your project?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'How can other developers test your application?',
        name: 'tests',
    },
    {
        type: 'rawlist',
        message: 'Choose the license for your repository',
        name: 'license',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'The Hippocratic License 2.1', 'The Hippocratic License 3.0', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database LIcense (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'The Do What the Fuck You Want to Public License', 'The zlib/libpng License'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, (err) => err ? console.log(err) : console.log('Success! You have a new README!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);

            // const readme = generateMarkdown(answers);

            // writeToFile('README.md', readme);
        })
}

// Function call to initialize app
init();
