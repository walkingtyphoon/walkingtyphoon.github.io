<script>
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("background-canvas");
  const ctx = canvas.getContext("2d");
  let width, height;
  let t = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  window.addEventListener("resize", resize);
  resize();

  function f(x, t) {
    return Math.sin(x / 80 + t) * 50 + Math.sin(x / 25 - t * 1.5) * 20;
  }

  function render() {
    ctx.fillStyle = "#0b0b15";
    ctx.fillRect(0, 0, width, height);

    ctx.beginPath();
    for (let x = 0; x < width; x++) {
      const y = height / 2 + f(x, t);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(0,180,255,0.7)";
    ctx.lineWidth = 2;
    ctx.stroke();

    t += 0.02;
    requestAnimationFrame(render);
  }

  render();
});
</script>