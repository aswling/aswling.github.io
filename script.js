//navigation bar #1
// function myFunction() {
//     var x = document.getElementById("nav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

//JQuery Lightbox from Saksham Mittal (https://github.com/saksham-mittal)
$(".img-popup").on('click', function() {
    $src = $(this).attr('src');
    $(".overlay-dark").css('display', 'block');
    $('.img-overlay').css('opacity', 1);
    $('.img-overlay').attr('src', $src);
    $('.img-overlay').css('transform', 'translate(-50%, 0) scale(1, 1)');
});

$(".overlay-dark").on('click', function() {
    $(".overlay-dark").css('display', 'none');
    $('.img-overlay').css('opacity', 0);
    setTimeout(function() {
        $('.img-overlay').css('transform', 'translate(-50%, 0) scale(0, 0)');
    }, 600);
});;

//press ESC to close lightbox
document.addEventListener('keydown', function(event) {
    if (event.which === 27) {
        $(".overlay-dark").css('display', 'none');
    	$('.img-overlay').css('opacity', 0);
    } 
});

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