let headerMenu = document.querySelector('.header__menu')
let headerBurgerPopup = document.querySelector('.header__burger--popup')
let headerBurger = document.querySelector('.header__burger')
let adamImage = document.querySelector('.adam__image')
let adamText = document.querySelector('.adam__text')
let adam = document.querySelector('.adam')
let projectElem = document.querySelectorAll('.project__elem')
let peopleSliderDiv = document.querySelectorAll('.people__slider div')
let peopleBio = document.querySelector('.people__bio')
let peopleBioTitle = document.querySelector('.people__bio--title')
let peopleBioSubtitle = document.querySelector('.people__bio--subtitle')
let peopleBioContainer = document.querySelector('.people__bio--container')
let peopleBioTitleContainer = document.querySelector('.people__bio--title--container')
let peopleBioSubtitleContainer = document.querySelector('.people__bio--subtitle--container')
let newsImg = document.querySelectorAll('.news__img')
let newsText = document.querySelectorAll('.news__text')

function headerPopup(){
    if (this.innerWidth <= 700) {
        headerMenu.classList.add('nonvisible__display')
        headerMenu.classList.remove('visible__display')
        adam.insertBefore(adamImage, adamText)
    } else if (this.innerWidth > 700) {
        headerMenu.classList.add('visible__display')
        headerMenu.classList.remove('nonvisible__display')
        adam.insertBefore(adamText, adamImage)
    }
}
window.addEventListener('DOMContentLoaded', headerPopup)
window.addEventListener('resize', headerPopup)

headerBurger.addEventListener('click', function(){
    headerBurgerPopup.classList.toggle('nonvisible__visibility')
    headerBurgerPopup.classList.toggle('visible__visibility')
})

function scaleUp(elem, scale){
    elem.forEach(element => {
        element.addEventListener("mouseenter", function(){
            element.style.transform = `scale(${scale})`
        })
    });
}
function scaleDown(elem, scale){
    elem.forEach(element => {
        element.addEventListener("mouseleave", function(){
            element.style.transform = `scale(${scale})`
        })
    });
}
scaleUp(projectElem, 1.3)
scaleDown(projectElem, 1)
scaleUp(peopleSliderDiv, 1.5)
scaleDown(peopleSliderDiv, 1)

peopleSliderDiv.forEach((element, index) => {
    element.addEventListener('click', function(){
        switch (index) {
            case 0:
                peopleBioContainer.innerHTML = '<img class="people__bio" src="img/people/bio2.svg" alt="people__bio">'
                peopleBioTitleContainer.innerHTML = '<h3 class="people__bio--title">Michal John</h3>'
                break
            case 1:
                peopleBioContainer.innerHTML = '<img class="people__bio" src="img/people/bio3.svg" alt="people__bio">'
                peopleBioTitleContainer.innerHTML = '<h3 class="people__bio--title">Theodor John</h3>'
                break
            case 2:
                peopleBioContainer.innerHTML = '<img class="people__bio" src="img/people/bio4.svg" alt="people__bio">'
                peopleBioTitleContainer.innerHTML = '<h3 class="people__bio--title">Alex John</h3>'
                break
            case 3:
                peopleBioContainer.innerHTML = '<img class="people__bio" src="img/people/bio5.svg" alt="people__bio">'
                peopleBioTitleContainer.innerHTML = '<h3 class="people__bio--title">Hanna John</h3>'
                break
        }
    })
})

newsImg.forEach(element => {
    element.addEventListener('mouseenter', function(){
        newsText = element.nextElementSibling
        if (newsText) {
            newsText.classList.toggle('nonvisible__visibility');
            newsText.classList.toggle('visible__visibility');
        }
    })
})
newsImg.forEach(element => {
    element.addEventListener('mouseleave', function(){
        newsText = element.nextElementSibling
        if (newsText) {
            newsText.classList.toggle('nonvisible__visibility');
            newsText.classList.toggle('visible__visibility');
        }
    })
})



// let formName = document.querySelector('.form__name').value
// let formEmail = document.querySelector('.form__email').value
// let formProject = document.querySelector('.form__project').value
let contackGet = document.querySelector('.contack__get')

contackGet.addEventListener('click', function(){
    let formAll = {
        formName: document.querySelector('.form__name').value,
        formEmail: document.querySelector('.form__email').value,
        formProject: document.querySelector('.form__project').value
    }
    console.log(formAll)
})
