$(document).ready(function () {
    
    // 새로고침시 항상 최상단
    history.scrollRestoration = "manual"
    
    //카운트다운
    $('.counter').counterUp({
        delay: 100,
        time: 500
    });
    
    //fadeIn 효과
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        live: true
    })
    wow.init();

    //이벤트 메인 타이틀
    var ms = 1000;
    var timeText = function () {
        $('.title_box .title').addClass('on');
        $('.title_box .title_bg').addClass('on');
        $('.title_box .title_icon').addClass('on');
        $('.ev_main_con02').addClass('on');
    }
    setTimeout(timeText, ms);
    
    var scrollTop = $(window).scrollTop();
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        $(window).resize(function () {
            if (window.innerWidth <= 820) {
                var widthVw_m = parseInt($(window).width() * 0.655);
                var titleVw = $('.title_box').offset().top;
                if (scrollTop >= widthVw_m) {
                    $('.title_box').addClass('scroll');
                    console.log(titleVw);
                } else {
                    $('.title_box').removeClass('scroll');
                }
            } else {
                var widthVw_pc = parseInt($(window).width() * 0.218);
                var titleVw = $('.title_box').offset().top;
                if (scrollTop >= widthVw_pc) {
                    $('.title_box').addClass('scroll');
                    console.log(titleVw);
                    if (titleVw > 372.1953125) {
                        console.log("372.1953125 high");
                        $('#nav').attr('style', "display:block;");
                    } else if (titleVw < 374.1953125) {
                        $('#nav').attr('style', "display:none;");
                    }
                } else {
                    $('.title_box').removeClass('scroll');
                }
            }
        }).resize();
    });
    
    /* // 0415 수정 */
    // 선곡리스트 - 배경
    var mockUpSwiper = new Swiper('.phone_mockup', {
        autoplay: {
            delay: 1480,
            disableOnInteraction: false,
        },
        
        effect : 'fade',

        slidesPerView: 1,
        centeredSlides: true,

        loop: true,
        speed: 1000,
        noSwiping: true,
        touchRatio: 0,
        preventClicksPropagation: false,
        preventClicks: false,
        allowTouchMove: false,
        
    });
    /* 0415 수정 // */
    // 선곡리스트 - 앨범
    var listSwiper = new Swiper('.ev_con_img_box', {
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },

        slidesPerView: 6.05,
        spaceBetween: 80,
        centeredSlides: true,

        loop: true,
        speed: 1000,
        noSwiping: true,
        touchRatio: 0,
        preventClicksPropagation: false,
        preventClicks: false,
        allowTouchMove: false,
        breakpoints: {
            820: {
                slidesPerView: 3,
            },
            375: {
                slidesPerView: 3.5,
            },
        },
    });
    
    
    //법인메인 전체 슬라이드
    var fullSwiper = new Swiper('.full_wrap', {
        pagination: {
            el: '.pg01',
            type: 'bullets',
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        loop: false,
        speed: 1000,
        grabCursor: false,

        navigation: {
            nextEl: ".cp_sl_next",
            prevEl: ".cp_sl_prev"
        },
    });

    var pagingSwiper = new Swiper(".pg_frac", {
        pagination: {
            el: ".pg02",
            type: "fraction",
        },
    });
    
    
    //법인메인 음악리스트
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var list = document.getElementsByClassName("music_list");
        slideIndex++;
        if (slideIndex > list.length) {
            slideIndex = 1
        }
        for (i = 0; i < list.length; i++) {
            list[i].className = list[i].className.replace(" active", "");
        }
        list[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000);
    }
    
    


    // num 정리
    /* // 0415 수정 */
    for(var i=0;i<=4;i++){
        var $subBox = $('.full_box .full_con0'+i+' .substance_box');
        var $subBoxSt = $('.full_box .full_con0'+i+' .substance_box strong');
        var $subBoxH = $subBoxSt.height();
        $subBox.css("height", $subBoxH);
        $subBox.css("margin-top", -$subBoxH / 2);
    }

    $(window).resize(function () {
        for(var i=0;i<=4;i++){
            var $subBox = $('.full_box .full_con0'+i+' .substance_box');
            var $subBoxSt = $('.full_box .full_con0'+i+' .substance_box strong');
            var $subBoxH = $subBoxSt.height();
            $subBox.css("height", $subBoxH);
            $subBox.css("margin-top", -$subBoxH / 2);
        }
        
    });
    /* 0415 수정 // */

    
    $(window).resize(function () {
        if (window.innerWidth <= 820) {
            $('#header .logo img').attr('src', 'images/logo_m.png');
            $('.ev_main_con01 ul li.link01 a img').attr('src', 'images/ev_main_m_con01_icon01.png');
            $('.ev_main_con01 ul li.link02 a img').attr('src', 'images/ev_main_m_con01_icon02.png');
            $('.ev_main_con06 .con06_img01 img').attr('src', 'images/ev_main_m_con06_img.png');
            $('.ev_main_con04 .count_wrap .cnt_arrow img').attr('src', 'images/ev_main_m_con04_cnt_arrow_v2.png');
        } else {
            $('#header .logo img').attr('src', 'images/logo.png');
            $('.ev_main_con01 ul li.link01 a img').attr('src', 'images/ev_main_con01_icon01.png');
            $('.ev_main_con01 ul li.link02 a img').attr('src', 'images/ev_main_con01_icon02.png');
            $('.ev_main_con06 .con06_img01 img').attr('src', 'images/ev_main_con06_img.png');
            $('.ev_main_con04 .count_wrap .cnt_arrow img').attr('src', 'images/ev_main_con04_cnt_arrow_v2.png');
        }
    }).resize();

      /*myspace_4_3*/
      $(window).scroll(function(){
        var scrollT = $(window).scrollTop();

        if(scrollT > 700) {
           $("#nav .gnb > ul").addClass('active');
        } else{
            $("#nav .gnb > ul").removeClass('active');
        }
    });



});