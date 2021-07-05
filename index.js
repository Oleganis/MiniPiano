// Variant 1

var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", myFunction);

  function myFunction() {
    var buttonInnerHTML = this.innerHTML;
    var audio = new Audio("sounds/" + buttonInnerHTML + ".mp3")
    audio.play();

    var activeButton1 = document.querySelector("." + buttonInnerHTML);
    activeButton1.classList.add("pressed");
    setTimeout(function() {
      activeButton1.classList.remove("pressed");
    }, 100);
  }
}


addEventListener("keydown", function() {
  var currentKey = event.key;
  var secondAudio = new Audio("sounds/" + currentKey + ".mp3")
  secondAudio.play();

  var activeButton2 = document.querySelector("." + currentKey);
  activeButton2.classList.add("pressed");
  setTimeout(function() {
    activeButton2.classList.remove("pressed");
  }, 100);


})





// Variant 2

// var numberOfButtons = document.querySelectorAll(".drum").length;
//
// for (var i = 0; i < numberOfButtons; i++) {
//
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//
//     var buttonInnerHTML = this.innerHTML;
//     makeSound(buttonInnerHTML);
//
//     buttonAnimation(buttonInnerHTML);
//   });
//
// }

// Detecting Keyboard Press
// document.addEventListener("keydown", function(event) {
//   makeSound(event.key);
//
//   buttonAnimation(event.key);
//
// });
//
// function makeSound(key) {
//   switch (key) {
//
//     case "a":
//       var a = new Audio('sounds/a.mp3');
//       a.play();
//       break;
//
//     case "s":
//       var s = new Audio('sounds/s.mp3');
//       s.play();
//       break;
//
//     case "d":
//       var d = new Audio('sounds/d.mp3');
//       d.play();
//       break;
//
//     case "f":
//       var f = new Audio('sounds/f.mp3');
//       f.play();
//       break;
//
//     case "j":
//       var j = new Audio('sounds/j.mp3');
//       j.play();
//       break;
//
//     case "k":
//       var k = new Audio('sounds/k.mp3');
//       k.play();
//       break;
//
//     case "l":
//       var l = new Audio('sounds/l.mp3');
//       l.play();
//       break;
//
//     default:
//       console.log();
//
//   }
//
// }
//
// function buttonAnimation(currentKey) {
//   var activeButton = document.querySelector("." + currentKey);
//   activeButton.classList.add("pressed");
//
//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100);
//
// }
