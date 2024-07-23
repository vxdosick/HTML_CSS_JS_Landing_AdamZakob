const headerMenu = document.querySelector('.header__menu');
const headerBurgerPopup = document.querySelector('.header__burger--popup');
const headerBurger = document.querySelector('.header__burger');
const adamImage = document.querySelector('.adam__image');
const adamText = document.querySelector('.adam__text');
const adam = document.querySelector('.adam');

function headerPopup() {
    if (window.innerWidth <= 700) {
        headerMenu.classList.add('nonvisible__display');
        headerMenu.classList.remove('visible__display');
        adam.insertBefore(adamImage, adamText);
    } else {
        headerMenu.classList.add('visible__display');
        headerMenu.classList.remove('nonvisible__display');
        adam.insertBefore(adamText, adamImage);
    }
}

window.addEventListener('DOMContentLoaded', headerPopup);
window.addEventListener('resize', headerPopup);

headerBurger.addEventListener('click', () => {
    headerBurgerPopup.classList.toggle('nonvisible__visibility');
    headerBurgerPopup.classList.toggle('visible__visibility');
});

const scaleElements = (elements, scaleEnter, scaleLeave) => {
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => element.style.transform = `scale(${scaleEnter})`);
        element.addEventListener('mouseleave', () => element.style.transform = `scale(${scaleLeave})`);
    });
};

const projectElem = document.querySelectorAll('.project__elem');
const peopleSliderDiv = document.querySelectorAll('.people__slider div');

scaleElements(projectElem, 1.3, 1);
scaleElements(peopleSliderDiv, 1.5, 1);

const peopleBioContainer = document.querySelector('.people__bio--container');
const peopleBioTitleContainer = document.querySelector('.people__bio--title--container');

peopleSliderDiv.forEach((element, index) => {
    element.addEventListener('click', () => {
        const bios = [
            { img: 'bio2.svg', name: 'Michal John' },
            { img: 'bio3.svg', name: 'Theodor John' },
            { img: 'bio4.svg', name: 'Alex John' },
            { img: 'bio5.svg', name: 'Hanna John' }
        ];
        if (bios[index]) {
            peopleBioContainer.innerHTML = `<img class="people__bio" src="img/people/${bios[index].img}" alt="people__bio">`;
            peopleBioTitleContainer.innerHTML = `<h3 class="people__bio--title">${bios[index].name}</h3>`;
        }
    });
});

const newsImg = document.querySelectorAll('.news__img');

newsImg.forEach(element => {
    element.addEventListener('mouseenter', function() {
        const newsText = this.nextElementSibling;
        if (newsText) {
            newsText.classList.toggle('nonvisible__visibility');
            newsText.classList.toggle('visible__visibility');
        }
    });
    element.addEventListener('mouseleave', function() {
        const newsText = this.nextElementSibling;
        if (newsText) {
            newsText.classList.toggle('nonvisible__visibility');
            newsText.classList.toggle('visible__visibility');
        }
    });
});

const contactGet = document.querySelector('.contack__get');

contactGet.addEventListener('click', () => {
    const formAll = {
        formName: document.querySelector('.form__name').value,
        formEmail: document.querySelector('.form__email').value,
        formProject: document.querySelector('.form__project').value
    };
    console.log(formAll);
});