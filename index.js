let form = document.querySelector('form')
let feed = document.querySelector('.feedback')
let pattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (pattern.test(form.username.value)) {
    feed.textContent = 'Your username is Ok'
  } else {
    feed.textContent = 'Your username should be between 6 and 12 chars'
  }
})

//Time to sleep