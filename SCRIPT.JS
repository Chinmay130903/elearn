// JavaScript for handling slider functionality
let slideIndex = 0;

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });
}

document.getElementById('prev').addEventListener('click', () => {
    showSlides(--slideIndex);
});

document.getElementById('next').addEventListener('click', () => {
    showSlides(++slideIndex);
});

showSlides(slideIndex);
