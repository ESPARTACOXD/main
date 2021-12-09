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
  var rl = document.getElementById("rl").style
  var mp = document.getElementById("mp").style
  var table = document.getElementById("table")
  var points = 1000
  padre.display = "block"
  base.style.display = "none"
  looppoints = setInterval(function () {
    points--
    var temp = "Points: "
    table.innerHTML = temp + points.toString()
    if (points == 0) {
      padre.display = "none"
      fab.display = "none"
      clearInterval(loop)
      clearInterval(looppoints)
      base.style.display = "block"
      document.getElementById("h1").innerHTML = "You lost :("
      rl.display = "inline"
      mp.display = "inline"
      bttns.display = "none"
      loop = setInterval(function() {
        document.getElementById("rl").addEventListener("click", function () {
          location.reload()
        })
        document.getElementById("mp").addEventListener("click", function () {
          console.log(location.assign("../"))
        })
      }, 50)
    }
  }, 1)
  if (diff == "ez") {
    document.getElementById("h1").innerHTML = "EZ"
    fab.top = "{}%".replace("{}", rand(0,73))
    fab.left = "{}%".replace("{}", rand(0,92))
    loop = setInterval(function() {
      fab.top = "{}%".replace("{}", rand(0,73))
      fab.left = "{}%".replace("{}", rand(0,92))
    }, 600)

    document.getElementById("img").addEventListener("mousedown", function() {
      fab.display = "none"
      clearInterval(loop)
      base.style.display = "block"
      document.getElementById("h1").innerHTML = "YOU WON!!!"
      bttns.display = "none"
    })
  }else if (diff == "md") {
    document.getElementById("h1").innerHTML = "MD"
    fab.top = "{}%".replace("{}", rand(0,73))
    fab.left = "{}%".replace("{}", rand(0,92))
    loop = setInterval(function() {
      fab.top = "{}%".replace("{}", rand(0,73))
      fab.left = "{}%".replace("{}", rand(0,92))
    }, 450)

    document.getElementById("img").addEventListener("mousedown", function() {
      fab.display = "none"
      clearInterval(loop)
      base.style.display = "block"
      document.getElementById("h1").innerHTML = "YOU WON!!!"
      bttns.display = "none"
    })
    document.getElementById("title").addEventListener("click", function () {
      location.reload()
    })
  }else if (diff == "hr") {
    document.getElementById("h1").innerHTML = "HR"
    fab.top = "{}%".replace("{}", rand(0,73))
    fab.left = "{}%".replace("{}", rand(0,92))
    loop = setInterval(function() {
      fab.top = "{}%".replace("{}", rand(0,73))
      fab.left = "{}%".replace("{}", rand(0,92))
    }, 400)
  }

  document.getElementById("img").addEventListener("mousedown", function() {
    padre.display = "none"
    fab.display = "none"
    clearInterval(loop)
    clearInterval(looppoints)
    base.style.display = "block"
    document.getElementById("h1").innerHTML = "YOU WON!!!"
    rl.display = "inline"
    mp.display = "inline"
    bttns.display = "none"
    loop = setInterval(function() {
      document.getElementById("rl").addEventListener("click", function () {
        location.reload()
      })
      document.getElementById("mp").addEventListener("click", function () {
        console.log(location.assign("../"))
      })
    }, 50)
  })
}
