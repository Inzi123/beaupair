const navSlide = () => {
    const burger = document.querySelector('.navbar__burger');
    const nav = document.querySelector('.navbar__links');
    const navLinks = document.querySelectorAll('.navbar__links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navbar__active');

        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navbarLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
    });



};

navSlide();