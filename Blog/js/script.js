const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
}

var header = $('.header'),
   scrollPrev = 0;

$(window).scroll(function () {
   var scrolled = $(window).scrollTop();

   if (scrolled > 100 && scrolled > scrollPrev) {
      header.addClass('out');
   } else {
      header.removeClass('out');
   }
   scrollPrev = scrolled;
});