const img = document.getElementsByClassName('sviet')[0]
const aud = document.getElementById('aud')
img.addEventListener("click", () => {
    aud.play()
    console.log('1')

})