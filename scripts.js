
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
  
  // Creating image placeholders for the sections that need illustrations
  const createPlaceholderImages = () => {
    // Learn section image
    const learnImage = document.querySelector('.learn-image');
    if (learnImage && learnImage.src.includes('placeholder.svg')) {
      createSiddhaImage(learnImage, '#E7D7B1', 'images/mortar-pestle.svg');
    }
    
    // Remedy images
    const remedyImages = document.querySelectorAll('.remedy-img');
    if (remedyImages) {
      // Customize each remedy image with different backgrounds and icons
      remedyImages.forEach((img, index) => {
        if (img.src.includes('placeholder.svg')) {
          let bgColor = '#F3E9D2';
          let iconUrl = '';
          
          switch(index) {
            case 0: // Acidity
              iconUrl = 'images/garlic.svg';
              break;
            case 1: // Detox
              iconUrl = 'images/herbs.svg';
              break;
            case 2: // Pulse diagnosis
              iconUrl = 'images/hands.svg';
              break;
            default:
              iconUrl = 'images/leaf.svg';
          }
          
          createSiddhaImage(img, bgColor, iconUrl);
        }
      });
    }
  };
  
  // Create a themed image with SVG icon
  const createSiddhaImage = (imgElement, bgColor, iconUrl) => {
    // For this demo, we'll just use the placeholder.svg
    // In a real implementation, you would create custom SVGs
    console.log(`Would create image with bg: ${bgColor} and icon: ${iconUrl}`);
  };
  
  // Initialize the image placeholders
  createPlaceholderImages();
  
  console.log('Siddha Medicine website loaded successfully');
});
