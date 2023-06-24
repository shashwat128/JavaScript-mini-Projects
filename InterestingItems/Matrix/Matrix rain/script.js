const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
canvas.width = screenWidth;
canvas.height = screenHeight;

const charSet =
  "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{};:'\"\\|,.<>/?`~";

const fontSize = 13;
const columns = Math.floor(screenWidth / fontSize);
const drops = [];

for (let i = 0; i < columns; i++) {
  // density
  drops[i] = Math.random() * (1.597 * screenHeight);
}

function draw() {
  context.fillStyle = "rgba(0, 0, 0, 0.08)";
  context.fillRect(0, 0, screenWidth, screenHeight);

  context.fillStyle = "#0F0";
  context.font = `${fontSize}px arial`;

  for (let i = 0; i < drops.length; i++) {
    const randomChar = charSet[Math.floor(Math.random() * charSet.length)];
    const x = i * fontSize;
    const y = drops[i];

    context.fillText(randomChar, x, y);

    if (y > screenHeight && Math.random() > 0.61) {
      drops[i] = -fontSize; // Reset the drop above the screen instead of 0
    }

    drops[i] += fontSize; // Increase the drop position by fontSize
  }
}

setInterval(draw, 89);
