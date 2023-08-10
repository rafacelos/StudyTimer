import { themes } from './elements.js'
import * as actions from './actions.js'
import state from './state.js'

export function registerTheme(){
  themes.addEventListener('click', (event) => {
    event.stopPropagation()
    const selectedAction = event.target.dataset.action
    if(typeof actions[selectedAction] != "function") {
      return
    }
    const selectedElement = event.target
    let selectedTheme = event.target.classList[0]

    if (state.theme == selectedTheme) {
      actions.resetTheme()
      actions.pageColors(selectedTheme)
      return
    }
    
    actions.resetTheme()
    actions[selectedAction](selectedElement, selectedTheme)
    actions.pageColors(selectedTheme)
  })
}

export function volumeControl(){
  themes.addEventListener('input', (event) => {
    event.stopPropagation()
    // let value = volumeInputBar.value
    // state.volume = value
    // actions.updateVolume(value, state.theme)
    const selectedVolAction = event.target.dataset.action
    if (typeof actions[selectedVolAction] != "function") {
      return
    }

    const barValue = event.target.value
    let selectedBar = event.target.id

    if ( state.musicOn == false ) {
      return
    }

    console.log(barValue)

    actions[selectedVolAction](barValue, selectedBar)
  })
}
