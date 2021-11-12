var showExperienceTable = false
document.getElementById("experience_toggle").onclick = function() {
    const experience_table = document.getElementById("experience_table")
    showExperienceTable = !showExperienceTable
    experience_table.style.display = showExperienceTable ? "block" : "none"
    
    const experience_toggle = document.getElementById("experience_toggle")
    experience_toggle.innerHTML = showExperienceTable ? "experience.kill()" : "./experience"
}

const experiences = [
    {
        title: 'Developer at Dylate',
        description: 'Self-motivated programming environment. Past projects include generating thousands of leads for a moving company, University Movers, developing designs for websites and mobile apps, and Sprout.'
    },
]

tableElem = document.getElementById("experience_table")

for (var i = 0; i < experiences.length; i++) {
    experienceRow = document.createElement('tr');
    experienceRow.className = "experience-entry"

    titleCol = document.createElement('td');
    titleCol.className = "experience-title"
    titleCol.appendChild(document.createTextNode(experiences[i].title)); //to print cell number

    descriptionCol = document.createElement('td');
    descriptionCol.className = "experience-desc"
    descriptionCol.appendChild(document.createTextNode(experiences[i].description)); //to print cell number
    
    experienceRow.appendChild(titleCol);
    experienceRow.appendChild(descriptionCol);

    tableElem.appendChild(experienceRow);
}