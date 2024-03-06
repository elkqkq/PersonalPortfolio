// smooth scroll for navigation 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetedSection = document.querySelector(this.getAttribute('href'));
      const navHeight = document.querySelector('nav').offsetHeight;
      let extraPadding = 0;

      if (window.innerWidth >= 768) {
          extraPadding = 50;
      }

      window.scrollTo({
          top: targetedSection.offsetTop - navHeight - extraPadding,
          behavior: 'smooth'

      });

      // reset url to root path
      if (window.location.hash) {
          window.location.replace(window.location.pathname)
      }

  })
})

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
}

// Show more services
function showMoreServices() {
  const hiddenServices = document.querySelectorAll('.hidden-service');

  hiddenServices.forEach(service => {
      service.classList.toggle('hidden');
  });

  const showMoreButton = document.getElementById('showMoreButton');
  showMoreButton.textContent = (showMoreButton.textContent === 'Show more') ? 'Show less' : 'Show more';
}



