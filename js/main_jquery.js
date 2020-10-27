
// $(function () {
//     var h = $(window).height();
//     $('#loading__wrapper').css('display', 'none');
//     $('#is-loading ,#loading').height(h).css('display', 'block');
// });

// $(window).load(function () {
//     $('#is-loading').delay(900).fadeOut(800);
//     $('#loading').delay(600).fadeOut(300);
//     $('#loading__wrapper').css('display', 'block');
// });


// $(function () {
//     setTimeout('stopload()', 10000);
// });

// function stopload() {
//     $('#loading__wrapper').css('display', 'block');
//     $('#is-loading').delay(900).fadeOut(800);
//     $('#loading').delay(600).fadeOut(300);
// }


$(function () {

    var scrollPosition;

    $('.js-modal-open').on('click', function () {
        scrollPosition = $(window).scrollTop();
        //bodyにfixed クラスを付与　css　で　トップからスクロールした値を引く。
        $('body').addClass('fixed').css({ 'top': -scrollPosition });
        $('nav').css({'top':0})
        $('.js-modal').fadeIn();
        return false;
    });

    $('.js-modal-close').on('click', function () {
        $('body').removeClass('fixed').css({ 'top': 0 });
        window.scrollTo(0, scrollPosition);
        $('.js-modal').fadeOut();
        return false;
    });




    var headerHight = 80; //ヘッダの高さ
    $('a[href^="#"]').click(function () {
        var time = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight; //ヘッダの高さ分をずらす
        $("html,body").animate({ scrollTop: position }, time, "swing");
        return false;
    });


    $(window).load(function () {

      
        $('.slider_list').slick({
            // asNavFor: '.sub_sub_slider_list',
            asNavFor: '.seek_nums',
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 700,
            cssEase: 'ease',
            arrows: true,
            infinite: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            pauseOnFocus: false,
            pauseOnHover:false,
        });
    
    
        $('.sub_sub_slider_list').slick({
    
            fade:true,
            // asNavFor: '.slider_list',
            // asNavFor: '.seek_nums',
            speed: 700,
            cssEase: 'ease',
            arrows: false,
            infinite: true,
            swipe: false,
    
            centerMode: true,
            centerPadding: '60px',
        });

        $('.seek_nums').slick({
            asNavFor: '.slider_list',
            pauseOnFocus: false,
            pauseOnHover: false,
            arrows: false,
            infinite: true,
            swipe: false,
            vertical: true,
            verticalSwiping: false,
            variableWidth:false,

        });


        $('.slider_list').on('beforeChange', function (event, slick, curentSlide, nextSlide) {
            $('.sub_sub_slider_list').slick('slickGoTo', nextSlide, false);
            
            //seek-line をleft 100% へ　700ms で
            $('.seek-line').animate({
                'left':'100%'
            });


            //seek-line を left -100% へ

            //seek-line を outspeed 3000 で　-100% から　0% へ 
            
            
        });







    
        $('.beforeload').removeClass();
        $('.slick-arrow').css({
            'opacity': 1,
        });

    });

});    

