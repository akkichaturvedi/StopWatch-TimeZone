let timer = document.querySelector("h4");
let currentTime = new Date().toLocaleTimeString();
let timerData = 0; 
let count = 0;
const startTimer = () => {
  let actualTimer = () => {
    let totalSeconds = count;

    let hour = Number.parseInt(totalSeconds / 3600);
    totalSeconds = totalSeconds % 3600;

    let minutes = Number.parseInt(totalSeconds / 60);
    totalSeconds = totalSeconds % 60;

    let second = totalSeconds;

    hour = hour < 10 ? `0${hour}` : `${hour}`;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    second = second < 10 ? `0${second}` : `${second}`;

    timer.innerHTML = `${hour}:${minutes}:${second}`;
    count++;
  };

  timerData = setInterval(actualTimer, 1000);
};

const stopTimer = () => {
    clearInterval(timerData);
};

const resetTimer = () => {
    clearInterval(timerData);
    timer.innerHTML = "00:00:00"
    location.reload();
};

const getCurrentTimer = () => {
  timer.innerHTML = currentTime;
};
