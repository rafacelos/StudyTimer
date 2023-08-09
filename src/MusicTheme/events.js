import { themes } from './elements.js'
import * as actions from './actions.js'
import state from './state.js'

export function registerTheme(){
  themes.addEventListener('click', (event) => {
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