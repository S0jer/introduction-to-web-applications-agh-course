let buttonLeft = document.getElementById("buttonLeft");
let buttonRight = document.getElementById("buttonRight");
let buttonRandom = document.getElementById("buttonRandom");
let pictures = ["people/p1.jpg", "people/p2.jpg", "people/p3.jpg", "people/p4.jpg"];
let names = ["John Wall", "Tom Treaty", "George Newman", "Kate Johnson"];
let positions = ["CEO", "Software Developer", "Cloud Architect", "Project Manager"];
let descriptions = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla feugiat ipsum, molestie laoreet ipsum luctus eget. \
Etiam purus erat, pharetra sed erat sit amet, placerat  fermentum metus. Aliquam erat volutpat. Praesent id lobortis arcu. \
Mauris orci lectus, rutrum nec dui et, ullamcorper pulvinar nunc. Sed porta magna non ligula venenatis ullamcorper. Donec congue turpis sed erat \
 hendrerit posuere. Etiam consectetur in turpis id blandit.",
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla feugiat ipsum, molestie laoreet ipsum luctus eget. \
 Etiam purus erat, pharetra sed erat sit amet, placerat  fermentum metus. Aliquam erat volutpat. Praesent id lobortis arcu. \
 Mauris orci lectus, rutrum nec dui et, ullamcorper pulvinar nunc. Sed porta magna non ligula venenatis ullamcorper.",
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla feugiat ipsum, molestie laoreet ipsum luctus eget. \
 Etiam purus erat, pharetra sed erat sit amet, placerat  fermentum metus. Aliquam erat volutpat. Praesent id lobortis arcu. \
 Mauris orci lectus, rutrum nec dui et, ullamcorper pulvinar nunc. Sed porta magna non ligula venenatis ullamcorper. Donec congue turpis sed erat \
  hendrerit posuere. Etiam consectetur in turpis id blandit. Sed porta magna non ligula venenatis ullamcorper. Donec congue turpis sed erat \
   hendrerit posuere. Etiam consectetur in turpis id blandit.",
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla feugiat ipsum, molestie laoreet ipsum luctus eget. \
   Etiam purus erat, pharetra sed erat sit amet, placerat  fermentum metus. Aliquam erat volutpat. Praesent id lobortis arcu. \
   Mauris orci lectus, rutrum nec dui et, ullamcorper pulvinar nunc. Sed porta magna non ligula venenatis ullamcorper. Donec congue turpis sed erat \
    hendrerit posuere. Etiam consectetur in turpis id blandit."];

let cnt = 0;

buttonLeft.onclick = function() {
    cnt = (cnt - 1) % 4;
    if (cnt < 0) cnt = 3;
    animationStart();
    sleep(1100).then(() => updateElement(cnt));
    sleep(1200).then(() => animationEnd());
}

buttonRight.onclick = function() {
    cnt = (cnt + 1) % 4;
    animationStart();
    sleep(1100).then(() => updateElement(cnt));
    sleep(1200).then(() => animationEnd());
}


buttonRandom.onclick = function() {
    cnt = Math.floor(Math.random() * (names.length)) % 4;
    animationStart();
    sleep(1100).then(() => updateElement(cnt));
    sleep(1200).then(() => animationEnd());
}

function updateElement(id) {
    let picture = document.getElementById("getPicture");
    let name = document.getElementById("name");
    let position = document.getElementById("position");
    let description = document.getElementById("description");

    picture.setAttribute("src", pictures[id]);
    name.innerHTML = names[id];
    position.innerHTML = positions[id];
    description.innerText = descriptions[id];
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


function animationStart() {
    let main = document.getElementById("main");
    main.style.transition = "ease all 1.0s";
    main.style.opacity = 0;
}


function animationEnd() {
    let main = document.getElementById("main");
    main.style.transition = "ease all 1.1s";
    main.style.opacity = 1;
}