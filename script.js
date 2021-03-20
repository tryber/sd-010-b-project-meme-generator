const areaDigitavel = document.getElementById('text-input');
const fotoSelecionada = 'meme-image';
const memeImageContainer = document.getElementById('meme-image-container');
const retornaTextoDigitado = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
// console.log(retornaTextoDigitado + 'oi');
// console.log(fotoSelecionada + 'oi');
function inputDeEntrada() {
  const areaDigit = areaDigitavel.value;
  retornaTextoDigitado.innerHTML = areaDigit;
}

// cria o efeito borda
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
function criaBorda(e) {
  const elementoAlvo = e.target;
  const cssSuporte = window.getComputedStyle(elementoAlvo).getPropertyValue('border');
  memeImageContainer.style.border = cssSuporte;
}

// cria os botões interligados com a borda
function botaoBorda() {
  const botao = document.querySelectorAll('button');
  botao.forEach((elementoAlvo) => {
    elementoAlvo.addEventListener('click', criaBorda);
  });
}

// limpa a imagem grande na tela
function apagaElemento() {
  if (document.getElementById(fotoSelecionada)) {
    document.getElementById(fotoSelecionada).remove();
  }
}

// carrega a imagem selecionada no computador
// https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/readAsDataURL
function criaImagem() {
  apagaElemento();
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

// cria miniatura
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/cloneNode
function criaMiniaturas(e) {
  apagaElemento();
  const mini = e.target;
  const clona = mini.cloneNode(true);
  const cloneFilho = document.getElementById('meme-image-container').appendChild(clona);
  cloneFilho.id = fotoSelecionada;
}
// retorna miniatua natela
function retornaMini() {
  const pegaMini = document.querySelectorAll('#samples img');
  pegaMini.forEach((elementoAlvo) => {
    elementoAlvo.addEventListener('click', criaMiniaturas);
  });
}

// cria um auto carrega
window.onload = function inicio() {
  apagaElemento();
  retornaMini();
  botaoBorda();
  areaDigitavel.addEventListener('input', inputDeEntrada);
  memeInsert.addEventListener('input', criaImagem);
};
