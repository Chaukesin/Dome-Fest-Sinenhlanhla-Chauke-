var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


window.addEventListener('load', function () {

  setTimeout(function(){$(".se-pre-con").fadeOut(2000); },5000);
  
  var
  carousels = document.querySelectorAll('.carousel');


  for (var i = 0; i < carousels.length; i++) {
    carousel(carousels[i]);
  }
});