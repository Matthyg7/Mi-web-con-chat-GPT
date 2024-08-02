// Controla la visibilidad del menú de navegación en dispositivos móviles
let menuResponsive = document.querySelector(".checkbtn");

menuResponsive.onclick = function () {
    let navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}

// Alterna la visibilidad de los detalles de una mascota
function toggleDetalle(detalleId) {
    let detalle = document.getElementById(detalleId);
    if (detalle) {
        if (detalle.style.display === 'none' || detalle.style.display === '') {
            detalle.style.display = 'block';
        } else {
            detalle.style.display = 'none';
        }
    }
}

// Desplaza suavemente hacia un elemento específico en la página
function scrollToElement(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Valida el formulario de adopción antes de enviarlo
document.getElementById('formulario').addEventListener('submit', function (event) {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let motivo = document.getElementById('motivo').value;

    // Verifica que todos los campos estén completos
    if (!nombre || !correo || !telefono || !direccion || !motivo) {
        alert('Por favor, completa todos los campos del formulario.');
        event.preventDefault();
    }
})