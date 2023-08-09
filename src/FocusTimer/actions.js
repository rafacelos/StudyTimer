import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function resetTimer() {
  state.isRunning = false
  document.documentElement.classList.remove('running')

  timer.updateDisplay()
}

export function moreTime() {
  let minutes = state.minutes

  if (minutes > 55) {
    return
  }

  state.minutes = minutes + 5

  timer.updateDisplay()
}

export function lessTime() {
  let minutes = state.minutes

  if (minutes == 5) {
    return
  }
  
  state.minutes = minutes - 5

  timer.updateDisplay()
}