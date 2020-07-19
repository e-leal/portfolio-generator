//const fs = require('fs');
//const generatePage = require('./src/page-template.js');

//import { fstat } from "fs";
const inquirer = require('inquirer');
//const generatePage = require('./src');
//const pageHTML = generatePage(portfolioData);
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;


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