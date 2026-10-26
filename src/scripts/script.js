// Scripts
console.log(`Hello world`);

const audioElement = document.querySelector("audio");
const vinyl = document.querySelector(".vinyl");
const playIcon = document.querySelector(".play-icon");

playIcon.addEventListener("click", function (e) {
  if (audioElement.paused) {
    audioElement.play();
    vinyl.classList.add("animate-[spin_3s_linear_infinite]");
  } else {
    audioElement.pause();
    vinyl.classList.remove("animate-[spin_3s_linear_infinite]");
  }
});
