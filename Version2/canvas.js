window.addEventListener("load", startup, false);
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
speed = 50;

function startup() {
	//call draw function every 30ms
	interval = setInterval(draw, speed);
}

function draw() {
	//clear canvas
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
    let imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height);
    update(imgdata.data);
    ctx.putImageData(imgdata, 0, 0);

    //draw black pixel on click using input.js events
    if (mouseHold) {
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(mouseX, mouseY, 1, 1);
    }

}

function update(data){
    // for(var i = 0; i < data.length; i+=4){
    //     const rgba = "#" + ("000000" + rgbToHex(data[i+0], data[i+1], data[i+2])).slice(-6);
    //     if (rgba === "#0000ff")
    //         console.log(rgba);
    // }
    getPixel(data, mouseX, mouseY);
}

function getPixel(imgData, index) {
    var i = index*4, d = imgData.data;
    return [d[i],d[i+1],d[i+2],d[i+3]] // [R,G,B,A]
  }
  
  function getPixelXY(imgData, x, y) {
    return getPixel(imgData, y*imgData.width+x);
  }
