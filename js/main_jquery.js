
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

        // $('.seek_line').addClass('.reset-bar');
        // $('.seek_line').addClass('start-bar');
        

        // $('.seek_line').addClass('start-slide');

        // var startbar = $('.seek_line').animate({'left':'0%'},3000);
        // var endbar = $('.seek_line').animate({'left':'100%'},700);


        // $('.start-slide').on('animationend webkitAnimationEnd',function(){
        //     // CSSのanimationプロパティで設定したものが終了した時に実行する内容 
        // // $('.seek_line').css('backgroundColor','red');
        // $('.start-slide').css('backgroundColor','red');
        // // $('.seek_line').addClass('end-bar');

        // $('.start-slide').removeClass('start-slide');
        // $('.seek_line').addClass('end-slide');

        // $('.start-slide').removeClass('.start-slide');

    
        // });

        // $('.end-slide').on('animationend webkitAnimationEnd',function(){
        //     // CSSのanimationプロパティで設定したものが終了した時に実行する内容 

        // $('.seek_line').addClass('start-slide');
        // $('.end-slide').removeClass('end-slide');


        // $('.start-slide').removeClass('.start-slide');

    
        // });

        //試供品test02
        // $('.seek_line').addClass('start-bar');
        // gspa.to('.seek_line',{ left: 210 });
        // gsap.to(".seek_line", {
        //     delay:0.7,
        //     duration:3,
        //     x: 210,
        //     onComplete:
        //     function(){
        //         gsap.to(".seek_line",{
        //             delay:0,
        //             duration:0.7,
        //             x:+420,
        //             onComplete:
        //             function(){
        //                 gsap.to(".seek_line",{
        //                     delay:0,
        //                     duration:0,
        //                     x:0,

        //                 })
                        
        //             },
        //         });

        //     },
        // });

        // gsap.to(".seek_line", {
        //     delay:0.7,
        //     duration:3,
        //     x: 210
        // });


        //試供品test02


        // gsap.to(".seek_line",{
        //     delay:0,
        //     duration:0.7,
        //     x:420,
        //     onComplete:
        //     function(){
        //         gsap.to(".seek_line",{
        //             delay:0,
        //             duration:0,
        //             x:0,

        //             onComplete:
        //             function(){
        //                 gsap.to(".seek_line",{
        //                     delay:0,
        //                     duration:3,
        //                     x:210,
        //                 });
        //             }

        //         })
                
        //     },
        // });
        gsap.to(".seek_line",{
            delay:0.7,
            duration:3,
            x:210,
            // ease:"none",
            overwrite:true,
        });

          

        // 完成品test01
        // $('.seek_line').animate({'left':'0%'},3000);
        // 完成品test01


        $('.slider_list').on('beforeChange', function (event, slick, curentSlide, nextSlide) {
            $('.sub_sub_slider_list').slick('slickGoTo', nextSlide, false);

            // 完成品test01
            // $('.seek_line').stop().animate({'left':'100%'},700)
            // // $('.seek_line').stop().css('left','50%');
            // .animate({'left':'-100%'},0)
            // // $('.seek_line').animate({'left':'0%'},3000);
            // .animate({'left':'0%'},3000);
            // 以上正常な動きが完成
            // 完成品test01



            //試供品test02
            // $('.seek_line').stop();

                    



            gsap.to(".seek_line",{
                delay:0,
                duration:0.7,
                x:420,
                overwrite:true,
                onComplete:
                function(){
                    gsap.to(".seek_line",{
                        delay:0,
                        duration:0,
                        x:0,
                        overwrite:true,
    
                        onComplete:
                        function(){
                            gsap.to(".seek_line",{
                                delay:0,
                                duration:3,
                                x:210,
                                // ease:"none",
                                overwrite:true,
                            });
                        }
    
                    })
                    
                },
            });







            // gsap.to(".seek_line", {
            //     delay:0.7,
            //     duration:3,
            //     x: 210,
            //     onComplete:
            //     function(){
            //         gsap.to(".seek_line",{
            //             delay:0,
            //             duration:0.7,
            //             x:+420,
            //             onComplete:
            //             function(){
            //                 gsap.to(".seek_line",{
            //                     delay:0,
            //                     duration:0,
            //                     x:0,
    
            //                 })
                            
            //             },
            //         });
    
            //     },
            // });
            

            //試供品test02







            // $('.seek_line').animate({'left':'0%'},3000)
            // .animate({'left':'100%'},700);
        // $('.seek_line').removeClass('start-bar');
        // $('.seek_line').addClass('end-bar');
        // $('.seek_line').removeClass('end-bar');

        // $('.seek_line').addClass('reset-bar');
        // $('.seek_line').removeClass('reset-bar');
        // $('.seek_line').addClass('start-bar');




        // $('.seek_line').addClass('.reset-bar');


            // $('.seek_line')

            // var $progressAS = $$(prefix + "nav__control-progress", $slider);
            // $prevControl.classList.add("m--reset-progress");
            // var triggerLayout = $prevControl.offsetTop;
            // $prevControl.classList.remove("m--reset-progress");

            // function setAutoslidingTO() {
            //     window.clearTimeout(autoSlidingTO);
            //     var delay = +options.autoSlidingDelay || autoSlidingDelay;
            //     curSlide++;
            //     if (curSlide > numOfSlides) curSlide = 1;
          
            //     autoSlidingTO = setTimeout(function() {
            //       performSliding(curSlide);
            //     }, delay);
            //   };
          
            //   if (options.autoSliding || +options.autoSlidingDelay > 0) {
            //     if (options.autoSliding === false) return;
                
            //     autoSlidingActive = true;
            //     setAutoslidingTO();
                
            //     $slider.classList.add("m--with-autosliding");
            //     var triggerLayout = $slider.offsetTop;
                
            //     var delay = +options.autoSlidingDelay || autoSlidingDelay;
            //     delay += slidingDelay + slidingAT;
                
            //     $progressAS.forEach(function($progress) {
            //       $progress.style.transition = "transform " + (delay / 1000) + "s";
            //     });
            //   }
              
            //   $slider.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control");
          
            // };
            // .animate({'left':'100%'},700)
            // .animate('left','-100%',0)
            // .animate({'left':'0%'},3000);
            //seek-line をleft 100% へ　700ms で
            // $('.seek-line').css('left','100%');
            // $('.seek_line').addClass('.left-100');
            // $('.seek_line').addClass('.end-slide');
            // $('.seek_line').addClass('start-slide');


            // $('.seek-line').animate({'left':'100%'},
            // {
            //     'duration': 600,
            //     'complete': function(){
            //         // alert('終わりました');
            //     }
            //     });


            //seek-line を left -100% へ

            //seek-line を outspeed 3000 で　-100% から　0% へ 
            
            
        });







    
        $('.beforeload').removeClass();
        $('.slick-arrow').css({
            'opacity': 1,
        });

    });

});    

