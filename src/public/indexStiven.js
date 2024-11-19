// Selecciona todas las cartas
const cards = document.querySelectorAll('.card-container');

// Agrega el evento de clic a cada carta
cards.forEach(card => {
    card.addEventListener('click', function() {
        // Alterna la clase 'active' para mostrar/ocultar la información
        card.classList.toggle('active');
    });
});

// Si se hace clic fuera de cualquier carta, remueve la clase 'active' de todas
document.addEventListener('click', function(event) {
    cards.forEach(card => {
        // Si el clic no ocurrió en la carta, remueve la clase 'active'
        if (!card.contains(event.target)) {
            card.classList.remove('active');
        }
    });
});

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