// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
import fs from "fs";
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license == 'Hippocratic License 3.0') {
    return `![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)`
  } else if (license == 'GNU General Public License (GPL) v3') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license == 'BSD 3-Clause License') {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  } else if (license == 'Mozilla Public LIcense 2.0') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  } else if (license == 'No License') {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else if (license == 'Hippocratic License 3.0') {
    return `https://firstdonoharm.dev`
  } else if (license == 'GNU General Public License (GPL) v3') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license == 'BSD 3-Clause License') {
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else if (license == 'Mozilla Public LIcense 2.0') {
    return `https://opensource.org/licenses/MPL-2.0`
  } else if (license == 'No License') {
    return ""
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
## License
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.Title}
${renderLicenseBadge(answers.License)}

## Description

${answers.Description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.Installation}

## Usage

${answers.Usage}

${renderLicenseSection(answers.License)}

This application is covered under the following license: ${renderLicenseLink(answers.License)}
---

## Contributing

${answers.Contributing}

## Tests

${answers.Tests}

## Questions

For any further questions, please contact me via one of the following methods: <br/>
-GitHub Username: ${answers.gitHubUsername}  <br/>
-GitHub Link: [github.com/${answers.gitHubUsername}](github.com/${answers.gitHubUsername}) <br/>
-Email Address: ${answers.email}  <br/>
`
}

export default generateMarkdown;
