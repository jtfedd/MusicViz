// Initializes the document and canvas
require('./css/styles.css');

function resizeCanvas(e) {
    var canvas = document.getElementById("canvas");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}

function getCenterX() {
    return document.documentElement.clientWidth / 2;
}

function getCenterY() {
    return document.documentElement.clientHeight / 2;
}

let initialized = false;
function init() {
    if (initialized) {
        console.log("Canvas is already initialized");
        return;
    }

    var canvas = document.createElement("canvas");
    canvas.id = "canvas";

    document.body.append(canvas);

    resizeCanvas(null);
    window.addEventListener("resize", resizeCanvas, false);

    initialized = true;
}

function getCanvas() {
    return document.getElementById("canvas");
}

function getContext() {
    return getCanvas().getContext('2d');
}

exports.getCenterX = getCenterX;
exports.getCenterY = getCenterY;
exports.init = init;
exports.getCanvas = getCanvas;
exports.getContext = getContext;
