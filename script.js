let songindex = 0;
let audioelement = new Audio("/webdevelopment/13.SPOTIFY/songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let gif = document.getElementById("gif");
let myprogressbar = document.getElementById("myprogressbar");
let songitem = Array.from(document.getElementsByClassName("songitem"));
let sbh1 = document.getElementById("sb-h1");





let songs = [
    { songname: "Bolero", filepath: "/songs/1.mp3" },
    { songname: "Bolero", filepath: "/songs/1.mp3" },
    { songname: "Bolero", filepath: "/songs/1.mp3" },
    { songname: "California Love", filepath: "/songs/2.mp3" },
    { songname: "Sopu", filepath: "/songs/3.mp3" },
    { songname: "Pasoori", filepath: "/songs/4.mp3" },
    { songname: "52 gaj ka daman", filepath: "/songs/5.mp3" },
    { songname: "Kargi Ghayal", filepath: "/songs/6.mp3" },
    { songname: "Laado", filepath: "/songs/7.mp3" },
    { songname: "Mi Amor", filepath: "/songs/8.mp3" },
    { songname: "Mi Amor", filepath: "/songs/8.mp3" },
    { songname: "Mi Amor", filepath: "/songs/8.mp3" }
];




songitem.forEach((element, i) => {
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname
});




1


masterplay.addEventListener("click", () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play()
        masterplay.removeAttribute("src");
        masterplay.setAttribute("src", "/webdevelopment/13.SPOTIFY/SVG/pause.svg")
        gif.style.opacity = 1;

    }
    else {
        audioelement.pause();
        masterplay.removeAttribute("src");
        masterplay.setAttribute("src", "/webdevelopment/13.SPOTIFY/SVG/play.svg")
        gif.style.opacity = 0;
    }
})





audioelement.addEventListener("timeupdate", () => {

    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;
})




myprogressbar.addEventListener("change", () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})




Array.from(songitem).forEach((element) => {
    element.addEventListener("click", (e) => {

        songindex = parseInt(e.target.id)
        audioelement.src = `/webdevelopment/13.SPOTIFY/songs/${songindex}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.removeAttribute("src");
        masterplay.setAttribute("src", "/webdevelopment/13.SPOTIFY/SVG/pause.svg");
        gif.style.opacity = 1;
    })
})





document.getElementById("next").addEventListener("click", () => {
    if (songindex > 8) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = `/webdevelopment/13.SPOTIFY/songs/${songindex}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.removeAttribute("src");
    masterplay.setAttribute("src", "/webdevelopment/13.SPOTIFY/SVG/pause.svg");
    gif.style.opacity = 1;
})






document.getElementById("previous").addEventListener("click", () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = `/webdevelopment/13.SPOTIFY/songs/${songindex}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.removeAttribute("src");
    masterplay.setAttribute("src", "/webdevelopment/13.SPOTIFY/SVG/pause.svg");
    gif.style.opacity = 1;
})