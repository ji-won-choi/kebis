 $(document).ready(function () {
     var $gnbWrap = $('.gnbWrap'),
         $mgnb = $('.mgnb'),
         $mgnbClose = $('.mgnb-close'),
         $gnbL = $('.gnb > li');

     //header active
     $gnbL.hover(function () {
         $(this).siblings($gnbL).removeClass("active");
         $(this).addClass("active");
     });
     $gnbL.mouseleave(function () {
         $(this).removeClass("active");
     });


     //responsive sitemenu 
     $(window).on("load resize", function () {
         var windowWidth = $(window).width(),
             windowHeight = $(window).height();

         if ($(window).innerWidth() <= 1024) {
             $mgnb.click(function () {
                 $gnbWrap.addClass("active");
             });
             $mgnbClose.click(function () {
                 $gnbWrap.removeClass("active");
             });
         }else {
             $gnbWrap.removeClass("active");
         }

     });


 });