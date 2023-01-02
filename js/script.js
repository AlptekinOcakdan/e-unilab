let scale = 1,
    panning = false,
    pointX = 0,
    pointY = 0,
    start = {x: 0, y: 0},
    zoom = document.getElementById("zoom"),
    base = `transform: translate(0px, 0px) scale(1);`;
const state={
    pointX:pointX,
    pointY:pointY,
    scale:scale
}

function setTransform() {
    zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
}
function setState(pointX, pointY, scale) {
    state.pointX=pointX;
    state.pointY=pointY;
    state.scale=scale;
}

zoom.onmousedown = function (e) {
    e.preventDefault();
    start = {x: e.clientX - pointX, y: e.clientY - pointY};
    panning = true;
}
zoom.onmouseup = function (e) {
    panning = false;
}
zoom.onmousemove = function (e) {
    e.preventDefault();
    if (!panning) {
        return;
    }
    pointX = (e.clientX - start.x);
    pointY = (e.clientY - start.y);
    setTransform();
}
zoom.onwheel = function (e) {
    e.preventDefault();
    let xs = (e.clientX - pointX) / scale,
        ys = (e.clientY - pointY) / scale,
        delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
    (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
    pointX = e.clientX - xs * scale;
    pointY = e.clientY - ys * scale;
    setTransform();
    if (scale === 1) {
        zoom.style.transform = base;
    }
}