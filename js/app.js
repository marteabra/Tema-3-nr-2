function init() {
    const plus = document.querySelector('.plus');
    plus.addEventListener('click', () => {

    })
}

function init() { // dette er hoved funksjon som blir aktivert i linje 9
    const plusEl = document.querySelector('.plus'); // med dette hente vi html element som har klasse navn "pluss"
    const mobilNav = document.querySelector('.nav-links'); // her hente vi html elementer som er mobil meny og er i diplay: none
    plusEl.addEventListener('click', () => { // dette funksjon lytter på en klikk på det element vi lagd i linje 2
        mobilNav.classList.add('nav-links-mobil'); // om klikk bruker vi classList javascript funksjon og med "add" legge vi til css klasse "show" (display: block) som er i css fil men ikke brukt rett i html
    });
}
init();


