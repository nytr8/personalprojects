let btns = document.querySelectorAll(".plussign-div");
let ansDiv = document.querySelectorAll(".faq-ansdiv");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // console.log(e.currentTarget.parentElement.nextElementSibling)
        e.currentTarget.classList.toggle("active") // select the btn
        let pElement = e.currentTarget.parentElement.nextElementSibling //select btn first and then its parent div faq-div and then its sibling finnaly faq-ansdiv
        pElement.classList.toggle("active")
    })
});