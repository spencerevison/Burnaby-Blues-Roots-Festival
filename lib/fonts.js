const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800&display=swap'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const primaryFont = new FontFaceObserver('Montserrat')

  primaryFont.load().then(() => {
    document.documentElement.classList.add('primary-font-loaded')
  })

  setTimeout(() => {
    document.documentElement.classList.add('primary-font-timeout')
  }, 3000)
}

export default Fonts
