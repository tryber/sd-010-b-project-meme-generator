const caixaTexto = document.querySelector('#text-input');
const textoMeme = document.querySelector('#meme-text');
function texto () {
  textoMeme.innerHTML = caixaTexto.value;
}
caixaTexto.addEventListener('click', texto);