const loader = document.querySelector('.preloader')
const wrapper = document.querySelector('.preloader-wrapper')

wrapper.addEventListener('animationend', () => {
  loader.classList.add('hide')
})

document.querySelector('#checkbox').addEventListener('change', () => {
  document.body.classList.toggle('dark')
  document.querySelector('.label').classList.toggle('shadow')
  document.querySelector('.ball').classList.toggle('dark')
  document.querySelector('.fas').classList.toggle('dark')
})

document.addEventListener('DOMContentLoaded', () => {
  let image = document.getElementById('hero-img')
  const images = [
    './assets/nba.jpeg',
    './assets/boombox.jpg',
    './assets/newspaper.jpg',
    './assets/tennis.png',
  ]
  let randSrc = Math.floor(Math.random() * images.length)
  image.src = images[randSrc]
})

window.addEventListener('scroll', () => {
  const text1 = document.querySelector('.text-one')
  const text2 = document.querySelector('.text-two')

  let y = window.pageYOffset
  text1.style.transform = `translateX(${-y}px)`
  text2.style.transform = `translateX(${y}px)`
})

document.querySelector('.drop').addEventListener('click', () => {
  const feat = document.querySelectorAll('.feature')

  feat.forEach((item) => {
    if (item.classList.contains('show')) {
      item.classList.remove('show')
      document.querySelector('.drop').innerText = 'drop'
    } else {
      item.classList.add('show')
      document.querySelector('.drop').innerText = 'hide'
    }
  })
})

document.getElementById('about').addEventListener('mousemove', (e) => {
  document.querySelector('.bart').style.display = 'initial'

  document.querySelector('.bart').style.top = e.pageY + 'px'
  document.querySelector('.bart').style.left = e.pageX + 'px'
})

document.getElementById('about').addEventListener('mouseleave', () => {
  document.querySelector('.bart').style.display = 'none'
})

document.getElementById('projects').addEventListener('mousemove', (e) => {
  document.querySelector('.cursor').style.display = 'initial'

  document.querySelector('.cursor').style.top = e.pageY + 'px'
  document.querySelector('.cursor').style.left = e.pageX + 'px'
})

document.getElementById('projects').addEventListener('mouseleave', () => {
  document.querySelector('.cursor').style.display = 'none'
})

document.getElementById('features').addEventListener('mousemove', (e) => {
  document.querySelector('.tennis').style.display = 'initial'

  document.querySelector('.tennis').style.top = e.pageY + 'px'
  document.querySelector('.tennis').style.left = e.pageX + 'px'
})

document.getElementById('features').addEventListener('mouseleave', () => {
  document.querySelector('.tennis').style.display = 'none'
})

document.getElementById('footer').addEventListener('mousemove', (e) => {
  document.querySelector('.tennis').style.display = 'initial'

  document.querySelector('.tennis').style.top = e.pageY + 'px'
  document.querySelector('.tennis').style.left = e.pageX + 'px'
})

document.getElementById('footer').addEventListener('mouseleave', () => {
  document.querySelector('.tennis').style.display = 'none'
})
