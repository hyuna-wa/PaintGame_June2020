const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

//We need to set the widht and height in JS (separate from CSS),
//so that JS knows where to get the 2d context from.
canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "black";
ctx.lineWidth = range.value;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!filling) {
    //only when filling is false(off)
    if (!painting) {
      //if painting===false
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      //if painting===true
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRange(event) {
  const width = event.target.value;
  ctx.lineWidth = width;
}

function handleModeClick() {
  if (filling === true) {
    mode.innerText = "Fill";
    filling = false;
  } else {
    mode.innerText = "Paint";
    filling = true;
  }
}

function onMounseClick() {
  if (filling) {
    //only when filling is true (on)
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function onRightClick(event) {
  event.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL(); //default is png
  const a = document.createElement("a");
  a.href = image;
  a.download = "image🎨";
  a.click(); //this method fires click event
}

function init() {
  if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", onMounseClick);
    canvas.addEventListener("contextmenu", onRightClick);
  }
  Array.from(colors).forEach((color) =>
    color.addEventListener("click", handleColorClick)
  );
  if (range) {
    range.addEventListener("input", handleRange);
  }
  if (mode) {
    mode.addEventListener("click", handleModeClick);
  }
  if (save) {
    save.addEventListener("click", handleSaveClick);
  }
}

init();
