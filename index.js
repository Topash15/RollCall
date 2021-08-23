const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

//questions
const questions = [
    //name
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
        validate: nameInput => {
            if (nameInput){
                return true
            } else {
                console.log('Enter a description about the application.')
                return false
            }
        }
    },
    //id
    {
        type: 'number',
        name: 'id',
        message: "What is the employee's id?",
        validate: idInput => {
            if (idInput){
                return true
            } else {
                console.log('Enter a valid ID number.')
                return false
            }
        }
    },
    //email
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?",
        validate: emailInput => {
            if (emailInput){
                return true
            } else {
                console.log('Enter a valid email address.')
                return false
            }
        }
    },
    //role
    {
        type: 'list',
        name: 'role',
        message: 'What is the role of this employee?',
        choices: ['Engineer', 'Intern', 'Manager'],
    },
    //school
    {
        type: 'input',
        name: 'school',
        message: 'What school does this intern go to?',
        when: ({role}) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false
            }
        },
        validate: schoolInput => {
            if (schoolInput){
                return true
            } else {
                console.log('Enter a valid school name.')
                return false
            }
        }
    },
    //github
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?",
        when: ({role}) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false
            }
        },
        validate: githubInput => {
            if (githubInput){
                return true
            } else {
                console.log('Enter a valid github username.')
                return false
            }
        }
    }, 
    //office number
    {
        type: 'number',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        when: ({role}) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false
            }
        },
        validate: officeNumberInput => {
            if (officeNumberInput){
                return true
            } else {
                console.log('Enter a valid office number.')
                return false
            }
        }
    },       
]

//question to confirm if new employee needs to be added
const newEmployeePrompt = [
    //asks if employee needs to be added
    {
        type: 'confirm',
        name: 'confirm',
        message: "Does another employee need to be added?",
    },  
]

//init will ask manager questions initially and then ask questions for any employees

const employeeList = [];

//function to ask necessary questions to create employee
function addEmployee() {
    
    inquirer.prompt(questions)
    .then(function(answers){
        employeeList.push(answers);
        console.log(employeeList);
        console.log(answers.github)
    })
    .then(function(){
        confirmAdd();
    })
};

//function to ask if another employee needs to be added
function confirmAdd() {
    inquirer.prompt(newEmployeePrompt)
    .then(function(answers){
        if (answers.confirm){
            addEmployee();
        } else {
            // call function to write to page
        }
    })
}

// Function call to initialize app
addEmployee();
