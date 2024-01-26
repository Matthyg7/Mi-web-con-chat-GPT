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