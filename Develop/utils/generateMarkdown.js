let draftMarkdown = '';

// function to generate markdown for README
function generateMarkdown(userResp, userInfo) {
  // We will base the markdown from the Good README directions in 01-HTML

  // Title section
    draftMarkdown += 
`
# ${userResp.title}

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResp.username}/${userResp.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResp.username}/${userResp.repo}?style=flat&logo=appveyor)
  
Check out the badges hosted by [shields.io](https://shields.io/).


## Description

${userResp.description}
`;

  // generate table of contents
  let ToC = 
`# Table of Contents`;
  // installation ToC
  if (userResp.installation !== "") {
    ToC += 
`
* [Installation](#installation)
`};

  // usage ToC
  if (userResp.usage !== "") {
    ToC += 
`
* [Usage](#usage)
`};

  // contribute ToC
  if (userResp.contribute !== "") {
    ToC += 
`
* [Contribute](#contribute)
`};

  // tests ToC
  if (userResp.tests !== "") {
    ToC += 
`
* [Tests](#tests)
`};

  // credit ToC
  if (userResp.contribute !== "") {
    ToC += 
`
* [Credits](#credits)
`};

  // license ToC
  if (userResp.contribute !== "") {
    ToC += 
`
* [License](#license)
`};

  draftMarkdown += ToC;

  // Installation section
  if (userResp.installation !== "") {
    draftMarkdown += 
`
# Installation

${userResp.installation}

`};

  // add Usage section
  if (userResp.usage !== "") {
    draftMarkdown += 
`
# Usage

${userResp.usage}

`};

  // contributing section
  if (userResp.contribute !== "") {
    draftMarkdown += 
`
# Contribute

${userResp.contribute}

`};

  // tests section
  if (userResp.tests !== "") {
    draftMarkdown += 
`
# Tests

${userResp.tests}

`};

  // credit section
  if (userResp.credits !== "") {
    draftMarkdown += 
`
# Credits

${userResp.credits}

`};

  // License section
  if (userResp.license !== "") {
  draftMarkdown += 
`
# License

${userResp.license}

`};

  // Developer Section
  let devSection = 
`

## Questions or comments?

![Profile pic of the developer](${userInfo.avatar_url})

If you'd like to contact the developer, please use the info below:

# GitHub:

* @${userInfo.login} 

* ${userInfo.url}
`;

  // if github email is valid, add it
  if (userInfo.email !== null) {
    devSection += 
`

* Email: ${userInfo.email}
`};

  // add dev section to markdown
  draftMarkdown += devSection;

  // return markdown
  return draftMarkdown;
}

module.exports = generateMarkdown;
