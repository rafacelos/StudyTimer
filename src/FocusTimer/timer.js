import state from './state.js'
import * as el from './elements.js'
import { resetTimer } from './actions.js'
import { buttonKitchenTimer } from './sounds.js'

export function countdown() {
  if(!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--
  if (seconds < 0) {
    minutes--
    seconds = 59 
  }

  if (minutes < 0) {
    resetTimer()
    buttonKitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds
  
  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}
