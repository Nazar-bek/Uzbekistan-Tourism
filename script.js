// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetElement.offsetTop - 60, 
            behavior: 'smooth'
        });
    });addEventListener('scroll', lazyLoad);
window.addEventListener('load', lazyLoad);
})