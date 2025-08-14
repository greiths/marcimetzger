
// NAVBAR 
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const collapseEl = document.getElementById('navbarNav');

    collapseEl.addEventListener('shown.bs.collapse', () => {
        navbar.classList.add('nav-bg');   // whole navbar turns black
    });
    collapseEl.addEventListener('hidden.bs.collapse', () => {
        navbar.classList.remove('nav-bg'); // back to transparent
    });
});