var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
};

const inputImage = document.getElementById('meme-insert');

inputImage.addEventListener('change',loadImage);

function loadImage(){
  const imageContainer=document.getElementById('meme-image-container');
  imageContainer.style.backgroundImage = `url('${output.src}')`;
}

const inputText = document.getElementById('text-input');
inputText.addEventListener('change',loadText);


function loadText(){
const memeText = document.getElementById('meme-text');
memeText.innerText = inputText.value;
}