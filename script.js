let input=document.getElementById('text-input')
let memeText=document.getElementById('meme-text')
input.addEventListener('input',sameSentence)
function sameSentence(){
   memeText.innerHTML= input.value
}
//requisito de carregar a foto ao apertar o botão 
let fileInput=document.getElementById('meme-insert')

 function uploadImage(event) {
	var image = document.getElementById('meme-image-container');
	let url=URL.createObjectURL(event.target.files[0]);
    image.style.backgroundImage=`url(${url})`
   
}
fileInput.addEventListener('input',uploadImage)
// os 3 botões coloridos
let fireButton=document.getElementById('fire')
let waterButton=document.getElementById('water')
let earthButton=document.getElementById('earth')


function red(){
    var image = document.getElementById('meme-image-container');
    image.style.borderColor='red'
    image.style.borderWidth= '3px'
    image.style.borderStyle='dashed'
}
fireButton.addEventListener('click',red)

function blue(){
    var image = document.getElementById('meme-image-container');
    image.style.borderColor='blue'
    image.style.borderWidth= '6px'
    image.style.borderStyle='double'
}
waterButton.addEventListener('click',blue)

function green(){
    var image = document.getElementById('meme-image-container');
    image.style.borderColor='green'
    image.style.borderWidth= '5px'
    image.style.borderStyle='groove'
}
earthButton.addEventListener('click',green)

