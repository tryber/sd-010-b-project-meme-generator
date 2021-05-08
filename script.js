const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

textInput.addEventListener('keyup', (event) => {
  memeText.innerHTML = event.target.value;
});
