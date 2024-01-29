/*let currentIndex = 0;

function changeSlide(direction) {
    const images = document.querySelector('.images');
    const imageWidth = document.querySelector('.images img').clientWidth;
    
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.childElementCount - 1;
    } else if (currentIndex >= images.childElementCount) {
        currentIndex = 0;
    }

    const transformValue = -currentIndex * imageWidth;
    images.style.transform = `translateX(${transformValue}px)`;
}*/
let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}

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

function scrollToElement(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


    document.getElementById('adoption-form').addEventListener('submit', function (event) {
        let nombre = document.getElementById('nombre').value;
        let correo = document.getElementById('correo').value;
        let telefono = document.getElementById('telefono').value;
        let direccion = document.getElementById('direccion').value;
        let motivo = document.getElementById('motivo').value;

        if (!nombre || !correo || !telefono || !direccion || !motivo) {
            alert('Por favor, completa todos los campos del formulario.');
            event.preventDefault();
        }
    });

