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
  )

})();