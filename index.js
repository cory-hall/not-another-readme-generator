// import inquirer
const inquirer = require('inquirer');
// import generateMarkdown function
const generateMarkdown = require('./utils/generateMarkdown');
// import fileSystem
const fs = require('fs');

// array to hold questions for user input
const questions = [
   "What is the name of your repository?",
   "In a detailed manner, how would you describe that your project solves a problem?",
   "What instructions are required for installation?",
   "What licensing would you like to list for your project? (Choose one)",
   "What steps are needed to utilize this app?",
   "What steps are needed to test this app?",
   "Who all contributed to this project?",
   "What is your GitHub username?",
   "What is your e-mail address?"
];

// function to write data to the generated-README file
function writeToFile(data) { 
   return new Promise((resolve, reject) => {
      fs.writeFile('./generated-README.md', data, err => {
         if(err) {
            reject(err);
            return;
         }
         resolve ({
            ok: true,
            message: 'README created!'
         }) 
      })
   })
}

// main function of app, gets user input via inquirer in terminal and returns a promise
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
         name: 'installation',
         message: questions[2],
         validate: installInput => {
            if (installInput) {
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
      },
      {
         type: 'input',
         name: 'usage',
         message: questions[4],
      },
      {
         type: 'input',
         name: 'testing',
         message: questions[5]
      },
      {
         type: 'input',
         name: 'contributors',
         message: questions[6]
      },
      {
         type: 'input',
         name: 'github',
         message: questions[7],
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
         message: questions[8],
         validate: emailInput => {
            if (emailInput) {
               return true
            } else {
               console.log("Please enter your e-mail address!");
            }
         }
      }
   ])
   // gets returned projectData and sends to generateMarkdown function
   .then(projectData => {
      return generateMarkdown(projectData);
   })
   // gets the generatedMarkdown (projectData) and sends to writeToFile function
   .then(projectData => {
      return writeToFile(projectData)
   })
   // console log if file creation was successful
   .then(writeToFileResponse => {
      console.log(writeToFileResponse.message);
   })
   // catch for errors
   .catch(err => {
      console.log(err);
   })
}

// Function call to initialize app
init();

