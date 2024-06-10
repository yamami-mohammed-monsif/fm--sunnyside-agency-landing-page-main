const navToggle = document.getElementById('hamburger-button');
const navbar = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {

    const visibility = navbar.getAttribute('data-visible');
    
    if(visibility === 'false'){
        navbar.setAttribute('data-visible', true);
    } else {
        navbar.setAttribute('data-visible', false);
    }
})