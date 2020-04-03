canvas = require('./canvas.js');
frequencies = require('./frequencies/frequencies.js');
spinner = require('./oscilloscope/spinner.js');
dat = require('dat.gui');
params = require('./params.js');

const gui = new dat.GUI();

canvas.init();

var s1;
var s2;

p = new params.Params();

function init() {
  window.requestAnimationFrame(tick);
  s1 = new spinner.Spinner(150, 100);
  s2 = new spinner.Spinner(150, 200);

  gui.add(s1, 'frequency', 25, 880);
  gui.add(s2, 'frequency', 25, 880);
  gui.add(p, 'oscilloscopeToggle');
  gui.add(p, 'speedFactor', ['1', '10', '50', '100', '500', '1000']);
}

var hue = 0;

var prevTime;

function tick(now) {
  window.requestAnimationFrame(tick);

  // Calculate time delta
  var delta = (now - prevTime) / 1000 / p.speedFactor;
  prevTime = now;
  if (isNaN(delta)) return;

  console.log(delta);

  var ctx = canvas.getContext();

  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
  ctx.fillRect(0, 0, canvas.getWidth(), canvas.getHeight());

  ctx.save();

  ctx.translate(canvas.getCenterX(), canvas.getCenterY());

  ctx.lineWidth = 2;
  opacity = 0.1 + (p.speedFactor / 900)
  ctx.strokeStyle = "rgba(255, 0, 255, " + opacity + ")";
  hue++;

  var substeps = 1000 / p.speedFactor;
  for (var i = 0; i < substeps; i++) {
    s1.tick(delta / substeps);
    s2.tick(delta / substeps);

    if (p.oscilloscopeToggle == false) {
      ctx.beginPath();
      ctx.moveTo(s1.lastX + s2.lastX, s1.lastY + s2.lastY);
      ctx.lineTo(s1.X + s2.X, s1.Y + s2.Y);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(s1.lastX, s2.lastY);
      ctx.lineTo(s1.X, s2.Y);
      ctx.stroke();
    }
  }

  ctx.restore();
}

init();