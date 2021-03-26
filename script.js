const getInputText = document.getElementById('text-input'); // captura o texto .value
const getMemeText = document.getElementById('meme-text'); // captura o texto da div
// capturar o arquivo inserido
// const getMemeImage = document.getElementById('meme-insert');

// captura a bordar do meme-image-container
const getBorder = document.getElementById('meme-image-container');

// captura os botões
const getBtnFire = document.getElementById('fire');
const getBtnWater = document.getElementById('water');
const getBtnEarth = document.getElementById('earth');

function changeRed() {
  getBorder.style.border = '3px dashed red';
}

function changeWater() {
  getBorder.style.border = '5px double blue';
}

function changeEarth() {
  getBorder.style.border = '6px groove green';
}

function btn() {
  getBtnFire.addEventListener('click', changeRed);
  getBtnWater.addEventListener('click', changeWater);
  getBtnEarth.addEventListener('click', changeEarth);
}

function write() {
  getMemeText.innerText = getInputText.value;
}

function create() {
  getInputText.addEventListener('keyup', write);
}

window.onload = function () {
  create();
  btn();
};
