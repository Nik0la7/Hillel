let swiper;
function swiperInit() {
    if(!swiper) {
        swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,    
        },
        navigation: {
            nextEl: '.right_sliderBtn',
            prevEl: '.left_sliderBtn',
        },
        centeredSlides: true,
        swipeToSlide: true,    
        });
        swiper.on('reachEnd', function () {
            nextPage(linkNextPage);
        });
    };
};
function enableButton (){
    $('.show_more').on('click', function() {
        $('.show_more').toggleClass('show_more_active');
        $('.item_list').toggleClass('item_list_active');
        $('.swiper-slide-active').children().toggleClass('image_wrapper_active');
    }); 
};
function disableButton (){
    $('.show_more').off('click');

};
function swiperDestroy() {
    if (swiper) {
        swiper.destroy();
        swiper = undefined;
    }
}
swiperInit();