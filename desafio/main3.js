document.querySelectorAll(".tecla").forEach((button) => {
  button.addEventListener("click", () => {
    const soundId = button.getAttribute("data-som");
    const audio = document.getElementById(soundId);
    audio.currentTime = 0; // Reinicia o áudio para o início
    audio.play();
  });
});

const audio = document.getElementById("som_tecla_pom"); // Um exemplo, você pode generalizar para todos os áudios
const playPauseButton = document.querySelector(".play-pause");
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress-bar");
const timeDisplay = document.querySelector(".time");

playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = "Pause";
  } else {
    audio.pause();
    playPauseButton.textContent = "Play";
  }
});

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;

  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60);
  timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
});

progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});
