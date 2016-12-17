(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);

  console.log('test');

  $('.btn-link').click(
      function () {
          console.log('ok click !!');
          $('.flip-container__flipper').addClass('flip');
          $(this).hide();
      }
  );

  $('.btn-return').click(
      function () {
          console.log(' delete !!');
          $('.flip-container__flipper').removeClass('flip');
          $('.btn-link').show();
      }
  );

  $('.icon__hamburger').click(
      function () {
          $('.menu-full').addClass('open')
      }
  );
  $('.close-button').click(
      function () {
          console.log('test');
          $('.menu-full').removeClass('open')
      }
  )





})();