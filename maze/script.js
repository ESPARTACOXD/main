let started = false
let finished = false

document.getElementById('start').addEventListener("mousedown", () => {started = true})

document.querySelectorAll('.path').forEach(item => item.addEventListener("mouseenter", () => {
  if (started) {
    item.style.backgroundColor = "lime"
    }
}))

document.getElementById('finish').addEventListener("mouseenter", () => {
  if (started) {
    document.getElementById('main').style.display = "none"
    document.getElementById('main2').style.display = "grid"
    finished = true
  }
})

//------------------------------------------------------------------------------------------
//---------------------------------------  Replay  -----------------------------------------
//------------------------------------------------------------------------------------------

document.getElementById('reload').addEventListener('click', () => {location.reload()})

//------------------------------------------------------------------------------------------
//----------------------------------------  Lose  ------------------------------------------
//------------------------------------------------------------------------------------------

document.body.addEventListener('mouseup', () => {
  started = false
  if (!finished) {
  document.querySelectorAll(".path").forEach(item => location.reload())
  }
})

document.querySelectorAll(".wall").forEach(item => item.addEventListener("mouseenter", () => {
  started = false
  if (!finished) {
    document.querySelectorAll(".path").forEach(item => location.reload())
    }
}))

document.querySelectorAll(".border").forEach(item => item.addEventListener("mouseenter", () => {
  started = false
  if (!finished) {
    document.querySelectorAll(".path").forEach(item => location.reload())
    }
}))