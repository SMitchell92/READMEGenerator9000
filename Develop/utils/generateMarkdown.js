// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
import fs from "fs";
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge()}
## Description

${answers.description}

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

## License

FIX HERE
---

## Contributing

${answers.Contributing}

## Tests

${answers.Tests}

## Questions

For any further questions, please contact me via one of the following methods:
GitHub Account: ${answers.gitHubUsername}
Email Address: ${answers.email}
`
}

export default generateMarkdown;
