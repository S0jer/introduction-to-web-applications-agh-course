let mouseX = 0, 
    mouseY = 0,
    follower = document.getElementById("follower"),
    xp = 0,
    yp = 0;

let board = document.getElementById("board");
let outside = document.getElementById("outside");
let firstClick = true;

board.onclick = function(e) {
    if (firstClick) {
        follower.style.left = '0px;';
        follower.style.top = '0px;';
        firstClick = false;
    }   
   mouseX = e.pageX;
   mouseY = e.pageY;
   e.stopImmediatePropagation("click");
};


outside.onclick = function(e) {
    alert("Object can not leave the board!");
    return false;
}

function animate(){
    requestAnimationFrame(animate);
    xp += (mouseX - xp) / 12;
    yp += (mouseY - yp) / 12;
    follower.style.left = xp + 'px';
    follower.style.top= yp + 'px';
}

animate();
