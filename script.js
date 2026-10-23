//Smooth Scrolling from Chris Coyier (https://chriscoyier.net/)
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//Homepage thumbnail hover (https://stackoverflow.com/questions/12989529/display-image-on-link-hover)
$(document).ready(function(){
    $('.home a').on('mouseenter', function(evt){
      $('.thumbnail').html('<img src="img/' + $(this).data('id') + '.' + $(this).data('ext') + '">');
      // $('.thumbnail').css({left: evt.pageX+100, top: evt.pageY-100}).show(); //anchor to cursor
      $('.thumbnail').css({
        right: '10%', //anchor to right
        top: '10%' //vertically centered
      }).show();
      $(this).on('mouseleave', function(){
        $('.thumbnail').hide();
      });
    });
});