const getElementById = (element) => document.getElementById(element);

const inputMemeText = getElementById('text-input');
const inputMemeImage = getElementById('meme-insert');
const memeImage = getElementById('meme-image');

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
  console.log(inputMemeText.value);
};
inputMemeImage.addEventListener('change', updateImageDisplay);
inputMemeText.addEventListener('keyup', inputText);
