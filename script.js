let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsContainer = document.getElementById('laps');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');
    let formattedMS = ms.toString().padStart(2, '0');

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function print(txt) {
    display.innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
}

function stop() {
    clearInterval(timerInterval);
    startBtn.style.display = 'inline-block';
    stopBtn.style.display = 'none';
}

function reset() {
    clearInterval(timerInterval);
    print('00:00:00');
    elapsedTime = 0;
    startBtn.style.display = 'inline-block';
    stopBtn.style.display = 'none';
    lapsContainer.innerHTML = '';
}

function lap() {
  const lapTime = timeToString(elapsedTime);
  const lapElement = document.createElement('div');
  lapElement.innerText = lapTime;
  lapElement.className = 'lap';
  lapsContainer.appendChild(lapElement);

  // Scroll bars
  lapsContainer.scrollTop = lapsContainer.scrollHeight;
}


startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);
// This is the toggle mode...
const modeToggleBtn = document.getElementById("modeToggleBtn");
const lightIcon = document.getElementById("lightIcon");
const darkIcon = document.getElementById("darkIcon");

modeToggleBtn.addEventListener("click", () => {
  // Toggle light mode class
  document.body.classList.toggle("light-mode");

  // Toggle visibility of icons
  if (document.body.classList.contains("light-mode")) {
    lightIcon.style.display = "none"; // Hide sun icon
    darkIcon.style.display = "inline"; // Show moon icon
  } else {
    lightIcon.style.display = "inline"; // Show sun icon
    darkIcon.style.display = "none"; // Hide moon icon
  }
});
