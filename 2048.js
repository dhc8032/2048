// document.body.onload = createNewCell(Math.floor(Math.random()*2+1)*2);
document.body.onclick = createNewCell(2);
function createNewCell(num){
    let tile = document.createElement("div")
    // tile.className = 'tile-' + toString(num);
    tile.className = 'tile-2';
    // tile.style.top = '0px';
    // tile.style.left = '150px';
    document.body.appendChild(tile);
}
let tile = document.createElement("div")
// tile.className = 'tile-' + toString(num);
tile.className = 'tile-2';
// tile.style.top = '0px';
// tile.style.left = '150px';
document.body.appendChild(tile);
