let btn = document.getElementById("button")

btn.onclick = function() {
    let person = prompt("Enter your name");
    if (person != null && person.slice(-1) != "a") {
        document.getElementById("text").innerHTML = "Witam Pana " + person;
    } else if (person != null && person.slice(-1) == "a") {
        document.getElementById("text").innerHTML = "Witam Panią " + person;
    }
}