document.getElementById('buttons').addEventListener('click', (event) => {
  const buttonChosen = event.target.id;
  const container = document.getElementById('meme-image-container');
  if (buttonChosen === 'fire') {
    container.style.border = '3px dashed red';
  }
  if (buttonChosen === 'water') {
    container.style.border = '5px double blue';
  }
  if (buttonChosen === 'earth') {
    container.style.border = '6px groove green';
  }
});

const paragraph = document.getElementById('meme-text');
const text = document.getElementById('text-input');
text.onkeyup = function write() {
  if (text.value.length > 58) {
    alert('O limite máximo é de 60 caracteres!');
  } else {
    paragraph.textContent = text.value;
  }
};

window.URL = window.URL || window.webkitURL || window.mozURL;
const image = document.getElementById('meme-image');
const insertImage = document.getElementById('meme-insert');
insertImage.onchange = function uploadImage() {
  const urlImage = URL.createObjectURL(this.files[0]);
  image.src = urlImage;
};

document.getElementById('memes').addEventListener('click', (event) => {
  const meme = event.target;
  const image2 = document.getElementById('meme-image');
  image2.src = meme.src;
});
