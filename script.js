function addEventTextInput() {
  const txtInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  txtInput.addEventListener('keyup', () => {
    memeText.innerText = txtInput.value;
  });
}
addEventTextInput();

/*
* Consultei o seguinte link como sugestão da Trybe para utilização da função de upload.
* Link: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
 */

function loadFile(event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = () => {
    URL.revokeObjectURL(output.src); // free memory
  };
}

function addEventFileInput() {
  const fileInput = document.getElementById('meme-insert');
  fileInput.addEventListener('change', loadFile);
}
addEventFileInput();

function addColoredFrame(event) {
  const imageContainer = document.getElementById('meme-image-container');
  if (event.target.id === 'fire') {
    imageContainer.style.border = '3px dashed red';
  }
  if (event.target.id === 'water') {
    imageContainer.style.border = '5px double blue';
  }
  if (event.target.id === 'earth') {
    imageContainer.style.border = '6px groove green';
  }
}

function addEventColoredFrameButtons() {
  const groupButtons = document.getElementById('colored-frames-buttons');
  groupButtons.addEventListener('click', addColoredFrame);
}
addEventColoredFrameButtons();
