const block = document.querySelector('.block');


for (let i = 1; i != 256; i++) {
   const audio = `
<audio id="audio${i}" controls>
   <source src="key2.mp3" type="audio/ogg; codecs=vorbis">
   <source src="key2.mp3" type="audio/mpeg">
   Тег audio не поддерживается вашим браузером.
   <a href="key2.mp3">Скачайте музыку</a>.
</audio  >
`
   block.insertAdjacentHTML('beforeend', audio)
}

window.addEventListener('keydown', (e) => {
   document.getElementById(`audio${e.which}`).play();
});

// window.addEventListener('keydown', (e) => {
//    if (e.code == 'Digit1') {

//       document.getElementById('audio48').play();

//    }

// })

// window.addEventListener('keydown', (e) => {
//    if (e.code == 'Digit2') {
//       document.getElementById('audio49').play();

//    }
// })




// const block = document.querySelector('.block');

// var audio = new Audio();
// audio.preload = 'auto';
// audio.src = 'key2.mp3';


// function key(e) {
//    block.style.animation = 'none';
//    if (e.key == 'g' || e.key == 'п') {
//       block.style.animation = 'box 1s ease-in-out';
//       audio.play();
//    }

//    block.style.animation = 'box 1s ease-in-out';
//    audio.play();

// }


// window.addEventListener('keydown', () => {
//    audio.play();

// });
// document.onkeydown = key_down;
// document.onkeyup = key_up;
// var keys_pressed = [];
// window.onblur = function () { keys_pressed = []; };
// function key_down(e) {
//    var evtobj = window.event ? event : e;
//    keys_pressed[evtobj.keyCode] = 1;
// }

// function key_up(e) {
//    var evtobj = window.event ? event : e;
//    delete (keys_pressed[evtobj.keyCode]);
// }

// function key_pressed(keycode) {
//    console.log("pressed", keycode);
//    audio.play();
// }

// setInterval(function () {
//    for (var keycode in keys_pressed) {
//       key_pressed(keycode);
//    }
// }, 20);

