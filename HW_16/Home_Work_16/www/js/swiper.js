

let swiper;
function swiperInit() {
    if(!swiper) {
        swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,    
        },
        centeredSlides: true,
        swipeToSlide: false,    
        });
        swiper.on('reachEnd', function () {
            nextPage(linkNextPage);
        });
    }
}

function swiperDestroy() {
    if (swiper) {
        swiper.destroy();
        swiper = undefined;
    }
}
swiperInit();



