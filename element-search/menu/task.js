document.querySelectorAll('.menu__link').forEach((link) => {
    link.addEventListener('click', (event) => {
        const linkMenu = link.parentElement.querySelector('.menu_sub');
        link.closest('.menu').querySelectorAll('.menu_sub').forEach((menuSub) => {
            if (linkMenu !== menuSub) {
                menuSub.classList.remove('menu_active');
            }
        });
        if (linkMenu !== null) {
            linkMenu.classList.toggle('menu_active');
            event.preventDefault();
        }
    })
})
