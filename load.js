const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

var nodes = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onresize = resize;
resize();

function drawNode(node) {
    context.beginPath();
    context.fillStyle = node.fillStyle;
    context.arc(node.x, node.y, node.radius, 0, Math.PI * 2, true);
    context.strokeStyle = node.strokeStyle;
    context.stroke();
    context.fill();
}

function click(e) {
    let node = {
        x: e.x,
        y: e.y,
        radius: 10,
        fillStyle: '#22cccc',
        strokeStyle: '#009999'
    };
    nodes.push(node);
    drawNode(node);
}

window.onclick = click;