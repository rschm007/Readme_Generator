Readme Generator
-----------------------------
![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/rschm007/Readme_Generator?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/rschm007/Readme_Generator?style=flat&logo=appveyor)
  
Check out the badges hosted by [shields.io](https://shields.io/).

Links
-----------------------------

Repository <a href="https://github.com/rschm007/Readme_Generator">https://github.com/rschm007/Readme_Generator</a>

Installation
-----------------------------

To install this application you will need a text editor like Visual Studio Code. You will also need node.js to type "npm install" in your CLI to install the inquirer package

Features
-----------------------------
When the user runs index.js the application uses the inquirer package to prompt questions in the CLI. The application then takes your responses and uses axios to fetch your GitHub profile data using the GitHub API. After that, the app will generate a markdown for the README based on the user responses. Lastly, fs.writeFile generates the README.md.

<img src="https://raw.githubusercontent.com/rschm007/Readme_Generator/main/Develop/Assets/demo_1.gif" alt="Readme Generator app demo gif" style="max-width:100%;">


Authors
-----------------------------
<ul>
  <li>Robert Schmahl - <a href="https://github.com/rschm007">GitHub Profile</a></li>
</ul>

Acknowledgements
-----------------------------
<ul>
  <li>UC Irvine Web Development program for providing project requirements and code examples</li>
</ul>

