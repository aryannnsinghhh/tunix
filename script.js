let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");

song.addEventListener('loadedmetadata', function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
});

function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    }
}

setInterval(() => {
    progress.value = song.currentTime;
}, 200);

progress.oninput = function(){
    song.currentTime = progress.value;
};
