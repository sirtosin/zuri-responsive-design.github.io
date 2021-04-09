//nav menu button
let menuBtn = document.querySelector('.menu-btn')
let closeBtn = document.querySelector('.close-btn')

 closeBtn.style.display = 'none'
// navlinks.style.display = 'none'
menuBtn.addEventListener('click', () => {
    let navlinks = document.querySelector('.nav-links')
    let navItem = document.querySelectorAll('li')
    let closeBtn = document.querySelector('.close-btn')
    let menuBtn = document.querySelector('.menu-btn')
    navlinks.classList.add('open')
    navItem.forEach(item => item.classList.add('open'))
    menuBtn.style.display = 'none'
    closeBtn.style.display = 'block'

})
closeBtn.addEventListener('click', () => {
    let navlinks = document.querySelector('.nav-links')
    let closeBtn = document.querySelector('.close-btn')
    let menuBtn = document.querySelector('.menu-btn')
    navlinks.classList.remove('open')
    menuBtn.style.display = 'block'
    closeBtn.style.display = 'none'

})