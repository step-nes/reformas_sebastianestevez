$(document).ready(function(){
    
    
//////////////////////////////////////////
//    * MENU *    //
// Toggle menú principal
    $('.bars, .times').click(function() {
        $('.menu_movil').toggleClass('open');
    });

//////////////////////////////////////////
//////////////////////////////////////////
//    * BOTON ARRIBA *    //
    $(".boton_arriba").fadeOut();
        $(document).scroll(function(){
            if($(document).scrollTop()>200){
                $(".boton_arriba").fadeIn(1000);
            } else if ($(document).scrollTop()==0){
                $(".boton_arriba").fadeOut(1000)
            };
        });
        $(".boton_arriba").click(function(){
            $("html").animate({scrollTop:0},
        500);
    });
//////////////////////////////////////////
//////////////////////////////////////////




































































});