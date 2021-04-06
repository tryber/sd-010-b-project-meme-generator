const textInput = document.getElementById('text-input');

textInput.addEventListener('keyup', () => {
  const memeText = document.getElementById('meme-text-text');
  memeText.innerText = textInput.value;
});
