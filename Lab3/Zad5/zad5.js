
let cnt = document.getElementById("cnt");
let flag = false;
let sum = 0
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let propagationButton = document.getElementById("propagation");
let changeOrder = document.getElementById("order");
let reset = document.getElementById("reset");
let ul = document.getElementById("list");
let order = true;
let idCounter = 0


three.addEventListener("click", yellow);
two.addEventListener("click", red);
one.addEventListener("click", blue);

function add(num) {
    sum += num;
    cnt.innerHTML = sum;
}

function clear(ul) {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}


propagationButton.onclick = function() {
    if (propagationButton.textContent === "Stop Propagation") {
        propagationButton.innerHTML = "Start Propagation";
    }
    else {
        propagationButton.innerHTML = "Stop Propagation";
    }
}

reset.onclick = function() {
    clear(ul);
    three.addEventListener("click", yellow);
    two.addEventListener("click", red);
    one.addEventListener("click", blue);
    one.style.backgroundColor = "blue";
    one.style.cursor = "pointer";
    two.style.backgroundColor = "red";
    two.style.cursor = "pointer";
    three.style.backgroundColor = "yellow";
    three.style.cursor = "pointer";
    cnt = document.getElementById("cnt");
    sum = 0;
    cnt.innerHTML = sum;
}

changeOrder.onclick = function() {
    if(order){
        clear(ul);
        order = false;
    } else {
        clear(ul);
        order = true;
    }
}



function blue(e) {
    if (!order && propagationButton.textContent === "Stop Propagation"){
        clear(ul);
        red(e);
    }
    if (propagationButton.textContent === "Start Propagation") {
        e.stopImmediatePropagation("click", blue);
        clear(ul);
        flag = true;
    }

    if (flag) { flag = false; clear(ul)}
    flag = true;


    if (sum >= 30){
        two.style.backgroundColor = "grey";
        two.style.cursor = "default";
        two.removeEventListener("click", red);
    }
    if (sum >= 50) {
        three.style.backgroundColor = "grey";
        three.style.cursor = "default";
        three.removeEventListener("click", yellow);
    }

    add(1);

    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Nacisnąłeś niebieski o wartości 1"));
    ul.appendChild(li);

    if (!order){
        e.stopImmediatePropagation("click", blue);
    }
}


function red(e) {
    if (!order && propagationButton.textContent === "Stop Propagation") {
        clear(ul);
        yellow(e);
    }

    if (propagationButton.textContent === "Start Propagation") {
        e.stopImmediatePropagation("click", red);
        clear(ul);
        flag = true;
    }

    if (flag) { flag = false; clear(ul); }

    if (sum >= 30){
        two.style.backgroundColor = "grey";
        two.style.cursor = "default";
        two.removeEventListener("click", red);
    } else if (sum < 30) {
        add(2);

        let li = document.createElement("li");
        li.appendChild(document.createTextNode("Nacisnąłeś czerwony o wartości 2"));
        ul.appendChild(li);
    }
    if (!order) {
        e.stopImmediatePropagation("click", red);
    }
}


function yellow(e) {
    if (!order){
        clear(ul);
    }

    if (propagationButton.textContent === "Start Propagation") {
        e.stopImmediatePropagation("click", yellow);
        clear(ul);
        flag = true;
    }
    if (flag) { flag = false; clear(ul)}

    if (sum >= 30){
        two.style.backgroundColor = "grey";
        two.style.cursor = "default";
        two.removeEventListener("click", red);
    }
    if (sum >= 50) {
        three.style.backgroundColor = "grey";
        three.style.cursor = "default";
        three.removeEventListener("click", yellow);
    } else if (sum < 50) {
        add(5);
        let li = document.createElement("li");
        li.appendChild(document.createTextNode("Nacisnąłeś żółty o wartości 5"));
        ul.appendChild(li);
    }
    if (!order) {
        e.stopImmediatePropagation("click", yellow);
    }
}

