function init() {
    const plusEl = document.querySelector('.plus');
    const mobilNav = document.querySelector('.nav-links');
    plusEl.addEventListener('click', () => {
        mobilNav.classList.toggle('nav-links-expand');
    });
}

init();

