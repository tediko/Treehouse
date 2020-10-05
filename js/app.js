// ---------------------- //
// -HEADER DROPDOWN MENU- //
// ---------------------- //
const menuBtn = document.querySelector('.header__mobile');
const menu = document.querySelector('.header__menu');

function isOpen() {
    if (menuBtn.classList.contains('mobile-open')) {
        menuBtn.classList.remove('mobile-open');
        menu.classList.remove('menu-open');
    } else {
        menuBtn.classList.add('mobile-open');
        menu.classList.add('menu-open');
    }
}

menuBtn.addEventListener('click', isOpen);


// ---------------------- //
// -HEADER FIXED ON SCROLL- //
// ---------------------- //
const header = document.querySelector('.header');
const sectionOne = document.querySelector('.kv');

let options = {
    rootMargin: '-144px'
  }

const headerOnScroll = new IntersectionObserver(entries=> {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('header--scroll');
        } else {
            header.classList.remove('header--scroll')
        }
    })
}, options);

headerOnScroll.observe(sectionOne);

//////////////////////////
///// MENU SCROLLSPY /////
//////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    // grab the spySections (targets) and spyLinks (triggers)
    const spySections = document.querySelectorAll('[data-scroll]');
    const spyLinks = document.querySelectorAll('.header__link');

    // functions to add and remove the active class from links as appropriate
    const makeActive = (link) => spyLinks[link].classList.add("header__link--active");
    const removeActive = (link) => spyLinks[link].classList.remove("header__link--active");
    const removeAllActive = () => [...Array(spySections.length).keys()].forEach((link) => removeActive(link));
    // change the active link a bit above the actual section
    const sectionMargin = 200;

    // keep track of the currently active link
    let currentActive = 0;

    // compare each section (by offsetTop) against the
    // viewport's current position (by window.scrollY) to figure out what section
    // the user is currently viewing

    window.addEventListener("scroll", () => {
        const current = spySections.length - [...spySections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1;

    // only if the section has changed
    // remove active class from all menu links
    // and then apply it to the link for the current section
        if (current !== currentActive) {
            removeAllActive();
            currentActive = current;
            makeActive(current);
        }
    });
}, false);

//////////////////////////
///// SCROLL TO TOP /////
//////////////////////////
let homeLink = document.querySelectorAll('[data-home]');
homeLink.forEach(e => {
    e.addEventListener('click', function() {
        window.scrollTo(0, 0);
    })
})


