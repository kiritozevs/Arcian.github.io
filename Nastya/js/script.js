
let mySwiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   loop: false,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
})

const arrow = document.querySelector('.openArrow');
const menu = document.querySelector('.menu');
const GoNon = document.querySelectorAll('.nav-menu__about');
const GoNon2 = document.querySelectorAll('.opportunities-menu__about');
const tеxtlogo = document.querySelector('.menu__tеxtlogo');
const itemOn = document.querySelector('.opportunities-menu__item-on');
const itemOff = document.querySelector('.opportunities-menu__item-off');
const menuImage = document.querySelector('.opportunities-menu__image');
const slides = document.querySelectorAll('.card');
const numSlides = document.querySelector('.bar-block__numtwo');
const lineBar = document.querySelector('.bar-block__linebar');
const prev = document.querySelector('.swiper-button-prev');
const next = document.querySelector('.swiper-button-next');



let openNum = 1;
let offOnNum = 0;
let openI = 0;
let lineBarWidth = 100 / slides.length;

numSlides.textContent = slides.length;

lineBar.style.width = `${lineBarWidth}%`;

function open() {

   openI = 0;
   if (openNum == 0) {
      tеxtlogo.style.display = 'none';
      arrow.style.transform = 'rotate(180deg)';
      menu.style.width = '67px';
      openNum = 1;
      openI = 0;
      GoNon.forEach(function () {
         GoNon[openI].style.display = "none";
         openI++;
      });
      openI = 0;
      GoNon2.forEach(function () {
         GoNon2[openI].style.display = "none";
         openI++;
      });
   } else {
      tеxtlogo.style.display = 'block';
      arrow.style.transform = 'rotate(0deg)';
      menu.style.width = '201px';
      openNum = 0;
      openI = 0;
      GoNon.forEach(function () {
         GoNon[openI].style.display = "block";
         openI++;
      });
      openI = 0;
      GoNon2.forEach(function () {
         GoNon2[openI].style.display = "block";
         openI++;
      });

   }
}

function offOn() {
   if (offOnNum == 0) {
      itemOff.style.display = 'flex'
      itemOn.style.display = 'none'
      offOnNum = 1;
   } else {
      itemOff.style.display = 'none'
      itemOn.style.display = 'flex'
      offOnNum = 0;
   }

}

arrow.addEventListener('click', open);
itemOff.addEventListener('click', offOn);
itemOn.addEventListener('click', offOn);
prev.addEventListener('click', () => {
   let gggg = lineBar.style.width;
   lineBar.style.width = `${Number(gggg.slice(0, -1)) - lineBarWidth}%`;
});
next.addEventListener('click', () => {
   let gggg = lineBar.style.width;
   lineBar.style.width = `${Number(gggg.slice(0, -1)) + lineBarWidth}%`;
});