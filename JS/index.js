/*OBSERVER*/
const softSkillsBox = document.getElementsByClassName('soft-skills-box');
const personal = document.getElementById('personal');
const photo = document.getElementById('photo').firstElementChild;
const projectsBox = document.getElementsByClassName('projects-box');
const aboutMeBox = document.getElementsByClassName('box');

const animation = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('animation');
        } else {
            entrada.target.classList.remove('animation');
        }
    });
}

const observer = new IntersectionObserver(animation, {
    root: null,
    rootMargin: "50px 50px 50px 50px",
    threshold: 1.0,
});

Array.from(softSkillsBox).forEach((box) => {
    observer.observe(box);
});
Array.from(projectsBox).forEach((box) => {
    observer.observe(box);
});
Array.from(aboutMeBox).forEach((box) => {
    observer.observe(box);
});
observer.observe(personal);
observer.observe(photo);

/*STICKY MENU*/
const menu = document.getElementById('menu-container');

window.addEventListener('scroll', () => {
    const currentScroll = scrollY;
    
    menu.classList.toggle('sticky-menu', currentScroll > 0);
})

/*MOBILE MENU*/
const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');
const ul = document.querySelector('ul');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('mobileMenu');
    ul.classList.toggle('visible');
})

/* LANGUAGES */
const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async (language) => {
    console.log(language);
    const requestJson = await fetch(`./lang/${language}.json`);
    const languageText = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = languageText[section][value];
    }
}

const languagesButton = document.getElementsByClassName('languages-button');

Array.from(languagesButton).forEach((button) => {
    button.addEventListener('click', (e) => {
        changeLanguage(e.target.dataset.language);

        if (e.target.dataset.language == "esp") {
            languagesButton[0].classList.remove('enabled');
            languagesButton[0].classList.add('disabled');

            languagesButton[1].classList.remove('disabled');
            languagesButton[1].classList.add('enabled');
        } else {
            languagesButton[1].classList.remove('enabled');
            languagesButton[1].classList.add('disabled');

            languagesButton[0].classList.remove('disabled');
            languagesButton[0].classList.add('enabled');
        }
    })
})
