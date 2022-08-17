const pianoKeys = document.querySelectorAll('.key')

function playSound(newURL){
    console.log(newURL)
    new Audio(newURL).play()
}

pianoKeys.forEach((pianoKeys, i) => {

    const number = i < 9? '0' + (i+1) : (i+1)
    const newURL = '24-piano-keys/key' + number + '.mp3'
    

    pianoKeys.addEventListener('click', ()=>playSound(newURL))
    
});