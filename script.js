function insertText() {
  const input = document.getElementById('text-input');
  input.addEventListener('keyup', function () {
    const text = document.getElementById('meme-text');
    text.innerText = input.value;
  });
}

insertText();

// Foi utilizado o seguinte vídeo como referência 
// para construir a função insertImage: https://www.youtube.com/watch?v=KsigKyDZTt0
function insertImage() {
  const input = document.getElementById('meme-insert');
  let file = input.files;
  if (file.length > 0) {
    let fileReader = new FileReader();
    fileReader.onload = function (event) {
    const img = document.getElementById ('meme-image');
    img.setAttribute('src', event.target.result);
    }
    fileReader.readAsDataURL(file[0]);
  }
}

insertImage ();

function fire() {
  const btnFire = document.getElementById('fire');
  btnFire.addEventListener('click', function () {
    const div = document.getElementById('meme-image-container');
    div.style.border = 'dashed red 3px';
  })
}
const btnFire = document.getElementById('fire');
btnFire.style.backgroundColor = 'red'
fire();

function water() {
  const btnWater = document.getElementById('water');
  btnWater.addEventListener('click', function () {
    const div = document.getElementById('meme-image-container');
    div.style.border = 'double blue 5px';
  })
}

const btnWater = document.getElementById('water');
btnWater.style.backgroundColor = 'blue'
water();

function earth() {
  const btnEarth = document.getElementById('earth');
  btnEarth.addEventListener('click', function () {
    const div = document.getElementById('meme-image-container');
    div.style.border = 'groove green 6px';
  })
}

const btnEarth = document.getElementById('earth');
btnEarth.style.backgroundColor = 'green'
earth();

function selectMeme () {
  const div = document.getElementsByTagName('div')[1];
  const container = document.getElementById('meme-image');
  div.addEventListener('click', function (event) {
    container.src = event.target.src
  })
}

selectMeme ();

