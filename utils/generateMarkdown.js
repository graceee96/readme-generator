// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'NO LICENSE') {
    return '';
  } else {
    return `## License
    This project is licensed under [${license}](${renderLicenseLink(license)}).`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

// <badge goes here>

## Description
${data.description}

## Table of Contents
[Installation](#installation)
[Usage](#usage)
// [License](#license)
[How to Contribute](#how-to-contribute)
[Tests](#tests)
[Questions](#questions)

## Installation
To install:
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## How to Contribute
${data.contributions}

## Tests
To test:
${data.tests}

## Questions
If you have any questions, please reach me at ${data.email}. Otherwise, check out my GitHub at: https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
