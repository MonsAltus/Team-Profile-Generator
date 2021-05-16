const generateCards = teamMembers => {
    // MANAGER CARD
    const managerCard = manager => {
        return `
        <div class="card m-3" style="width: 20rem;">
            <div class="card-header bg-danger">
                <h2 class="text-center fs-2">${manager.getName()}</h2>
                <h3 class="text-center fs-4">Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Id#: ${manager.getId()}</li> 
                    <li class="list-group-item">Email: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>`
    }

    // ENGINEER CARD
    const engineerCard = engineer => {
        return `
        <div class="card m-3" style="width: 20rem;">
            <div class="card-header bg-success">
                <h2 class="text-center fs-2">${engineer.getName()}</h2>
                <h3 class="text-center fs-4">Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Id#: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href='https://github.com/${engineer.getGithub()}' target='_blank'>${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>`
    }

    // INTERN CARD
    const internCard = intern => {
        return `
        <div class="card m-3" style="width: 20rem;">
            <div class="card-header bg-info">
                <h2 class="text-center fs-2">${intern.getName()}</h2>
                <h3 class="text-center fs-4">Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Id#: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`
    }

    const cardsTemplate = []

    //CREATE CARDS FOR TEMPLATE
    cardsTemplate.push(teamMembers
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => managerCard(manager))
    )
    cardsTemplate.push(teamMembers
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => engineerCard(engineer))
        .join('')
    )
    cardsTemplate.push(teamMembers
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => internCard(intern))
        .join('')
    )
    return cardsTemplate.join('')
}

module.exports = teamMembers => {
    // MAIN TEMPLATE
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    </head>
    <body>
        <header class="row">
            <div class="jumbotron col-12 bg-primary mb-5">
                <h1 class="text-center">My Team</h1>
            </div>
        </header>
        <main class="container bg-light">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">    
                ${generateCards(teamMembers)}
                </div>
            </div>
        </main>
    </body>
    </html>`
}