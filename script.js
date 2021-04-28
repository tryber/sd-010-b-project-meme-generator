const inputText = document.querySelector('#text-input');

inputText.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = inputText.value;
});

// const loadFile = (event) => {
//   const output = document.getElementById('meme-image');
//   output.src = URL.createObjectURL(event.target.files[0]);
//   output.onload = () => {
//     URL.revokeObjectURL(output.src); // free memory
//   };
// };
const btnContainer = document.querySelector('#btn-container');

btnContainer.addEventListener('click', (event) => {
  const memeContainer = document.querySelector('#meme-image-container');
  memeContainer.className = event.target.className;
});

const imgContainer = document.querySelector('#img-container');

imgContainer.addEventListener('click', (event) => {
  const memeImg = document.querySelector('#meme-image');
  memeImg.src = event.target.src;
});
