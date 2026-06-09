// Accordion menu
function AccordionMenu (){
    $(function () {
        $(".menu>li>a").click(function () {
            $(this).next(".submenu").slideToggle(200);
            $(this).parent(".menu li").siblings(".menu li").children(".submenu").slideUp(200);
        });
    });
    // menu On Event 
    $(function () {
        $(".menu li a").click(function () {
            $(".menu li a").removeClass("on");
            $(this).addClass("on");
        });
    });
    // mobile
    $(function () {
        $(".mobile_Menu .menu>li>a").click(function () {
            $(this).next("div").slideToggle(200);
            $(this).parent("li").siblings("li").children("div").slideUp(200);
        });
    });
}AccordionMenu();


// On_off ClickEvent
$(function () {
    $(".btn, .btn01").click(function () {
        $(".btn, .btn01").removeClass("on");
        $(this).addClass("on");
    });
});

// Mobile Menu
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    // document.getElementById("nav").classList.toggle("change");
    document.getElementById("noneMenu").classList.toggle("mobileMenu");
}

// swiper
window.addEventListener("load", function() {
    let swiper = new Swiper(".reviewSwiper", {
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
        autoplay: {
            delay: 3000, // 3초마다 자동 슬라이드
            disableOnInteraction: false, // 유저 상호작용 후에도 자동 재생 유지
        },
        loop: true, // 무한 반복
        slidesPerView: 1, // 한 번에 하나의 슬라이드만 보이게
        spaceBetween: 20,
    });
});



console.log(swiper);