const colorss = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let btn = document.querySelector(".btn")
let textDiv = document.querySelector(".text-div")

btn.addEventListener("click", () => {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += colorss[randomNumberGen()]
    }
    document.body.style.backgroundColor = hexColor;
    textDiv.textContent = hexColor;
})

let randomNumberGen = () => {
    return Math.floor(Math.random() * colorss.length)
}
