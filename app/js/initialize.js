import type from './type';

document.addEventListener('DOMContentLoaded', () => {
  type();
});

$(document).ready(function() {

  var scrollLink = $('.scroll')

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault()

    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    },1000)
  })

  // highlight current nav point
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop()

    scrollLink.each(function () {

      var sectionOffset = $(this.hash).offset().top - 20

      if ( sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active')
        $(this).parent().siblings().removeClass('active')
      }

    })

  })

})
