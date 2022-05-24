// document.body.onload = createNewCell(Math.floor(Math.random()*2+1)*2);
let grid = [["", "", "", ""], 
            ["", "", "", ""], 
            ["", "", "", ""], 
            ["", "", "", ""]];
document.body.onload = createNewCell(2);
$(window).resize(function() {
  console.log('window was resized');
});
function createNewCell(num){
    let tile = document.createElement("div")
    // tile.className = 'tile-' + toString(num);
    tile.className = 'tile-2';
    tile.style.top = '22px';
    tile.style.left = 960/3+107-23+'px';
    tile.textContent = "2"
    document.body.appendChild(tile);
}

