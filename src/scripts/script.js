// Scripts
console.log(`Hello world`);

const audioElement = document.querySelector("audio");
const vinyl = document.querySelector(".vinyl");
const playIcon = document.querySelector(".play-icon");
const pulseIcon = document.querySelector(".pulse-icon");
const live = document.querySelector(".live");

playIcon.addEventListener("click", function (e) {
  if (audioElement.paused) {
    audioElement.play();
    pulseIcon.classList.add("flex");
    pulseIcon.classList.remove("hidden");
    vinyl.classList.add("animate-[spin_5s_linear_infinite]");
    live.classList.remove("text-gray-500");
    live.classList.add("text-green-300");
  } else {
    audioElement.pause();
    vinyl.classList.remove("animate-[spin_5s_linear_infinite]");
    pulseIcon.classList.add("hidden");
    pulseIcon.classList.remove("flex");
    live.classList.add("text-gray-500");
    live.classList.remove("text-green-300");
  }
});
