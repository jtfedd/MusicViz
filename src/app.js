canvas = require('./canvas.js');
frequencies = require('./frequencies/frequencies.js');
spinner = require('./geometry/spinner.js');

canvas.init();

var s1;
var s2;

function init() {
  window.requestAnimationFrame(tick);
  s1 = new spinner.Spinner(150, 220.1);
  s2 = new spinner.Spinner(150, 880);
}

var prevTime;

function tick(now) {
  window.requestAnimationFrame(tick);

  // Calculate time delta
  var delta = (now - prevTime) / 1000;
  prevTime = now;
  if (isNaN(delta)) return;

  var ctx = canvas.getContext();

  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
  ctx.fillRect(0, 0, canvas.getWidth(), canvas.getHeight());

  ctx.save();

  ctx.translate(canvas.getCenterX(), canvas.getCenterY());

  ctx.lineWidth = 2;
  ctx.strokeStyle = `rgba(225, 0, 150, 0.1)`;

  var substeps = 1000;
  for (var i = 0; i < substeps; i++) {
    s1.tick(delta / substeps);
    s2.tick(delta / substeps);

    ctx.beginPath();
    ctx.moveTo(s1.lastX + s2.lastX, s1.lastY + s2.lastY);
    ctx.lineTo(s1.X + s2.X, s1.Y + s2.Y);
    ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(s1.lastX, s2.lastY);
    // ctx.lineTo(s1.X, s2.Y);
    // ctx.stroke();
  }

  ctx.restore();
}

init();