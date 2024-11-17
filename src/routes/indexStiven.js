const toggleMenu = document.getElementById("toggle-menu");
const mainMenu = document.getElementById("main-menu");

toggleMenu.addEventListener("click", () => {
    mainMenu.classList.toggle("main-menu--show")
} );

const opinions = document.querySelectorAll('.nuestros-clientes__container-opinion');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

opinions[currentIndex].classList.add('active');

nextBtn.addEventListener('click', function() {
    opinions[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % opinions.length;
    opinions[currentIndex].classList.add('active');
});

prevBtn.addEventListener('click', function() {
    opinions[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + opinions.length) % opinions.length;
    opinions[currentIndex].classList.add('active');
});