$(window).scroll(function() {
   var wScroll = $(this).scrollTop();
   console.log(wScroll);

    $('h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.kotak').css({
        'transform' : 'translate(0px, '+ wScroll/10 +'%)'
    });

});