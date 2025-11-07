document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("background-canvas");
    const ctx = canvas.getContext("2d");

    let width, height;
    let xspacing = 6; // 更密集
    let amplitude = 40;
    let period = 300;
    let dx;
    let yvalues = [];
    let theta = 0;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        dx = (2 * Math.PI / period) * xspacing;
        yvalues = new Array(Math.floor(width / xspacing));
    }

    window.addEventListener("resize", resize);
    resize();

    function calcWave() {
        theta += 0.025;
        let x = theta;
        for (let i = 0; i < yvalues.length; i++) {
            yvalues[i] = Math.sin(x) * amplitude + Math.sin(x * 1.5) * (amplitude * 0.3);
            x += dx;
        }
    }

    function renderWave() {
        ctx.clearRect(0, 0, width, height);

        // 背景渐变
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "#0b0b15");
        gradient.addColorStop(1, "#141428");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // 波形
        ctx.beginPath();
        ctx.moveTo(0, height / 2 + yvalues[0]);
        for (let i = 1; i < yvalues.length; i++) {
            ctx.lineTo(i * xspacing, height / 2 + yvalues[i]);
        }
        ctx.strokeStyle = "rgba(0, 180, 255, 0.7)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // 发光粒子
        ctx.fillStyle = "rgba(0, 180, 255, 0.9)";
        for (let i = 0; i < yvalues.length; i += 8) {
            ctx.beginPath();
            ctx.arc(i * xspacing, height / 2 + yvalues[i], 1.5, 0, Math.PI * 2);
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