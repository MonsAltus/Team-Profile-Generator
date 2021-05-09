const inquirer = require('inquirer')
const fs = require('fs')
// REQUIRE TEMPLATE HERE?

// Link employee classes.
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

//WHEN I start the application

// Prompt for manager’s name, employee ID, email, and office number
    inquirer.prompt([
        {
        type: 'input',
        message: 'Enter the Manager\'s name:',
        name: 'name'
        },
        {
        type: 'input',
        message: 'Enter the Manager\'s ID number:',
        name: 'id'
        },
        {
        type: 'input',
        message: 'Enter the Manager\'s Email:',
        name: 'email'
        },
        {
        type: 'input',
        message: 'Enter the Manager\'s Office Number:',
        name: 'officeNumber'
        },
    ])


// After manager details are filled prompt to Add Intern, Add Engineer, or Finish Team.
    inquirer.prompt([
        {
        type: 'list',
        message: 'Select an option:',
        choices: [
            'Add Engineer',
            'Add Intern',
            'Finish Team'
            ]
        }
    ])


// If Add intern or engineer is choosen, prompt:
// Console log '///Adding Intern///' or '///Adding Engineer:///'
    inquirer.prompt([
        {
        type: 'input',
        message: 'Enter the Employee\'s name:',
        name: 'name'
        },
        {
        type: 'input',
        message: 'Enter the Employee\'s ID number:',
        name: 'id'
        },
        {
        type: 'input',
        message: 'Enter the Employee\'s Email:',
        name: 'email'
        },
        {
        type: 'input',
        message: 'Enter the Employee\'s Github account:',
        name: 'school'
        },
        {
        type: 'input',
        message: 'Enter the Employee\'s school:',
        name: 'school'
        },
    ])