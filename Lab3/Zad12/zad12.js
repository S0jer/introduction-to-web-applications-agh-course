const wall = document.querySelector(".wall");
let score = 0;
let lives = 3;
wall.addEventListener("click", wallClick)
let life = document.getElementById("life");


function wallClick() {
    score -= 6;
    document.getElementById("killed-status").innerHTML = score;
}

let MyFun = setInterval(function () {

    let zombie = document.createElement('div');
    {
        let size = Math.random() + 0.5;
        let zombieWidth = 200 * size;
        let zombieHeight = 312 * size;
        //creating zombie
        zombie.classList.add('zombie');
        zombie.style.width = zombieWidth + "px";
        zombie.style.height = zombieHeight + "px";
        zombie.style.backgroundSize = "auto " + zombieHeight + "px";
        //zombie speed
        let speed = Math.floor(Math.random() * 8)
        zombie.style.animationDuration = `0.7s, ${speed}s`

        //zombie respawn
        let respawnHeight = 0;
        const min = -5;
        const max = 60;
        respawnHeight = Math.floor(Math.random() * (max - min + 1) + min);
        zombie.style.bottom = `${respawnHeight}%`

        //zombie height
        zombie.style.zIndex = 270 - respawnHeight;
        let allFramesWidth = zombieWidth * 10;
        let position = 0;
        let interval = zombieWidth;
        let animation = setInterval(() => {

            zombie.style.backgroundPosition = position + "px 0px";
            position = (position - interval) % allFramesWidth;

        }, 10 * speed);
    }

    zombie.addEventListener("animationend", function () {
        this.remove();
        lives -= 1;
        life.removeChild(life.childNodes[0]);
        life.removeChild(life.childNodes[0]);
        if (lives == 0) {
            clearInterval(MyFun);
            wall.removeEventListener("click", wallClick);
            document.getElementById("EndGame").style.zIndex = 1000;
        }
    });

    zombie.addEventListener("click", function (e) {
        this.remove();
        if (lives > 0) score += 12;
        document.getElementById("killed-status").innerHTML = score;
        e.stopImmediatePropagation("click", function () { });

    });


    wall.appendChild(zombie);


}, 800);

let circle = document.getElementById('circle');
const onMouseMove = (e) => {
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

