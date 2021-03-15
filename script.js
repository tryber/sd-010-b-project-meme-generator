const inputText = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
const inputImage = document.getElementById('meme-insert');
const imageMeme = document.getElementById('meme-image');
const memeImageContainer = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memesContainer = document.querySelector('.memes-section');

function inputTextMeme() {
  inputText.addEventListener('keyup', () => {
    textMeme.innerHTML = inputText.value;
  });
}
inputTextMeme();

function inputImageMeme() {
  inputImage.addEventListener('change', (event) => {
    imageMeme.src = (URL.createObjectURL(event.target.files[0]));
  });
}
inputImageMeme();

fireButton.addEventListener('click', () => {
  memeImageContainer.style.borderColor = 'red';
  memeImageContainer.style.borderStyle = 'dashed';
  memeImageContainer.style.borderWidth = '3px';
});

waterButton.addEventListener('click', () => {
  memeImageContainer.style.borderColor = 'blue';
  memeImageContainer.style.borderStyle = 'double';
  memeImageContainer.style.borderWidth = '5px';
});

earthButton.addEventListener('click', () => {
  memeImageContainer.style.borderColor = 'green';
  memeImageContainer.style.borderStyle = 'groove';
  memeImageContainer.style.borderWidth = '6px';
});

memesContainer.addEventListener('click', (event) => {
  const img = event.target.src;
  imageMeme.src = img;
});
