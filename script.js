const container = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const textDiv = document.getElementById('meme-text');
const imgInput = document.getElementById('meme-insert');
const imgID = 'meme-image';

function createEl(tagName) {
  const element = document.createElement(tagName);
  return element;
}

function setBorder(event) {
  const el = event.target;
  const CSSprop = window.getComputedStyle(el).getPropertyValue('border');
  container.style.border = CSSprop;
}

function setText() {
  const text = textInput.value;
  textDiv.innerHTML = text;
}

function buttonHandler() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((el) => el.addEventListener('click', setBorder));
}

function clearLastImg() {
  if (document.getElementById(imgID)) {
    document.getElementById(imgID).remove();
  }
}
// LER O CONTEÚDO DE UM ARQUIVO:
// https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/readAsDataURL
function setImg() {
  clearLastImg();
  const el = createEl('img');
  const img = container.appendChild(el);
  img.id = imgID;
  const preview = document.querySelector('#meme-image');
  const file = document.querySelector('#meme-insert[type=file]').files[0];
  const reader = new FileReader();

  reader.onloadend = function func() {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
}

function setSample(event) {
  clearLastImg();
  const el = event.target;
  const clone = el.cloneNode(true);
  const img = document.getElementById('meme-image-container').appendChild(clone);
  img.id = imgID;
}

function sampleHandler() {
  const samples = document.querySelectorAll('#samples img');
  samples.forEach((el) => {
    el.addEventListener('click', setSample);
  });
}

window.onload = function init() {
  sampleHandler();
  buttonHandler();
  textInput.addEventListener('input', setText);
  imgInput.addEventListener('change', setImg);
};
