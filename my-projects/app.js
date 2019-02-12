var canvas = document.getElementById("myCanvas")

var ctx = canvas.getContext('2d')


// square
ctx.beginPath()
//20px from left 40px from top 50 width and 50 height
ctx.rect(20, 40, 50, 50)
ctx.fillStyle = "blue"
ctx.fill();
ctx.closePath()

//circle
ctx.beginPath()
ctx.arc(240, 90, 20, 0, Math.PI*2, false)
ctx.fillStyle = "purple"
ctx.fill()
ctx.closePath()

//using stroke to color outside stroke

ctx.beginPath()
ctx.rect(160, 10, 100, 40)
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)"
ctx.stroke()
ctx.closePath()