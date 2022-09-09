// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
      badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3') {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'Apache 2') {
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'GPL v3') {
      licenseLink = 'https://www.gnu.org/licenses'
    } else {
      licenseLink = ""
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {

  return`
  # ${answer.title}
  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}
  ## Table of Contents:
  ###  * [Description](#description)
  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [License](#license)
  ###  * [Contributors](#contributors)
  ###  * [Tests](#tests)
  ###  * [Questions](#questions)
  ## Description:
  ### ${answer.description}
  ## Installation:
  ### ${answer.installation}
  ## Usage:
  ### ${answer.usage}
  ## Contributors:
  ### ${answer.contributions}
  ## Tests:
  ### ${answer.tests}
  ## Questions:
  ### If you have any questions, you may contact me at either
  ### Github: https://github.com/${answer.question}
  ### or
  ### Email: ${answer.email}
`;
}

module.exports = generateMarkdown;
