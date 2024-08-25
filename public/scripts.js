document.addEventListener('DOMContentLoaded', function() {
    let projectsButton = document.getElementById('projects-button');
    let navbar = document.querySelector('.navbar');
  
    if (navbar) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      });
    }
  
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  
    let themeSwitch = document.getElementById('checkbox');
    
    if (themeSwitch) {
      themeSwitch.addEventListener('change', function() {
        if (this.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
        }
        localStorage.setItem('theme', this.checked ? 'dark' : 'light');
      });
    }
  
    // Slideshow functionality
    let slideIndex = 1;
    let slides = document.getElementsByClassName("mySlides");
  
    function showSlides(n) {
      if (!slides.length) return;
      
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      
      slides[slideIndex-1].style.display = "block";
    }
  
    // Initialize slideshow if slides exist
    if (slides.length > 0) {
      showSlides(slideIndex);
    }
  
    // Make plusSlides function globally accessible
    window.plusSlides = function(n) {
      showSlides(slideIndex += n);
    }
  });