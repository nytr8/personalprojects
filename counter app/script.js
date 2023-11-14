let textDiv = document.querySelector(".text-div")
let btn = document.querySelector(".btn")
let decreaseBtn = document.querySelector(".decrease-btn")
let resetBtn = document.querySelector(".reset-btn")
let increaseBtn = document.querySelector(".increase-btn")


let count = 0;

increaseBtn.addEventListener("click", () => {
    count = count + 1
    textDiv.textContent = count;
    colorChange()
})
resetBtn.addEventListener("click", () => {
    count = 0
    textDiv.textContent = count;
    colorChange()
})
decreaseBtn.addEventListener("click", () => {
    count = count - 1
    textDiv.textContent = count;
    colorChange()
})

let colorChange = () => {
    if (count < 0) {
        textDiv.style.color = "red";
    }
    else if (count > 0) {
        textDiv.style.color = "green";
    }
    else{
        textDiv.style.color = "black";
    }
}
