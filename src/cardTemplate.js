
//store html 
let html = '';

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


module.exports.startHTML = startHTML;
module.exports.endingHTML = endingHTML;
exports.html = html