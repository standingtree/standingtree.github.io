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
    title: "Real-Time MBTA Bus Tracker (Route 1)",
    desc: "Current locations of MBTA Route 1 buses in Boston, using real-time web data from a third party API and map manipulation in the DOM using the Mapbox API library.",
    repoName: "real-time-bus-tracker"
})

projectList.push({
    title: "Paani Data [**PRIVATE** Please contact me directly for a demo]",
    desc: "A curation of public data on the Indian water industry.",
    repoName: "paani-data"
})

projectList.push({
    title: "A Simple Shopping Cart",
    desc: "A simple shopping cart built with stateful ReactJS components.",
    repoName: "shopping-cart"
})

projectList.push({
    title: "The EveryBar ATM",
    desc: "The kind of ATM you love to hate on a night out, built with stateful ReactJS components, and utilizing some Bootstrap.",
    repoName: "atm-machine"
})

projectList.push({
    title: "Tic-Tac-Toe",
    desc: "A simple tic-tac-toe game written in React.",
    repoName: "tic-tac-toe"
})

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



populateProjects();