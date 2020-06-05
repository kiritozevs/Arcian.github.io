@@include('slick.min.js');
$(function () {
   $('.header__slider').slick({
      infinite: false,
      arrows: true,
      dots: true
   });
   $('.customers__siider').slick({
      infinite: false,
      arrows: true,
      dots: true
   });
   $('.discounts__slider').slick({
      infinite: false,
      arrows: true,
      slidesToShow: 2,
      responsive: [
         {
            breakpoint: 1225,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   });
});

const menu = document.querySelector('.header__burger-menu');
const menuBtn = document.querySelector('.header__burger');
const bestBlock = document.querySelector('.best__block');
const bestAll = document.querySelector('.best__all');
const bestAll2 = document.querySelector('.best__all2');


$('.header__burger').on('click', () => {
   $('.header__burger-menu').toggleClass('active-menu');

});


if (document.documentElement.clientWidth > 373) {
   document.addEventListener('click', function (e) {
      const target = e.target;
      const its_menu = target == menu || menu.contains(target);
      const its_btnMenu = target == menuBtn;
      const menu_is_active = menu.classList.contains('active-menu');

      if (!its_menu && !its_btnMenu && menu_is_active) {
         $('.header__burger-menu').toggleClass('active-menu');
         follow = 0;
      }
   });
}

if (Math.floor(bestBlock.childNodes.length / 2) > 3) {
   bestAll2.style.display = 'block';
   bestAll.style.display = 'none';

}
