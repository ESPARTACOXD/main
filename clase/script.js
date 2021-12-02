document.getElementById("button").addEventListener("click", function() {
  // Change background to dancing rick
  document.body.style.backgroundImage = "url('rick.gif')"

  // Hide the heading and the button
  document.querySelector(".everything").style.display = "none"

  // Play song
  var song = document.getElementById("song")
  song.play()

  // Real button appear
  bttntimeout = setTimeout(function () {
    document.querySelector(".real").style.display = "flex"
    document.querySelector(".everything").style.display = "flex"
    document.getElementById("title").style.display = "none"
    document.getElementById("button").style.display = "none"
  }, 2000);
})