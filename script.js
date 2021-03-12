const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const insertImg = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');
const stylesBtn = document.querySelector('#styles-buttons');
const preDefinedMemes = document.getElementById('pre-defined-memes');

textInput.addEventListener('input', () => {
  memeText.innerHTML = textInput.value;
});

insertImg.addEventListener('change', (event) => {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
});

stylesBtn.addEventListener('click', (event) => {
  const imageBorder = document.getElementById('meme-image-container').style;

  imageBorder.border = '';

  if (event.target.id === 'fire') imageBorder.border = '3px dashed red';
  if (event.target.id === 'water') imageBorder.border = '5px double blue';
  if (event.target.id === 'earth') imageBorder.border = '6px groove green';
});

preDefinedMemes.addEventListener('click', (event) => {
  memeImg.src = event.target.src;
});
