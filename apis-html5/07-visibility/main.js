let mivideo = document.querySelector("#mivideo");

window.addEventListener("visibilitychange", () => {

    if (document.visibilityState === "visible") {
        mivideo.play();
    } else {
        mivideo.pause();
    }

});