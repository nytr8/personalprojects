// let historyTab = document.querySelector(".history");
// let visionTab = document.querySelector(".visions");
// let goalsTab = document.querySelector(".goals");
let tabs = document.querySelectorAll(".tabs");

let historyDiv = document.querySelector("#historydiv");
let visionsDiv = document.querySelector("#visionsdiv");
let goalsDiv = document.querySelector("#goalsdiv");

// console.log(historyTab)


tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        console.log(e.target.innerText)
        if (e.target.innerText === "history") {
            historyDiv.classList.toggle("active")
        }
        else if (e.target.innerText === "visions") {
            visionsDiv.classList.toggle("active")
        }
        else if (e.target.innerText === "goals") {
            goalsDiv.classList.toggle("active")
        }
        else {
            // goalsDiv.classList.remove("active")
        }
    })

})


