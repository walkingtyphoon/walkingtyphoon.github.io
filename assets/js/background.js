let xspacing = 16; // x间隔
let w;             // 宽度
let theta = 0.0;   // 初始角度
let amplitude = 75.0; // 振幅
let period = 500.0; // 周期
let dx;            // 增量
let yvalues;       // y数组

function setup() {
    createCanvas(windowWidth, windowHeight);
    w = width + 16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));
}

function draw() {
    background(30, 30, 50); // 深色背景
    calcWave();
    renderWave();
}

function calcWave() {
    theta += 0.02;

    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
        yvalues[i] = sin(x) * amplitude;
        x += dx;
    }
}

function renderWave() {
    noStroke();
    fill(0, 150, 255, 200);
    for (let i = 0; i < yvalues.length; i++) {
        ellipse(i * xspacing, height / 2 + yvalues[i], 16, 16);
    }
}
