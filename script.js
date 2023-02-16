let body = document.body;
let textWrapper = document.getElementById('textWrapper');
let inputWrapper = document.getElementById('inputWrapper');
const output = document.getElementById('output');
const text = document.getElementById('text');
let speed = document.getElementById('speed');

const darkButton = document.getElementById('darkButton');
const lightButton = document.getElementById('lightButton');

const fontButtonPlus = document.getElementById('fontButtonPlus');
const fontButtonMinus = document.getElementById('fontButtonMinus');

const readSpeedPlus = document.getElementById('readSpeedPlus');
const readSpeedMinus = document.getElementById('readSpeedMinus');

let textArray;

let outputFontSize = 3;

let counter = 1;

let readSpeed = 1000;

let wordPerMinute;

//Speed calc function

function speedCalc() {
  if (readSpeed <= 0) {
    alert('You are too fast! Decrease your speed!');
    readSpeed = 0;
    speed.textContent = 'Read speed is OMG words per minute';
  } else {
    wordPerMinute = Math.floor((60 * 1000) / readSpeed);
    speed.textContent = 'Read speed is ' + wordPerMinute + ' words per minute';
  }
}
speedCalc();

// Display word by word function

function outputFunction() {
  output.textContent = textArray[counter];
  counter++;
}

//Read start function

readButton.addEventListener('click', function () {
  textArray = text.value.split(' ');
  let textInterval = setInterval(function () {
    if (counter < textArray.length) {
      outputFunction();
    } else {
      clearInterval(textInterval);
      window.location.reload();
    }
  }, readSpeed);
});

//Theme change

darkButton.addEventListener('click', () => {
  body.classList.remove('light');
  body.classList.add('dark');
  textWrapper.classList.remove('light');
  textWrapper.classList.add('dark');
  output.classList.remove('light');
  output.classList.add('dark');
  inputWrapper.classList.remove('light');
  inputWrapper.classList.add('dark');
});

lightButton.addEventListener('click', () => {
  body.classList.remove('dark');
  body.classList.add('light');
  textWrapper.classList.remove('dark');
  textWrapper.classList.add('light');
  output.classList.remove('dark');
  output.classList.add('light');
  inputWrapper.classList.remove('dark');
  inputWrapper.classList.add('light');
});

//Font size increase

fontButtonPlus.addEventListener('click', function () {
  outputFontSize++;
  output.style.fontSize = outputFontSize + 'vh';
});

//Font size decrease

fontButtonMinus.addEventListener('click', function () {
  outputFontSize--;
  output.style.fontSize = outputFontSize + 'vh';
});

//Text speed increase

readSpeedPlus.addEventListener('click', function () {
  if (readSpeed > 400) {
    readSpeed = readSpeed - 200;
  } else if (readSpeed <= 400) {
    readSpeed = readSpeed - 10;
  } else if (readSpeed <= 50) {
    readSpeed = readSpeed - 1;
  }
  speedCalc();
});

//Text speed decrease

readSpeedMinus.addEventListener('click', function () {
  if (readSpeed > 400) {
    readSpeed = readSpeed + 200;
  } else if (readSpeed <= 400) {
    readSpeed = readSpeed + 10;
  } else if (readSpeed <= 50) {
    readSpeed = readSpeed + 1;
  }
  speedCalc();
});
