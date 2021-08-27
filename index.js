// const { test } = require('@jest/globals');
const fs = require('fs');
const inquirer = require('inquirer');


const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// const test = require('./src/cardTemplate.js');

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
            writeHTML();
            console.log(employeeList);
        }
    })
}

//function to write html
function writeHTML (){

    for (let i = 0; i < employeeList.length; i++){
        //checks which class object belongs to
        let employee = employeeList[i];
            if (employee instanceof Manager){
                let name = employee.getName();
                let id = employee.getId();
                let email = employee.getEmail();
                let officeNumber = employee.getOfficeNumber();
                createManagerCard(name, id, email, officeNumber);
                //write manager card 
                console.log('added manager');
            } else if (employee instanceof Intern){
                // write intern card
                let name = employee.getName();
                let id = employee.getId();
                let email = employee.getEmail();
                let school = employee.getSchool();
                createInternCard(name, id, email, school);
            } else {
                // write engineer card
                let name = employee.getName();
                let id = employee.getId();
                let email = employee.getEmail();
                let github = employee.getGithub();
                createEngineerCard(name, id, email, github);
            }
        console.log(employee)
    
    }
    console.log('printing')
    html += endingHTML;
    fs.writeFile('test.html', html, function(err){
        if (err) { 
            return console.error(err);
        };

        console.log('done')
    })
}

let html = ''

//beginning html
const startHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Roll Call</title>
</head>
<header>
    <div class="container">
        <h1 class = "title" >Roll Call</h1>
    </div>
</header>
<body>
    <section class="container card-container">
        <div class="row" id = "card-container">`;

//ending html
const endingHTML = `
        </div>
    </section>

    <script src = "src/jquery3_6_0"></script>
    <script src = "/index.js"></script>
</body>
</html>`

//creates html for manager
function createManagerCard(name, id, email, officeNumber){
    let managerHTML = `
            <div class="col-lg-4">
                <div class="card col-lg-5" id="card-template" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <h4 class="card-subtitle">Manager</h4>
                        <p class="card-text">ID Number: ${id}</p>
                        <p class="card-text">Email: ${email}</p>
                        <p class="card-text">Office Number: ${officeNumber}</p>
                    </div>
                </div>
            </div>`
    html = startHTML + managerHTML;
}

//creates html for intern
function createInternCard(name, id, email, school){
    let internHTML = `
            <div class="col-lg-4">
                <div class="card col-lg-5" id="card-template" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <h4 class="card-subtitle">Intern</h4>
                        <p class="card-text">ID Number: ${id}</p>
                        <p class="card-text">Email: ${email}</p>
                        <p class="card-text">School: ${school}</p>
                    </div>
                </div>
            </div>`
    html += internHTML;
}

//creates html for engineer
function createEngineerCard(name, id, email, github){
    let engineerHTML = `
            <div class="col-lg-4">
                <div class="card col-lg-5" id="card-template" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <h4 class="card-subtitle">Engineer</h4>
                        <p class="card-text">ID Number: ${id}</p>
                        <p class="card-text">Email: ${email}</p>
                        <p class="card-text">School: ${github}</p>
                    </div>
                </div>
            </div>`
    html += engineerHTML;

}


// Function call to initialize app
init();