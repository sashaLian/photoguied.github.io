$(document).ready(function() {
    $('ul.galleria__tabs').on('click', 'li:not(.galleria__tab_active)', function() {
        $(this)
          .addClass('galleria__tab_active').siblings().removeClass('galleria__tab_active')
          .closest('section.galleria').find('div.galleria__content').removeClass('galleria__content_active').eq($(this).index()).addClass('galleria__content_active');
      });


      $('.image').click(function(event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth())/2,
            top: ($(window).height() - $('#magnify').outerHeight())/2
          });
        $('#overlay, #magnify').fadeIn('fast');
      });
      
      $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();
     
        $('#overlay, #magnify').fadeOut('fast', function() {
          $('#close-popup, #magnify, #overlay').remove();
        });
      });

      $('a.linkVideo').fancybox();

}); 