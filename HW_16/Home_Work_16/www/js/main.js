document.querySelector('video').playbackRate = 0.65;

let films;
let peoples;
let vehicles;

$('.search_btn').on('click', function(){
    $('.input').toggle(1100);
});
$('.arrow_btn').on('click', function(){
    $('.list_item').toggle(800);
});
// $('.swiper, .mySwiper, .swiper-wrapper, .swiper-pagination').hide();


let radioValue;
let textAreaValue;

$('.send_btn').on('click', function(){
    // console.log(radioValue);
    
    $('.radio_input[name="data"]:checked').val(function() {
        if(!radioValue){
            radioValue = this.value;
        }
    });
    $('.input_area').val(function(){
        textAreaValue = this.value;
    });
    // console.log(radioValue);
    // console.log(textAreaValue);
    $.ajax({
        url: `https://swapi.dev/api/${radioValue}/?search=${textAreaValue}`,
        method: "GET",
        success: function(result) {
            swiperDestroy();
            getResult(result.results);
            swiperInit();
        }
    });
    $('.input').hide(1100);
});

function getResult(array) {
    let imgId;
    let result;
    array.forEach(element =>  {
        result = element;
        imgId = element.url.replace('https://swapi.dev/api/films/', '').replaceAll('/', '');
        // imgId.replaceAll('/', '')
        // console.log(imgId);
        // showRequest();
    })
    $('.swiper-wrapper').empty()
    $('.swiper-wrapper').append(`<div class="slide">
        <div class="image_wrapper">
            <div class="image_left">
                <div class="image" style="background-image: url(img/${radioValue}/${radioValue}${imgId}.png);"></div>
            </div>
            <div class="image_right">
                <div class="image" style="background-image: url(img/${radioValue}/${radioValue}${imgId}.png);"></div>

            </div>
        </div>
        <p>${result.title}</p>
    </div>`);

}
///////////////////////////////////////////SEARCH////////////////////

let showBtnValue;

let linkNextPage;

$('.schow_btn').on('click', function(){
    $('select').val(function() {
        showBtnValue = this.value.toLowerCase();
        $.ajax({
            url: `https://swapi.dev/api/${this.value.toLowerCase()}`,
            method: "GET",
            success: function(result) {
                swiperDestroy();
                getAllResult(result.results);
                swiperInit();
                if(result.next){
                    linkNextPage = result.next
                }
            }
        });
        $('.list_item').hide(1100);
    });
})
function getAllResult(array){
    $('.swiper-wrapper').empty();
    addHtml(array);
}

function nextPage (page){
    // let array;
    // let result;
    // let imgId
    $.ajax({
        url: `${page}`,
        method: "GET",
        success: function(result) {
            // array = result.results;
            // console.log(array);
            // console.log("log from new page");

            // array.forEach(element => {
            // result = element;
            // imgId = element.url.replace(`https://swapi.dev/api/${showBtnValue}/`, '').replaceAll('/', '');
            addHtml(result.results);
                // console.log(element);
            // })

            if(result.next){
                linkNextPage = result.next
            }
        }
    });
    
}


function addHtml(array) {
    console.log(array);
    let imgId;            
    let result;      
    array.forEach(element => {
        result = element;
        imgId = element.url.replace(`https://swapi.dev/api/${showBtnValue}/`, '').replaceAll('/', '');
        operate();

    })
    function operate () {
        $('.swiper-wrapper').append(`<div class="swiper-slide">
                                    <div class="slide">
                                        <div class="image_wrapper">
                                            <div class="image_left">
                                                <div class="image" style="background-image: url(img/${showBtnValue}/${showBtnValue}${imgId}.png);"></div>
                                            </div>
                                            <div class="image_right">
                                                <div class="image" style="background-image: url(img/${showBtnValue}/${showBtnValue}${imgId}.png);"></div>
                                            </div>
                                        </div>
                                        <p>BODY</p>
                                    </div>
                                </div>`)


    }
    
}