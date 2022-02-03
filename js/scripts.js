const marker = document.querySelector('#marker');
const firstMenuItem = document.querySelector('nav a:first-of-type');
const menuItems = document.querySelectorAll('nav a');

function initialize() {
    // Initialize navigation marker
    let styles = window.getComputedStyle(firstMenuItem);
    marker.style.width = styles.getPropertyValue('width');

    // Add listeners to menu items
    menuItems.forEach(item => {
        item.addEventListener('mouseover', e => {
            indicator(e.target);
        });
    });
}

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}

document.addEventListener("DOMContentLoaded", initialize);