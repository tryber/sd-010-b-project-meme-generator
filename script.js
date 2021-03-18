const digitText = document.querySelector('#text-input');
let bordContainer = document.querySelector('#meme-image-container');

const loadFile = (event) => { let memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
}

const addText = () => {
  digitText.addEventListener('keyup', () => {
    const spanDigit = document.querySelector('#meme-text');
    spanDigit.innerHTML = digitText.value;
  })
}
addText();

const btnRed = () => {
  let pegBtnRed = document.querySelector('#fire');
    pegBtnRed.addEventListener('click',function(event) {
      if (event.target == pegBtnRed){
        bordContainer.style.border = '3px dashed red';
        console.log('botao red')
      }
    })
}
btnRed();

const btnBlue = () => {
  let pegBtnBlue = document.querySelector('#water');
    pegBtnBlue.addEventListener('click',function(event){
      if (event.target == pegBtnBlue){
         bordContainer.style.border = '5px blue double';
         console.log('botao blue')
      }
    })
}
btnBlue();

const btnGreen = () => {
  let pegBtnGreen = document.querySelector('#earth');
    pegBtnGreen.addEventListener('click',function(event){
      if (event.target == pegBtnGreen){
        bordContainer.style.border = '6px groove green';
        console.log('botao green')
      }

    })
}
btnGreen();

const containerImg = document.querySelector('#meme-image');
const rdyMemes = document.querySelector('.ready-memes');

const ready = () => {
  rdyMemes.addEventListener('click',function(event){
   let path = event.target.src;
   containerImg.src = path;
  })
}
ready();
