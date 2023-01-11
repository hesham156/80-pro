var sounds = ['../sound/01 - JavaScript Drum Kit_sounds_boom.wav',
'../sound/01 - JavaScript Drum Kit_sounds_clap.wav',
'../sound/01 - JavaScript Drum Kit_sounds_hihat.wav',
'../sound/01 - JavaScript Drum Kit_sounds_kick.wav',
'../sound/01 - JavaScript Drum Kit_sounds_openhat.wav',
'../sound/01 - JavaScript Drum Kit_sounds_ride.wav',
'../sound/01 - JavaScript Drum Kit_sounds_tink (1).wav',
'../sound/01 - JavaScript Drum Kit_sounds_snare.wav',
'../sound/01 - JavaScript Drum Kit_sounds_tom.wav'
]
function playSound(src){
   var aud = new Audio(src)
   aud.play()
}

const butttons=document.querySelectorAll('.btn')
const btns = Array.from(butttons)
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btn.classList.add('playing')
        playSound(sounds[btns.indexOf(btn)])
    })
    btn.addEventListener('transitionend',()=>{
        btn.classList.remove('playing')
    })

})
window.addEventListener('keydown',(e)=>{
console.log(e.keyCode)
switch (e.keyCode){
    case 65 :
        btns[0].classList.add('playing')
        playSound(sounds[0])
        break;
    case 83 :
        btns[1].classList.add('playing')
        playSound(sounds[1])
        break;
    case 68 :
            btns[2].classList.add('playing')
            playSound(sounds[2])
            break;
    case 70 :
            btns[3].classList.add('playing')
            playSound(sounds[3])
            break;   
    case 71 :
            btns[4].classList.add('playing')
            playSound(sounds[4])
            break;       
    case 72 :
            btns[5].classList.add('playing')
            playSound(sounds[5])
            break;       
    case 74 :
            btns[6].classList.add('playing')
            playSound(sounds[6])
            break;
    case 75 :
            btns[7].classList.add('playing')
            playSound(sounds[7])
            break;
    case 76 :
            btns[8].classList.add('playing')
            playSound(sounds[8])
            break;
        }
})