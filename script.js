// Preencher caixa de texto enquanto o input é escrito

const memeText = document.querySelector('#text-input');

function textInput() {
  const textArea = document.querySelector('#meme-text');
  console.log(textArea.innerHTML);
  textArea.innerText = memeText.value;
}

memeText.addEventListener('keyup', textInput);

// Selecionando imagens
// Referencia: https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript

const chooseImg = document.querySelector('#meme-insert');

function loadFile(event) {
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}

chooseImg.addEventListener('change', loadFile);
