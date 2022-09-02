const pianoKeys = document.querySelectorAll(".key")

function playSound(newPath){
    new Audio(newPath).play()
}

pianoKeys.forEach((pianoKey, i)=>
{
    const keyNum = i < 9 ? '0' + (i+1) : (i+1)
    const keySoundPath = "24-piano-keys/key" + keyNum + ".mp3"
    console.log(keySoundPath)
    pianoKey.addEventListener('click', () => playSound(keySoundPath))
})