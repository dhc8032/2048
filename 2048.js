let c = document.getElementById("canvas");
c.width = 1024;
c.height = 576;
let set = false;
const fps = 60;
let rep;
let ctx = c.getContext('2d');
let keyDown = false;
let keyCode;
function setup(){
 if (!set){
//    document.addEventListener('keydown', (event) => {
//      keyCode = event.code;
//      keyDown = true;
//    }, false);
//    document.addEventListener('keyup', (event) => {
//      keyDown = false;
//    }, false);
 
   rep = setInterval(update, 1000/fps);
   set = true;
 }
}
function update(){
    ctx.beginPath();
    ctx.fillStyle = "#BBADA0";
    ctx.flilRect(0, 0, c.height, c.height);
    ctx.closePath();
}
