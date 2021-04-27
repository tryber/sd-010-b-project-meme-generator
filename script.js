const getElementById = (element) => document.getElementById(element);

const containerMeme = getElementById('meme-image-container');
const inputMemeText = getElementById('text-input');
const inputMemeImage = getElementById('meme-insert');
const memeImage = getElementById('meme-image');
const btnFire = getElementById('fire');
const btnWater = getElementById('water');
const btnEarth = getElementById('earth');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

const updateImageDisplay = () => {
  if (inputMemeImage.files.length === 0) {
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    memeImage.src = reader.result;
  };
  reader.readAsDataURL(inputMemeImage.files[0]);
};

const inputText = () => {
  const textOfMeme = getElementById('meme-text');
  textOfMeme.innerText = inputMemeText.value;
};

const borderFire = () => {
  containerMeme.style.border = '3px dashed rgb(255, 0, 0)';
};

const borderWater = () => {
  containerMeme.style.border = '5px double rgb(0, 0, 255)';
};

const borderEarth = () => {
  containerMeme.style.border = '6px groove rgb(0,128,0)';
};

const imgmeme1 = () => {
  memeImage.src = meme1.src;
};
const imgmeme2 = () => {
  memeImage.src = meme2.src;
};
const imgmeme3 = () => {
  memeImage.src = meme3.src;
};
const imgmeme4 = () => {
  memeImage.src = meme4.src;
};
meme1.addEventListener('click', imgmeme1);
meme2.addEventListener('click', imgmeme2);
meme3.addEventListener('click', imgmeme3);
meme4.addEventListener('click', imgmeme4);

inputMemeImage.addEventListener('change', updateImageDisplay);
inputMemeText.addEventListener('keyup', inputText);
btnFire.addEventListener('click', borderFire);
btnWater.addEventListener('click', borderWater);
btnEarth.addEventListener('click', borderEarth);

window.onload = () => {
  containerMeme.style.border = '1px solid black';
};
