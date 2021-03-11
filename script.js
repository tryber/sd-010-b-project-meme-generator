//              elements
const inputText = document.querySelector('#text-input');
const inputImage = document.querySelector('#meme-insert');
const containerText = document.querySelector('#meme-text');
const containerImg = document.querySelector('#meme-image');
const containerMeme = document.querySelector('#meme-image-container');
const bgBtns = document.querySelectorAll('.button-container button');
const rdyMemes = document.querySelectorAll('.ready-memes img');
//             listeners

// set inputText listener

const setInputText = () => {
  inputText.addEventListener('keyup', () => {
    containerText.textContent = inputText.value;
  });
};

// inputImage Load listener

const setInputImage = () => {
  inputImage.addEventListener('change', (e) => {
    containerImg.src = URL.createObjectURL(e.target.files[0]);
  });
};

// set backgroundcolor buttons listeners
const bgColors = ['red', 'blue', 'green'];
const setBgColorBtns = () => {
  console.log(bgBtns);
  bgBtns.forEach((btn, index) => {
    const button = btn;
    button.style.backgroundColor = bgColors[index];
    btn.addEventListener('click', () => {
      const size = btn.classList[0];
      const type = btn.classList[1];
      const color = btn.style.backgroundColor;
      containerMeme.style.border = `${size} ${type} ${color}`;
    });
  });
};

// set Ready Memes

const setRdyMemes = () => {
  rdyMemes.forEach((img) => {
    img.addEventListener('click', () => {
      containerImg.src = img.src;
    });
  });
};

// loader

const loadButtons = () => {
  setInputText();
  setInputImage();
  setBgColorBtns();
  setRdyMemes();
};

window.onload = () => {
  loadButtons();
};
