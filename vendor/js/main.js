const navbar_toggler = document.querySelector('.icon-bar'),
    menu = document.querySelector('.navbar-mobile'),
    menu_scroll = document.querySelector('.menu');
navbar_toggler.addEventListener('click', function() {
    navbar_toggler.classList.toggle('is-active');
    menu.classList.toggle('is-show');
})
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 10) {
        menu_scroll.classList.add('fix-top');
    } else {
        menu_scroll.classList.remove('fix-top');
    }

})