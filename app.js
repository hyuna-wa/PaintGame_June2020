const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

//We need to set the widht and height in JS (separate from CSS),
//so that JS knows where to get the 2d context from.
canvas.width = 500;
canvas.height = 500;
ctx.strokeStyle = "#1b15b9";
let painting = false;

function stopPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    //if painting===false
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    //if painting===true
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  console.log(x, y);
}

function init() {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
init();
console.log(ctx);
