let projectsButton = document.getElementById('projects-button');

projectsButton.addEventListener('click', function() {
    window.location.href = './projects.html';
});

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});