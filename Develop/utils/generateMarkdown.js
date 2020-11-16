const { doesNotMatch } = require("assert");

let draftMarkdown;

// function to generate markdown for README
function generateMarkdown(userResp, userInfo) {
  // We will base the markdown from the Good README directions in 01-HTML

  // Title section
  if (userResp.title != "") {
    draftMarkdown += `
      <br>
      ## ${userResp.title}
      <br>
      -----------------------------
      `;
  }

  // Description section
  if (userResp.description != "") {
    draftMarkdown += `
      <br>
      ## Description
      <br>
      -----------------------------
      <br>
      ${userResp.description}
      <br>
      `;
  }

  // generate table of contents
  let ToC = "## Table of Contents";
  // installation ToC
  if (userResp.installation !== "") {
    ToC += `<br>
      * [Installation](#installation)
      `;
  }

  // usage ToC
  if (userResp.usage !== "") {
    ToC += `<br>
        * [Usage](#usage)
        `;
  }

  // contribute ToC
  if (userResp.contribute !== "") {
    ToC += `<br>
        * [Contribute](#contribute)
        `;
  }

  // tests ToC
  if (userResp.tests !== "") {
    ToC += `<br>
        * [Tests](#tests)
        `;
  }

  // credit ToC
  if (userResp.contribute !== "") {
    ToC += `<br>
        * [Credits](#credits)
        `;
  }

  // license ToC
  if (userResp.contribute !== "") {
    ToC += `<br>
        * [License](#license)
        `;
  }

  draftMarkdown += ToC;

  // Installation section
  if (userResp.installation != "") {
    draftMarkdown += `
      <br>
      ## Installation
      <br>
      -----------------------------
      <br>
      ${userResp.installation}
      <br>
      `;
  }

  // add Usage section
  if (userResp.usage != "") {
    draftMarkdown += `
      <br>
      ## Usage
      <br>
      -----------------------------
      <br>
      ${userResp.usage}
      <br>
      `;
  }

  // contributing section
  if (userResp.contribute != "") {
    draftMarkdown += `
      <br>
      ## Contributing
      <br>
      -----------------------------
      <br>
      ${userResp.contribute}
      <br>
      `;
  }

  // tests section
  if (userResp.tests != "") {
    draftMarkdown += `
      <br>
      ## Tests
      <br>
      -----------------------------
      <br>
      ${userResp.tests}
      <br>
      `;
  }

  // credit section
  if (userResp.credits != "") {
    draftMarkdown += `
      ## Acknowledgements
      <br>
      -----------------------------
      <br>
      ${userResp.credits}
      <br>
      `;
  }

  // License section
  draftMarkdown += `
    <br>
    ## License
    <br>
    -----------------------------
    <br>
    ${userResp.license}
    <br>
    `;

  // Developer Section
  let devSection = `
  <br>
  ### Questions or comments?
  <br>
  <img src="${userInfo.avatar_url}" alt="A profile pic of the developer"></img>
  <br>
  If you'd like to contact the developer, please use the info below:
  <br>
  GitHub: @${userInfo.login} (${userInfo.url})
  `;
  // if github email is valid, add it
  if (userInfo.email !== null) {
    devSection += `
    <br>
    Email: ${userInfo.email}
    `;
  }

  // add dev section to markdown
  draftMarkdown += devSection;

  // return markdown
  return draftMarkdown;
}

module.exports = generateMarkdown;
