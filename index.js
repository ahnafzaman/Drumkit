/*
document.querySelector("button").addEventListener("click", function(){
  alert("I got clicked!");
});
*/

// var size = document.querySelectorAll(".drum").length;
// for (var i = 0; i < size; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//     alert("I got clicked!");
//   });
// }

var soundList = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];
//var size= document.querySelectorAll(".drum").length;

for (var i = 0; i < 7; i++) {
  //var soundPlay = "sounds/" + soundList[i];
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;


    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  })
}

    document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    })


function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio(soundList[0]);
      audio.play();
      break;

    case "a":
      var audio = new Audio(soundList[1]);
      audio.play();
      break;

    case "s":
      var audio = new Audio(soundList[2]);
      audio.play();
      break;

    case "d":
      var audio = new Audio(soundList[3]);
      audio.play();
      break;

    case "j":
      var audio = new Audio(soundList[4]);
      audio.play();
      break;

    case "k":
      var audio = new Audio(soundList[5]);
      audio.play();
      break;

    case "l":
      var audio = new Audio(soundList[6]);
      audio.play();
      break;
    default:console.log(buttonInnerHTML);
}
}

function buttonAnimation(currentKey){
  var activeButton= document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
