const inputFile = document.querySelector('#meme-image');

inputFile.addEventListener('change', (event) => {
  const img = document.querySelector('img');
  img.src = URL.createObjectURL(event.target.files[0]);
  img.onload = () => {
    URL.revokeObjectURL(img.src);
  }
});

const inputText = document.querySelector('#text-input');
inputText.addEventListener('change', (event) => {
  document.querySelector('#meme-text').innerHTML = event.path[0].value;
})

