const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

//manager questions
const managerQuestions = [
    //name
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
        validate: nameInput => {
            if (nameInput){
                return true
            } else {
                console.log("Enter the manager's name")
                return false
            }
        }
    },
    //id
    {
        type: 'number',
        name: 'id',
        message: "What is the manager's id?",
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
        message: "What is the manager's email?",
        validate: emailInput => {
            if (emailInput){
                return true
            } else {
                console.log('Enter a valid email address.')
                return false
            }
        }
    },
    //office number
    {
        type: 'number',
        name: 'officeNumber',
        message: "What is the manager's office number?",
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

//intern questions
const internQuestions = [
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
    //school
    {
        type: 'input',
        name: 'school',
        message: 'What school does this intern go to?',
        validate: schoolInput => {
            if (schoolInput){
                return true
            } else {
                console.log('Enter a valid school name.')
                return false
            }
        }
    },
]

//engineer questions
const engineerQuestions = [
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
    //github
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?",
        validate: githubInput => {
            if (githubInput){
                return true
            } else {
                console.log('Enter a valid github username.')
                return false
            }
        }
    },   
]

//question to confirm if new employee needs to be added
const newEmployeePrompt = [
    //asks if employee needs to be added
    {
        type: 'list',
        name: 'confirm',
        message: "Does another employee need to be added?",
        choices: [ "Add Engineer", "Add Intern", "I'm done building my team."]
    },  
]

//array for each employee
const employeeList = [];

//init will ask manager questions initially and then ask questions for any employees
function init() {
    
    inquirer.prompt(managerQuestions)
    .then(function(answers){
        // console.log(answers);
        let {name, id, email, officeNumber} = answers;
        const manager = new Manager(name, id, email, officeNumber);
        employeeList.push(manager);
        console.log(employeeList);
    })
    .then(function(){
        confirmAdd();
    })
};

//function to ask necessary questions to create engineer
function addEngineer() {
    
    inquirer.prompt(engineerQuestions)
    .then(function(answers){
        // console.log(answers);
        let {name, id, email, github} = answers;
        const engineer = new Engineer(name, id, email, github);
        employeeList.push(engineer);
        console.log(employeeList);
    })
    .then(function(){
        confirmAdd();
    })
};

//function to ask necessary questions to create intern
function addIntern() {
    
    inquirer.prompt(internQuestions)
    .then(function(answers){
        // console.log(answers);
        let {name, id, email, school} = answers;
        const intern = new Intern(name, id, email, school);
        employeeList.push(intern);
        console.log(employeeList);
    })
    .then(function(){
        confirmAdd();
    })
};

//function to ask if another employee needs to be added
function confirmAdd() {
    inquirer.prompt(newEmployeePrompt)
    .then(function(answers){
        if (answers.confirm === "Add Engineer"){
            addEngineer();
        } else if (answers.confirm === "Add Intern"){
            addIntern();
        } else {
            // call function to write to page
            console.log(employeeList);
        }
    })
}

//function to write html
function writeHTML (){
    for (let i = 0; i <= employeeList.length; i++){
        let employee = employeeList[i];
        // if (employee.)
    }
}

// Function call to initialize app
init();
