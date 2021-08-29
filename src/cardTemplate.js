
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
    <link rel="stylesheet" href="./dist/style.css">
    <title>Roll Call</title>
</head>
        <div class = 'row'>
            <header class="col-3">
                <div class="row title-container">
                    <h1 class = "title">Roll Call</h1>
                </div>
            </header>
        <body>
            <section class="container card-container col-9">
                <!-- start of employee cards -->
                <div class="row">
`

//ending html
const endingHTML = `
        </div>
        </section>

<script src = "/index.js"></script>
</body>
</html>
`


module.exports.startHTML = startHTML;
module.exports.endingHTML = endingHTML;
exports.html = html