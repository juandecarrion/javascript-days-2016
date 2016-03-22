var canvas = document.getElementsByClassName('paperCanvas').item(0);

var context = canvas.getContext('2d');


context.moveTo(100,100);

context.lineTo(100,150);
context.lineTo(200,150);
context.lineTo(200,100);
context.lineTo(100,100);

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

//drawHouse(250, 200, 100);
//drawHouse(50, 500, 200);
drawHouse(450, 600, 300);

//context.closePath()


function drawArc(x, y, radio, startAngle, endAngle) {
    context.beginPath();
    context.strokeStyle = "red";


    context.arc(x, y, radio, startAngle, endAngle);
    context.stroke();
}


drawArc(200, 200, 100, 0, Math.PI * 2);

drawArc(200, 600, 100, 0, - Math.PI / 2);

