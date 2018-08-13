$(document).ready(function(){

    $('.hamburger').click(function(){
        $('.topNav__ul').toggleClass('active');
        $('.hamilton').toggle();
        $('.toggle__logo').toggle();

    })

    $(window).on("scroll", function(){
            if($(window).scrollTop()){
                    $('.topNav').addClass('navScroll');
                  
            }else{
                    $('.topNav').removeClass('navScroll');
            }
    })



        $(window).on("scroll", function() {
                var scrollHeight = $(document).height();
                var scrollPosition = $(window).height() + $(window).scrollTop();
                if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                        $('#topNav').hide();
                }else{
                        document.getElementById('topNav').style.display = 'block';  
                }
});



})