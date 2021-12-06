texttimeout = setTimeout(function () {}, 1)
let win = true
let diff = null

document.getElementById("ez").addEventListener("click", function() {
  game("ez")
})

document.getElementById("md").addEventListener("click", function() {
  game("md")
})

document.getElementById("hr").addEventListener("click", function() {
  game("hr")
})

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min
}

function game(diff) {
  var padre = document.getElementById("imgg").style
  var fab = document.getElementById("img").style
  var base = document.getElementById("base")
  var bttns = document.getElementById("diffs").style
  padre.display = "block"
  base.style.display = "none"
  if (diff == "ez") {
    document.getElementById("h1").innerHTML = "EZ"
    ///////////////////////
    fab.width = "8%"
    fab.top = "{}%".replace("{}", rand(0,85))
    fab.left = "{}%".replace("{}", rand(0,95))
    loop = setInterval(function() {
      fab.top = "{}%".replace("{}", rand(0,85))
      fab.left = "{}%".replace("{}", rand(0,95))
    }, 600)

    document.getElementById("img").addEventListener("mousedown", function() {
      fab.display = "none"
      clearInterval(loop)
      base.style.display = "block"
      document.getElementById("h1").innerHTML = "YOU WON!!!"
      bttns.display = "none"
    })
    ///////////////////////
  }else if (diff == "md") {
    document.getElementById("h1").innerHTML = "MD"
    ///////////////////////
    fab.width = "8%"
    fab.top = "{}%".replace("{}", rand(0,85))
    fab.left = "{}%".replace("{}", rand(0,95))
    loop = setInterval(function() {
      fab.top = "{}%".replace("{}", rand(0,85))
      fab.left = "{}%".replace("{}", rand(0,95))
    }, 500)

    document.getElementById("img").addEventListener("mousedown", function() {
      fab.display = "none"
      clearInterval(loop)
      base.style.display = "block"
      document.getElementById("h1").innerHTML = "YOU WON!!!"
      bttns.display = "none"
    })
    ///////////////////////
  }else if (diff == "hr") {
    document.getElementById("h1").innerHTML = "HR"
    ///////////////////////
    fab.top = "{}%".replace("{}", rand(0,85))
    fab.left = "{}%".replace("{}", rand(0,95))
    loop = setInterval(function() {
      fab.top = "{}%".replace("{}", rand(0,85))
      fab.left = "{}%".replace("{}", rand(0,95))
    }, 400)

    document.getElementById("img").addEventListener("mousedown", function() {
      fab.display = "none"
      clearInterval(loop)
      base.style.display = "block"
      document.getElementById("h1").innerHTML = "YOU WON!!!"
      bttns.display = "none"
    })
    ///////////////////////
  }else {}
}
