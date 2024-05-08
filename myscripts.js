// Smooth Scrolling
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();      
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });  
    });
});

// Image Carousel (Owl Carousel)
$(document).ready(function() {
  $('#image-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, 
    items: 1, 
    nav: true,
  });
});
