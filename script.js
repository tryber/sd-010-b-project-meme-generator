const image = document.querySelector('#meme-image');

function showText() {
  const textInput = document.querySelector('#text-input');
  const containerText = document.querySelector('#meme-text');
  containerText.innerHTML = textInput.value;
}
const textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', showText);

// Adiciona imagem

const memeInsert = document.querySelector('#meme-insert');
memeInsert.addEventListener('change', () => {
  image.src = URL.createObjectURL(memeInsert.files[0]);
});

const container = document.querySelector('#meme-image-container');

const btnFire = document.querySelector('#fire');
btnFire.addEventListener('click', () => {
  container.style.border = '';
  container.style.border = '3px dashed red';
});
const btnWater = document.querySelector('#water');
btnWater.addEventListener('click', () => {
  container.style.border = '';
  container.style.border = '5px double blue';
});
const btnEarth = document.querySelector('#earth');
btnEarth.addEventListener('click', () => {
  container.style.border = '';
  container.style.border = '6px groove green';
});

const imageOne = document.querySelector('#meme-1');
imageOne.addEventListener('click', () => {
  image.src = imageOne.src;
});

const imageTwo = document.querySelector('#meme-2');
imageTwo.addEventListener('click', () => {
  image.src = imageTwo.src;
});

const imageThree = document.querySelector('#meme-3');
imageThree.addEventListener('click', () => {
  image.src = imageThree.src;
});
const imageFour = document.querySelector('#meme-4');
imageFour.addEventListener('click', () => {
  image.src = imageFour.src;
});
