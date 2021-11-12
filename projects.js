const GITHUB_USERNAME = "bowwowden"

fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
.then(response => response.json())
.then(repos => {

    for(const repo of repos) {
        if(repo.fork == false)
        {
            const repoName = repo.name
            const repoDescription = repo.description
            const repoURL = repo.html_url
            const repoLanguage = repo.language

            const cardContainer = document.createElement("div")
            cardContainer.className = "card center"

            // const cardImg = document.createElement("img")
            // cardImg.src = "./assets/generic_code_bgrnd.jpg"
            // cardImg.className = "project-image"

            // cardContainer.appendChild(cardImg)

            const projectInfoContainer = document.createElement("div")
            projectInfoContainer.className = "project-info-container"

            const projectTitle = document.createElement("h3")
            projectTitle.textContent = repoName

            const projectDescription = document.createElement("p")
            projectDescription.textContent = repoDescription

            const projectURL = document.createElement("a")
            projectURL.href = repoURL
            projectURL.id = "project-title"
            projectURL.appendChild(projectTitle)
            projectURL.target = "_self"

            const projectLanguage = document.createElement("p")
            projectLanguage.textContent = repoLanguage

            projectInfoContainer.appendChild(projectURL)
            projectInfoContainer.appendChild(projectDescription)
            projectInfoContainer.appendChild(projectLanguage)

            cardContainer.appendChild(projectInfoContainer)

            const projectsContainer = document.getElementById("projects_container")

            projectsContainer.appendChild(cardContainer)
        }
    }

});
