
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navbarContainer = document.querySelector('.navbar-container');
  
  if (menuToggle && navbarContainer) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navbarContainer.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = navbarContainer.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnToggle && navbarContainer.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navbarContainer.classList.remove('active');
      }
    });
  }
});
