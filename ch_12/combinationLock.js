let canvas;
let context;
let radius;
let xOffset;
let yOffset;

function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    context.fillStyle = "Black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    radius = 150;
    xOffset = 200;
    yOffset = 200;

    //Draw outer circle
    context.beginPath();
    context.arc(xOffset, yOffset, radius, 0, 2 * Math.PI);
    context.fillStyle = "LightGrey";
    context.fill();
    context.strokeStyle = "DarkGrey";
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.lineWidth = 2;

    //Draw inner circles
    context.beginPath();
    context.arc(xOffset, yOffset, radius * 0.75, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(xOffset, yOffset, radius * 0.7, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();

    //Draw triangle pointer
    context.beginPath();
    context.fillStyle = "Tomato";
    context.moveTo(xOffset, 200 - (radius * 0.7));
    context.lineTo(xOffset + 15, yOffset - (radius * 0.8));
    context.lineTo(xOffset - 15, yOffset - (radius * 0.8));
    context.lineTo(xOffset, 200 - (radius * 0.7));
    context.fill();
    context.closePath();

    drawLock(0);
}

function drawLock(angle) {
    //Draw black background
    context.beginPath();
    context.fillStyle = "Black";
    context.arc(xOffset, yOffset, radius * 0.69, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.strokeStyle = "White";

    let outerTicRadius = radius * 0.65;
    let littleTicRadius = radius * 0.6;
    let bigTicRadius = radius * 0.55;

    for (let i = 1; i <= 40; i++) {
        let theta = 2 * Math.PI * (i / 40);

        let x = Math.cos(theta);
        let y = Math.sin(theta);

        // console.log(theta);
        // console.log("(" + x + ", " + y + ")");

        //Draw the tics
        context.beginPath();
        if (i % 5 === 0) {
            context.moveTo(bigTicRadius * x + xOffset, bigTicRadius * y + yOffset);
        } else {
            context.moveTo(littleTicRadius * x + xOffset, littleTicRadius * y + yOffset);
        }
        context.lineTo(outerTicRadius * x + xOffset, outerTicRadius * y + yOffset);
        context.stroke();
        context.closePath();

        // if (i % 5 === 0) {
        //     context.beginPath();
        //     context.save();
        //     context.translate(-xOffset, -yOffset);
        //     context.rotate(theta);
        //     context.translate(xOffset, yOffset);
        //     context.fillStyle = "White";
        //     context.fillText("" + i, xOffset, 0.3 * radius - yOffset);
        //     context.restore();
        //     context.closePath();
        // }

        // context.translate(-xOffset, -yOffset);
        //
        // context.rotate(Math.PI / 20);
        // context.translate(xOffset, yOffset);
    }

    context.beginPath();
    context.fillStyle = "White";
    context.textAlign = "center";
    context.font = "2em";
    context.fillText("0", xOffset, yOffset - (0.45 * radius));
    context.closePath();

    context.beginPath();
    context.translate(-xOffset, -yOffset);
    context.rotate(-Math.PI / 20);
    context.translate(xOffset, yOffset);
    context.fillText("5", xOffset, yOffset - (0.45 * radius));
    context.closePath();

    context.beginPath();
    context.translate(-xOffset, -yOffset);
    context.rotate( -2 * Math.PI / 20);
    context.translate(xOffset, yOffset);
    context.fillText("10", xOffset, yOffset - (0.45 * radius));
    context.closePath();
}