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



