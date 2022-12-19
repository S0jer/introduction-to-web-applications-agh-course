let flag = 0;

let start = document.getElementById("start");
let increment = document.getElementById("increment");
let reset = document.getElementById("reset");
let cnt = document.getElementById("cnt");
let clicks = 0;


start.onclick = function() {
    flag = 1;
}

increment.onclick = function() {
    if (flag === 1) {
        clicks += 1;
        cnt.innerHTML = clicks;
    }
}

reset.onclick = function() {
    clicks = 0;
    cnt.innerHTML = clicks;
    flag = 0
}
