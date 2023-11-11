let listItems = document.querySelector(".list-items")
let hamBerger = document.querySelector(".hamberger")


hamBerger.addEventListener("click",()=>{
    hamBerger.classList.toggle("active")
    listItems.classList.toggle("active")
})
