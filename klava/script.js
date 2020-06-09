// const block = document.querySelector('.block');

var audio = new Audio();
audio.preload = 'auto';
audio.src = 'key2.mp3';


// // function key(e) {
// //    block.style.animation = 'none';
// //    // if (e.key == 'g' || e.key == 'п') {
// //    //    block.style.animation = 'box 1s ease-in-out';
// //    //    audio.play();
// //    // }

// //    block.style.animation = 'box 1s ease-in-out';
// //    audio.play();

// }


// window.addEventListener('keydown', () => {
//    audio.play();

// });
document.onkeydown = key_down;
document.onkeyup = key_up;
var keys_pressed = [];
window.onblur = function () { keys_pressed = []; };
function key_down(e) {
   var evtobj = window.event ? event : e;
   keys_pressed[evtobj.keyCode] = 1;
}

function key_up(e) {
   var evtobj = window.event ? event : e;
   delete (keys_pressed[evtobj.keyCode]);
}

function key_pressed(keycode) {
   console.log("pressed", keycode);
   audio.play();
}

setInterval(function () {
   for (var keycode in keys_pressed) {
      key_pressed(keycode);
   }
}, 20);