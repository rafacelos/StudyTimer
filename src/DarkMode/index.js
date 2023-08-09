let darkMode = false

const buttonToggleDarkMode = document.getElementById('toggle-dark-light')
const buttonSun = document.getElementById('sun')
const buttonMoon = document.getElementById('moon')

buttonToggleDarkMode.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('dark')
  buttonSun.classList.toggle('hide')
  buttonMoon.classList.toggle('hide')

  const mode = darkMode ? 'light' : 'dark'

  event.currentTarget.querySelector('span').textContent = `Button to activate ${mode} mode`

  darkMode = !darkMode
})