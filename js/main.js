// Simple vanilla JavaScript replacement for main functionality
document.addEventListener('DOMContentLoaded', function() {
  
  // Function to show main post list
  function showMainContent() {
    const mainPostList = document.querySelector('.main-post-list');
    const panelCover = document.querySelector('.panel-cover');
    
    if (mainPostList) {
      mainPostList.classList.remove('hidden');
    }
    
    if (panelCover && window.innerWidth > 1100) {
      panelCover.classList.add('panel-cover--collapsed');
    }
  }

  // Handle blog button clicks
  const blogButtons = document.querySelectorAll('a.blog-button');
  blogButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // If already in blog, return early
      if (location.hash && location.hash === "#blog") return;
      if (document.querySelector('.panel-cover').classList.contains('panel-cover--collapsed')) return;
      
      showMainContent();
    });
  });

  // Check if we're already on the blog page
  if (window.location.hash && window.location.hash === "#blog") {
    showMainContent();
  }

  // Check if we're on a tag page
  if (window.location.pathname.substring(0, 5) === "/tag/") {
    const panelCover = document.querySelector('.panel-cover');
    if (panelCover) {
      panelCover.classList.add('panel-cover--collapsed');
    }
  }

  // Mobile menu functionality  
  const mobileMenuButtons = document.querySelectorAll('.btn-mobile-menu__icon');
  mobileMenuButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Mobile menu clicked
      console.log('Mobile menu clicked');
    });
  });
});