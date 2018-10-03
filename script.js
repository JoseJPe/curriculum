
$(document).ready(function(){
    $(".menu-icon").on("click",function(){
        $("nav ul").toggleClass("showing");

    });
});


$(window).on("scroll",function(){
    if($(window).scrollTop() > 500){
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})


