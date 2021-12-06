texttimeout = setTimeout(function () {}, 1)
let win = true

document.getElementById("ez").addEventListener("click", function() {
  clearTimeout(texttimeout);
  document.getElementById("h1").innerHTML = "Working on it :P"
  texttimeout = setTimeout(function () {
    document.getElementById("h1").innerHTML = "Select difficulty"
}, 1200);
})

document.getElementById("md").addEventListener("click", function() {
  clearTimeout(texttimeout);
  document.getElementById("h1").innerHTML = "Working on it :P"
  texttimeout = setTimeout(function () {
    document.getElementById("h1").innerHTML = "Select difficulty"
}, 1200);
})

document.getElementById("hr").addEventListener("click", function() {
  clearTimeout(texttimeout);
  document.getElementById("h1").innerHTML = "Working on it :P"
  texttimeout = setTimeout(function () {
    document.getElementById("h1").innerHTML = "Select difficulty"
}, 1200);
})