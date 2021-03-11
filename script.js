function textoMeme() {
  const caixaTexto = document.querySelector('#text-input');
  const textoMemes = document.querySelector('#meme-text');
  caixaTexto.addEventListener('keyup', function showText() {
    textoMemes.innerHTML = caixaTexto.value;
  });
}

textoMeme();

function imagemMeme() {
  const inputImagem = document.querySelector('#meme-insert');
  const imagemMemes = document.querySelector('#meme-image');
  inputImagem.addEventListener('change', function showPicture() {
    mostraFoto(this.files);
  });

  function mostraFoto(files) {
    const leitor = new FileReader();

    leitor.onload = function leURL(event) {
      imagemMemes.src = event.target.result;
    };

    leitor.readAsDataURL(files[0]);
  }
}

imagemMeme();

const div = document.querySelector('#meme-image-container');

function fogo() {
  const botaoFogo = document.querySelector('#fire');
  botaoFogo.addEventListener('click', function fire() {
    div.style.border = '3px dashed red';
  });
}

fogo();

function agua() {
  const botaoAgua = document.querySelector('#water');
  botaoAgua.addEventListener('click', function agua() {
    div.style.border = '5px double blue';
  });
}

agua();

function earth() {
  const botaoTerra = document.querySelector('#earth');
  botaoTerra.addEventListener('click', function earth() {
    div.style.border = '6px groove green';
  });
}

earth();
