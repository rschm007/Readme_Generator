let draftMarkdown = '';

// function to generate markdown for README
function generateMarkdown(userResp, userInfo) {
  // We will base the markdown from the Good README directions in 01-HTML

  // Title section
    draftMarkdown += 
`
## ${userResp.title}
-----------------------------
## Description
-----------------------------
${userResp.description}
`;

  // generate table of contents
  let ToC = 
`## Table of Contents`;
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
## Installation
-----------------------------
${userResp.installation}

`};

  // add Usage section
  if (userResp.usage !== "") {
    draftMarkdown += 
`
## Usage
-----------------------------
${userResp.usage}

`};

  // contributing section
  if (userResp.contribute !== "") {
    draftMarkdown += 
`
## Contributing
-----------------------------
${userResp.contribute}

`};

  // tests section
  if (userResp.tests !== "") {
    draftMarkdown += 
`
## Tests
-----------------------------
${userResp.tests}

`};

  // credit section
  if (userResp.credits !== "") {
    draftMarkdown += 
`
## Acknowledgements
-----------------------------
${userResp.credits}

`};

  // License section
  if (userResp.license !== "") {
  draftMarkdown += 
`
## License
-----------------------------
${userResp.license}

`};

  // Developer Section
  let devSection = 
`
-----------------------------
### Questions or comments?
-----------------------------
<img src="${userInfo.avatar_url}" alt="A profile pic of the developer"></img>

If you'd like to contact the developer, please use the info below:

GitHub:

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
