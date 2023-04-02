// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'NO LICENSE':
      return '';
      break;
    case 'Apache 2.0 License':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'Boost Software License 1.0':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      break;
    case 'BSD 3-Clause License':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
      break;
    case 'BSD 2-Clause License':
      return 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'CC0':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'Attribution 4.0 International':
      return 'https://creativecommons.org/licenses/by/4.0/';
      break;
    case 'Attribution-ShareAlike 4.0 International':
      return 'https://creativecommons.org/licenses/by-sa/4.0/'
      break;
    case 'Attribution-NonCommercial 4.0 International':
      return 'https://creativecommons.org/licenses/by-nc/4.0/';
      break;
    case 'Attribution-NoDerivates 4.0 International':
      return 'https://creativecommons.org/licenses/by-nd/4.0/';
      break;
    case 'Attribution-NonCommmercial-ShareAlike 4.0 International':
      return 'https://creativecommons.org/licenses/by-nc-sa/4.0/';
      break;
    case 'Attribution-NonCommercial-NoDerivatives 4.0 International':
      return 'https://creativecommons.org/licenses/by-nc-nd/4.0/';
      break;
    case 'Eclipse Public License 1.0':
      return 'https://opensource.org/licenses/EPL-1.0';
      break;
    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'GNU GPL v2':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;
    case 'GNU AGPL v3':
      return 'https://www.gnu.org/licenses/agpl-3.0';
      break;
    case 'GNU LGPL v3':
      return 'https://www.gnu.org/licenses/lgpl-3.0';
      break;
    case 'GNU FDL v1.3':
      return 'https://www.gnu.org/licenses/fdl-1.3';
      break;
    case 'The Hippocratic License 2.1':
      return 'https://firstdonoharm.dev';
      break;
    case 'The Hippocratic License 3.0':
      return 'https://firstdonoharm.dev';
      break;
    case 'IBM Public License Version 1.0':
      return 'https://opensource.org/licenses/IPL-1.0';
      break;
    case 'ISC License (ISC)':
      return 'https://opensource.org/licenses/ISC';
      break;
    case 'The MIT License':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'Attribution License (BY)':
      return 'https://opendatacommons.org/licenses/by/';
      break;
    case 'Open Database License (ODbL)':
      return 'https://opendatacommons.org/licenses/odbl/';
      break;
    case 'Public Domain Dedication and License (PDDL)':
      return 'https://opendatacommons.org/licenses/pddl/';
      break;
    case 'The Perl License':
      return 'https://opensource.org/licenses/Artistic-2.0';
      break;
    case 'The Artistic License 2.0':
      return 'https://opensource.org/licenses/Artistic-2.0';
      break;
    case 'SIL Open Font License 1.1':
      return 'https://opensource.org/licenses/OFL-1.1';
      break;
    case 'The Unlicense':
      return 'http://unlicense.org/';
      break;
    case 'The Do What the Fuck You Want to Public License':
      return 'http://www.wtfpl.net/about/';
      break;
    case 'The zlib/libpng License':
      return 'https://opensource.org/licenses/Zlib';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'NO LICENSE':
      return '';
      break;
    case 'Apache 2.0 License':
      return 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Boost Software License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case 'BSD 3-Clause License':
      return 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'BSD 2-Clause License':
      return 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'CC0':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'Attribution 4.0 International':
      return 'https://creativecommons.org/licenses/by/4.0/';
      break;
    case 'Attribution-ShareAlike 4.0 International':
      return 'https://creativecommons.org/licenses/by-sa/4.0/'
      break;
    case 'Attribution-NonCommercial 4.0 International':
      return 'https://creativecommons.org/licenses/by-nc/4.0/';
      break;
    case 'Attribution-NoDerivates 4.0 International':
      return 'https://creativecommons.org/licenses/by-nd/4.0/';
      break;
    case 'Attribution-NonCommmercial-ShareAlike 4.0 International':
      return 'https://creativecommons.org/licenses/by-nc-sa/4.0/';
      break;
    case 'Attribution-NonCommercial-NoDerivatives 4.0 International':
      return 'https://creativecommons.org/licenses/by-nc-nd/4.0/';
      break;
    case 'Eclipse Public License 1.0':
      return 'https://opensource.org/licenses/EPL-1.0';
      break;
    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'GNU GPL v2':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;
    case 'GNU AGPL v3':
      return 'https://www.gnu.org/licenses/agpl-3.0';
      break;
    case 'GNU LGPL v3':
      return 'https://www.gnu.org/licenses/lgpl-3.0';
      break;
    case 'GNU FDL v1.3':
      return 'https://www.gnu.org/licenses/fdl-1.3';
      break;
    case 'The Hippocratic License 2.1':
      return 'https://firstdonoharm.dev';
      break;
    case 'The Hippocratic License 3.0':
      return 'https://firstdonoharm.dev';
      break;
    case 'IBM Public License Version 1.0':
      return 'https://opensource.org/licenses/IPL-1.0';
      break;
    case 'ISC License (ISC)':
      return 'https://opensource.org/licenses/ISC';
      break;
    case 'The MIT License':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'Attribution License (BY)':
      return 'https://opendatacommons.org/licenses/by/';
      break;
    case 'Open Database License (ODbL)':
      return 'https://opendatacommons.org/licenses/odbl/';
      break;
    case 'Public Domain Dedication and License (PDDL)':
      return 'https://opendatacommons.org/licenses/pddl/';
      break;
    case 'The Perl License':
      return 'https://opensource.org/licenses/Artistic-2.0';
      break;
    case 'The Artistic License 2.0':
      return 'https://opensource.org/licenses/Artistic-2.0';
      break;
    case 'SIL Open Font License 1.1':
      return 'https://opensource.org/licenses/OFL-1.1';
      break;
    case 'The Unlicense':
      return 'http://unlicense.org/';
      break;
    case 'The Do What the Fuck You Want to Public License':
      return 'http://www.wtfpl.net/about/';
      break;
    case 'The zlib/libpng License':
      return 'https://opensource.org/licenses/Zlib';
      break;
  }
}

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

${renderLicenseBadge(data.license)}

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
