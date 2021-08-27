const fs = require('fs');

//store html 

function test (){
    console.log('test');
}

// const startHTML = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
//     <title>Roll Call</title>
// </head>
// <header>
//     <div class="container">
//         <h1 class = "title" >Roll Call</h1>
//     </div>
// </header>
// <body>
//     <section class="container card-container">
//         <div class="row" id = "card-container"></div>`

//creates html for manager
function createManagerCard(name, id, email, officeNumber){
    fs.writeFile('test.html', startHTML, function(err){
        if (err) { 
            return console.error(err);
        };

        console.log('done')
    })
//     $( "div").html("Hi")
//     // $("#card-container").html(`<div class="col-lg-4"><div class="card col-lg-5" id="card-template" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${name}</h5><h4 class="card-subtitle">Manager</h4><p class="card-text">ID Number: ${id}</p><p class="card-text">Email: ${email}</p><p class="card-text">Office Number: ${officeNumber}</p></div></div>`)
//     console.log("done")
}

//creates html for intern
function createInternCard(name, id, email, school){
    
}

//creates html for engineer
function createEngineerCard(name, id, email, github){
    
}


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


module.exports = startHTML;
module.exports = endingHTML;