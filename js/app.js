function init() {
    const plusEl = document.querySelector('.plus');
    const mobilNav = document.querySelector('.nav');
    plusEl.addEventListener('click', () => {
        mobilNav.classList.toggle('nav-links-expand');
    });
}

init();

