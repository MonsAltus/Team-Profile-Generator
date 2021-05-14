const inquirer = require('inquirer')
const fs = require('fs')
// REQUIRE TEMPLATE HERE?

// Link employee classes.
// const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const teamInfo = [] 

//WHEN I start the application

function runApp() {
    // Prompt for manager’s name, employee ID, email, and office number
    function generateManager() {
        console.log('//// Adding Manager ////')
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
        //CREATE OBJECT FROM INPUT, ADD TO 'teamInfo' ARRAY
    //run function to gereate the rest of the team.
    generateTeam()
    }


    // After manager details are filled prompt to Add Intern, Add Engineer, or Finish Team.
    function generateTeam() {
        console.log('//// Add another employee, or finish team ////')
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
        // SWITCH FUNTION BASED ON ANSWER
        switch(answer) {
            case 'Add Engineer':
                addEngineer()
                break
            case 'Add Intern':
                addIntern()
                break
            case 'Finish Team':
                //write to file
                finishTeam()
                break
        }
    }

    // If Add Engineer is choosen, prompt:
    function addEngineer() {
        console.log('//// Adding Engineer ////')
        inquirer.prompt([
            {
            type: 'input',
            message: 'Enter the Engineer\'s name:',
            name: 'name'
            },
            {
            type: 'input',
            message: 'Enter the Engineer\'s ID number:',
            name: 'id'
            },
            {
            type: 'input',
            message: 'Enter the Engineer\'s Email:',
            name: 'email'
            },
            {
            type: 'input',
            message: 'Enter the Engineer\'s Github account:',
            name: 'school'
            },
        ])
        //CREATE OBJECT FROM INPUT, ADD TO 'teamInfo' ARRAY
    }

    // If Add Intern is choosen, prompt:
    function addIntern() {
        console.log('//// Adding Intern ////')
        inquirer.prompt([
            {
            type: 'input',
            message: 'Enter the Intern\'s name:',
            name: 'name'
            },
            {
            type: 'input',
            message: 'Enter the Intern\'s ID number:',
            name: 'id'
            },
            {
            type: 'input',
            message: 'Enter the Intern\'s Email:',
            name: 'email'
            },
            {
            type: 'input',
            message: 'Enter the Intern\'s school:',
            name: 'school'
            },
        ])
        //CREATE OBJECT FROM INPUT, ADD TO 'teamInfo' ARRAY
    }


    finishTeam() {
        console.log(teamInfo)
        //WRITE HTML FILE USING teamInfo 
    }

    generateManager()
}

runApp()