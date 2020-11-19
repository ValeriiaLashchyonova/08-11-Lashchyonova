const animatedElements = document.querySelectorAll('.animation')
const scrollSpy = (e) => {
    animatedElements.forEach((element) => {
        if(window.pageYOffset > element.offsetTop - window.innerHeight + 200) {
            element.classList.add('show')
        } else {
            element.classList.remove('show')
        }
    })    
}

const animatedLinear = document.querySelectorAll('.animationLinear')
const scrollLinear = (e) => {
    animatedLinear.forEach((element) => {
        if(window.pageYOffset > element.offsetTop - window.innerHeight + 200) {
            element.classList.add('show')
        } else {
            element.classList.remove('show')
        }
    })    
}

const animatedEasyIn = document.querySelectorAll('.animationEasyIn')
const scrollEasyIn = (e) => {
    animatedEasyIn.forEach((element) => {
        if(window.pageYOffset > element.offsetTop - window.innerHeight + 200) {
            element.classList.add('show')
        } else {
            element.classList.remove('show')
        }
    })    
}

const animatedEasyOut = document.querySelectorAll('.animationEasyOut')
const scrollEasyOut = (e) => {
    animatedEasyOut.forEach((element) => {
        if(window.pageYOffset > element.offsetTop - window.innerHeight + 200) {
            element.classList.add('show')
        } else {
            element.classList.remove('show')
        }
    })    
}

window.addEventListener('load', scrollSpy)
window.addEventListener('resize', scrollSpy)
window.addEventListener('scroll', scrollSpy)

window.addEventListener('load', scrollLinear)
window.addEventListener('resize', scrollLinear)
window.addEventListener('scroll', scrollLinear)

window.addEventListener('load', scrollEasyIn)
window.addEventListener('resize', scrollEasyIn)
window.addEventListener('scroll', scrollEasyIn)

window.addEventListener('load', scrollEasyOut)
window.addEventListener('resize', scrollEasyOut)
window.addEventListener('scroll', scrollEasyOut)