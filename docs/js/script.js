
// menú de opciones | phone
const phoneMenu = document.querySelector('.phone-menu__icon');
const phoneOptions = document.querySelector('.phone__options');

phoneMenu.addEventListener('click', () => {
    if (phoneOptions.style.display === 'block') {
        phoneOptions.style.display = 'none';
    } else {
        phoneOptions.style.display = 'block';
    }
});

// Opcional: cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (!phoneMenu.contains(event.target) && !phoneOptions.contains(event.target)) {
        phoneOptions.style.display = 'none';
    }
});
