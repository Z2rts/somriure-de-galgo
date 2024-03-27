let frame = window.requestAnimationFrame 
let canvas = document.querySelector("#lienzo")
let ctx = canvas.getContext("2d")

let num = 0
let posX = 0
let move

let sprite =  new Image()
sprite.src = "/def.png"

function time() {
  if (num >= 2500) {
    num = 0
  } else {
    num += 20
  }

  for(let i = 0; i <= num; i += 230)
    if(num >= i) {
      posX = i
    }

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(sprite, posX, 5, 230, 150, 220, 5, 230, 150)

  move = frame(time)
}
time()

// setTimeout(function() {
//   cancelAnimationFrame(move)
// }, 9999999) //3000
