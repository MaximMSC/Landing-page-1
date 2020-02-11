$(document).ready(function () {
    svg4everybody({});
    new WOW().init();
});

$(function(){
  $('.header-slider').slick({
    infinite: true,
    fade: true,
    nextArrow: '.header-slider__navigation--next',
    prevArrow: '.header-slider__navigation--prev',
    asNavFor: '.slider-dots',
    adaptiveHeight: true
  });

  $('.slider-dots').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header-slider'
    });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.surf-slider-navigation__next',
    prevArrow: '.surf-slider-navigation__prev',
    asNavFor: '.surf-map',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            centerMode: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }
    ]
    });

    $('.surf-map').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.surf-slider',
      // focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            centerMode: true
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1
          }
        }
      ]
      });

    $('.travel-slider').slick({
        fade: true,
        infinite: true,
        nextArrow: '.travel-slider-navigation__prev',
        prevArrow: '.travel-slider-navigation__next'
        
    });
    
    $('.shop-slider').slick({
        fade: true,
        infinite: true,
        nextArrow: '.shop-slider-navigation__prev',
        prevArrow: '.shop-slider-navigation__next'
    });
    
    $('.banner-features__btn').on('click', function(){
      $(this).toggleClass('active');
    });

    $('.burger-menu').on('click', function(){
      if($(this).hasClass('open')){
        $(this).toggleClass('open');
        $(this).siblings('.header-aside').removeClass('open');
      } else{
        $(this).toggleClass('open');
        $(this).siblings('.header-aside').addClass('open');
      }
    });
    
    
    $('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
    $('.quantity-button').on('click',function(){
      var summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val()-1) * $('.summ').data('guests');
      $('.summ').html('$' + summ);
    })
    var summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val()-1) * $('.summ').data('guests');
      $('.summ').html('$' + summ);
});

