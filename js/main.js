const cartButton = document.querySelector('#cart-button'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close');
    
const toggleModal = () => {
    modal.classList.toggle('is-open');
};

cartButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

new WOW().init();