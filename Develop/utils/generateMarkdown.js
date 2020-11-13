const { doesNotMatch } = require("assert");

// function to generate markdown for README
function generateMarkdown(data) {
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

    if (userResp.credits ~== '') { tableOfContents += `
    * [Credits](#credits)
    `};

    let draftMarkdown = 
    `
    # ${userResp.title}
    
    ## Description

    * What this project does, how it does it, and why it was made *

    ${userResp.description}

    `

    // add Table of Contents
    draftMarkdown += tableOfContents;

    // add License section
    draftMarkdown += `
    * [License](#license)`;

    // Installation section
    if (userResp.installation !== '') {
      draftMarkdown +=
    }










`;
}

module.exports = generateMarkdown;
