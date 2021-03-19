const areaDigitavel = document.getElementById('text-input');
const fotoSelecionada = document.getElementById('#meme-image');
const memeImageContainer = document.getElementById('meme-image-container');
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
  const criaImg = document.createElement('img');
  const imgFilho = memeImageContainer.appendChild(criaImg);
  imgFilho.id = fotoSelecionada;
  const fotoVisual = document.querySelector('#meme-image');
  const carregarFoto = document.querySelector('#meme-insert[type=file]').files[0];
  const lerInput = new FileReader();
  lerInput.onloadend = function func() {
    fotoVisual.src = lerInput.result;
  };
  if (carregarFoto) {
    lerInput.readAsDataURL(carregarFoto);
  } else {
    fotoVisual.src = '';
  }
}
window.onload = function inicio() {
  areaDigitavel.addEventListener('input', inputDeEntrada);
  memeInsert.addEventListener('input', criaImagem);
};
