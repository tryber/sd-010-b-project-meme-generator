const caixaTexto = document.querySelector('#text-input');
const textoDigitado = document.querySelector('#meme-text');

function insereTexto() {  
  textoDigitado.innerHTML = caixaTexto.value;
}
caixaTexto.addEventListener('input', insereTexto);

// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const loadFile = function (evento) {
  const imagem = document.getElementById('meme-image');
  imagem.src = URL.createObjectURL(evento.target.files[0]);
  imagem.onload = function () {
    URL.revokeObjectURL(imagem.src);
  };
};

const memeImageContainer = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

function corDaBorda(evento) {
  const cor = evento.target.id;
  if (cor === 'fire') {
    memeImageContainer.style.border = '3px dashed red';
  } else if (cor === 'water') {
    memeImageContainer.style.border = '5px double blue';
  } else {
    memeImageContainer.style.border = '6px groove green';
  }
}
fire.addEventListener('click', corDaBorda);
water.addEventListener('click', corDaBorda);
earth.addEventListener('click', corDaBorda);

const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function insereMeme(evento) {
  const img = evento.target.src;
  const imagem = document.getElementById('meme-image');
  imagem.src = img;
  imagem.onload = function () {
    URL.revokeObjectURL(imagem.src);
  };
}

const memes = [meme1, meme2, meme3, meme4]
for (let i = 0; i < memes.length; i += 1) {
  memes[i].addEventListener('click', insereMeme);
}
