const textInput = document.getElementById('text-input');
const textP = document.getElementById('meme-text');

textInput.addEventListener('keyup', () => {
  textP.innerHTML = textInput.value;
});

const imgId = document.getElementById('meme-image');
const inputId = document.getElementById('meme-insert');

inputId.addEventListener('change', () => {
  // FileReader - Permite aplicação ler conteúdos dos arquivos do computador do usuário
  const reader = new FileReader();

  if (inputId.files.length <= 0) {
    return;
  }

  reader.onload = () => {
    // result - devolve o conteúdo do ficheiro, só e válida após a operação de leitura ser conncluída
    imgId.src = reader.result;
  };

  // readAsDataURL - usado para ler o conteúdo do 'file'
  reader.readAsDataURL(inputId.files[0]);
});

function changeBorder() {
  const fireButton = document.getElementById('fire');
  const waterButton = document.getElementById('water');
  const earthButton = document.getElementById('earth');
  const memeContainer = document.getElementById('meme-image-container');

  fireButton.addEventListener('click', () => {
    memeContainer.style.border = 'none';
    memeContainer.style.border = '3px dashed red';
  });
  waterButton.addEventListener('click', () => {
    memeContainer.style.border = 'none';
    memeContainer.style.border = '5px double blue';
  });
  earthButton.addEventListener('click', () => {
    memeContainer.style.border = 'none';
    memeContainer.style.border = '6px groove green';
  });
}

changeBorder();

const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');
const imageContainer = document.getElementById('meme-image');

meme1.addEventListener('click', () => {
  const imagem = meme1.src;
  imageContainer.src = imagem;
});

meme2.addEventListener('click', () => {
  const imagem = meme2.src;
  imageContainer.src = imagem;
});

meme3.addEventListener('click', () => {
  const imagem = meme3.src;
  imageContainer.src = imagem;
});

meme4.addEventListener('click', () => {
  const imagem = meme4.src;
  imageContainer.src = imagem;
});
