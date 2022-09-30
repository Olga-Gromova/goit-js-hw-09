const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
buttonStop.disabled = true;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', () => {
  buttonStart.disabled = true;
  buttonStop.disabled = false;

  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
});

buttonStart.style.background = 'lightgreen';
buttonStart.style.display = 'flex';
buttonStart.style.margin = 'auto';
buttonStart.style.borderRadius = '50%';
buttonStart.style.borderColor = 'lightgreen';

buttonStop.style.background = 'mistyrose';
buttonStop.style.display = 'flex';
buttonStop.style.margin = '15px auto';
buttonStop.style.borderRadius = '50%';
buttonStop.style.borderColor = 'mistyrose';