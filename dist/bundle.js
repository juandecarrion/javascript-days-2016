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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhcGVyQ2FudmFzJykuaXRlbSgwKTtcblxudmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXG5jb250ZXh0Lm1vdmVUbygxMDAsMTAwKTtcblxuY29udGV4dC5saW5lVG8oMTAwLDE1MCk7XG5jb250ZXh0LmxpbmVUbygyMDAsMTUwKTtcbmNvbnRleHQubGluZVRvKDIwMCwxMDApO1xuY29udGV4dC5saW5lVG8oMTAwLDEwMCk7XG5cbmZ1bmN0aW9uIGRyYXdIb3VzZSh4LCB5LCBzaXplKSB7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG5cbiAgICBjb250ZXh0Lm1vdmVUbyh4LCB5KTtcblxuICAgIGNvbnRleHQubGluZVRvKHggKyBzaXplLCB5IC0gc2l6ZSk7XG4gICAgY29udGV4dC5saW5lVG8oeCArIHNpemUgLyAyLCB5IC0gc2l6ZSAqIDMgLyAyKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4LCB5IC0gc2l6ZSk7XG4gICAgY29udGV4dC5saW5lVG8oeCArIHNpemUsIHkpO1xuICAgIGNvbnRleHQubGluZVRvKHgsIHkpO1xuICAgIGNvbnRleHQubGluZVRvKHgsIHkgLSBzaXplKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4ICsgc2l6ZSwgeSAtIHNpemUpO1xuICAgIGNvbnRleHQubGluZVRvKHggKyBzaXplLCB5KTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xufVxuXG4vL2RyYXdIb3VzZSgyNTAsIDIwMCwgMTAwKTtcbi8vZHJhd0hvdXNlKDUwLCA1MDAsIDIwMCk7XG5kcmF3SG91c2UoNDUwLCA2MDAsIDMwMCk7XG5cbi8vY29udGV4dC5jbG9zZVBhdGgoKVxuXG5cbmZ1bmN0aW9uIGRyYXdBcmMoeCwgeSwgcmFkaW8sIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcblxuXG4gICAgY29udGV4dC5hcmMoeCwgeSwgcmFkaW8sIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xufVxuXG5cbmRyYXdBcmMoMjAwLCAyMDAsIDEwMCwgMCwgTWF0aC5QSSAqIDIpO1xuXG5kcmF3QXJjKDIwMCwgNjAwLCAxMDAsIDAsIC0gTWF0aC5QSSAvIDIpO1xuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
