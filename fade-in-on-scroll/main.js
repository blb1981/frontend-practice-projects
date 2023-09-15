//------------------------------
// Make navbar go from transparent to having a white bg after hero section
//------------------------------
const header = document.querySelector('header')
const sectionOne = document.querySelector('.home-intro')

// sectionOne is the main hero section.
// Check for when it leaves the screen and add the class
// .nav-scrolled to the navbar to change the background on it.

const sectionOneObserver = new IntersectionObserver(
  (entries, sectionOneObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add('nav-scrolled')
      } else {
        header.classList.remove('nav-scrolled')
      }
    })
  },
  { rootMargin: '-200px 0px 0px 0px' }
)

sectionOneObserver.observe(sectionOne)

//------------------------------
// Make elements slide in and fade in
//------------------------------
const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('.slide-in')

// Create observer, throw the observer instance in with the callback
// because we'll need to unobserve the entries after the .appear class
// is added.
const appearOnScroll = new IntersectionObserver(
  (entries, appearOnScroll) => {
    entries.forEach((entry) => {
      // Observer fires on page load, so if intersecting is false, get out of here.
      if (!entry.isIntersecting) {
        return
      } else {
        entry.target.classList.add('appear')
        appearOnScroll.unobserve(entry.target)
      }
    })
  },
  { threshold: 0, rootMargin: '0px 0px -250px 0px' }
)

// Apply observer to each element with the .fade-in or .slide-in class as declared above
faders.forEach((fader) => {
  appearOnScroll.observe(fader)
})

sliders.forEach((slider) => appearOnScroll.observe(slider))
