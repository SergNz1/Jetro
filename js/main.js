$(function(){
    
  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // infinite:true,    
    asNavFor: '.slider__nav'
    
    
  });
  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    dots: false,
    // centerMode: true,
    focusOnSelect: true,
    variableWidth:true,
    prevArrow:'<button class="slick-arrow slick-prev"><img src="images/slider/arrow-left.svg" alt=""></button>',
    nextArrow:'<button class="slick-arrow slick-next"><img src="images/slider/arrow-right.svg" alt=""></button>', 
    
  });
     
  $('.works__inner').slick({        
        slidesToShow: 4,
        slidesToScroll: 1,
        // centerMode: false,
        arrows: false,
        // variableWidth:true,
        responsive: [
          {
            breakpoint: 970,
            settings: {
              slidesToShow: 3,
             }
          },
           {
            breakpoint:690,
            settings: {
              slidesToShow: 2,
             }
          }, 
          {
            breakpoint: 470,
            settings: {
              slidesToShow: 1,
             }
          }, 
                         
        ]
  });

$(".header__menu-btn").on('click',function(){
    $('.header__menu > ul').slideToggle();
});
});