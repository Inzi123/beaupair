const navSlide = () => {
    const burger = document.querySelector('.navbar__burger');
    const nav = document.querySelector('.navbar__links');
    const navLinks = document.querySelectorAll('.navbar__links li');
    const logo = document.querySelector('.navbar__logo');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navbar__active');
        logo.classList.toggle('logoopacity');

        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navbarLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        burger.classList.toggle('toggle');

    });




};

navSlide();


$(window).scroll(function(){
    if($(window).scrollTop()){
        $(".navbar").addClass("floatingnav");
    } else{
        $(".navbar").removeClass("floatingnav");
    }
});