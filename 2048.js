// document.body.onload = createNewCell(Math.floor(Math.random()*2+1)*2);
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
let tiles;
let keyDown = false;
let scroll = document.body.scrollTop;
let grid = [["", "", 2, 2], 
            ["", "", "", ""], 
            ["", "", "", ""], 
            ["", "", "", ""]];
document.body.onload = display();
function createNewCell(num){
    // let tile = document.createElement("div")
    // // tile.className = 'tile-' + toString(num);
    // tile.className = 'tile-2';
    // tile.style.top = '22px';
    // tile.style.left = 960/3+107-23+'px';
    // tile.textContent = "2"
    // document.body.appendChild(tile);
}
window.addEventListener('resize', function(event){
  width = document.documentElement.clientWidth;
  height = document.documentElement.clientHeight;
  display();
});
window.addEventListener('scroll', function(event){
  scroll = document.body.scrollTop;
  display();
});
window.addEventListener('keydown', function(event){
  if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(event.key) > -1) {
    event.preventDefault();
  }
  if (!keyDown){
    switch (event.key){
      case 'ArrowLeft':
        for (var y = 0; y < 4; y++){
          for (var x = 3; x > 0; x--){
            if (grid[y][x-1] == ""){
              if (grid[y][x] != ""){
                for (var i = x; i < 4; i++){
                  grid[y][i-1] = grid[y][i];
                  grid[y][i] = "";
                }
              }
            } else if (grid[y][4-x-1] == grid[y][4-x]){
              grid[y][4-x-1]=grid[y][4-x]*2;
              grid[y][4-x] = "";
              for (var i = 5-x; i < 4; i++){
                grid[y][i-1] = grid[y][i];
                grid[y][i] = "";
              }
            }
          }
          display();
        }
    }
  }
  keyDown = true;
});
window.addEventListener('keyup', function(){
  keyDown = false;
});
function display(){
  tiles = document.querySelectorAll(".tile");
  tiles.forEach(tile => {
    tile.remove();
  })
  for (var y = 0; y < 4; y++){
    for (var x = 0; x < 4; x++){
      if (grid[y][x] != ""){
        let tile = document.createElement("div")
        tile.classList.add("tile", grid[y][x], x.toString()+y.toString());
        tile.style.top = 22+y*(106.5+15)-scroll+'px';
        tile.style.left = width/2-250+15+x*(106.5+15)+'px';
        tile.textContent = grid[y][x];
        document.body.appendChild(tile);
      }
    }
  }
}

