const imgOutput = document.getElementById('meme-image');
document.getElementById('meme-insert').onchange = function () {
  imgOutput.src = URL.createObjectURL(this.files[0]);
  imgOutput.onload = function () {
    URL.revokeObjectURL(imgOutput.src);
  };
};
const textInput = document.getElementById('text-input');
textInput.onchange = function () {
  document.getElementById('meme-text').innerText = textInput.value;
};
