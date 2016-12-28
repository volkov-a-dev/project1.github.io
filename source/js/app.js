(function() {
  'use strict';
  // setTimeout(function() {
  //   document.querySelector('.greating_picture').classList.add('m--show');
  // }, 1000);

  console.log('test');

  $('.btn-link').click(
      function () {
          $('.flip-container__flipper').addClass('flip');
          $(this).hide();
      }
  );

  $('.btn-return').click(
      function () {
          $('.flip-container__flipper').removeClass('flip');
          $('.btn-link').show();
      }
  );

  $('.icon__hamburger').click(
      function () {
          $('.menu-full').addClass('open');
          $('body').addClass('body-overflow');
      }
  );
  $('.close-button').click(
      function () {
          $('.menu-full').removeClass('open');
          $('body').removeClass('body-overflow');
      }
  );

  var slider = (function () {
      var initial = function () {
          setListeners();
      };
      var setListeners = function() {
          $('.slider__item').on('click', openSlider);
      };

      var moveSlide = function(container, slideNumber) {
          var items = container.find('.slider__display-item'),
              activeItem = items.filter('.active'),
              regItem = items.eq(slideNumber),
              regIndex = regItem.index(),
              list = container.find('.slider__display-lists'),
              duration = 800;

          if(regItem.length) {
              list.stop(true, true).animate({
                  'top': -regIndex * 100 + '%'
              }, duration, function(){
                  activeItem.removeClass('active');
                  regItem.addClass('active');
                  writeInfo(container);
              });
          }
      };

      var writeInfo = function(container) {
          var items = container.find('.slider__display-item'),
              activeItem = items.filter('.active'),
              dataTitle=activeItem.data('title'),
              dataSkills=activeItem.data('skills'),
              dataLink=activeItem.data('link'),
              dataSrcPrev=activeItem.data('previous-src'),
              dataSrcNext=activeItem.data('next-src'),
              buttonLeft = $('.first_slider'),
              buttonRight = $('.second_slider');

          var about = $('.title'),
              description = $('.skills'),
              linkHref = $('.slider_link');

          about.text(dataTitle);
          description.text(dataSkills);
          linkHref.attr('href', dataLink);
          buttonLeft.css('background-image', 'url("'+dataSrcNext+'")');
          buttonRight.css('background-image', 'url("'+dataSrcPrev+'")');
          console.log(dataSrcPrev);
      };

      var openSlider = function (e) {
          e.preventDefault();

          var $this = $(this),
              container = $('.slider__display'),
              items = container.find('.slider__display-item'),
              activeItem = items.filter('.active'),
              nextItem = activeItem.next(),
              prevItem = activeItem.prev();

          if($this.hasClass('first_slider')) {
              if(nextItem.length) {
                  moveSlide(container, nextItem.index());
              } else {
                  moveSlide(container, 0);
              }
          } else {
              if(prevItem.length) {
                  moveSlide(container, prevItem.index());
              } else {
                  moveSlide(container, items.length -1);
              }
          }
      };

      return {
          init: initial
      }
  })();

    slider.init();

})();

