const areaDigitavel = document.getElementById('text-input');
// const fotoSelecionada = document.getElementById('meme-image');
// const memeImageContainer = document.getElementById('meme-image-container');
const retornaTextoDigitado = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
// console.log(retornaTextoDigitado + 'oi');
// console.log(fotoSelecionada + 'oi');
function inputDeEntrada() {
  const areaDigit = areaDigitavel.value;
  retornaTextoDigitado.innerHTML = areaDigit;
}

function criaImagem() {
  // https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/readAsDataURL
  const fotoRetonor = document.querySelector('img#meme-image');
  const file = document.querySelector('#meme-insert[type=file]').files[0];
  const reader = new FileReader();
  reader.onloadend = function func() {
    fotoRetonor.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    fotoRetonor.src = '';
  }
}
window.onload = function inicio() {
  areaDigitavel.addEventListener('input', inputDeEntrada);
  memeInsert.addEventListener('input', criaImagem);
};
