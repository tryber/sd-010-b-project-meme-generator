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

// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
function criaBorda(e) {
  const elementoAlvo = e.target;
  const cssSuporte = window.getComputedStyle(elementoAlvo).getPropertyValue('border');
  memeImageContainer.style.border = cssSuporte;
}

function botaoBorda() {
  const botao = document.querySelectorAll('button');
  botao.forEach((elementoAlvo) => elementoAlvo.addEventListener('click', criaBorda));
}

function apagaElemento() {
  if (document.getElementById(memeInsert)) {
    document.getElementById(memeInsert).remove();
  }
}
apagaElemento();

// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/cloneNode
function retornaMiniaturas(e) {
  const mini = e.target;
  const clona = mini.cloneNode(true);
  const cloneFilho = document.getElementById('meme-image-container').appendChild(clona);
  cloneFilho.id = memeInsert;
}

function retonrnaMini() {
  const pegaMini = document.querySelectorAll(#);
}

function criaImagem() {
  // https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/readAsDataURL
  const criaImg = document.createElement('img');
  const imgFilho = memeImageContainer.appendChild(criaImg);
  imgFilho.id = fotoSelecionada;
  const fotoVisual = document.querySelector('img#meme-image');
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
  botaoBorda();
  areaDigitavel.addEventListener('input', inputDeEntrada);
  memeInsert.addEventListener('input', criaImagem);
};
