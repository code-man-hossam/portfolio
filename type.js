const projects = [
  {
    img: './assets/allbirds.jpg',
    title: 'allbirds',
    text:
      "allbirds E-commerce website , i've created this site using React.js as a clone to the orignal one",
    githubUrl: 'https://github.com/code-man-hossam/allbirds-e-commerce',
    siteUrl: 'https://code-man-hossam.github.io/allbirds-e-commerce/',
  },
  {
    img: './assets/mobile.jpg',
    title: 'Phone-Store',
    text: 'A mini phone store created using vanilla javaScript',
    githubUrl: 'https://github.com/code-man-hossam/phone-store-vanilla-js',
    siteUrl: 'https://amazing-mcclintock-2bd0b3.netlify.app/',
  },
  {
    img: './assets/netflix.jpg',
    title: 'Netflix-Clone',
    text: 'A Netflix clone using the TMDB API and React.js',
    githubUrl: 'https://github.com/code-man-hossam/netflix-react',
    siteUrl: 'https://netflix-my-clone.netlify.app/',
  },
  {
    img: './assets/netflix.jpg',
    title: 'Netflix-Clone',
    text: 'A Netflix clone using the TMDB API , Vanilla javaScript version',
    githubUrl: 'https://github.com/code-man-hossam/netflix-clone-vanilla-js',
    siteUrl: 'https://xenodochial-kilby-007e4e.netlify.app/',
  },
  {
    img: './assets/spotify.jpg',
    title: 'Spotify profile',
    text: 'Show your spotify profile with authentication',
    githubUrl: 'https://github.com/code-man-hossam/spotify-reactjs',
    siteUrl: 'https://spotify-my-clone.netlify.app/',
  },
  {
    img: './assets/kits.jpg',
    title: 'Offside online store',
    text: 'online store for soccer kits',
    githubUrl: 'https://github.com/code-man-hossam/offside-ecommrce',
    siteUrl: 'https://offside-kits.netlify.app/',
  },
  {
    img: './assets/weather.jpg',
    title: 'Weather app',
    text: 'Search any city weather in this app , developed by React.js',
    githubUrl: 'https://github.com/code-man-hossam/react-weather-app',
    siteUrl: 'https://search-weatherapp.netlify.app/',
  },
  {
    img: './assets/movie.jpeg',
    title: 'Search movies',
    text: 'Search movies , developed by react and the mdb api',
    githubUrl: 'https://github.com/code-man-hossam/search-movie',
    siteUrl: 'https://optimistic-torvalds-5250e5.netlify.app/',
  },
]

document.addEventListener('DOMContentLoaded', () => {
  init()
  displayProjects()
})

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement
    this.words = words
    this.txt = ''
    this.wordIndex = 0
    this.wait = parseInt(wait, 10)
    this.type()
    this.isDeleting = false
  }

  type() {
    const current = this.wordIndex % this.words.length

    const fullText = this.words[current]

    if (this.isDeleting) {
      this.txt = fullText.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullText.substring(0, this.txt.length + 1)
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

    let typeSpeed = 300

    if (this.isDeleting) {
      typeSpeed /= 2
    }

    if (!this.isDeleting && this.txt === fullText) {
      typeSpeed = this.wait

      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false

      this.wordIndex++

      typeSpeed = 500
    }

    setTimeout(() => this.type(), typeSpeed)
  }
}

// INIT APP
function init() {
  const txtElement = document.querySelector('.txt-type')
  const words = JSON.parse(txtElement.getAttribute('data-words'))
  const wait = txtElement.getAttribute('data-wait')

  // init typeWriter
  new TypeWriter(txtElement, words, wait)
}

// PROJECTS
function displayProjects() {
  const projectsContent = document.querySelector('.projects-content')

  projectsContent.innerHTML = projects
    .map((project) => {
      const { img, title, text, githubUrl, siteUrl } = project

      return ` <div class="project">
          <div class="project-img">
            <img src=${img} alt="" />
          </div>
          <div class="project-info">
            <div class="info-text">
              <h3>${title}</h3>
              <p>
                ${text}
              </p>
            </div>
            <div class="info-links">
              <a href=${githubUrl} target="_blank"><i class="fab fa-github"></i></a>
              <a href=${siteUrl} target="_blank"
                ><i class="fas fa-hand-point-right"></i
              ></a>
            </div>
          </div>
        </div>`
    })
    .join('')
}

const socialBtn = document.querySelector('.user-btn')
const btns = document.querySelectorAll('.social-btns button')

socialBtn.addEventListener('click', () => {
  btns.forEach((btn) => {
    if (btn.classList.contains('show')) {
      btn.classList.remove('show')
    } else {
      btn.classList.add('show')
    }
  })
})
