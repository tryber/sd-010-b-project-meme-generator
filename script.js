const inputText = document.getElementById('text-input');
const inputImage = document.getElementById('meme-insert');
const text = document.getElementById('meme-text');
const image = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container');

function inputValue() {
  inputText.addEventListener('keyup', () => {
    text.innerText = inputText.value;
  });
}

// nessa função me baseei no código da colega Alessandra Rosa Rezende
function fillMemeImageContainer() {
  window.URL = window.URL || window.webkitURL || window.mozURL;
  inputImage.addEventListener('change', () => {
    image.src = URL.createObjectURL(inputImage.files[0]);
  });
}

window.onload = function pageFunctions() {
  inputValue();
  fillMemeImageContainer();
};
