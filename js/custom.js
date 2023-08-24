
// -----=====Scroll top button js start=====-----//
    $(window).scroll(function(){
        if( $(this).scrollTop() > 100){
            $(".scrollTop").fadeIn();
        } else{
            $(".scrollTop").fadeOut();
        }
    });

    $(".scrollTop").click(function(){
            $("html ,body").animate({scrollTop : 0}, 500 );
        });
// -----=====Scroll top button js end=====-----//
