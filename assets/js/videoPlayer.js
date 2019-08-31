const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeButton");
const fullScrnBtn = document.getElementById("jsFullScreen");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function goFullScreenClick() {
  videoContainer.webkitRequestFullscreen();
  fullScrnBtn.innerHtml = '<i class="fas fa-compress"></i>';
  fullScrnBtn.removeEventListener("click", goFullScreenClick);
  fullScrnBtn.addEventListener("click", exitFullScreenClick);
}

function exitFullScreenClick() {
  fullScrnBtn.innerHtml = '<i class="fas fa-expand"></i>';
  fullScrnBtn.removeEventListener("click", exitFullScreenClick);
  fullScrnBtn.addEventListener("click", goFullScreenClick);
  document.webkitExitFullscreen();
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  fullScrnBtn.addEventListener("click", goFullScreenClick);
}

if (videoContainer) {
  init();
}
