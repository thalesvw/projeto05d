import Timer from "./timer.js"
import Controls from "./controls.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.toggle('hide')
  buttonSoundOff.classList.toggle('hide')
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.toggle('hide')
  buttonSoundOff.classList.toggle('hide')
})

buttonSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.upateMinutes(newMinutes)
})