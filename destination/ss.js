// JavaScript for Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Carousel functionality
const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function moveToNextItem() {
   
    carouselItems[currentItem].style.display = 'none';
    
    currentItem = (currentItem + 1) % carouselItems.length;  
    

    carouselItems[currentItem].style.display = 'block';
}


carouselItems.forEach(item => item.style.display = 'none');
carouselItems[0].style.display = 'block';

setInterval(moveToNextItem, 5000);
