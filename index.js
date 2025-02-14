////////////////// SECTION-ACTIVE nav-bar//////////////////////////////////////////////////////////////////////////
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active'); 
            });
           
        };

    });
    
    /////////////////// SECTION-header//////////////////////////////////////////////////////////////////////////
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    /////////////////// REMOVE toggle et navbar au click//////////////////////////////////////////////////////////////////////////
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
    navbar.classList.remove('active');



};
///////////////////Toogle-icon//////////////////////////////////////////////////////////////////////////
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};