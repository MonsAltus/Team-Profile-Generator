const teamInfo = require('../index')

function generateHtml(teamInfo) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <!-- LINK CSS? -->
    </head>
    
    <body>
        <header class="row">
            <div class="jumbotron col-12 bg-info mb-5">
                <h1 class="text-center">My Team</h1>
            </div>
        </header>
        <main class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">    
    
                
                    <div class="card m-3">
                        <div class="card-header">
                            <h2 class="card-title">fred</h2>
                            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>intern</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: 22</li>
                                <li class="list-group-item">Email: <a href="mailto:hacklander.dev@gmail.com">hacklander.dev@gmail.com</a></li>
                                <li class="list-group-item">School: UCSD</li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="card m-3">
                        <div class="card-header">
                            <h2 class="card-title">fred</h2>
                            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>intern</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: 22</li>
                                <li class="list-group-item">Email: <a href="mailto:hacklander.dev@gmail.com">hacklander.dev@gmail.com</a></li>
                                <li class="list-group-item">School: UCSD</li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="card employee-card m-3">
                        <div class="card-header">
                            <h2 class="card-title">fred</h2>
                            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>intern</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: 22</li>
                                <li class="list-group-item">Email: <a href="mailto:hacklander.dev@gmail.com">hacklander.dev@gmail.com</a></li>
                                <li class="list-group-item">School: UCSD</li>
                            </ul>
                        </div>
                    </div>
    
    
    
                </div>
            </div>
        </main>
    
    
    </body>
    
    
    
    
    </html>


`
}


module.exports = generateHtml