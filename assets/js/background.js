window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) {
        console.error('Canvas element not found!');
        return;
    }

    const ctx = canvas.getContext('2d');
    let width, height;
    let xspacing = 8;
    let amplitude = 50;
    let period = 400;
    let dx;
    let yvalues;
    let theta = 0;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        dx = (2 * Math.PI / period) * xspacing;
        yvalues = new Array(Math.floor(width / xspacing));
    }

    window.addEventListener('resize', resize);
    resize();

    function calcWave() {
        theta += 0.03;
        let x = theta;
        for (let i = 0; i < yvalues.length; i++) {
            yvalues[i] = Math.sin(x) * amplitude;
            x += dx;
        }
    }

    function renderWave() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(0, 180, 255, 0.6)';
        for (let i = 0; i < yvalues.length; i++) {
            ctx.beginPath();
            ctx.arc(i * xspacing, height / 2 + yvalues[i], 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function animate() {
        calcWave();
        renderWave();
        requestAnimationFrame(animate);
    }

    animate();
});