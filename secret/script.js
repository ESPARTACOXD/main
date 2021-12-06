texttimeout = setTimeout(function () {}, 1)
let win = true
let diff = null

while (diff == null) {
  document.getElementById("ez").addEventListener("click", function() {
    diff = "ez"
  })

  document.getElementById("md").addEventListener("click", function() {
    diff = "md"
  })

  document.getElementById("hr").addEventListener("click", function() {
    diff = "hr"
  })
}


if (diff == "ez") {

}
