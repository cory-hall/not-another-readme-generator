const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
   "What is the name of your repository?",
   "In a detailed manner, how would you describe your project?",
   "What special instructions, if any, are needed to use this app? (Don't forget any required programs or library dependencies)",
   "What licensing would you like to list for your project? (Choose one)",
   "What steps are needed to test this app?",
   "What is your GitHub username?",
   "What is your e-mail address?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
   return inquirer.prompt([
      {
         type: 'input',
         name: 'title',
         message: questions[0],
         validate: titleInput => {
            if (titleInput) {
               return true;
            } else {
               console.log("Please enter the title of your project!");
            }
         }
      },
      {
         type: 'input',
         name: 'description',
         message: questions[1],
         validate: descInput => {
            if (descInput) {
               return true;
            } else {
               console.log("Please describe your project!");
            }
         }
      },
      {
         type: 'input',
         name: 'usage',
         message: questions[2],
         validate: usageInput => {
            if (usageInput) {
               return true;
            } else {
               console.log("Please enter usage instructions!");
            }
         }
      },
      {
         type: 'list',
         name: 'license',
         message: questions[3],
         choices: ['MIT', 'Apache', 'GPL v3', 'BSD 2-Clause', 'BSD 3-Clause'],
         validate: licenseInput => {
            if (licenseInput) {
               return true;
            } else {
               console.log('Please choose a license!');
            }
         }
      },
      {
         type: 'input',
         name: 'testing',
         message: questions[4],
         validate: testingInput => {
            if (testingInput) {
               return true;
            } else {
               console.log("Please add any necessary instructions for usage!");
            }
         }
      },
      {
         type: 'input',
         name: 'github',
         message: questions[5],
         validate: githubInput => {
            if (githubInput) {
               return true;
            } else {
               console.log("Please enter your GitHub username!");
            }
         }
      },
      {
         type: 'input',
         name: 'email',
         message: questions[6],
         validate: emailInput => {
            if (emailInput) {
               return true
            } else {
               console.log("Please enter your e-mail address!");
            }
         }
      }
   ])
   .then(projectData => {
      generateMarkdown(projectData);
   })
   .catch(err => {
      console.log(err);
   })
}

// Function call to initialize app
init();

module.exports = init;
