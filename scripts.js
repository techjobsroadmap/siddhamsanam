
// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add mobile menu functionality
  const navbar = document.querySelector('.navbar-container');
  const content = document.querySelector('.content');
  
  // Create a mobile menu toggle button
  const mobileMenuToggle = document.createElement('button');
  mobileMenuToggle.className = 'mobile-menu-toggle';
  mobileMenuToggle.innerHTML = '<span></span><span></span><span></span>';
  document.querySelector('.navbar').prepend(mobileMenuToggle);
  
  // Toggle mobile menu when clicked
  mobileMenuToggle.addEventListener('click', function() {
    navbar.classList.toggle('show-mobile-menu');
    mobileMenuToggle.classList.toggle('active');
  });
  
  // Close mobile menu when clicking outside
  content.addEventListener('click', function() {
    if (navbar.classList.contains('show-mobile-menu')) {
      navbar.classList.remove('show-mobile-menu');
      mobileMenuToggle.classList.remove('active');
    }
  });
  
  console.log('Siddhasanam website loaded');
});
