const headerContactsBurger = document.querySelector('.header__contacts-burger'),
    headerContacts = document.querySelector('.header__contacts');


new Swiper('.swiper', {
    // loop: true,
    navigation: {
        nextEl: '.portfolio__arrow_right',
        prevEl: '.portfolio__arrow_left',
        disabledClass: 'portfolio__arrow_disable',
    },
    breakpoints: {
        480: {
            grid: {
                fill: 'row',
                rows: 2
            }
        },
        768: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 2
            }
        }
    }
});

headerContactsBurger.addEventListener('click', () => {

    headerContacts.classList.toggle('burger_activ');
});