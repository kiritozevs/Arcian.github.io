
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
const accordionShow = document.querySelectorAll('.slider-b-body__accordionshow');
const goShow = document.querySelectorAll('.slider-b-body__goshow');

let goShowNum = 0;
let openNum = 1;
let offOnNum = 0;
let openI = 0;
let openI2 = 0;
let openI3 = 0;
let lineBarWidth = 100 / slides.length;
let button;

if (numSlides != null) {
   numSlides.textContent = slides.length;

   lineBar.style.width = `${lineBarWidth}%`;

}

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

if (numSlides != null) {
   prev.addEventListener('click', () => {
      let gggg = lineBar.style.width;
      lineBar.style.width = `${Number(gggg.slice(0, -1)) - lineBarWidth}%`;
   });
   next.addEventListener('click', () => {
      let gggg = lineBar.style.width;
      lineBar.style.width = `${Number(gggg.slice(0, -1)) + lineBarWidth}%`;
   });
}
arrow.addEventListener('click', open);
itemOff.addEventListener('click', offOn);
itemOn.addEventListener('click', offOn);
// accordionShow.forEach(function () {
//    accordionShow[openI2].addEventListener('click', () => {
//       if (goShowNum == 0) {
//          goShow[openI].style.maxHeight = '200px'
//          goShowNum = 1;
//          openI++;
//       } else {
//          goShow[openI].style.maxHeight = '0px'
//          goShowNum = 0;
//          openI++
//       }
//       openI = 0;
//       openI2++
//    })
//    openI2 = 0;
// });

// function clickHandler() {

//    console.log(this.goShow)

// }

// for (openI2 = 0; openI2 < accordionShow.length; openI2++) {
//    openI3 = openI2;
//    accordionShow[openI2].addEventListener('click', clickHandler);

// }

// accordionShow.addEventListener('click', () => {
//    if (goShowNum == 0) {
//       goShow.style.maxHeight = '200px'
//       goShowNum = 1;
//    } else {
//       goShow.style.maxHeight = '0px'
//       goShowNum = 0;
//    }
// });


   // if (goShowNum == 0) {
   //    goShow[openI3].style.maxHeight = '200px'
   //    goShowNum = 1;
   //    openI++;
   // } else {
   //    goShow[openI3].style.maxHeight = '0px'
   //    goShowNum = 0;
   //    openI++
   // }
   // openI = 0;