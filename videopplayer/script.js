let btn = document.querySelector(".btn");
let vid = document.getElementById("myVideo");

let vidPause = () => {
    vid.pause()
    vid.muted = true;
}
let vidPlay = () => {
    vid.play()
    vid.muted=false;
}

btn.addEventListener("click", (e) => {
    // console.log(e.currentTarget.children[0])
    let span = e.currentTarget.children[0]

    span.classList.toggle("play")
    console.log(span.classList)
   
    if (span.classList[1] == "play") {
        vidPause()
        span.innerText = "pause"

    }
    else {
        vidPlay()
        span.innerText = "play"
    }
})

