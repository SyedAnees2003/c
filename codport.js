/* Place your JavaScript in this file */
// scripts.js

// Function to toggle the navigation menu on small screens
function toggleNav() {
    const nav = document.querySelector('nav ul');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}

// Add a click event listener to the menu icon
const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', toggleNav);

// Function to close the navigation menu when a link is clicked (for small screens)
function closeNav() {
    const nav = document.querySelector('nav ul');
    nav.style.display = 'none';
}

// Add click event listeners to all navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => link.addEventListener('click', closeNav));
