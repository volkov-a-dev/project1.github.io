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

    var validation = (function () {
        var validtioninit = function () {
            setListeners();
        };

        var setListeners = function() {
            $('.btn-login-form__submit').on('click', checkForm)
        };

        var checkForm = function (e) {
            e.preventDefault();
            var userLogit = $('.login__form-input-login'),
                userPassword = $('.login__form-input-password');

            if (userLogit.val().length === 0) {
                userLogit.css({'border' : "1px solid red"});
                $('.icon__login').css({'fill': 'red'});
                $('.error-message__login ').addClass('show-message');
            } else {
                userLogit.css({'border' : "1px solid #00bda5"});
                $('.icon__login').css({'fill': '#00bda5'});
                $('.error-message__login ').removeClass('show-message');
            }

            if (userPassword.val().length === 0) {
                userPassword.css({'border' : "1px solid red"});
                $('.icon__password').css({'fill': 'red'});
                $('.error-message__password').addClass('show-message');
            } else {
                userPassword.css({'border' : "1px solid #00bda5"});
                $('.icon__password').css({'fill': '#00bda5'});
                $('.error-message__password').removeClass('show-message');
            }
        };
        return {
            init : validtioninit
        }
    })();
    validation.init();

})();