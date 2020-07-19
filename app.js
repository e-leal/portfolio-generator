//const fs = require('fs');
//const generatePage = require('./src/page-template.js');

//import { fstat } from "fs";
const inquirer = require('inquirer');
//const generatePage = require('./src');
//const pageHTML = generatePage(portfolioData);
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?(Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub Username!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }
    ]);
  };

  


  const promptProject = portfolioData => {
    if(!portfolioData.projects){
        portfolioData.projects = [];
    }
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: projectInput => {
            if (projectInput) {
              return true;
            } else {
              console.log('Please enter your project name!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: projectDesc => {
            if (projectDesc) {
              return true;
            } else {
              console.log('Please enter your project description!');
              return false;
            }
          }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: gitLink => {
            if (gitLink) {
              return true;
            } else {
              console.log('Please enter your GitHub project link!');
              return false;
            }
          }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if(projectData.confirmAddProject){
            return promptProject(portfolioData);
        }else{
            return portfolioData;
        }
    });
  };

  promptUser()
  .then(promptProject)
  .then(portfolioData => console.log(portfolioData));


//const profileDataArgs = process.argv.slice(2, process.argv.length);

//const [name, github] = profileDataArgs;


//const name = profileDataArgs[0];
//const github = profileDataArgs[1];



// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

// console.log('Portfolio complete! Check out index.html to see the output!');
// });

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new Error(err);
//     console.log('Portfolio complete! Checkout out indext.html tp see the page!');
// });