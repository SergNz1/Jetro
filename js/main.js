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
     
  
$(".header__menu-btn").on('click',function(){
    $('.header__menu > ul').slideToggle();
});
});