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

if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}


let themeSwitch = document.getElementById('checkbox');

themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});
themeSwitch.addEventListener('change', function() {
    localStorage.setItem('theme', this.checked ? 'dark' : 'light');
});

