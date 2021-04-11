projectList = []



let makeProjectCard = (title, desc, repoName) => {
    // Creates a div for a new project

    liveLink = "https://standingtree.github.io/"+repoName+"/";
    gitDesc = "Github Repo";
    gitLink = "https://github.com/standingtree/"+repoName+"/";

    // create elements
    divCard = document.createElement("div");
    divCard.className = "card bg-light mb-3";
    divCard.style = "padding-block-start: 25px; max-width: 40em;";

    h5CardTitle = document.createElement("h5");
    h5CardTitle.className = "card-title";
    h5CardTitle.innerHTML = title;

    divCardBody = document.createElement("div");
    divCardBody.className = "card-body";

    pCardText = document.createElement("p");
    pCardText.className = "card-text";

    aLiveLink = document.createElement("a");
    aLiveLink.href = liveLink;
    aLiveLink.innerHTML = desc;

    aGitLink = document.createElement("a");
    aGitLink.href = gitLink;
    aGitLink.innerHTML = gitDesc;

    divCard.appendChild(h5CardTitle);
    pCardText.appendChild(aLiveLink);
    pCardText.innerHTML += "<br><br>";
    pCardText.appendChild(aGitLink);
    divCardBody.appendChild(pCardText);
    divCard.appendChild(divCardBody);

    // get the content grid
    portfolio = document.getElementById("portfolio");
    portfolio.appendChild(divCard);

}


let populateProjects = () => {
    projectList.forEach((item) => {
        makeProjectCard(item.title, item.desc, item.repoName);
    })

    console.log(projectList);
}


projectList.push({
    title: "So Many PacMen, So Little Time",
    desc: "An exercise in using onclick events and programmatic animation.",
    repoName: "pacmen-exercise"
})

projectList.push({
    title: "Who Will Watch The <strike>Watchmen</strike> Mouse, man?",
    desc: "An exercise in using onmousemove to make an image in the DOM follow the mouse pointer.",
    repoName: "programmed-eyes-exercise"
})

projectList.push({
    title: "Real-Time MBTA Bus Tracker (Route 1)",
    desc: "An exercise in working with real-time web data from a third party API, and map manipulation in the DOM using the Mapbox API library.",
    repoName: "real-time-bus-tracker"
})


populateProjects();