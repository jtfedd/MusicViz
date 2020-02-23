// This script resizes the canvas to be full screen with the
// proper pixel ratio. It resizes the canvas on load and then
// again on any resize.

window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas(e) {
    var canvas = document.getElementById("canvas");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}

resizeCanvas(null);
