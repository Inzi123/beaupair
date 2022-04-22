$(window).scroll(function(){
    if($(window).scrollTop()){
        $(".navbar__links").removeClass("activado");
    } else{
        $(".navbar__links").addClass("activado");
    }
});