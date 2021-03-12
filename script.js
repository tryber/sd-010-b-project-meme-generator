// Elements

const inputText = document.querySelector('#text-input');
const text = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const imgContainer = document.querySelector('#meme-image-container');
const imgMeme1 = document.querySelector('#meme-1');
const imgMeme3 = document.querySelector('#meme-3');
const imgMeme4 = document.querySelector('#meme-4');
const imgMeme2 = document.querySelector('#meme-2');
const memeInsert = document.querySelector('#meme-insert');

// loadFile based on https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded

const loadFile = () => {
  memeInsert.onchange = (e) => {
    memeImg.src = URL.createObjectURL(e.target.files[0]);
  };
};

loadFile();

// Insert text

const createMessage = () => {
  inputText.addEventListener('input', () => {
    text.textContent = inputText.value;
  });
};

createMessage();

// style container

const styleContainer = (value) => {
  imgContainer.style.border = value;
};

btnFire.addEventListener('click', () => {
  const value = '3px dashed red';
  styleContainer(value);
});
btnWater.addEventListener('click', () => {
  const value = '5px double blue';
  styleContainer(value);
});
btnEarth.addEventListener('click', () => {
  const value = '6px groove green';
  styleContainer(value);
});

// Box memes

const boxImages = (e) => {
  memeImg.src = e.target.src;
};

imgMeme1.addEventListener('click', boxImages);
imgMeme2.addEventListener('click', boxImages);
imgMeme3.addEventListener('click', boxImages);
imgMeme4.addEventListener('click', boxImages);
