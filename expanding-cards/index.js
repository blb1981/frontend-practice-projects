const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    // Remove active classes on any other panels
    removeActiveClasses()
    panel.classList.add('active')
  })
})

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
