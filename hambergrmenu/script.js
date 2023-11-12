let listItems = document.querySelector(".list-items")
let hamBerger = document.querySelector(".hamberger")
let navStickey = document.querySelector("#nav")

hamBerger.addEventListener("click", () => {
    hamBerger.classList.toggle("active")
    listItems.classList.toggle("active")
})

window.addEventListener("scroll", () => {
    if (window.outerWidth > 430) {

        navStickey.classList.toggle("stickey", window.scrollY > 0)
        navStickey.classList.remove("stickeyNot")
    }
    else {
        navStickey.classList.add("stickeyNot")
        navStickey.classList.remove("stickey")
    }
})


