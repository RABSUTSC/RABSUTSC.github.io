// Selecciona el encabezado
const header = document.getElementById('mainHeader');

// Guarda la posición inicial del scroll
let prevScrollPos = window.pageYOffset;

// Función para manejar el evento de desplazamiento
window.onscroll = function () {
    // Obtiene la posición actual del scroll
    const currentScrollPos = window.pageYOffset;

    // Comprueba si el scroll está hacia arriba o hacia abajo
    if (prevScrollPos > currentScrollPos) {
        // Muestra el encabezado si el scroll es hacia arriba
        header.style.top = '0';
    } else {
        // Oculta el encabezado si el scroll es hacia abajo
        header.style.top = '-70px'; // Ajusta según la altura de tu encabezado
    }

    // Actualiza la posición anterior del scroll
    prevScrollPos = currentScrollPos;
};

