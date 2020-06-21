const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
  painting = false;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}
function onMouseDown(event) {
  painting = true;
}
function onMouseUp(event) {
  stopPainting();
}

function init() {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mounsedown", onMouseDown);
  canvas.addEventListener("mounseup", onMouseUp);
  canvas.addEventListener("mounseleave", stopPainting);
}
init();
