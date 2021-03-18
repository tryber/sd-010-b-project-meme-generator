function eventInputText() {
  const inputText = document.getElementById('text-input');
  inputText.addEventListener('input', (e) => {
    document.getElementById('meme-text').innerHTML = e.target.value;
  });
}

eventInputText();
