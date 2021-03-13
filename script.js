const inputText = document.querySelector('#text-input');
const container = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const memeInsert = document.querySelector('#meme-insert');

const text = (event) => {
  memeText.textContent = event.target.value;
};

const addText = () => {
  inputText.addEventListener('keyup', text);
};

const showImg = (event) => {
  const element = event.target;
  const url = URL.createObjectURL(element.files[0]);
  memeImg.src = url;
};

const insertImg = () => {
  memeInsert.addEventListener('change', showImg);
};

const elementGenerator = (id, name) => {
  const element = document.querySelector(id);
  element.addEventListener('click', () => {
    container.className = '';
    container.classList.add(name);
  });
};

const imgGenerator = (id, url) => {
  const element = document.querySelector(id);
  element.addEventListener('click', () => {
    memeImg.src = url;
  });
};

imgGenerator('#meme-1', '/imgs/meme1.png');
imgGenerator('#meme-2', '/imgs/meme2.png');
imgGenerator('#meme-3', '/imgs/meme3.png');
imgGenerator('#meme-4', '/imgs/meme4.png');
elementGenerator('#fire', 'fire-style');
elementGenerator('#water', 'water-style');
elementGenerator('#earth', 'earth-style');
addText();
insertImg();
