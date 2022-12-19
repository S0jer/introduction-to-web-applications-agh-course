let btn = document.getElementById("button");

let pictures = ["img/mountains.jpg", "img/forest.jpg", "img/sea.jpg", "img/desert.jpg"]
let colors = ["blue", "green", "cyan", "orange"]
let cnt = 1;


btn.onclick = function() {
    let image_id = document.getElementById("getImage");
    image_id.setAttribute("src", pictures[cnt]);
    image_id.style.borderColor = colors[cnt];
    cnt = (cnt + 1) % 4;
}