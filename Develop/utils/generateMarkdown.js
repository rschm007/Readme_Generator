const { doesNotMatch } = require("assert");

let draftMarkdown;

// function to generate markdown for README
function generateMarkdown(userResp, userInfo) {
  // We will base the markdown from the Good README directions in 01-HTML

    // Installation section
    if (userResp.installation != '') {
      draftMarkdown += `
      <br>
      ## Installation
      <br>
      -----------------------------
      <br>
      ${userResp.installation}
      <br>
      `};

    // add Usage section
    if (userResp.usage != '') {
      draftMarkdown += `
      <br>
      ## Usage
      <br>
      -----------------------------
      <br>
      ${userResp.usage}
      <br>
      `};

    // contributing section
    if (userResp.contribute != '') {
      draftMarkdown += `
      <br>
      ## Contributing
      <br>
      -----------------------------
      <br>
      ${userResp.contribute}
      <br>
      `};

    // tests section
    if (userResp.tests != '') {
      draftMarkdown+= `
      <br>
      ## Tests
      <br>
      -----------------------------
      <br>
      ${userResp.tests}
      <br>
      `};

    // credit section
    if (userResp.credits != '') {
      draftMarkdown+= `
      ## Acknowledgements
      <br>
      -----------------------------
      <br>
      ${userResp.credits}
      <br>
      `};

    // License section
    draftMarkdown+= `
    <br>
    ## License
    <br>
    -----------------------------
    <br>
    ${userResp.license}
    <br>
    `;

    return draftMarkdown;
};

module.exports = generateMarkdown;
