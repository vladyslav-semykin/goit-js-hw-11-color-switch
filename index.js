const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const body = document.querySelector("body");
body.style.background = colors[0];

const btnStart = document.createElement("button");
const btnStop = document.createElement("button");
let timerId = null;
btnStart.dataset.action = "start";
btnStart.textContent = "Start";
btnStop.dataset.action = "stop";
btnStop.textContent = "Stop";

body.append(btnStart);
body.append(btnStop);

btnStart.addEventListener("click", startColors);
btnStop.addEventListener("click", stopColors);

function startColors() {
  btnStart.disabled = true;
  timerId = setInterval(
    (colors) => {
      let randomNumColor = randomIntegerFromInterval(0, colors.length - 1);
      body.style.background = colors[randomNumColor];
    },
    1000,
    colors
  );
}

function stopColors() {
  btnStart.disabled = false;
  clearInterval(timerId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
