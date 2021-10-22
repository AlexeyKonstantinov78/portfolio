const headerContactsBurger = document.querySelector('.header__contacts-burger'),
    headerContacts = document.querySelector('.header__contacts'),
    presentOrderBtn = document.querySelector('.present__order-btn'),
    modalCloss = document.querySelector('.modal__closs'),
    pageOverlayModal = document.querySelector('.page__overlay_modal');


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

    headerContacts.classList.toggle('display__block');
});

presentOrderBtn.addEventListener('click', () => {
    pageOverlayModal.classList.toggle('display__block');
    pageOverlayModal.style.display = 'flex';
});

modalCloss.addEventListener('click', () => {
    pageOverlayModal.classList.toggle('display__block');
});