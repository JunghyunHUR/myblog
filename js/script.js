$(function(){
    $('.hamber a').click(function(e){
        e.preventDefault();
    })
    //hamber btn
    $('.hamber').click(function(){
        $(this).toggleClass('close');
        $(".navbar").toggleClass('active');
    });
    
    //skill
    $('.skills').myskillbar({});

    //Scroll
    $('.scroll-h').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0},400);
        return false;
    });

    $(".scroll").click(function(event){            
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

    //scroll-up-btn
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300){
            $('.scroll-btn').fadeIn("smooth");
        } else{
            $('.scroll-btn').fadeOut("slow");
        }
    });
    
    $('.scroll-btn').click(function(){
        $('html, body').animate({scrollTop:0},400);
        return false;
    });
    
    window.addEventListener('scroll', function(){
        console.log(window.scrollY)
    });
   
}); //jquery
