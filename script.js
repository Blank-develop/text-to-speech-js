const message = new SpeechSynthesisUtterance()
function onVoiceChanged(){
    const voices = speechSynthesis.getVoices()
    console.log(voices);
    const enVoice = voices.find(voice => voice.lang === "en-US" && voice.name === "Victoria" )
    message.voice = enVoice 
}
function onClick(event){
    message.text = event.target.getAttribute('alt')
    speechSynthesis.speak(message)
}

function run(){
    speechSynthesis.addEventListener('voiceschanged',onVoiceChanged)
    const imgElems = Array.from(document.querySelectorAll('img'))
    imgElems.forEach(imgElems => imgElems.addEventListener('click',onClick))
}

run()
