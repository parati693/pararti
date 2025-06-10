// Archivo original movido a assets/js/script.js

document.addEventListener('DOMContentLoaded', function() {
  // Confetti animation
  const confetti = document.createElement('canvas');
  confetti.className = 'confetti';
  document.body.appendChild(confetti);
  const ctx = confetti.getContext('2d');
  confetti.width = window.innerWidth;
  confetti.height = window.innerHeight;

  // Menos confeti y colores más vivos
  let pieces = [];
  const confettiColors = ['#e75480', '#ff1744', '#ff9800', '#ffd600', '#00e676', '#2979ff', '#d500f9', '#ff4081'];
  for (let i = 0; i < 30; i++) {
    pieces.push({
      x: Math.random() * confetti.width,
      y: Math.random() * confetti.height - confetti.height,
      r: Math.random() * 8 + 4,
      d: Math.random() * 80 + 40,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      tilt: Math.random() * 10 - 10
    });
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, confetti.width, confetti.height);
    for (let p of pieces) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
    updateConfetti();
    requestAnimationFrame(drawConfetti);
  }

  function updateConfetti() {
    for (let p of pieces) {
      p.y += Math.cos(p.d) + 2 + p.r/2;
      p.x += Math.sin(0.01 * p.d);
      if (p.y > confetti.height) {
        p.y = -10;
        p.x = Math.random() * confetti.width;
      }
    }
  }

  drawConfetti();

  // Responsive canvas
  window.addEventListener('resize', () => {
    confetti.width = window.innerWidth;
    confetti.height = window.innerHeight;
  });
});
