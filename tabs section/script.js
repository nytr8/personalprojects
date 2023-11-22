
let btns = document.querySelectorAll(".tabs");
let textDiv = document.querySelectorAll(".text-div");
let tabsDiv = document.querySelector(".tabs-section");




// historyDiv.classList.add("active")



btns.forEach((btn) => {

    btn.addEventListener("click", (btnElement) => {
        // console.log(btn)


        textDiv.forEach((textElement) => {
            // console.log(textElement.id)
            if (btnElement.currentTarget.innerText == textElement.id) {
                // console.log("true")
                btn.classList.add("tabs-active")
                textElement.classList.add("active")

            }
            else {
                textElement.classList.remove("active")

            }
            if (btnElement.currentTarget.innerText !== textElement.id) {
                btn.classList.remove("tabs-active")
            }
        })
    })

})


