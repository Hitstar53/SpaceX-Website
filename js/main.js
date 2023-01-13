const btn = document.querySelector('.hamburger');
const overlay = document.querySelector('#overlay');
const menu = document.querySelector('#mobile-menu');
const counters = document.querySelectorAll('.counter');

// implement the hamburger menu
btn.addEventListener('click', function() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    menu.classList.toggle('show-menu');
    document.body.classList.toggle('no-scroll');
});

// stats
let scrolled = false;
document.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    if (scrollPos>150 && !scrolled) {
        countUp();
        scrolled = true;
    }
    else if (scrollPos<100 && scrolled) {
        reset();
        scrolled = false;
    }
});

function countUp() {
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 100;
            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCount, 18);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

function reset() {
    counters.forEach(counter => {
        counter.innerText = '0';
    });
}