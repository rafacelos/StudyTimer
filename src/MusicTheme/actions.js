import state from './state.js'
import * as sounds from './sounds.js'
import * as el from './elements.js'

export function musicTheme(selectedElement, selectedTheme) {  
  state.theme = String(selectedTheme)
  
  state.musicOn = selectedElement.classList.toggle('musicOn')

  if (!state.musicOn) {
    resetTheme(selectedTheme)
    return
  }

  state.volume = 50
  let volumeValue = state.volume / 100

  if (state.theme == "forest") {
    sounds.musicForest.play()
    sounds.musicForest.volume = volumeValue
    el.forestBar.value = state.volume
  }
  if (state.theme == "rain") {
    sounds.musicRain.play()
    sounds.musicRain.volume = volumeValue
    el.rainBar.value = state.volume
  }
  if (state.theme == "coffee") {
    sounds.musicCoffee.play()
    sounds.musicCoffee.volume = volumeValue
    el.coffeeBar.value = state.volume
  }
  if (state.theme == "fire") {
    sounds.musicFire.play()
    sounds.musicFire.volume = volumeValue
    el.fireBar.value = state.volume
  }
}

export function resetTheme(selectedTheme) {
  if (state.theme == 'default') {
    return
  }
  const ActiveTheme = document.querySelectorAll('button.musicOn')

  ActiveTheme[0].classList.remove('musicOn')
  state.theme = 'default'
  state.musicOn = false

  sounds.musicCoffee.pause()
  sounds.musicFire.pause()
  sounds.musicRain.pause()
  sounds.musicForest.pause()
  resetVolume()
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

export function setVolume(barValue, selectedBar) {
  barValue = barValue ?? state.volume

  if (state.theme == "forest" && selectedBar == "forestBar") {
    sounds.musicForest.volume = barValue / 100
  }
  if (state.theme == "rain" && selectedBar == "rainBar") {
    sounds.musicRain.volume = barValue / 100
  }
  if (state.theme == "coffee" && selectedBar == "coffeeBar") {
    sounds.musicCoffee.volume = barValue / 100
  }
  if (state.theme == "fire" && selectedBar == "fireBar") {
    sounds.musicFire.volume = barValue / 100
  }
  state.volume = barValue
}

export function resetVolume() {
  state.volume = 0
  let defaultVolumeValue = state.volume
  el.forestBar.value = defaultVolumeValue
  el.rainBar.value = defaultVolumeValue
  el.coffeeBar.value = defaultVolumeValue
  el.fireBar.value = defaultVolumeValue
}