$(window).load(function () {
    
    // $('.slider_list').on('beforeChange', function () {
    //     $('.sub_slider_list').slick('slickNext');

    // });
    // $('.slick01').on('afterChange', function () {
    //     $('.slick-current').addClass('is--active');
    // });



    $('.slider_list').slick({
        asNavFor: '.sub_sub_slider_list',


        // autoplay: true,
        // autoplaySpeed: 3000,
        // prevArrow: '<button class="slide-arrow prev-arrow"><span class="material-icons">keyboard_arrow_left</span></button>',
        // nextArrow: '<button class="slide-arrow next-arrow"><span class="material-icons">keyboard_arrow_right</span></button>',
        speed: 700,
        cssEase: 'ease',
        // 下部のドット表示
        // dots:true,
        // フェードインでの表示　となりは消去
        // fade: true,
        arrows: true,
        infinite: true,

        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
        pauseOnFocus: false,
        pauseOnHover:false,
    });

    








    $('.sub_slider_list').slick({
        variableWidth: true,

        // fade:true,
        asNavFor: '.slider_list',
        
        // autoplay:true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // prevArrow: '<button class="slide-arrow prev-arrow"><span class="material-icons">keyboard_arrow_left</span></button>',
        // nextArrow: '<button class="slide-arrow next-arrow"><span class="material-icons">keyboard_arrow_right</span></button>',
        speed: 700,
        cssEase: 'ease',
        // 下部のドット表示
        // dots:true,
        // フェードインでの表示　となりは消去
        // fade: true,
        arrows: false,
        infinite: true,
        swipe: false,

        centerMode: true,
        centerPadding: '60px',
        // slidesToShow: 3,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });

    $('.sub_sub_slider_list').slick({
        // variableWidth: true,

        fade:true,
        asNavFor: '.slider_list',

        // autoplay:true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // prevArrow: '<button class="slide-arrow prev-arrow"><span class="material-icons">keyboard_arrow_left</span></button>',
        // nextArrow: '<button class="slide-arrow next-arrow"><span class="material-icons">keyboard_arrow_right</span></button>',
        speed: 700,
        cssEase: 'ease',
        // 下部のドット表示
        // dots:true,
        // フェードインでの表示　となりは消去
        // fade: true,
        arrows: false,
        infinite: true,
        swipe: false,

        centerMode: true,
        centerPadding: '60px',
        // slidesToShow: 3,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });



    // var slide_num = 0;
    // var slide_num_num = 0;

    // $('.slider_list').on('beforeChange', function () {
    //     slide_num = $('.slider_list').slick('slickCurrentSlide');
    //     console.log(slide_num);
    // });
    // $('.slider_list').on('afterChange', function () {
    //     slide_num_num = $('.slider_list').slick('slickCurrentSlide');
    //     console.log(slide_num_num);

    //     if ((slide_num_num - slide_num) == 1 || (slide_num > 1) && (slide_num_num == 0)) {
    //         $('.sub_slider_list').slick('slickNext');
    //     } else if ((slide_num_num - slide_num) == -1 || (slide_num == 0) && (slide_num_num > 1)) {
    //         $('.sub_slider_list').slick('slickPrev');

    //     }


    // });

    


    


    //進むならこれで問題無い。
    // $('.slider_list').on('beforeChange', function (slick,currentSlide,nextSlide) {
    //     // var currentSlide = $('.slider_list').slick('slickCurrentSlide');
    //     // var currentSlide2 = $('.sub_slider_list').slick('slickCurrentSlide');
    //     $('.sub_slider_list').slick('slickGoTo', nextSlide, false);
    //     console.log(currentSlide);
    //     console.log(nextSlide);

    // });

    
    // $('.slider_list').on('afterChange', function () {
    //     var currentSlide = $('.slider_list').slick('slickCurrentSlide');
    //     var currentSlide2 = $('.sub_slider_list').slick('slickCurrentSlide');
    //     $('.sub_slider_list').slick('slickGoTo', currentSlide, false);
    //     console.log(currentSlide);
    //     console.log(currentSlide2);

    // });





});



$(function () {
    var headerHight = 80; //ヘッダの高さ
    $('a[href^="#"]').click(function () {
        var time = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight; //ヘッダの高さ分をずらす
        $("html,body").animate({ scrollTop: position }, time, "swing");
        return false;
    });
});