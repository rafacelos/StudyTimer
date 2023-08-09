import state from './state.js'
import * as sounds from './sounds.js'

export function musicTheme(selectedElement, selectedTheme) {  
  state.theme = String(selectedTheme)
  
  state.musicOn = selectedElement.classList.toggle('musicOn')

  if (!state.musicOn) {
    resetTheme(selectedTheme)
    return
  }

  if (state.theme == "forest") {
    sounds.musicForest.play()
  }
  if (state.theme == "rain") {
    sounds.musicRain.play()
  }
  if (state.theme == "coffee") {
    sounds.musicCoffee.play()
  }
  if (state.theme == "fire") {
    sounds.musicFire.play()
  }
}

export function resetTheme(selectedTheme) {
  if (state.theme == 'default') {
    return
  }
  const ActiveTheme = document.querySelectorAll('button.musicOn')

  ActiveTheme[0].classList.remove('musicOn')
  state.theme='default'

  sounds.musicCoffee.pause()
  sounds.musicFire.pause()
  sounds.musicRain.pause()
  sounds.musicForest.pause()
}

export function pageColors(selectedTheme) {
  const head = document.querySelector('header')
  const feet = document.querySelector('footer')

  if (state.theme == 'default') {
    head.classList.remove('fireBg','rainBg','forestBg','coffeeBg')
    feet.classList.remove('fireBg','rainBg','forestBg','coffeeBg')
    return
  }
  
  if (selectedTheme == 'fire') {
    head.classList.remove('rainBg','forestBg','coffeeBg')
    head.classList.add('fireBg')

    feet.classList.remove('rainBg','forestBg','coffeeBg')
    feet.classList.add('fireBg')
  }

  if (selectedTheme == 'forest') {
    head.classList.remove('rainBg','fireBg','coffeeBg')
    head.classList.add('forestBg')

    feet.classList.remove('rainBg','forestBg','coffeeBg')
    feet.classList.add('forestBg')
  }

  if (selectedTheme == 'rain') {
    head.classList.remove('fireBg','forestBg','coffeeBg')
    head.classList.add('rainBg')

    feet.classList.remove('rainBg','forestBg','coffeeBg')
    feet.classList.add('rainBg')
  }
  
  if (selectedTheme == 'coffee') {
    head.classList.remove('rainBg','forestBg','fireBg')
    head.classList.add('coffeeBg')

    feet.classList.remove('rainBg','forestBg','coffeeBg')
    feet.classList.add('coffeeBg')
  }
}