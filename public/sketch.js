let bg
let y = 0
let particles = []
let seconds

function preload() {
  roboto = loadFont('assets/fonts/RobotoMono.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  textAlign(CENTER, CENTER)
  textFont(roboto)
  textSize(24)
  bg = loadImage('assets/images/moonwalk.jpg');


  colors = {
    primary: color('#C0FFEE'),
    secondary: color('#FFCCC0'),
    background: color('#16161D'),
  }

  previousSeconds = second()
}

function draw() {
  background(bg);

  stroke(226, 204, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
    y = 0;
  }

  const secs = second()
  if (secs % 2 == 0 && secs != previousSeconds) {
    particles.push({
      x: random(windowWidth),
      y: random(windowHeight),
    })

    previousSeconds = second()
  }

  particles.forEach(particle => {
    ellipse(particle.x, particle.y, 55, 55);
  })
}
