var navbar_toggler = document.querySelector('.navbar-toggler'),
    menu = document.querySelector('.navbar-mobi'),
    menu_scroll = document.querySelector('.menu');
navbar_toggler.addEventListener('click', function() {
    menu.classList.toggle('show');
})
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 10) {
        menu_scroll.classList.add('fix-top');
    } else {
        menu_scroll.classList.remove('fix-top');
    }

})