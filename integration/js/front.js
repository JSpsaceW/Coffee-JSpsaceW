document.addEventListener('DOMContentLoaded', () => {
    const viewMoreBtn = document.getElementById('view-more-btn');
    const hiddenItems = document.querySelectorAll('.hidden');

    viewMoreBtn.addEventListener('click', () => {
        hiddenItems.forEach(item => {
            item.classList.toggle('hidden');
        });

        if (viewMoreBtn.textContent === 'Voir tout') {
            viewMoreBtn.textContent = 'Voir moins';
        } else {
            viewMoreBtn.textContent = 'Voir tout';
        }
    });
});




////////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', () => {
    const menuBurger = document.querySelector('.menu-burger');
    const headerNavLinks = document.querySelector('.header__part-link');
    const title = document.querySelector('.header__part-logo-title');
    menuBurger.addEventListener('click', () => {
        headerNavLinks.classList.toggle('menu-active');
        menuBurger.classList.remove('menu-burger');
        title.classList.toggle('header__part-logo-title-hidden');
        
    });
});

