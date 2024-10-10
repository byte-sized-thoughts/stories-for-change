// Menu Toggle
function toggleMenu() {
  const menuButton = document.querySelector('.menu-button');
  const menuContainer = document.getElementById('menu-container');
  menuButton.classList.toggle('active');
  menuContainer.classList.toggle('active');
}

// Navbar background change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const scrollPos = window.scrollY || window.pageYOffset;

  if (scrollPos + 100 >= window.innerHeight) {
    navbar.classList.add('bg-active');
  } else {
    navbar.classList.remove('bg-active');
  }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Background elements parallax effect
window.addEventListener('scroll', function() {
  const scrollPos = window.scrollY || window.pageYOffset;
  const forest = document.querySelector('.forest');
  const silhouette = document.querySelector('.silhouette');
  const header = document.getElementById('welcome-section');

  if (scrollPos <= window.innerHeight) {
    silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
    forest.style.bottom = `${parseInt(-300 + scrollPos / 6)}px`;
  }

  if (scrollPos - 100 <= window.innerHeight) {
    header.style.visibility = 'visible';
  } else {
    header.style.visibility = 'hidden';
  }
});
