document.addEventListener('DOMContentLoaded', () => {
  const projectsSection = document.getElementById('projects');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        projectsSection.classList.add('visible');
        observer.unobserve(projectsSection);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(projectsSection);
});
// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
}

// Show more projects
function showMoreProjects() {
    const projects = document.getElementsByClassName("project");
    const showMoreButton = document.getElementById("showMoreButton");

    for (let i = 0; i < projects.length; i++) {
        projects[i].classList.toggle("hidden");
    }

    showMoreButton.textContent = showMoreButton.textContent === "Show more" ? "Show less" : "Show more";
}

// Toggle service details
function toggleServiceDetails(serviceId) {
    const service = document.getElementById(serviceId);
    service.classList.toggle("hidden");

    const arrow = document.getElementById(`arrow-${serviceId}`);
    arrow.classList.toggle("rotate-180");
}
