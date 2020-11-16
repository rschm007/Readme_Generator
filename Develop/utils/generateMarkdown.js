const { doesNotMatch } = require("assert");

// function to generate markdown for README
function generateMarkdown(userResp, userInfo) {
  // We will base the markdown from the Good README directions in 01-HTML
  // Generate table of contents based on userResp
  let tableOfContents = `# Table of Contents`;
    // define the table of contents sections based on what the user inputs
    if (userResp.installation !== '') { tableOfContents += `
    <br>
    Installation
    <br>
    `};

    if (userResp.usage !== '') { tableOfContents += `
    <br>
     [Usage](#usage)
    <br>
    `};

    if (userResp.contribute !== '') { tableOfContents += `
    <br>
    Contributing
    <br>
    `};

    if (userResp.tests !== '') { tableOfContents += `
    <br>
    Tests
    <br>
    `};

    if (userResp.credits !== '') { tableOfContents += `
    <br>
    Credits
    <br>
    `};

    let draftMarkdown = 
    `
    <br>
    ${userResp.title}
    <br>
    Description
    <br>
    -----------------------------
    <br>
    ${userResp.description}
    <br>`;

    // add Table of Contents
    draftMarkdown += tableOfContents;

    // add License section
    draftMarkdown += `
    <br>
    License
    <br>
    -----------------------------
    <br>
    `;

    // Installation section
    if (userResp.installation !== '') {
      draftMarkdown += `
      <br>
      Installation
      <br>
      -----------------------------
      <br>
      ${userResp.installation}
      <br>
      `};

    // add Usage section
    if (userResp.usage !== '') {
      draftMarkdown += `
      <br>
      Usage
      <br>
      -----------------------------
      <br>
      ${userResp.usage}
      <br>
      `};

    // contributing section
    if (userResp.contribute !== '') {
      draftMarkdown += `
      <br>
      Contributing
      <br>
      -----------------------------
      <br>
      ${userResp.contribute}
      <br>
      `};

    // tests section
    if (userResp.tests !== '') {
      draftMarkdown+= `
      <br>
      Tests
      <br>
      -----------------------------
      <br>
      ${userResp.tests}
      <br>
      `};

    // credit section
    if (userResp.credits !== '') {
      draftMarkdown+= `
      Acknowledgements
      <br>
      -----------------------------
      <br>
      ${userResp.credits}
      <br>
      `};

    // License section
    draftMarkdown+= `
    <br>
    License
    <br>
    -----------------------------
    <br>
    ${userResp.license}
    <br>
    `;

    return draftMarkdown;
};

module.exports = generateMarkdown;
