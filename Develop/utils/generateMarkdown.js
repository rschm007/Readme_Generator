const { doesNotMatch } = require("assert");

// function to generate markdown for README
function generateMarkdown(userResp, userInfo) {
  // We will base the markdown from the Good README directions in 01-HTML
  // Generate table of contents based on userResp
  let tableOfContents = `# Table of Contents`;
    // define the table of contents sections based on what the user inputs
    if (userResp.installation !== '') { tableOfContents += `
    * [Installation](#installation)
    `};

    if (userResp.usage !== '') { tableOfContents += `
    * [Usage](#usage)
    `};

    if (userResp.contribute !== '') { tableOfContents += `
    * [Contributing](#contributing)
    `};

    if (userResp.tests !== '') { tableOfContents += `
    * [Tests](#tests)
    `};

    if (userResp.credits !== '') { tableOfContents += `
    * [Credits](#credits)
    `};

    let draftMarkdown = 
    `
    # ${userResp.title}
    
    ## Description

    * What this project does, how it does it, and why it was made. *

    ${userResp.description}`

    // add Table of Contents
    draftMarkdown += tableOfContents;

    // add License section
    draftMarkdown += `
    * [License](#license)`;

    // Installation section
    if (userResp.installation !== '') {
      draftMarkdown += `
      ## Installation

      *Steps required to install the project and get the development environment running.*

      ${userResp.installation}
      `};

    // add Usage section
    if (userResp.usage !== '') {
      draftMarkdown += `
      ## Usage

      *Instructions and examples for use*

      ${userResp.usage}
      `};

    // contributing section
    if (userResp.contribute !== '') {
      draftMarkdown += `
      ## Contributing

      *If you would like to contribute to this project, here is how you can do so.*

      ${userResp.contribute}
      `};

    // tests section
    if (userResp.tests !== '') {
      draftMarkdown+= `
      ## Tests

      *How to run the tests for this application*

      ${userResp.tests}
      `};

    // credit section
    if (userResp.credits !== '') {
      draftMarkdown+= `
      ## Acknowledgements

      *These people contributed to the completion of this project*

      ${userResp.credits}
      `};

    // License section
    draftMarkdown+= `
    ## License

    ${userResp.license}
    `;

    return draftMarkdown;
};

module.exports = generateMarkdown;
