// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

// <badge goes here>

## Description
<brief description>

## Table of Contents
[Installation](#installation)
[Usage](#usage)
// [License](#license)
[How to Contribute](#how-to-contribute)
[Tests](#tests)
[Questions](#questions)

## Installation
To install, run:
<brief installation guide>

## Usage
<brief how to use>

// ## License
// This project is licensed under <>.

## How to Contribute
<brief note about contributions>

## Tests


## Questions
If you have any questions, please reach me at <email here>. Otherwise, check out my GitHub at: https://github.com/<github username here>.
`;
}

module.exports = generateMarkdown;
