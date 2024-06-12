
const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('mouseover', () => {
    carouselContainer.style.animationPlayState = 'paused';
});

carouselContainer.addEventListener('mouseout', () => {
    carouselContainer.style.animationPlayState = 'running';
});
