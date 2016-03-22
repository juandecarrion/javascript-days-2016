var canvas = document.getElementsByClassName('paperCanvas').item(0);

var context = canvas.getContext('2d');

drawHouse(450, 600, 300);

drawArc(200, 200, 100, 0, Math.PI * 2);
drawArc(200, 600, 100, 0, - Math.PI / 2);

context.strokeStyle = "green";
context.moveTo(200, 200);
context.quadraticCurveTo(225, 125, 300, 200);
context.stroke();

function drawHouse(x, y, size) {
    context.strokeStyle = "black";

    context.beginPath();

    context.moveTo(x, y);

    context.lineTo(x + size, y - size);
    context.lineTo(x + size / 2, y - size * 3 / 2);
    context.lineTo(x, y - size);
    context.lineTo(x + size, y);
    context.lineTo(x, y);
    context.lineTo(x, y - size);
    context.lineTo(x + size, y - size);
    context.lineTo(x + size, y);
    context.stroke();
}


function drawArc(x, y, radio, startAngle, endAngle) {
    context.beginPath();
    context.strokeStyle = "red";


    context.arc(x, y, radio, startAngle, endAngle);
    context.stroke();
}

