const buttons = document.getElementById('buttons');
const textoInserido = document.getElementById('meme-text');
const texto = document.getElementById('text-input');
const container = document.getElementById('meme-image-container');
const insereFigura = document.getElementById('meme-image');
const meme = document.getElementById('memes');
const figura = document.getElementById('meme-insert');

buttons.addEventListener('click', function (event) {
  const botaoEscolhido = event.target.id;
  if (botaoEscolhido === 'fire') {
    container.style.border = '3px dashed red';
  }
  if (botaoEscolhido === 'water') {
    container.style.border = '5px double blue';
  }
  if (botaoEscolhido === 'earth') {
    container.style.border = '6px groove green';
  }
});

// https://www.w3schools.com/jsref/event_onkeyup.asp
texto.onkeyup = function escreve(event) {
  textoInserido.textContent = texto.value;
};

// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
meme.addEventListener('click', function (event) {
  const figuraMeme = event.target;
  insereFigura.src = figuraMeme.src;
});

// https://www.w3schools.com/jsref/event_onchange.asp
// https://stackoverflow.com/questions/11708797/inserting-a-file-input-as-an-img-in-the-dom
window.URL = window.URL || window.webkitURL || window.mozURL;
figura.onchange = function uploadImagem() {
  const url = URL.createObjectURL(this.files[0]);
  insereFigura.src = url;
};
