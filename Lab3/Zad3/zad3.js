let addButton = document.getElementById("addButton");
let deleteButton = document.getElementById("deleteButton");

let items = 2;

addButton.onclick = function() {
    let ul = document.getElementById("list");
    let li = document.createElement("li");

    li.appendChild(document.createTextNode("Item " + items));
    li.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    ul.appendChild(li);
    items += 1;
}


deleteButton.onclick = function() {
    let ul = document.getElementById("list");

    ul.removeChild(ul.childNodes[0]);
    items -= 1;
    if(items < 1) items = 1;
}