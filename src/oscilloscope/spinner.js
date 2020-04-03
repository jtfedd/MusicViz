class Spinner {
  constructor(radius, frequency) {
    this.radius = radius;
    this.frequency = frequency;

    this.lastX = radius;
    this.lastY = 0;

    this.angle = 0;

    this.X = radius;
    this.Y = 0;
  }

  tick(dt) {
    this.lastX = this.X;
    this.lastY = this.Y;

    this.angle += 2 * Math.PI * dt * this.frequency

    this.X = this.radius * Math.cos(this.angle)
    this.Y = this.radius * Math.sin(this.angle)
  }
}

exports.Spinner = Spinner;
